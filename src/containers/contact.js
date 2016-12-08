import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableNativeFeedback,
    StyleSheet,
    Alert
} from 'react-native';
import {sendMessage} from '../redux/modules/contact';
import {connect} from 'react-redux';
import {changeBody} from "../redux/modules/contact";

const mapStateToProps = ({contact}) => {
    return {
        body: contact.body,
        error: contact.error,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSendClicked: (body) => {
            dispatch(sendMessage(body))
        },
        updateText(body) {
            dispatch(changeBody(body))
        }
    }
};

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        padding: 5
    },
    input: {
        margin: 5,
    },
    sendButton: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
});

const C = ({updateText, onSendClicked, body, error}) => {
    if (error) {
        Alert.alert('Error', error, [{text: 'OK'}]);
    }
    return <View style={styles.container}>
{/*        <MKTextField
            onChange={event => updateText(event.nativeEvent.text)}
            multiline={true}
            numberOfLines={4}
            tintColor={MKColor.Lime}
            textInputStyle={{color: MKColor.Orange}}
            style={styles.input}
            floatingLabelEnabled={true}
        />
        <MKButton
            backgroundColor={MKColor.Teal}
            shadowRadius={2}
            shadowOffset={{width: 0, height: 2}}
            shadowOpacity={.7}
            shadowColor="black"
            onPress={() => onSendClicked(body)}
            style={styles.sendButton}
        >
            <Text pointerEvents="none"
                  style={{color: 'white', fontWeight: 'bold',}}>
                Send
            </Text>
        </MKButton>*/}
    </View>
};

const Contact = connect(mapStateToProps, mapDispatchToProps)(C);

export default Contact;