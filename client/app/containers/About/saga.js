/**
 * Gets the App About info from backend server
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { aboutInfoLoaded, aboutInfoLoadingError } from './actions';
import { LOAD_ABOUT_INFO } from './constants';


export function* getAboutInfo() {
  const requestURL = `http://localhost:8080/application/`;

  try {
    // Call our request helper (see 'utils/request')
    const aboutInfo = yield call(request, requestURL);
    yield put(aboutInfoLoaded(aboutInfo));
  } catch (err) {
    yield put(aboutInfoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* aboutInfo() {
  // Watches for LOAD_ABOUT_INFO actions and calls getAboutInfo when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_ABOUT_INFO, getAboutInfo);
}
