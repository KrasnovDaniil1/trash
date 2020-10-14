import {
  FIGHT_UPDATE_REQUESTED,
  FIGHT_UPDATE_LOADED,
  FIGHT_UPDATE_FAILURE,
  FIGHTS_REQUESTED
} from "../constants/action-types";

import { takeEvery, call, put, takeLatest, all } from "redux-saga/effects";
import queryString from 'query-string'
import axios from 'axios';
const api_root = process.env.REACT_APP_API_URL

export default function* watcherSaga() {
  yield takeLatest(FIGHT_UPDATE_REQUESTED, workerSaga);
}

function* workerSaga(action) {
  try {
    const payload = yield call(getData, action.id, action.data);
    const data = payload.data;
    if (payload) {
      yield all([
        put({ type: FIGHT_UPDATE_LOADED, data }),
        put({ type: FIGHTS_REQUESTED })
      ])
    } else {
      yield put({ type: FIGHT_UPDATE_FAILURE, data });
    }
  } catch (error) {
    yield put({ type: FIGHT_UPDATE_FAILURE, error });
    console.log(error);
  }
}

function getData(id, data) {
  const url = '/fights/' + id;
  return axios(`${api_root}${url}`, {
    method: "patch", withCredentials: true, data: { fight: data }
  })
}
