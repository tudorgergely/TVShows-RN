import Login from "./containers/Login";
import {ActionConst} from "react-native-router-flux";
import Drawer from "react-native-drawer";
import Contact from "./containers/Contact";
import Search from "./containers/Search";
import Favorites from "./containers/Favorites";
import TvShowDetail from "./containers/TvShowDetail";

export default (
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