import { put } from 'redux-saga/effects';
import { showError } from './modules/error';

export default function* handleError(error) {
    console.log(error, 'its error ');
    yield put(showError(error.status.error_message));
}
