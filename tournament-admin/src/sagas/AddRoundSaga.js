import {
  ROUND_CREATE_REQUESTED,
  ROUND_CREATE_LOADED,
  ROUND_CREATE_FAILURE,
  FIGHTS_REQUESTED,
  CURRENT_FIGHT_REQUESTED
} from "../constants/action-types";

import { takeEvery, call, put, takeLatest, all } from "redux-saga/effects";
import queryString from 'query-string'
import axios from 'axios';
const api_root = process.env.REACT_APP_API_URL

export default function* watcherSaga() {
  yield takeLatest(ROUND_CREATE_REQUESTED, workerSaga);
}

function* workerSaga(action) {
  try {
    console.log(action);
    const payload = yield call(getData,
      action.fightId, action.number
    );
    const data = payload.data;
    if (payload && payload.status == 201) {
      yield all([
        put({ type: ROUND_CREATE_LOADED, data }),
        put({ type: CURRENT_FIGHT_REQUESTED }),
      ])
    } else {
      yield put({ type: ROUND_CREATE_FAILURE, data });
    }
  } catch (error) {
    yield put({ type: ROUND_CREATE_FAILURE, error });
    console.log(error);
  }
}

function getData(
  fightId,
  number
) {
  const url = '/rounds';
  return axios(`${api_root}${url}`, {
    method: "post", withCredentials: true, data: {
      fight_id: fightId,
      number: number
    }
  })
}
