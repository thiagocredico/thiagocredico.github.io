// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, API_CURRENCIES,
  DEL_EXPENSE, EDIT_EXPENSE, SAVE_EDIT_EXPENSE, SET_EDITAR } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  edit: false,
  editar: false,
  expense: {
    value: '',
    description: '',
    tag: '',
    method: '',
    currency: '',
    editar: false,
  },

};

const wallet = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
  case API_CURRENCIES:
    return { ...state, currencies: payload };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, payload] };
  case DEL_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter((expense) => payload !== expense)],
    };
  case EDIT_EXPENSE:
    return { ...state, edit: true, editar: true, expense: payload };
  case SET_EDITAR:
    return { ...state, editar: false };
  case SAVE_EDIT_EXPENSE:
    state.expenses.forEach((expense) => {
      if (payload.id === expense.id) {
        expense.value = payload.value;
        expense.description = payload.description;
        expense.currency = payload.currency;
        expense.method = payload.method;
        expense.tag = payload.tag;
      }
    });
    return {
      ...state,
      expenses: [...state.expenses,
      ],
      edit: false,
    };
  default:
    return state;
  }
};

export default wallet;
