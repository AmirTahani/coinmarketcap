import { put } from 'redux-saga/effects';

import handleError from '../handleError';

export const LOAD = 'crypto/LOAD';
const LOAD_SUCCESS = 'crypto/LOAD_SUCCESS';
const LOAD_FAILURE = 'crypto/LOAD_FAILURE';

const initialState = {
    currencies: {
        loading: false,
        loaded: false,
        data: [],
        error: null,
    },
};
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                currencies: {
                    ...state.currencies,
                    loading: true,
                    loaded: false
                },
            };
        case LOAD_SUCCESS:
            return {
                ...state,
                currencies: {
                    ...state.currencies,
                    loading: false,
                    loaded: true,
                    data: action.currencies,
                },
            };
        case LOAD_FAILURE:
            return {
                ...state,
                currencies: {
                    ...state.currencies,
                    loading: false,
                    loaded: true,
                    error: action.error,
                },
            };
        default:
            return state;
    }
}

export function load() {
    return {
        type: LOAD,
    };
}


export function loadSuccess(currencies) {
    return {
        type: LOAD_SUCCESS,
        currencies,
    };
}

export function loadFailure(error) {
    return {
        type: LOAD_FAILURE,
        error,
    };
}


export function* watchLoadCurrencies(apiClient) {
    try {
        const response = yield apiClient('get', 'v1/cryptocurrency/listings/latest');
        yield put(loadSuccess(response.data));
    } catch (e) {
        yield put(loadFailure(e));
        yield handleError(e);
    }
}
