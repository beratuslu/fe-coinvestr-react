import firebase from "firebase";
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
    return () => {};
  });
}

// function* read() {
//   const db = firebase.firestore();
//   const doc = db.collection("users").doc("a-uid");

//   let observer = doc.onSnapshot(
//     (docSnapshot) => {
//       docSnapshot.data();
//       console.log("read -> docSnapshot.data()", docSnapshot.data());
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
    let { payload } = yield take("START_CHANNEL");

    console.log("============================ssss==============");

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
      .collection("notifications");

    let observer = doc.onSnapshot(
      (docSnapshot) => {
        // console.log("function*flow -> docSnapshot", docSnapshot);
        // const asd = docSnapshot.docs.map((doc) => doc.data());
        // console.log("function*flow -> asd", asd);

        docSnapshot.docChanges().forEach(function(change) {
          console.log("function*flow -> change", change.type);
          if (change.type === "added") {
            console.log("function*flow -> change", change.doc.data());
            // change.doc here is new a new document
          }
        });

        // docSnapshot.forEach(function(doc) {
        //   console.log("snapshot added ", doc());
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
