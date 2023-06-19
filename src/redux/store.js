import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';

import { filterSlice } from './filter/filterSlice'
import { teasReducer } from "./teas/teasSlice"

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        teas: teasReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
}) 

export const persistor = persistStore(store);

