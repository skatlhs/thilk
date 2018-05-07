import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
import { iconsMap } from './utils/themes';
import appInitialized from './utils/appInitialized';

registerScreens();

export function startLogin() {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'thilk.LoginScreen',
      navigatorStyle: {
        navBarHidden: true,
      },
    },
  });
}

export function startMainApp() {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Feeds',
        screen: 'thilk.FeedsScreen',
        title: 'Instagram',
        icon: iconsMap.home,
      },
      {
        label: 'Explore',
        screen: 'thilk.ExploreScreen',
        title: 'Explore',
        icon: iconsMap['ios-search'],
      },
    ],
  });
}

export function init() {
  appInitialized();
}
