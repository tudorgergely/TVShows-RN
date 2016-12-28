import React from "react";
import LoginForm from "../components/LoginForm";
import {Container, Content} from "native-base";

class Login extends React.Component {
    render() {
        return <Container style={{marginTop: 60,justifyContent: 'center', alignItems: 'center'}}>
            <Content>
                <LoginForm/>
            </Content>
        </Container>
    }
}

export default Login;