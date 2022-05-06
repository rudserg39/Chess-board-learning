import { IS_BOARD_COORDS_VISIBLE } from '../constants';

const isBoardCoordsVisible = (state = true, action) => {
  const { type, isBoardCoordsVisible } = action;

  switch(type) {
    case IS_BOARD_COORDS_VISIBLE:
      return isBoardCoordsVisible;
    default:
      return state;
  }
};

export default isBoardCoordsVisible;
