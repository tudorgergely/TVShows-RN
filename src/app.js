import React from 'react';
import configureStore from './redux/configureStore';
import {Provider} from 'react-redux';
import Contact from './containers/contact';
const store = configureStore();

export const App = props => <Provider store={store}>
    <Contact />
</Provider>;