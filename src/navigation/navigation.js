import React from 'react';
import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import ViewItems from './screens/ViewItems';
import AddItem from './screens/AddItem';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#009688',
        accent: '#000000',
    },
};

export const registerComponents = () => {
    Navigation.registerComponent(`ViewItems`, () => (props) =>
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <ViewItems {...props} />
            </PaperProvider>
        </Provider>,
        () => ViewItems
    );
    Navigation.registerComponent(`AddItem`, () => (props) =>
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <AddItem {...props} />
            </PaperProvider>
        </Provider>,
        () => AddItem
    );
};
