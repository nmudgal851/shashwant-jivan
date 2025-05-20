// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import cartReducer from './cartSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['cart'] // only cart will be persisted
// };

// const persistedReducer = persistReducer(persistConfig, cartReducer);

// const store = configureStore({
//   reducer: {
//     cart: persistedReducer
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false
//     })
// });

// export const persistor = persistStore(store);
// export default store;



import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cartSlice';

// Combine reducers (useful if you add more reducers in future)
const rootReducer = combineReducers({
  cart: cartReducer,
});

// Persist entire rootReducer
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], // Only persist cart
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer, // Use persisted reducer here
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
