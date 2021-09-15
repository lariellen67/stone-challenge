import { toast } from 'react-toastify';

export const actionsTypes = {
  LIST_USERS_REQUEST: '@users/LIST_USERS_REQUEST',
  LIST_USERS_SUCCESS: '@users/LIST_USERS_SUCCESS',
  LIST_USERS_FAILURE: '@users/LIST_USERS_FAILURE'
};

const baseSelector = (state: { users: any }) => state.users;

export function getUsersRequest() {
  return { type: actionsTypes.LIST_USERS_REQUEST };
}

export function getUsersSuccess(listUsers: any) {
  return {
    type: actionsTypes.LIST_USERS_SUCCESS,
    payload: listUsers
  };
}

export function getUsersFailure() {
  toast.error('Não foi possível carregar a listagem de usuários');
  return {
    type: actionsTypes.LIST_USERS_FAILURE
  };
}

export const selectors = {
  users: (state: { users: any }) => baseSelector(state).users
};
