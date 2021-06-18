import { CHANGE_WEIGHT, CHANGE_LENGTH } from './actions';

const initialState = {
  length: 1,
  weight: 1,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_WEIGHT:
      return { ...state, weight: payload };
    case CHANGE_LENGTH:
      return { ...state, length: payload };

    default:
      return state;
  }
};
