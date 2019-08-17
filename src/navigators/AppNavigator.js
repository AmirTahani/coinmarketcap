import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Home from '../containers/Home/Home';

export const AppNavigator = createStackNavigator({
    Home: {
      screen: Home,
    },
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(createSwitchNavigator({
  App: AppNavigator,
}, {
  initialRouteName: 'App',
}));
