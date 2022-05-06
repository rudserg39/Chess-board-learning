import { SET_TIME_LEFT } from '../constants';

const timeLeft = (state = 0, action) => {
  const { type, timeLeft } = action;

  switch(type) {
    case SET_TIME_LEFT:
      return timeLeft;
    default:
      return state;
  }
};

export default timeLeft;
