import { takeLatest } from "redux-saga/effects";
import { authSaga, signOutSaga } from "./authenticationSaga";
import { newsSaga } from "./getNewsSaga";

import * as types from "../Actions";

export function* watchUserAuthentication() {
  yield takeLatest(types.SIGN_IN_USER, authSaga);
}

export function* watchUserSignOut() {
  yield takeLatest(types.SIGN_OUT_USER, signOutSaga);
}

export function* watchGetNews() {
  yield takeLatest(types.GET_NEWS, newsSaga);
}
