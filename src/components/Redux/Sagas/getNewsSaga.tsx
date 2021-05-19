import { put, call } from "redux-saga/effects";
import { getNewsService } from "../Services/getNewsService";

import * as types from "../Actions";

export function* newsSaga() {
  try {
    const response = yield call(getNewsService);
    yield put({ type: types.GET_NEWS_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.GET_NEWS_ERROR, error });
  }
}
