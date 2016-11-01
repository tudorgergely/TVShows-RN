import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MKColor, MKButton} from 'react-native-material-kit';
import {Actions} from "react-native-router-flux";

const options = [
    {
        name: 'Home',
        action: () => {
            setTimeout(() => Actions.refresh({key: 'drawer', open: value => !value}));

            Actions.home();
        }
    },
    {
        name: 'Contact',
        action: () => {
            setTimeout(() => Actions.refresh({key: 'drawer', open: value => !value}));

            Actions.contact();
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
        borderColor: MKColor.Grey
    },
    title: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: MKColor.BlueGrey
    }
});

export default function SideMenu() {
    return <View style={styles.container}>
        <Text style={styles.title}>MENU</Text>
        {
            options.map(option => <MKButton
                    onPress={option.action}
                    key={option.name}
                    backgroundColor={MKColor.Transparent}
                    shadowRadius={2}
                    shadowOffset={{width: 0, height: 2}}
                    shadowOpacity={.7}
                    shadowColor="black"
                    style={styles.menuItem}
                >
                    <Text pointerEvents="none"
                          style={{color: MKColor.LightBlue, fontSize: 20}}>
                        {option.name}
                    </Text>
                </MKButton>
            )
        }
    </View>
};