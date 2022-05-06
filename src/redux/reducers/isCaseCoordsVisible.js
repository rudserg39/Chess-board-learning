import { SHOW_CASE_COORDS, HIDE_CASE_COORDS } from '../constants';

const isCaseCoordsVisible = (state = false, action) => {
  const { type } = action;

  switch(type) {
    case SHOW_CASE_COORDS:
      return true;
    case  HIDE_CASE_COORDS:
      return false;
    default:
      return state;
  }
};

export default isCaseCoordsVisible;
