import { CHANGE_TIME } from '../constants';

const totalGameTime =  (state = 30000, action) => {
  const { type, time } = action;

  switch(type) {
    case CHANGE_TIME:
      return time;
    default:
      return state;
  }
};

export default totalGameTime;
