import {
  ROUND_STOP_REQUESTED,
  ROUND_STOP_LOADED,
  ROUND_STOP_FAILURE,
  FIGHTS_REQUESTED,
  CURRENT_FIGHT_REQUESTED
} from "../constants/action-types";

import { takeEvery, call, put, takeLatest, all } from "redux-saga/effects";
import queryString from 'query-string'
import axios from 'axios';
const api_root = process.env.REACT_APP_API_URL

export default function* watcherSaga() {
  yield takeLatest(ROUND_STOP_REQUESTED, workerSaga);
}

function* workerSaga(action) {
  try {
    const payload = yield call(getData, action.id);
    const data = payload.data;
    if (payload) {
      yield all([
        put({ type: ROUND_STOP_LOADED, data }),
        put({ type: CURRENT_FIGHT_REQUESTED }),
      ])
    } else {
      yield put({ type: ROUND_STOP_FAILURE, data });
    }
  } catch (error) {
    yield put({ type: ROUND_STOP_FAILURE, error });
    console.log(error);
  }
}

function getData(id, data) {
  const url = '/rounds/' + id + '/stop';
  return axios(`${api_root}${url}`, {
    method: "put", withCredentials: true
  })
}
