import {
  FIGHTER_DELETE_REQUESTED,
  FIGHTER_DELETE_LOADED,
  FIGHTER_DELETE_FAILURE,
  FIGHTERS_REQUESTED
} from "../constants/action-types";

import { takeEvery, call, put, takeLatest, all } from "redux-saga/effects";
import queryString from 'query-string'
import axios from 'axios';
const api_root = process.env.REACT_APP_API_URL

export default function* watcherSaga() {
  yield takeLatest(FIGHTER_DELETE_REQUESTED, workerSaga);
}

function* workerSaga(action) {
  try {
    const payload = yield call(getData, action.id);
    const data = payload.data;
    if (payload) {
      yield all([
        put({ type: FIGHTER_DELETE_LOADED, data }),
        put({ type: FIGHTERS_REQUESTED })
      ])
    } else {
      yield put({ type: FIGHTER_DELETE_FAILURE, data });
    }
  } catch (error) {
    yield put({ type: FIGHTER_DELETE_FAILURE, error });
    console.log(error);
  }
}

function getData(id) {
  const url = '/fighters/' + id;
  return axios(`${api_root}${url}`, {
    method: "delete", withCredentials: true
  })
}
