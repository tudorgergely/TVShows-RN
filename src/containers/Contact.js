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
import {Button, Input, InputGroup, Container, Content} from 'native-base';

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
    return <Container style={styles.container}>
        <Content>
            <InputGroup>
                <Input onChange={event => updateText(event.nativeEvent.text)}/>
            </InputGroup>
            <Button onPress={onSendClicked} style={{alignSelf: 'center'}}>Send</Button>
        </Content>
    </Container>
};

const Contact = connect(mapStateToProps, mapDispatchToProps)(C);

export default Contact;