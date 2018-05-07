import { Navigation } from 'react-native-navigation'

import FeedsScreen from './FeedsScreen'
import ExploreScreen from './ExploreScreen'
import LoginScreen from './LoginScreen'
import WithProvider from '../components/WithProvider'

export const registerScreens = () => {
  Navigation.registerComponent('thilk.FeedsScreen', () =>
    WithProvider(FeedsScreen),
  );
  Navigation.registerComponent('thilk.ExploreScreen', () =>
    WithProvider(ExploreScreen),
  );
    
    Navigation.registerComponent('thilk.LoginScreen', () =>
    WithProvider(LoginScreen),
  );
};