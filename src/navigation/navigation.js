import React from 'react'
import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux'
import { store } from '../redux/store'

import ViewItems from "./screens/ViewItems";
import AddItem from './screens/AddItem';

export const registerComponents = () => {
    Navigation.registerComponent(`ViewItems`, () => (props) =>
        <Provider store={store}>
            <ViewItems {...props} />
        </Provider>,
        () => ViewItems
    );
    Navigation.registerComponent(`AddItem`, () => (props) =>
        <Provider store={store}>
            <AddItem {...props} />
        </Provider>,
        () => AddItem
    );
}
