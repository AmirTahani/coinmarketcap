import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import sagas from './sagas';

export default function create() {
    const sagaMiddleware = createSagaMiddleware();
    const persistConfig = {
        key: 'root',
        storage: AsyncStorage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);
    let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
    let persistor = persistStore(store);
    store.rootTask = sagaMiddleware.run(sagas, store);


    return { store, persistor };
}


