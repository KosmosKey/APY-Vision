import { put } from "redux-saga/effects";
import { GET_DATA } from "../actions";

export function* getPoolData(data) {
  yield put({ type: GET_DATA, data });
}
