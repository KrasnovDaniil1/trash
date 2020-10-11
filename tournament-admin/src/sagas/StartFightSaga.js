import {
  FIGHT_START_REQUESTED,
  FIGHT_START_LOADED,
  FIGHT_START_FAILURE,
  FIGHTS_REQUESTED
} from "../constants/action-types";

import { takeEvery, call, put, takeLatest, all } from "redux-saga/effects";
import queryString from 'query-string'
import axios from 'axios';
const api_root = process.env.REACT_APP_API_URL

export default function* watcherSaga() {
  yield takeLatest(FIGHT_START_REQUESTED, workerSaga);
}

function* workerSaga(action) {
  try {
    const payload = yield call(getData, action.id);
    const data = payload.data;
    if (payload) {
      yield all([
        put({ type: FIGHT_START_LOADED, data }),
        put({ type: FIGHTS_REQUESTED })
      ])
    } else {
      yield put({ type: FIGHT_START_FAILURE, data });
    }
  } catch (error) {
    yield put({ type: FIGHT_START_FAILURE, error });
    console.log(error);
  }
}

function getData(id) {
  const url = '/fights/' + id + '/start';
  return axios(`${api_root}${url}`, {
    method: "put", withCredentials: true
  })
}
