/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import { Navigation } from "react-native-navigation";
import { stack } from './src/navigation/stack'
import { registerComponents } from './src/navigation/navigation';

registerComponents()

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot(stack);
});