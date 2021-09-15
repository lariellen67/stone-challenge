/* eslint-disable no-unused-vars */
import { takeLatest, call, put, all, fork } from 'redux-saga/effects';

import { listUsers } from '../../../services/api';
import { actionsTypes, getUsersSuccess, getUsersFailure } from './actions';

interface TypedIterableIterator<T, N = any> {
  next(value: N): T;
}

export function* findUsers() {
  try {
    const { data } = yield call(listUsers);
    yield put(getUsersSuccess(data));
  } catch (error: any) {
    if (error.response.status !== 401) {
      yield put(getUsersFailure());
    }
  }
}

export default function* usersSagas() {
  yield all([
    fork(function* root(): TypedIterableIterator<any, any> {
      return [yield takeLatest(actionsTypes.LIST_USERS_REQUEST, findUsers)];
    })
  ]);
}
