import { IS_TIME_LEFT } from '../constants';

const isTimeLeft = (state = 0, action) => {
  const { type, timeLeft } = action;

  switch(type) {
    case IS_TIME_LEFT:
      return timeLeft > 0;
    default:
      return state;
  }
};

export default isTimeLeft;
