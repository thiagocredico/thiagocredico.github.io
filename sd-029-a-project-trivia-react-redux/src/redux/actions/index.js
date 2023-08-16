export const USER = 'USER';
export const ADD_SCORE = 'ADD_SCORE';
export const GET_RIGHTS = 'GET_RIGHTS';

export const actionUser = (payload) => ({
  type: USER,
  payload,
});

export const addScore = (payload) => ({
  type: ADD_SCORE,
  payload,
});

export const getRights = (payload) => ({
  type: GET_RIGHTS,
  payload,
});
