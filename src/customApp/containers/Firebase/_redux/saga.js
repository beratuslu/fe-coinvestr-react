import firebase from "firebase";
import moment from "moment";
import { eventChannel, delay } from "redux-saga";
import { take, call, put, fork, race, cancel } from "redux-saga/effects";
import { push } from "react-router-redux";
import actions from "./actions";

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
const authDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
const projectId = process.env.REACT_APP_FIREBASE_PROJECT_ID;

function subscribe(socket) {
  return eventChannel((emit) => {
    socket.on("newNotif", (data) => {
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
    return () => {};
  });
}

// function* read() {
//   const db = firebase.firestore();
//   const doc = db.collection("users").doc("a-uid");

//   let observer = doc.onSnapshot(
//     (docSnapshot) => {
//       docSnapshot.data();
//     },
//     (err) => {}
//   );

//   // let collectionRef = db.collection("users/a-uid/notifications");
// }

// function* write(socket) {
//   while (true) {
//     const { payload } = yield take(`sendMessage`);
//     socket.emit("message", payload);
//   }
// }

// function* handleIO() {
//   yield fork(read);
//   // yield fork(write, socket);
// }

function* flow() {
  while (true) {
    let { payload } = yield take("FIREBASE_NOTIFICATIONS_START");

    firebase.initializeApp({
      apiKey,
      authDomain,
      projectId,
    });
    const db = firebase.firestore();

    // const doc = db.collection("users");

    const doc = db
      .collection("users")
      .doc("a-uid")
      .collection("notifications")
      .where("id", ">", payload);

    // moment().utc().format("YYYY-MM-DD HH:mm:ss.SSS")

    let observer = doc.onSnapshot(
      (docSnapshot) => {
        // const asd = docSnapshot.docs.map((doc) => doc.data());

        docSnapshot.docChanges().forEach(function(change) {
          if (change.type === "added") {
            console.log(
              "function*flow -> change",

              moment
                .unix(change.doc.data().createTime.seconds)
                .utc()
                .format("YYYY-MM-DD HH:mm:ss.SSS")
            );
            // change.doc here is new a new document
          }
        });

        // docSnapshot.forEach(function(doc) {
        // });
      },
      (err) => {}
    );

    // const task = yield fork(handleIO);
  }
}

export default function* rootSaga() {
  yield fork(flow);
}
