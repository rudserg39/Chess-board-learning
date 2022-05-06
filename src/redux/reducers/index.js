import { combineReducers } from 'redux';
import coords from './coords';
import totalGameTime from './totalGameTime';
import coordsVisibility from './coordsVisibility';
import isGameStarted from './isGameStarted';
import isTimerRunning from './isTimerRunning';
import timeLeft from './timeLeft';
import isTimeLeft from './isTimeLeft';
import caseCoords from './caseCoords';
import isCaseCoordsVisible from './isCaseCoordsVisible';
import score from './score';

export default combineReducers({
  coords,
  totalGameTime,
  coordsVisibility,
  isGameStarted,
  isTimerRunning,
  timeLeft,
  isTimeLeft,
  caseCoords,
  isCaseCoordsVisible,
  score,
});
