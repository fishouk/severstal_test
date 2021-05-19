import { fork } from "redux-saga/effects";
import {
  watchUserAuthentication,
  watchUserSignOut,
  watchGetNews,
} from "./watchers";

export default function* startForman() {
  yield fork(watchUserAuthentication);
  yield fork(watchUserSignOut);
  yield fork(watchGetNews);
}
