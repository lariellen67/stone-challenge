import { createReducer } from 'reduxsauce';

import { actionsTypes } from './actions';

const INITIAL_STATE = {
  users: []
};

export default createReducer(INITIAL_STATE, {
  [actionsTypes.LIST_USERS_SUCCESS]: (state = INITIAL_STATE, payload) => ({
    ...state,
    users: payload.payload
  })
});
