import { select, delay, put } from 'redux-saga/effects';

export const SHOW_ERROR = 'u10q/error/SHOW_ERROR';
export const HIDE_ERROR = 'u10q/error/HIDE_ERROR';

const initialState = {
    message: 'unfortunately we are facing some issues',
    delay: 5000,
    show: false,
};


export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SHOW_ERROR:
            return {
                ...state,
                show: true,
                message: action.message,
            };
        case HIDE_ERROR:
            return {
                ...state,
                show: false,
            };
        default:
            return state;
    }
}

export function showError(message) {
    return {
        type: SHOW_ERROR,
        message,
    };
}

export function hideError() {
    return {
        type: HIDE_ERROR,
    };
}

export function* watchShowError() {
    const timeout = yield select(state => state.error.delay);
    yield delay(timeout);
    yield put(hideError());
}
