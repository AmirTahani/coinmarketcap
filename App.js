import React from 'react';
import { Alert } from './src/components/kit';
import AppWithNavigationState from './src/navigators/AppNavigator';
import NavigationService from './src/navigators/NavigationService';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import createStore from './src/redux/create';

const { store, persistor } = createStore();
const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <AppWithNavigationState
                    ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}
                />
                <Alert/>
            </PersistGate>
        </Provider>
    );
};

export default App;
