import { applyMiddleware, compose, createStore } from 'redux';

import logger from 'redux-logger'
import { rootReducer } from '@store/root-reducer';

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);