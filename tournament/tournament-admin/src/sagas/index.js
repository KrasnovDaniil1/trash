import JudgesAttackVsProtection from './JudgesAttackVsProtection'; // я Добавил
import FightsSaga from './FightsSaga';
import FightersSaga from './FightersSaga';
import JudgesSaga from './JudgesSaga';
import RoundsSaga from './RoundsSaga';
import AddFighterSaga from './AddFighterSaga';
import AddFightSaga from './AddFightSaga';
import UpdateFighterSaga from './UpdateFighterSaga';
import UpdateFightSaga from './UpdateFightSaga';
import StartFightSaga from './StartFightSaga';
import FinishFightSaga from './FinishFightSaga';
import UpdateRoundSaga from './UpdateRoundSaga';
import StartRoundSaga from './StartRoundSaga';
import PauseRoundSaga from './PauseRoundSaga';
import StopRoundSaga from './StopRoundSaga';
import UpdateJudgeSaga from './UpdateJudgeSaga';
import DeleteFighterSaga from './DeleteFighterSaga';
import DeleteFightSaga from './DeleteFightSaga';
import DeleteJudgeSaga from './DeleteJudgeSaga';
import AddJudgeSaga from './AddJudgeSaga';
import AddRoundSaga from './AddRoundSaga';
import FightSaga from './FightSaga';
import CurrentFightSaga from './CurrentFightSaga';
import { all, call } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    call(JudgesAttackVsProtection),// Я добавил
    call(FightsSaga),
    call(FightersSaga),
    call(JudgesSaga),
    call(FightSaga),
    call(RoundsSaga),
    call(CurrentFightSaga),
    call(AddFighterSaga),
    call(AddFightSaga),
    call(UpdateFighterSaga),
    call(UpdateFightSaga),
    call(StartFightSaga),
    call(FinishFightSaga),
    call(UpdateJudgeSaga),
    call(DeleteFighterSaga),
    call(DeleteFightSaga),
    call(DeleteJudgeSaga),
    call(AddJudgeSaga),
    call(AddRoundSaga),
    call(UpdateRoundSaga),
    call(StartRoundSaga),
    call(PauseRoundSaga),
    call(StopRoundSaga),
  ])
}