import { Navigation } from 'react-native-navigation'

import FeedsScreen from './FeedsScreen'
import ExploreScreen from './ExploreScreen'

export const registerScreens = () => {
  Navigation.registerComponent('thilk.FeedsScreen', () => FeedsScreen)
  Navigation.registerComponent('thilk.ExploreScreen', () => ExploreScreen)
}