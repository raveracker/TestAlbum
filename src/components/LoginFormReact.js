import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    // eslint-disable-next-line no-undef
    state ={ email: '', password: '', error: '', loading: false, };

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true, });
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Failed.', loading: false });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
                <Card>
                    <CardSection>
                        <Input
                            label={'Email'}
                            placeholder={'user@example.com'}
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </CardSection>

                    <CardSection>
                    <Input
                            label={'Password'}
                            placeholder={'Enter Password'}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            secureTextEntry
                    />
                    </CardSection>

                    <Text style={styles.errorStyle}>
                        {this.state.error}
                    </Text>

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
        );
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    },
};

export default LoginForm;
