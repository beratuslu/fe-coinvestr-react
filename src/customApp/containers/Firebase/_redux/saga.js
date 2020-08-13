import React from "react";
import firebase from "firebase";
import moment from "moment";
import { eventChannel, delay } from "redux-saga";
import notifications from "../../../../components/feedback/notification";
import NotifDescription from "../components/NotifDescription/";
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
    socket.on("newNotif", (data) => {
      console.log("TCL: subscribe -> data", data);
      // emit(addUser({ username }));
    });
    // socket.on("users.login", ({ username }) => {
    //   emit(addUser({ username }));
    // });
    // socket.on("users.logout", ({ username }) => {
    //   emit(removeUser({ username }));
    // });
    // socket.on("messages.new", ({ message }) => {
    //   emit(newMessage({ message }));
    // });
    // socket.on("disconnect", e => {
    //   // TODO: handle
    // });
  });
}

function* startNotifications() {
  const channel = yield call(subscribe, state);
  // while (true) {
  //   let action = yield take(channel);
  //   yield put(action);
  // }

  let state = yield select((state) => state); // <-- get the notifications

  const notifId = state.notifications.notifications[0].id;

  const user = state.Auth.user;
  const db = firebase.firestore();

  const doc = db
    .collection("users")
    .doc(user.userName)
    .collection("notifications")
    .where("id", ">", notifId);

  let observer = doc.onSnapshot(
    (docSnapshot) => {
      docSnapshot.docChanges().forEach(function(change) {
        if (change.type === "added") {
          console.log(
            "function*startNotifications -> change.doc.data()",
            change.doc.data()
          );

          put(actions.newNotifFromFirebase(change.doc.data()));

          notifications.success({
            // message: change.doc.data().notifType,
            message: (
              <NotifDescription
                notification={change.doc.data()}
              ></NotifDescription>
            ),
            description: (
              <NotifDescription
                notification={change.doc.data()}
              ></NotifDescription>
            ),
            placement: "bottomLeft",
          });

          // console.log(
          //   "function*flow -> change",

          //   moment
          //     .unix(change.doc.data().createTime.seconds)
          //     .utc()
          //     .format("YYYY-MM-DD HH:mm:ss.SSS")
          // );
        }
      });
    },
    (err) => {}
  );
}
function* authenticate() {
  while (true) {
    let action = yield take("FIREBASE_AUTH_START");
    try {
      const reponse = yield call(firebaseCustomTokenRequest);
      const firebaseAuthResult = yield firebase
        .auth()
        .signInWithCustomToken(reponse.data);

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
