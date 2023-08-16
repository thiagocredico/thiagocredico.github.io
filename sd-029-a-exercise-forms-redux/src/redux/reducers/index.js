import { combineReducers } from 'redux';
import { ADD_FORM_PERSON, ADD_FORM_PRO } from '../actions';

const INITIAL_STATE1 = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  uf: '',
};

const INITIAL_STATE2 = {
  resume: '',
  role: '',
  description: '',
};

const personalData = (state = INITIAL_STATE1, action) => {
  switch (action.type) {
  case ADD_FORM_PERSON:
    return { ...action.payload };
  default:
    return state;
  }
};

const professionalData = (state = INITIAL_STATE2, action) => {
  switch (action.type) {
  case ADD_FORM_PRO:
    return { ...action.payload };
  default:
    return state;
  }
};

const rootReducer = combineReducers({ personalData, professionalData });

export default rootReducer;
