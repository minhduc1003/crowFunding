import { takeLatest } from "redux-saga/effects";
import {
  authLogOut,
  authLogin,
  authRefreshToken,
  authRegister,
} from "./auth-slice";
import handeAuthRegister, {
  handeAuthLogin,
  handeRefreshToken,
  handleLogOut,
} from "./auth-handler";
export default function* AuthSaga() {
  yield takeLatest(authRegister.type, handeAuthRegister);
  yield takeLatest(authLogin.type, handeAuthLogin);
  yield takeLatest(authRefreshToken.type, handeRefreshToken);
  yield takeLatest(authLogOut.type, handleLogOut);
}
