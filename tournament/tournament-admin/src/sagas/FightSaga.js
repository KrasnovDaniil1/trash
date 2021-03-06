import {
  FIGHT_REQUESTED,
  FIGHT_LOADED
} from "../constants/action-types";

import { takeEvery, call, put, takeLatest } from "redux-saga/effects";
import queryString from 'query-string'
import axios from 'axios';
const api_root = process.env.REACT_APP_API_URL

export default function* watcherSaga() {
  yield takeLatest(FIGHT_REQUESTED, workerSaga);
}

function* workerSaga(action) {
  try {
    const payload = yield call(getData, action.id);
    yield put({ type: FIGHT_LOADED, payload });
  } catch (e) {
    console.log(e);
  }
}

function getData(id) {
  const url = '/fights/' + id;
  return axios.get(`${api_root}${url}`).then(res => {
    return res.data
  })
}
