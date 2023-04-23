import { call, put } from "redux-saga/effects";
import {
  requestAuthLogin,
  requestAuthRegister,
  requestFetchMe,
  requestRefreshToken,
} from "./auth-service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logOut, saveToken } from "../../utils/auth";
import { authUpdateUser } from "./auth-slice";
export default function* handeAuthRegister({ payload }) {
  try {
    const res = yield call(requestAuthRegister, payload);
    if (res.status === 201) {
      toast.success("register susscesfully");
    }
  } catch (error) {
    console.log(error);
  }
}
function* handeAuthLogin({ payload }) {
  try {
    const res = yield call(requestAuthLogin, payload);

    if (res.data.accessToken && res.data.refreshToken) {
      saveToken(res.data.accessToken, res.data.refreshToken);
      yield handeAuthFetchMe({ payload: res.data.accessToken });
    }
    console.log(res);
    if (res.status === 200) {
      toast.success("Login successfully");
    }
  } catch (error) {
    console.log(error);
  }
}
function* handeAuthFetchMe({ payload }) {
  try {
    const res = yield call(requestFetchMe, payload);
    if (res.status === 200) {
      yield put(
        authUpdateUser({
          user: res.data,
          accessToken: res.data.refreshToken,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}
function* handeRefreshToken({ payload }) {
  try {
    const res = yield call(requestRefreshToken, payload);
    if (res.data) {
      saveToken(res.data.accessToken, res.data.refreshToken);
      yield handeAuthFetchMe({ payload: res.data.accessToken });
    } else {
      yield handleLogOut();
    }
  } catch (error) {
    console.log(error);
  }
}
function* handleLogOut() {
  yield put(
    authUpdateUser({
      user: undefined,
      accessToken: null,
    })
  );
  logOut();
}
export { handeAuthLogin, handeAuthFetchMe, handeRefreshToken, handleLogOut };
