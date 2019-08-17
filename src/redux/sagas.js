import { all, takeEvery } from 'redux-saga/effects';

import { LOAD, watchLoadCurrencies } from './modules/crypto';
import { SHOW_ERROR, watchShowError } from './modules/error';
import apiClient from './apiClient';


export default function* root(store) {
    yield all([
        takeEvery(LOAD, watchLoadCurrencies, apiClient),
        takeEvery(SHOW_ERROR, watchShowError, apiClient),
    ]);
}

