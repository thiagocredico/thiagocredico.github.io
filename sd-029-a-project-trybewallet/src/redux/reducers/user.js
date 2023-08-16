// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
  case USER_EMAIL:
    return ({
      ...state,
      email: payload,
    });

  default:
    return state;
  }
};

export default user;
