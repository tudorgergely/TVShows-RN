import React from 'react';
import Drawer from 'react-native-drawer';
import SideMenu from './sidemenu';
import {Actions, DefaultRenderer} from 'react-native-router-flux';

export default class extends React.Component {
    render() {
        const {navigationState, onNavigate} = this.props;
        const children = navigationState.children;
        return (
            <Drawer
                ref="navigation"
                open={navigationState.open}
                onOpen={() => Actions.refresh({key: navigationState.key, open: true})}
                onClose={() => Actions.refresh({key: navigationState.key, open: false})}
                type="overlay"
                content={<SideMenu />}
                tapToClose={true}
                openDrawerOffset={0.4}
                panCloseMask={0.4}>
                <DefaultRenderer navigationState={children[0]} onNavigate={onNavigate}/>
            </Drawer>
        );
    }
}