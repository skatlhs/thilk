import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
import { iconsLoaded, iconsMap } from './utils/themes';

registerScreens();

export default class Nav {
  constructor() {
    iconsLoaded.then(() => this._initApp());
  }

  _initApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Feeds',
          screen: 'thilk.FeedsScreen',
          title: 'My Thilk Feeds',
          icon: iconsMap.home
        },
          
        {
          label: 'Explore',
          screen: 'thilk.ExploreScreen',
          title: 'Explore',
          icon: iconsMap.globe 
        },
          
          
        {
          label: 'Search',
          screen: 'thilk.ExploreScreen',
          title: 'Search',
          icon: iconsMap['ios-search']
        },
      ],
    });
  }
}