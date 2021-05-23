/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import { stack } from './src/navigation/stack'
import { registerComponents } from './src/navigation/navigation';

registerComponents()

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot(stack);
});