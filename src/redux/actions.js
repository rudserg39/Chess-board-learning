import {
  CHANGE_TIME,
  CHANGE_SIDE,
  CHANGE_COORDS_VISIBILITY,
  START_GAME,
  FINISH_GAME,
  START_TIMER,
  STOP_TIMER,
  SET_TIME_LEFT,
  IS_TIME_LEFT,
  SET_CASE_COORDS,
  SHOW_CASE_COORDS,
  HIDE_CASE_COORDS,
  INCREASE_SCORE,
  RESET_SCORE
} from './constants';

export const changeTime = time => ({ type: CHANGE_TIME, time });
export const changeSide = side => ({ type: CHANGE_SIDE, side });
export const changeCoordsVisibility = coordsVisibility => ({ type: CHANGE_COORDS_VISIBILITY, coordsVisibility });
export const startGame = () => ({ type: START_GAME });
export const finishGame = () => ({ type: FINISH_GAME });
export const startTimer = () => ({ type: START_TIMER });
export const stopTimer = () => ({ type: STOP_TIMER });
export const setTimeLeft = timeLeft => ({ type: SET_TIME_LEFT, timeLeft });
export const isTimeLeft = timeLeft => ({ type: IS_TIME_LEFT, timeLeft });
export const setCaseCoords = caseCoords => ({ type: SET_CASE_COORDS, caseCoords });
export const showCaseCoords = () => ({ type: SHOW_CASE_COORDS });
export const hideCaseCoords = () => ({ type: HIDE_CASE_COORDS });
export const increaseScore = () => ({ type: INCREASE_SCORE });
export const resetScore = () => ({ type: RESET_SCORE });
