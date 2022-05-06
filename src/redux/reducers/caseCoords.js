import { SET_CASE_COORDS } from '../constants';

const caseCoords = (state = '', action) => {
  const { type, caseCoords } = action;

  switch(type) {
    case SET_CASE_COORDS:
      return caseCoords;
    default:
      return state;
  }
};

export default caseCoords;
