import { toast } from 'react-toastify';

export const actionsTypes = {
  LIST_CARDS_REQUEST: '@cards/LIST_CARDS_REQUEST',
  LIST_CARDS_SUCCESS: '@cards/LIST_CARDS_SUCCESS',
  LIST_CARDS_FAILURE: '@cards/LIST_CARDS_FAILURE'
};

const baseSelector = (state: { cards: any }) => state.cards;

export function getCardsRequest() {
  return { type: actionsTypes.LIST_CARDS_REQUEST };
}

export function getCardsSuccess(listCards: any) {
  return {
    type: actionsTypes.LIST_CARDS_SUCCESS,
    payload: listCards
  };
}

export function getCardsFailure() {
  toast.error('Não foi possível carregar a listagem de cartões');
  return {
    type: actionsTypes.LIST_CARDS_FAILURE
  };
}

export const selectors = {
  cards: (state: { cards: any }) => baseSelector(state).cards
};
