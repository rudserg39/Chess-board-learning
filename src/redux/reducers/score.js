import { INCREASE_SCORE, RESET_SCORE } from '../constants';

const score = (state = 0, action) => {
  const { type } = action;

  switch(type) {
    case INCREASE_SCORE:
      return state + 1;
    case RESET_SCORE:
      return 0;
    default:
      return state;
  }
};

export default score;
