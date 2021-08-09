import { ADD_CONTACTS, DELETE_CONTACTS } from 'redux/types/index';

export const addContacts = (name, number) => ({
  type: ADD_CONTACTS,
  payload: name,
  number,
});


export const deleteContacts = (id) => ({
  type: DELETE_CONTACTS,
  payload: id,
});