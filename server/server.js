require("dotenv").config();
const jwt = require("jsonwebtoken");
const jsonServer = require("json-server");
const http = require("http");
const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");
const verifyToken = require("./middleware/auth");
const rawdata = fs.readFileSync("db.json");
const database = JSON.parse(rawdata);
let users = database.users;
const cors = require("cors");
const bcrypt = require("bcrypt");
app.use(cors());
app.options("*", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.set("Access-Control-Allow-Credentials", "true");
  res.status(200).end();
});
app.use("/api", jsonServer.defaults(), jsonServer.router("db.json"));
app.get("/api/campaigns", verifyToken, (req, res) => {
  res.json(database.campaigns);
});
const generateTokens = (payload) => {
  const { id, name } = payload;
  const accessToken = jwt.sign({ id, name }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "5m",
  });
  const refreshToken = jwt.sign(
    { id, name },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "48h",
    }
  );

  return { accessToken, refreshToken };
};
function updateRefreshToken(name, refreshToken) {
  console.log("updateRefreshToken ~ name", name);
  users = users.map((user) => {
    if (user.name === name) {
      return {
        ...user,
        refreshToken,
      };
    }
    return user;
  });
  fs.writeFileSync("db.json", JSON.stringify({ ...database, users }));
}
app.get("/me", verifyToken, (req, res) => {
  const user = users.find((user) => {
    return user.id === req.userId;
  });
  if (!user) return res.sendStatus(401);
  res.json(user);
});
app.post("/auth/login", (req, res) => {
  const email = req.body.email;
  const user = users.find((user) => {
    return user.email === email;
  });
  if (!user) return res.sendStatus(401);
  const dbPassword = user.password;
  bcrypt.compare(req.body.password, dbPassword, (err, hash) => {
    if (err || !hash) {
      res.status(403).json({
        statusCode: 403,
        error: {
          message: "Password does not match",
        },
      });
    }
    const tokens = generateTokens(user);

    updateRefreshToken(user.name, tokens.refreshToken);
    res.json(tokens);
  });
});

app.post("/token", (req, res) => {
  const refreshToken = req.body.refreshToken;
  if (!refreshToken) return res.sendStatus(401);
  const user = users.find((user) => {
    return user.refreshToken === refreshToken;
  });
  if (!user) return res.sendStatus(403);
  try {
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const tokens = generateTokens(user);
    updateRefreshToken(user.name, tokens.refreshToken);
    res.json(tokens);
  } catch (err) {
    console.log(err);
    res.sendStatus(403);
  }
});

app.post("/auth/register", (req, res) => {
  const { name, password, email, permissions } = req.body;
  const user = users.find((user) => {
    return user.email === email;
  });
  if (user) {
    return res.sendStatus(409).json({ error: "User already exists" });
  }
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return;
    }
    users.push({
      id: users.length + 1,
      name,
      password: hash,
      email,
      refreshToken: null,
      permissions,
    });
    fs.writeFileSync("db.json", JSON.stringify({ ...database, users }));
    res.sendStatus(201);
  });
});

app.delete("/logout", verifyToken, (req, res) => {
  const user = users.find((user) => user.id === req.userId);
  updateRefreshToken(user.name, "");
  res.sendStatus(204);
});

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
