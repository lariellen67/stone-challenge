import { createReducer } from 'reduxsauce';

import { actionsTypes } from './actions';

const INITIAL_STATE = {
  cards: []
};

export default createReducer(INITIAL_STATE, {
  [actionsTypes.LIST_CARDS_SUCCESS]: (state = INITIAL_STATE, payload) => ({
    ...state,
    cards: payload.payload
  })
});
