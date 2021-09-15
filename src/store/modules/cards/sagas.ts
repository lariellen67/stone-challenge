/* eslint-disable no-unused-vars */
import { takeLatest, call, put, all, fork } from 'redux-saga/effects';

import { listCards } from '../../../services/api';
import { actionsTypes, getCardsSuccess, getCardsFailure } from './actions';

interface TypedIterableIterator<T, N = any> {
  next(value: N): T;
}

export function* findCards() {
  try {
    const { data } = yield call(listCards);
    yield put(getCardsSuccess(data));
  } catch (error: any) {
    if (error.response.status !== 401) {
      yield put(getCardsFailure());
    }
  }
}

export default function* cardsSagas() {
  yield all([
    fork(function* root(): TypedIterableIterator<any, any> {
      return [yield takeLatest(actionsTypes.LIST_CARDS_REQUEST, findCards)];
    })
  ]);
}
