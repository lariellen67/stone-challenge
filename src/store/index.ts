import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares =
  process.env.NODE_ENV === 'production'
    ? [sagaMiddleware]
    : [sagaMiddleware, logger];

const persistConfig = {
  key: 'stone-challenge',
  storage,
  whitelist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
