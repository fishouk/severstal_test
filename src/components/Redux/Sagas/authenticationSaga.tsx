import { put, call } from "redux-saga/effects";
import {
  signInUserService,
  signOutUserService,
} from "../Services/authenticationService";

import * as types from "../Actions";

export function* authSaga(payload) {
  try {
    const response = yield call(signInUserService, payload);
    yield put({ type: types.SIGN_IN_USER_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.SIGN_IN_USER_ERROR, error });
  }
}

export function* signOutSaga() {
  try {
    const response = yield call(signOutUserService);
    yield put({ type: types.SIGN_OUT_USER_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.SIGN_OUT_USER_ERROR, error });
  }
}
