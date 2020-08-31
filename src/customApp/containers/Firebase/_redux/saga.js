import React from "react";
import firebase from "firebase";
import moment from "moment";
import { eventChannel, delay } from "redux-saga";
import notifications from "../../../../components/feedback/notification";
import NotifDescription from "../components/NotifDescription/";
import NotifMessages from "../components/NotifMessages/";
import axios from "axios";
import {
  take,
  call,
  put,
  fork,
  race,
  cancel,
  select,
} from "redux-saga/effects";
import { push } from "react-router-redux";
import actions from "./actions";

import { Provider } from "react-redux";
import { store, history } from "../../../../redux/store";
import { ConnectedRouter } from "connected-react-router";

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
const authDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
const projectId = process.env.REACT_APP_FIREBASE_PROJECT_ID;

firebase.initializeApp({
  apiKey,
  authDomain,
  projectId,
});

const firebaseCustomTokenRequest = async () => {
  return axios.get("/api/v1/auth/get-firebase-custom-token");
};

function subscribe(state) {
  return eventChannel((emit) => {
    let notifId = 0;
    if (state.notifications.notifications.length) {
      notifId = state.notifications.notifications[0].id;
    }

    const user = state.Auth.user;
    const db = firebase.firestore();
    const notificationsConstants =
      state.enumsAndConstants.enumsAndConstants.notifications;

    const doc = db
      .collection("users")
      .doc(user.userName)
      .collection("notifications")
      .where("id", ">", notifId);

    let observer = doc.onSnapshot(
      (docSnapshot) => {
        docSnapshot.docChanges().forEach(function(change) {
          if (change.type === "added") {
            const arrivedNotif = change.doc.data();
            const { title, status } = notificationsConstants[
              arrivedNotif.notifType
            ];
            console.log(
              "function*startNotifications -> arrivedNotif",
              arrivedNotif
            );
            emit(actions.newNotifFromFirebase(arrivedNotif));
            const MessageComponent = NotifMessages[arrivedNotif.notifType];
            notifications[status]({
              message: title,
              description: (
                <Provider store={store}>
                  <ConnectedRouter history={history}>
                    <MessageComponent
                      notification={arrivedNotif}
                    ></MessageComponent>
                  </ConnectedRouter>
                </Provider>
              ),
              placement: "bottomLeft",
              // duration: 5000,
              duration: 0,
            });
          }
        });
      },
      (err) => {
        console.log("subscribe -> err", err);
      }
    );
    return () => {};
  });
}

function* startNotifications() {
  let state = yield select((state) => state); // <-- get the notifications
  const channel = yield call(subscribe, state);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}
function* authenticate() {
  while (true) {
    let action = yield take("FIREBASE_AUTH_START");
    try {
      const reponse = yield call(firebaseCustomTokenRequest);
      const firebaseAuthResult = yield firebase
        .auth()
        .signInWithCustomToken(reponse.data);
      console.log(
        "function*authenticate -> firebaseAuthResult",
        firebaseAuthResult
      );

      // yield put({
      //   type: "FIREBASE_NOTIFICATIONS_START",
      // });

      yield fork(startNotifications);
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    }

    // firebase.auth().signInWithCustomToken(token).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // ...
    // });
  }
}

export default function* rootSaga() {
  yield fork(authenticate);
}
