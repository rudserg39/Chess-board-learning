import { START_TIMER, STOP_TIMER } from '../constants';

const isTimerRunning = (state = false, action) => {
  const { type } = action;

  switch(type) {
    case START_TIMER:
      return true;
    case STOP_TIMER:
      return false;
    default:
      return state;
  }
};

export default isTimerRunning;
