import React from "react";
import {GoogleSignin, GoogleSigninButton} from "react-native-google-signin";


class LoginForm extends React.Component {
    componentDidMount() {
        GoogleSignin.hasPlayServices({autoResolve: true}).then(() => {
            GoogleSignin.configure();
        })
            .catch((err) => {
                console.log("Play services error", err.code, err.message);
            })
    }

    signIn = () => {
        GoogleSignin.signIn()
            .then(user => console.log(user));
    };

    render() {
        return <GoogleSigninButton
            style={{width: 48, height: 48}}
            size={GoogleSigninButton.Size.Standard}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.signIn}
        />
    }
}

export default LoginForm;