import {
  FIGHTS_REQUESTED,
  FIGHTERS_REQUESTED,
  JUDGES_REQUESTED,
  ROUNDS_REQUESTED,
  FIGHT_REQUESTED,
  FIGHTER_CREATE_REQUESTED,
  FIGHT_CREATE_REQUESTED,
  FIGHTER_DELETE_REQUESTED,
  FIGHT_DELETE_REQUESTED,
  JUDGE_DELETE_REQUESTED,
  JUDGE_UPDATE_REQUESTED,
  JUDGE_CREATE_REQUESTED,
  ROUND_CREATE_REQUESTED,
  FIGHTER_UPDATE_REQUESTED,
  FIGHT_UPDATE_REQUESTED,
  FIGHT_START_REQUESTED,
  FIGHT_FINISH_REQUESTED,
  ROUND_UPDATE_REQUESTED,
  ROUND_START_REQUESTED,
  ROUND_PAUSE_REQUESTED,
  ROUND_STOP_REQUESTED,
  CURRENT_FIGHT_REQUESTED,
  JUDGESATTACKVSPROTECTION ,// Я добавил
  CREATEJUDGESATTACKVSPROTECTION // Я добавил
} from "../constants/action-types";

export function requestFights() {
  return { type: FIGHTS_REQUESTED }
};

export function requestCurrentFight() {
  return { type: CURRENT_FIGHT_REQUESTED }
};

export function requestFighters() {
  return { type: FIGHTERS_REQUESTED }
};

export function createFighter(first_name, last_name) {
  return { type: FIGHTER_CREATE_REQUESTED, first_name, last_name }
};

export function createRound(fightId, number) {
  return { type: ROUND_CREATE_REQUESTED, fightId, number }
};

export function requestRounds(fightId) {
  return { type: ROUNDS_REQUESTED, fightId }
};

export function createFight(
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
  return {
    type: FIGHT_CREATE_REQUESTED,
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
  }
};

export function updateFighter(id, first_name, last_name) {
  return { type: FIGHTER_UPDATE_REQUESTED, id, first_name, last_name }
};

export function updateFight(id) {
  return { type: FIGHT_UPDATE_REQUESTED, id }
};

export function startFight(id, data) {
  return { type: FIGHT_START_REQUESTED, id, data }
};

export function finishFight(id, data) {
  return { type: FIGHT_FINISH_REQUESTED, id, data }
};


export function updateRound(id, data) {
  return { type: ROUND_UPDATE_REQUESTED, id, data }
};

export function startRound(id) {
  return { type: ROUND_START_REQUESTED, id }
};

export function pauseRound(id) {
  return { type: ROUND_PAUSE_REQUESTED, id }
};

export function stopRound(id) {
  return { type: ROUND_STOP_REQUESTED, id }
};

export function updateJudge(id, first_name, last_name) {
  return { type: JUDGE_UPDATE_REQUESTED, id, first_name, last_name }
};

export function deleteFighter(id) {
  return { type: FIGHTER_DELETE_REQUESTED, id }
};

export function deleteFight(id) {
  return { type: FIGHT_DELETE_REQUESTED, id }
};

export function deleteJudge(id) {
  return { type: JUDGE_DELETE_REQUESTED, id }
};

export function createJudge(first_name, last_name) {
  return { type: JUDGE_CREATE_REQUESTED, first_name, last_name }
};

export function requestJudges() {
  return { type: JUDGES_REQUESTED }
};

export function requestFight(id) {
  return { type: FIGHT_REQUESTED, id }
};

export function judgesAttackVsProtection() {  // Я добавил
  return { type: JUDGESATTACKVSPROTECTION }
};

export function createjudgesAttackVsProtection(judge_id , judge , fighter_id , fighter , action_type) {  // Я добавил
  return { type: CREATEJUDGESATTACKVSPROTECTION , judge_id , judge , fighter_id , fighter , action_type}
};