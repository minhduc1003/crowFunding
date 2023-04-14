const  express  = require("express");
const jsonServer = require("json-server")
require("dotenv").config()
const app= express()
app.use(express.json())
app.use("/api",jsonServer.defaults(),jsonServer.router("db.json"))
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})