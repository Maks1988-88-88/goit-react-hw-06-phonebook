import { combineReducers } from 'redux';
import contactsReducer from 'redux/reducers/contacts';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
});
