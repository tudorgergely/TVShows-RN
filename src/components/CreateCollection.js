import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'native-base';

const style = StyleSheet.create({
    container: {flexDirection: 'row', height: 50, backgroundColor: 'grey', justifyContent: 'center'},
    button: {alignSelf: 'center'}
});

const CreateCollection = ({onCreate}) => (
    <View style={style.container}>
        <Button style={style.button} onPress={onCreate}>Create collection</Button>
    </View>
);

export default CreateCollection;
