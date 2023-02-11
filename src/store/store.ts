import { Middleware, applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import logger from 'redux-logger'
import { rootReducer } from '@store/root-reducer';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  thunk
].filter((middleware): middleware is Middleware => Boolean(middleware));


const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);