import io from "socket.io-client";
import { eventChannel, delay } from "redux-saga";
import { take, call, put, fork, race, cancel } from "redux-saga/effects";
import { push } from "react-router-redux";
import actions from "./actions";
const socketServerURL = "http://localhost:5001";

// import {
//   login, logout, addUser, removeUser, newMessage, sendMessage
// } from './actions';

function connect() {
  const socket = io(socketServerURL, {
    query:
      "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0cmFkZXIxIiwiZW1haWwiOiJiaW5hbmNldGVzdHVzZXIxQGdtYWlsLmNvbSIsInVzZXJUeXBlIjoidHJhZGVyIiwiZXhwIjoxNTk2MTI2MTgyLCJpYXQiOjE1NjQ1OTAxODJ9.g0B2laB4AtuGulWKZFN-si5goE-bMqEdaXodWrc3eIY",
    transports: ["websocket", "polling"]
  });
  return new Promise(resolve => {
    socket.on("connect", () => {
      resolve(socket);
    });
  });
}

function subscribe(socket) {
  return eventChannel(emit => {
    socket.on("asdasd", data => {
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

function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* write(socket) {
  while (true) {
    const { payload } = yield take(`sendMessage`);
    socket.emit("message", payload);
  }
}

function* handleIO(socket) {
  yield fork(read, socket);
  yield fork(write, socket);
}

function* flow() {
  while (true) {
    let { payload } = yield take("START_CHANNEL");
    const socket = yield call(connect);
    // socket.emit("login", { username: payload.username });

    const task = yield fork(handleIO, socket);

    let action = yield take("logout");
    yield cancel(task);
    socket.emit("logout");
  }
}

export default function* rootSaga() {
  yield fork(flow);
}
