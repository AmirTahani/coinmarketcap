import { combineReducers } from 'redux';
import crypto from './modules/crypto';
import error from './modules/error';

export default combineReducers({
    crypto,
    error,
});
