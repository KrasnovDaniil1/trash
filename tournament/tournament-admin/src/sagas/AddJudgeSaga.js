import {
  JUDGE_CREATE_REQUESTED,
  JUDGE_CREATE_LOADED,
  JUDGE_CREATE_FAILURE,
  JUDGES_REQUESTED
} from "../constants/action-types";

import { takeEvery, call, put, takeLatest, all } from "redux-saga/effects";
import queryString from 'query-string'
import axios from 'axios';
const api_root = process.env.REACT_APP_API_URL

export default function* watcherSaga() {
  yield takeLatest(JUDGE_CREATE_REQUESTED, workerSaga);
}

function* workerSaga(action) {
  try {
    const payload = yield call(getData, action.first_name, action.last_name);
    const data = payload.data;

    if (payload && payload.status == 201) {
      yield all([
        put({ type: JUDGE_CREATE_LOADED, data }),
        put({ type: JUDGES_REQUESTED })
      ])
    } else {
      yield put({ type: JUDGE_CREATE_FAILURE, data });
    }
  } catch (error) {
    yield put({ type: JUDGE_CREATE_FAILURE, error });
    console.log(error);
  }
}

function getData(first_name, last_name) {
  const url = '/judges';
  return axios(`${api_root}${url}`, {
    method: "post", withCredentials: true, data: {
      first_name: first_name,
      last_name: last_name
    }
  })
}