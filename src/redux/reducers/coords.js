import { CHANGE_SIDE } from '../constants';

const initialState = {
  side: 'white',
  x: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
  y: [8, 7, 6, 5, 4, 3, 2, 1]
};

const coords = (state = initialState, action) => {
  const { type, side } = action;

  switch (type) {
    case CHANGE_SIDE:
      return {
        side: side,
        x: [...state.x].reverse(),
        y: [...state.y].reverse(),
      };

    default:
      return {
        ...state
      };
  }
};

export default coords;
