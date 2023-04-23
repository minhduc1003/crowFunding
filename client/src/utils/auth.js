import Cookie from "js-cookie";
const accessTokenKey = "crow_access_token";
const refreshTokenKey = "crow_refresh_token";
const objCookie = {
  expires: 30,
  domain: JSON.stringify(import.meta.env.COOKIE_DOMAIN),
};
export const saveToken = (accessToken, refreshToken) => {
  if (accessToken && refreshToken) {
    Cookie.set(accessTokenKey, accessToken, { ...objCookie });
    Cookie.set(refreshTokenKey, refreshToken, { ...objCookie });
  } else {
    Cookie.remove(accessTokenKey, {
      ...objCookie,
      path: "/",
    });
    Cookie.remove(refreshTokenKey, {
      ...objCookie,
      path: "/",
    });
  }
};

export const getToken = () => {
  const access_token = Cookie.get(accessTokenKey);
  const refresh_token = Cookie.get(refreshTokenKey);
  return {
    access_token,
    refresh_token,
  };
};
export const logOut = () => {
  const access_token = Cookie.get(accessTokenKey);
  if (access_token) {
    Cookie.remove(accessTokenKey, {
      ...objCookie,
      path: "/",
    });
    Cookie.remove(refreshTokenKey, {
      ...objCookie,
      path: "/",
    });
  }
};
