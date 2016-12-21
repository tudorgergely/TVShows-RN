import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Content, Button} from 'native-base';
import {Actions} from "react-native-router-flux";

const options = [
    {
        name: 'Search',
        action: () => {
            setTimeout(() => Actions.refresh({key: 'drawer', open: value => !value}));

            Actions.search();
        }
    },
    {
        name: 'Contact',
        action: () => {
            setTimeout(() => Actions.refresh({key: 'drawer', open: value => !value}));

            Actions.contact();
        }
    },
    {
        name: 'Favorites',
        action: () => {
            setTimeout(() => Actions.refresh({key: 'drawer', open: value => !value}));

            Actions.favorites();
        }
    }
];
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    menuItem: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: .4,
    },
    title: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

export default function SideMenu() {
    return <View style={styles.container}>
        <Text style={styles.title}>MENU</Text>
        {options.map((option, i) => <Button key={i} onPress={option.action} transparent>{option.name}</Button>)}
    </View>
};