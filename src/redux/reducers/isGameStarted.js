import { START_GAME, FINISH_GAME } from '../constants';

const isGameStarted = (state = false, action) => {
  const { type } = action;

  switch(type) {
    case START_GAME:
      return true;
    case FINISH_GAME:
      return false;
    default:
      return state;
  }
};

export default isGameStarted;
