import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});
export const persistor = persistStore(store);
