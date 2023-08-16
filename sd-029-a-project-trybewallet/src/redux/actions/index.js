// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
export const API_CURRENCIES = 'API_CURRENCIES';
export const API_ERROR = 'API_ERROR';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DEL_EXPENSE = 'DEL_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const SET_EDITAR = 'SET_EDITAR';
export const SAVE_EDIT_EXPENSE = 'SAVE_EDIT_EXPENSE';

export const userEmail = (email) => ({
  type: USER_EMAIL,
  payload: email,
});

export const apiCurrencies = (currencies) => ({
  type: API_CURRENCIES,
  payload: currencies,
});

export const apiError = (error) => ({
  type: API_ERROR,
  payload: error,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const fetchCurrenciesThunk = () => async (dispatch) => {
  try {
    const currencies = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
    delete currencies.USDT;
    dispatch(apiCurrencies(Object.keys(currencies)));
  } catch (error) {
    dispatch(apiError(error.message));
  }
};

export const delExpense = (expense) => ({
  type: DEL_EXPENSE,
  payload: expense,
});

export const editExpense = (expense) => ({
  type: EDIT_EXPENSE,
  payload: expense,
});

export const setEditar = () => ({
  type: SET_EDITAR,
});

export const saveEditExpense = (expense) => ({
  type: SAVE_EDIT_EXPENSE,
  payload: expense,
});
