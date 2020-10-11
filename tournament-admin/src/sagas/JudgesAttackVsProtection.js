// я добавил
import {
    JUDGESATTACKVSPROTECTION ,// Я добавил
    CREATEJUDGESATTACKVSPROTECTION , // Я добавил
   /* FIGHTER_CREATE_REQUESTED,
    FIGHTER_CREATE_LOADED,
    FIGHTER_CREATE_FAILURE,
    FIGHTERS_REQUESTED*/
  } from "../constants/action-types";
  
  import { takeEvery, call, put, takeLatest, all } from "redux-saga/effects";
  import queryString from 'query-string'
  import axios from 'axios';
  const api_root = process.env.REACT_APP_API_URL
  
  export default function* watcherSaga() {
    yield takeLatest(CREATEJUDGESATTACKVSPROTECTION, workerSaga);
  }
  
  function* workerSaga(action) {
    //try {
      const payload = yield call(getData, action.judge_id , action.judge , action.fighter_id , action.fighter , action.action_type);
      const data = payload.data;
      /*if (payload && payload.status == 201) {
        yield all([
          put({ type: FIGHTER_CREATE_LOADED, data }),
          put({ type: JUDGESATTACKVSPROTECTION })
        ])
      } else {
        yield put({ type: FIGHTER_CREATE_FAILURE, data });
      }
    } catch (error) {
      yield put({ type: FIGHTER_CREATE_FAILURE, error });
      console.log(error);
    }*/
  }
  
  function getData(judge_id , judge , fighter_id , fighter , action_type) {
    const url = '/actionCreateCurrentFight';
    return axios(`${api_root}${url}`, {
      method: "post", withCredentials: true, data: {
        judge_id : judge_id, 
        judge : judge,
        fighter_id : fighter_id,
        fighter : fighter,
        action_type : action_type
      }
    })
  }
  