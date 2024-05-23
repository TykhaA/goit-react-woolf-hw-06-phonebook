import { contactsReducer } from './contacts/slice';
import { filterReducer } from './filter/slice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const persistContctsConfig = {
  key: 'contacts',
  storage,
};

const persistedContactsReducer = persistReducer(
  persistContctsConfig,
  contactsReducer
);

export const reducer = {
  contacts: persistedContactsReducer,
  filter: filterReducer,
};
