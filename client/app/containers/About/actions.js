/*
 *
 * About actions
 *
 */

import { LOAD_ABOUT_ERROR, LOAD_ABOUT_INFO, LOAD_ABOUT_SUCCESS, CLEAR_ABOUT_INFO } from './constants';

export function clearAboutInfo() {
  return {
    type: CLEAR_ABOUT_INFO,
  };
}

export function loadAboutInfo() {
  return {
    type: LOAD_ABOUT_INFO,
  };
}

export function aboutInfoLoaded(info) {
  return {
    type: LOAD_ABOUT_SUCCESS,
    payload: info
  };
}

export function aboutInfoLoadingError(error) {
  return {
    type: LOAD_ABOUT_ERROR,
    payload: error
  };
}
