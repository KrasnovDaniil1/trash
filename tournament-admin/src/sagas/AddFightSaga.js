import {
  FIGHT_CREATE_REQUESTED,
  FIGHT_CREATE_LOADED,
  FIGHT_CREATE_FAILURE,
  FIGHTS_REQUESTED
} from "../constants/action-types";

import { takeEvery, call, put, takeLatest, all } from "redux-saga/effects";
import queryString from 'query-string'
import axios from 'axios';
const api_root = process.env.REACT_APP_API_URL

export default function* watcherSaga() {
  yield takeLatest(FIGHT_CREATE_REQUESTED, workerSaga);
}

function* workerSaga(action) {
  try {
    const payload = yield call(getData,
      action.fightRedId,
      action.fightBlueId,
      action.fightAttackJudge1,
      action.fightAttackJudge2,
      action.fightAttackJudge3,
      action.fightDefenceJudge1,
      action.fightDefenceJudge2,
      action.fightDefenceJudge3,
      action.fightMaxRounds,
      action.fightRoundDuration,
      action.fightAttackPointsForAction,
      action.fightDefencePointsForAction
    );
    const data = payload.data;
    if (payload && payload.status == 201) {
      yield all([
        put({ type: FIGHT_CREATE_LOADED, data }),
        put({ type: FIGHTS_REQUESTED })
      ])
    } else {
      yield put({ type: FIGHT_CREATE_FAILURE, data });
    }
  } catch (error) {
    yield put({ type: FIGHT_CREATE_FAILURE, error });
    console.log(error);
  }
}

function getData(
  fightRedId,
  fightBlueId,
  fightAttackJudge1,
  fightAttackJudge2,
  fightAttackJudge3,
  fightDefenceJudge1,
  fightDefenceJudge2,
  fightDefenceJudge3,
  fightMaxRounds,
  fightRoundDuration,
  fightAttackPointsForAction,
  fightDefencePointsForAction
) {
  const url = '/fights';
  return axios(`${api_root}${url}`, {
    method: "post", withCredentials: true, data: {
      red_fighter_id: fightRedId,
      blue_fighter_id: fightBlueId,
      attack_judge_1_id: fightAttackJudge1,
      attack_judge_2_id: fightAttackJudge2,
      attack_judge_3_id: fightAttackJudge3,
      defence_judge_1_id: fightDefenceJudge1,
      defence_judge_2_id: fightDefenceJudge2,
      defence_judge_3_id: fightDefenceJudge3,
      max_rounds: parseInt(fightMaxRounds),
      round_duration: parseInt(fightRoundDuration),
      attack_points_for_action: parseInt(fightAttackPointsForAction),
      defence_points_for_action: parseInt(fightDefencePointsForAction)
    }
  })
}
