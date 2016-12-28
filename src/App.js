import React from "react";
import configureStore from "./redux/configureStore";
import {Provider, connect} from "react-redux";
import Contact from "./containers/Contact";
import TvShowDetail from "./containers/TvShowDetail";
import {Scene, Router, Actions, ActionConst} from "react-native-router-flux";
import Drawer from "./components/SideDrawer";
import Search from "./containers/Search";
import Favorites from "./containers/Favorites";
import Login from "./containers/Login";

const RouterWithRedux = connect()(Router);
const scenes = Actions.create(
    <Scene key="root">
        <Scene key="drawer" component={Drawer} open={false}>
            <Scene key="main" tabs={false}>
                <Scene key='login' component={Login} title="Login" type={ActionConst.REPLACE}/>
                <Scene key='contact' component={Contact} title="Contact" type={ActionConst.REPLACE}/>
                <Scene key='search' component={Search} title="Search" type={ActionConst.REPLACE}/>
                <Scene key='favorites' component={Favorites} title="Favorites" type={ActionConst.REPLACE}/>
                <Scene key='TvShowDetail' component={TvShowDetail} title="Tv Show Detail"/>
            </Scene>
        </Scene>
    </Scene>
);
const store = configureStore();

export const App = props => <Provider store={store}>
    <RouterWithRedux scenes={scenes}/>
</Provider>;