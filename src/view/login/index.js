import * as React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import firebase from 'firebase';

import Icon from 'react-native-vector-icons/FontAwesome';

import Botao2 from '../../components/botao2';
import Input1 from '../../components/input1';

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            showPass: true,
            isLoading: false,
            message: "",
        }
    }

    componentDidMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyDB_N1f1vmZ9nR_qh5DLxRv9PeburrSF3o",
            authDomain: "minhasdietas-3a916.firebaseapp.com",
            projectId: "minhasdietas-3a916",
            storageBucket: "minhasdietas-3a916.appspot.com",
            messagingSenderId: "1089380727746",
            appId: "1:1089380727746:web:86d0c4cdebae93e1ecb45b",
            measurementId: "G-NDXL77S6P5"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

    processLogin() {
        this.setState({ isLoading: true });

        const { email, password } = this.state;

        const loginUserSuccess = () => {
            this.props.navigation.navigate('Menu');
        }

        const loginUserFailed = error => {
            this.setState({ message: this.getMessageByError(error.code) })
        }

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(loginUserSuccess)
            .catch(loginUserFailed)
            .then(() => {
                this.setState({
                    isLoading: false
                });
            })
    }

    onChangeHandler(field, valor) {
        this.setState({
            [field]: valor
        })
    }

    showPassword() {
        if (this.state.showPass == true) {
            this.setState({
                showPass: false
            })
        }
        else {
            this.setState({
                showPass: true
            })
        }

    }

    getMessageByError(code) {
        switch(code) {
            case "auth/user-not-found":
                return "E-mail inexistente";
            case "auth/wrong-password":
                return "Senha incorreta";
            default: 
                return "Preencha os campos de e-mail e senha!";
        }
    }

    renderButton() {

        return (
            <View style={styles.botao} >
                <Botao2 label="LOGIN" onPress={() => this.processLogin()} />
            </View>
        )
    }

    renderMessage() {
        const { message } = this.state;

        if (!message)
            return null;

        return (
            <View style={styles.msg}>
                <Text style={styles.msgText}>{message}</Text>
            </View>
        )
    }

    render() {
        return (

            <View style={styles.container}>
                <Image source={require('../../../imagens/logo.jpg')} style={{ alignSelf: 'center' }} />

                <KeyboardAwareScrollView>
                    <Input1>
                        <TextInput
                            style={styles.textInput}
                            placeholder="E-mail"
                            value={this.state.email}
                            onChangeText={valor => { this.onChangeHandler('email', valor) }}
                        />
                    </Input1>

                    <Input1>
                        <View style={styles.inputSenha}>
                            <TextInput
                                style={styles.textInput2}
                                placeholder="Senha"
                                secureTextEntry={this.state.showPass}
                                value={this.state.password}
                                onChangeText={valor => { this.onChangeHandler('password', valor) }}
                            />
                            <Icon
                                name="eye"
                                size={24}
                                color="black"
                                style={styles.icon}
                                onPress={() => { this.showPassword() }}
                            />
                        </View>
                    </Input1>

                    {   
                        this.state.isLoading
                        ?
                        <ActivityIndicator size="large" color="white" style={{ marginTop: 15 }}/>
                        :
                        this.renderButton()                         
                    }

                    { this.renderMessage() }

                    <View style={styles.cadastro}>
                        <Text style={{ color: 'white', fontSize: 16 }}>Não possui conta?</Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Register') }}>
                            <Text style={{ color: '#007FEE', fontSize: 16 }}> Cadastre-se.</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD8E6',
    },
    botao: {
        paddingTop: 32,
        paddingHorizontal: 30
    },
    cadastro: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 30,
    },
    textInput: {
        backgroundColor: 'white',
        marginHorizontal: 30,
        marginTop: 5,
    },
    inputSenha: {
        flexDirection: 'row',
        marginRight: 30,
        marginLeft: 30,
        backgroundColor: '#fff',
    },
    textInput2: {
        backgroundColor: 'white',
        marginTop: 5,
        width: 250
    },
    icon: {
        marginLeft: 260,
        marginTop: 15,
        position: 'absolute'
    },
    msg: {
        marginTop: 10,
        alignSelf: 'center'
    },
    msgText: {
        color: 'red'
    }
})