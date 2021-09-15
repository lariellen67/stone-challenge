import { combineReducers } from 'redux';

import cards from './cards/reducer';
import users from './users/reducer';

export default combineReducers({
  users,
  cards
});
