import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import ViewItems from './src/screens/ViewItems'
import AddItem from './src/screens/AddItem'
import { Provider } from 'react-redux'

import store from './src/redux/store'

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#009688',
    accent: '#000000',
  },
};

const App = () => {

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Items">
            <Stack.Screen
              name="Tasks"
              component={ViewItems}
              options={{
                headerStyle: {
                  backgroundColor: '#009688',
                },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="Add Task"
              component={AddItem}
              options={{
                headerStyle: {
                  backgroundColor: '#009688',
                },
                headerTintColor: '#fff',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider >
  );
}

export default App;