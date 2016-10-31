import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableNativeFeedback
} from 'react-native';
import {sendMessage} from "../redux/modules/contact";
import {connect} from "react-redux";
import {changeBody} from "../redux/modules/contact";

const mapStateToProps = ({contact}) => {
    return {
        body: contact.body
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

const C = (props) => <View>
    <Text>
        Contact us!
    </Text>
    <TextInput
        multiline={true}
        editable={true}
        numberOfLines={4}
        onChange={(event) => {
            props.updateText(event.nativeEvent.text)
        }}
    />
    <TouchableNativeFeedback onPress={() => props.onSendClicked(props.body)}>
        <View>
            <Text>Send</Text>
        </View>
    </TouchableNativeFeedback>
</View>;

const Contact = connect(mapStateToProps, mapDispatchToProps)(C);

export default Contact;