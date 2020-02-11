/*
 *
 * About reducer
 *
 */
import produce from "immer";
import { CLEAR_ABOUT_INFO, LOAD_ABOUT_ERROR, LOAD_ABOUT_INFO, LOAD_ABOUT_SUCCESS } from './constants';

export const initialState = {
  loading: false,
  error: false,
  info: null
};

/* eslint-disable default-case, no-param-reassign */
const aboutReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_ABOUT_INFO:
        draft.loading = true;
        draft.error = false;
        draft.info = null;
        break;

      case CLEAR_ABOUT_INFO:
        draft.loading = true;
        draft.error = false;
        draft.info = null;
        break;

      case LOAD_ABOUT_SUCCESS:
        draft.loading = false;
        draft.info = action.payload;
        break;

      case LOAD_ABOUT_ERROR:
        draft.loading = false;
        draft.error = action.payload;
        break;
    }
  });

export default aboutReducer;
