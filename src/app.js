import React from 'react';
import configureStore from './redux/configureStore';
import {Provider, connect} from 'react-redux';
import Contact from './containers/contact';
import Home from './containers/home';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Drawer from './components/drawer';

const RouterWithRedux = connect()(Router);
const scenes = Actions.create(
    <Scene key="root">
        <Scene key="drawer" component={Drawer} open={false}>
            <Scene key="main" tabs={true}>
                <Scene key='home' component={Home} title="Home"/>
                <Scene key='contact' component={Contact} title="Contact"/>
            </Scene>
        </Scene>
    </Scene>
);
const store = configureStore();

export const App = props => <Provider store={store}>
    <RouterWithRedux scenes={scenes}/>
</Provider>;