import {
  ROUND_UPDATE_REQUESTED,
  ROUND_UPDATE_LOADED,
  ROUND_UPDATE_FAILURE,
  FIGHTS_REQUESTED
} from "../constants/action-types";

import { takeEvery, call, put, takeLatest, all } from "redux-saga/effects";
import queryString from 'query-string'
import axios from 'axios';
const api_root = process.env.REACT_APP_API_URL

export default function* watcherSaga() {
  yield takeLatest(ROUND_UPDATE_REQUESTED, workerSaga);
}

function* workerSaga(action) {
  try {
    const payload = yield call(getData, action.id, action.data);
    const data = payload.data;
    if (payload) {
      yield all([
        put({ type: ROUND_UPDATE_LOADED, data }),
      ])
    } else {
      yield put({ type: ROUND_UPDATE_FAILURE, data });
    }
  } catch (error) {
    yield put({ type: ROUND_UPDATE_FAILURE, error });
    console.log(error);
  }
}

function getData(id, data) {
  const url = '/rounds/' + id;
  return axios(`${api_root}${url}`, {
    method: "patch", withCredentials: true, data: { round: data }
  })
}
