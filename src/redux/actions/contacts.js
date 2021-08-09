import { ADD_CONTACTS } from 'redux/types/index';
import { nanoid } from 'nanoid';

export const addContacts = (name, number) => ({
  type: ADD_CONTACTS,
  payload: name,
  number,
});
