/* This export common using actionCreator */
import * as types from 'constants/action-types';

export function pending(count) {
  return {
    type: types.PATH_PAGE_PENDING,
    payload: count || 1
  };
};

export function apiError(message) {
  return {
    type: types.PATH_PAGE_API_ERR,
    payload: message
  };
}