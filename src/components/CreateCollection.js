import React from "react";
import {View, StyleSheet} from "react-native";
import {Button} from "native-base";

const style = StyleSheet.create({
    container: {flexDirection: 'row', height: 50, backgroundColor: 'grey', justifyContent: 'center'},
    button: {alignSelf: 'center'}
});

const CreateCollection = ({onCreatePress}) => (
    <View style={style.container}>
        <Button style={style.button} onPress={onCreatePress}>Create collection</Button>
    </View>
);

CreateCollection.propTypes = {
    onCreatePress: React.PropTypes.func.isRequired
};

export default CreateCollection;
