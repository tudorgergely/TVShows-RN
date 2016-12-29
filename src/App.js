import React from "react";
import configureStore from "./redux/configureStore";
import {Provider, connect} from "react-redux";
import {Router, Actions} from "react-native-router-flux";
import Routes from "./routes";

const RouterWithRedux = connect()(Router);
const scenes = Actions.create(Routes);
const store = configureStore();

export const App = () => <Provider store={store}>
    <RouterWithRedux scenes={scenes}/>
</Provider>;