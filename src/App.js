import React from 'react';
import configureStore from './redux/configureStore';
import {Provider, connect} from 'react-redux';
import Contact from './containers/Contact';
import TvShowDetail from './containers/TvShowDetail';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Drawer from './components/SideDrawer';
import Search from "./containers/Search";
import Favorites from "./containers/Favorites";

const RouterWithRedux = connect()(Router);
const scenes = Actions.create(
    <Scene key="root">
        <Scene key="drawer" component={Drawer} open={false}>
            <Scene key="main" tabs={false}>
                <Scene key='contact' component={Contact} title="Contact"/>
                <Scene key='search' component={Search} title="Search"/>
                <Scene key='favorites' component={Favorites} title="Favorites"/>
                <Scene key='TvShowDetail' component={TvShowDetail} title="Tv Show Detail"/>
            </Scene>
        </Scene>
    </Scene>
);
const store = configureStore();

export const App = props => <Provider store={store}>
    <RouterWithRedux scenes={scenes}/>
</Provider>;