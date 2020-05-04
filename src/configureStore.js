import {applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'user',
    'app'
  ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewareComponents = [thunk];

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  middlewareComponents.push(logger);
}

const middleware = applyMiddleware(...middlewareComponents);

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);
