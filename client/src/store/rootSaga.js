import AuthSaga from "./auth/auth-saga";
import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([fork(AuthSaga)]);
}
