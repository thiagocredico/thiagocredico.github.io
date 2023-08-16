export const ADD_FORM_PRO = 'ADD_FORM_PRO';
export const ADD_FORM_PERSON = 'ADD_FORM_PERSON';

export const sendFormPro = (payload) => ({
  type: ADD_FORM_PRO,
  payload,
});

export const sendFormPerson = (payload) => ({
  type: ADD_FORM_PERSON,
  payload,
});
