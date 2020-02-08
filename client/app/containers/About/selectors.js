import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the about state domain
 */
const selectAboutDomain = state => state.about || initialState;

/**
 * Other specific selectors
 */
const makeSelectAboutInfo = () =>
  createSelector(
    selectAboutDomain,
    aboutState => aboutState.info,
  );

const makeSelectLoading = () =>
  createSelector(
    selectAboutDomain,
    aboutState => aboutState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectAboutDomain,
    aboutState => aboutState.error,
  );


export { makeSelectAboutInfo, makeSelectLoading, makeSelectError };

