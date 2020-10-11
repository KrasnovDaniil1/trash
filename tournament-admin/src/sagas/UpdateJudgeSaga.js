import {
  JUDGE_UPDATE_REQUESTED,
  JUDGE_UPDATE_LOADED,
  JUDGE_UPDATE_FAILURE,
  JUDGES_REQUESTED
} from "../constants/action-types";

import { takeEvery, call, put, takeLatest, all } from "redux-saga/effects";
import queryString from 'query-string'
import axios from 'axios';
const api_root = process.env.REACT_APP_API_URL

export default function* watcherSaga() {
  yield takeLatest(JUDGE_UPDATE_REQUESTED, workerSaga);
}

function* workerSaga(action) {
  try {
    const payload = yield call(getData, action.id, action.first_name, action.last_name);
    const data = payload.data;
    if (payload) {
      yield all([
        put({ type: JUDGE_UPDATE_LOADED, data }),
        put({ type: JUDGES_REQUESTED })
      ])
    } else {
      yield put({ type: JUDGE_UPDATE_FAILURE, data });
    }
  } catch (error) {
    yield put({ type: JUDGE_UPDATE_FAILURE, error });
    console.log(error);
  }
}

function getData(id, first_name, last_name) {
  const url = '/judges/' + id;
  return axios(`${api_root}${url}`, {
    method: "put", withCredentials: true, data: {
      first_name: first_name,
      last_name: last_name
    }
  })
}
