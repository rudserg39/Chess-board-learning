import { IS_SQUARE_COORDS_VISIBLE } from '../constants';

const isSquareCoordsVisible = (state = false, action) => {
  const { type, isSquareCoordsVisible } = action;

  switch(type) {
    case IS_SQUARE_COORDS_VISIBLE:
      return isSquareCoordsVisible;
    default:
      return state;
  }
};

export default isSquareCoordsVisible;
