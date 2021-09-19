import { put } from "redux-saga/effects";
import { GET_DATA, TOGGLE_NAVBAR } from "../actions";

export function* getPoolData(data) {
  yield put({ type: GET_DATA, data });
}

export function* toggleNavbar() {
  yield put({ type: TOGGLE_NAVBAR });
}
