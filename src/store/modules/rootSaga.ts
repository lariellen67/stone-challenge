import { all, fork } from 'redux-saga/effects';

import cards from './cards/sagas';
import users from './users/sagas';

interface TypedIterableIterator<T, N = any> {
  // eslint-disable-next-line no-unused-vars
  next(value: N): T;
}

export default function* rootSaga(): TypedIterableIterator<any, any> {
  return yield all([fork(users), fork(cards)]);
}
