import { all } from "redux-saga/effects";
import githubSearchSagas from "./githubSearch/sagas";

import authSagas from "../containers/Auth/_redux/saga";
import profileSaga from "../containers/Profile/_redux/saga";
import firebaseSagas from "../containers/Firebase/_redux/saga";
import notifSagas from "../containers/Notif/_redux/saga";
import enumsAndConstants from "../containers/EnumsAndConstants/_redux/saga";

export default function* devSaga() {
  yield all([
    profileSaga(),
    githubSearchSagas(),
    authSagas(),
    firebaseSagas(),
    notifSagas(),
    enumsAndConstants(),
  ]);
}
