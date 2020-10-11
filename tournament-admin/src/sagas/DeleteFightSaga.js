import {
  FIGHT_DELETE_REQUESTED,
  FIGHT_DELETE_LOADED,
  FIGHT_DELETE_FAILURE,
  FIGHTS_REQUESTED
} from "../constants/action-types";

import { takeEvery, call, put, takeLatest, all } from "redux-saga/effects";
import queryString from 'query-string'
import axios from 'axios';
const api_root = process.env.REACT_APP_API_URL

export default function* watcherSaga() {
  yield takeLatest(FIGHT_DELETE_REQUESTED, workerSaga);
}

function* workerSaga(action) {
  try {
    const payload = yield call(getData, action.id);
    const data = payload.data;
    if (payload) {
      yield all([
        put({ type: FIGHT_DELETE_LOADED, data }),
        put({ type: FIGHTS_REQUESTED })
      ])
    } else {
      yield put({ type: FIGHT_DELETE_FAILURE, data });
    }
  } catch (error) {
    yield put({ type: FIGHT_DELETE_FAILURE, error });
    console.log(error);
  }
}

function getData(id) {
  const url = '/fights/' + id;
  return axios(`${api_root}${url}`, {
    method: "delete", withCredentials: true
  })
}
