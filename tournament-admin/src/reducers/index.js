import {
  FIGHTS_LOADED,
  FIGHTERS_LOADED,
  JUDGES_LOADED,
  ROUNDS_LOADED,
  FIGHT_LOADED,
  CURRENT_FIGHT_LOADED,
  FIGHTER_CREATE_FAILURE,
  FIGHT_CREATE_FAILURE,
  JUDGE_CREATE_FAILURE,
  FIGHTER_CREATE_REQUESTED,
  FIGHT_CREATE_REQUESTED,
  JUDGE_CREATE_REQUESTED, 
  JUDGESATTACKVSPROTECTION

} from "../constants/action-types";

const initialState = {
  fighters: [],
  judges: [],
  fights: [],
  rounds: [],
  fighterCreateErrors: [],
  fightCreateErrors: [],
  judgeCreateErrors: [],
  fight: {},
  currentFight: null
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FIGHTERS_LOADED:
      return { ...state, fighters: action.payload };
    case FIGHTS_LOADED:
      return { ...state, fights: action.payload };
    case JUDGES_LOADED:
      return { ...state, judges: action.payload };
    case ROUNDS_LOADED:
      return { ...state, rounds: action.payload };
    case FIGHTER_CREATE_FAILURE:
      console.log(action)
      if (action.error) {
        return { ...state, fighterCreateErrors: action.error.response.data };
      } else {
        return { ...state, fighterCreateErrorserrors: action.data };
      }
    case FIGHT_CREATE_FAILURE:
      if (action.error) {
        return { ...state, fightCreateErrors: action.error.response.data };
      } else {
        return { ...state, fightCreateErrorserrors: action.data };
      }
    case JUDGE_CREATE_FAILURE:
      if (action.error) {
        return { ...state, judgeCreateErrors: action.error.response.data };
      } else {
        return { ...state, judgeCreateErrors: action.data };
      }
    case FIGHTER_CREATE_REQUESTED:
      return { ...state, fighterCreateErrors: [] };
    case JUDGESATTACKVSPROTECTION:  // Я добавил
      return { ...state, fighterCreateErrors: [] };
    case FIGHT_CREATE_REQUESTED:
      return { ...state, fightCreateErrors: [] };
    case JUDGE_CREATE_REQUESTED:
      return { ...state, judgeCreateErrors: [] };
    case FIGHT_LOADED:
      return { ...state, fight: action.payload };
    case CURRENT_FIGHT_LOADED:
      return { ...state, currentFight: action.payload };
    default:
      return state;
  }
};

export default rootReducer;

