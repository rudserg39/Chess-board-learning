import { CHANGE_COORDS_VISIBILITY } from '../constants';

const coordsVisibility = (state = 'boardCoords', action) => {
  const { type, coordsVisibility } = action;

  switch(type) {
    case CHANGE_COORDS_VISIBILITY:
      return coordsVisibility;
    default:
      return state;
  }
};

export default coordsVisibility;
