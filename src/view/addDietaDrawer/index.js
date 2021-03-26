import * as React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import Input2 from '../../components/input2';
import Botao1 from '../../components/botao1';
import Botao3 from '../../components/botao3';
import HeaderDrawNav from '../../components/headerDrawNav';

export default class AddDietaDrawer extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <HeaderDrawNav title='Adicionar Nova Dieta' navigation={this.props.navigation} />
                <Input2 label="Título">
                    <TextInput
                        style={styles.textInput}
                        placeholder="Título"
                    //value={this.state.user}
                    //onChangeText={valor => { this.onChangeHandler('user', valor) }}
                    />
                </Input2>
                <View style={styles.pesoIdade}>
                    <Input2 label="Peso">
                        <TextInput
                            style={styles.textInputMenor}
                            placeholder="Peso"
                            keyboardType='numeric'
                        //value={this.state.user}
                        //onChangeText={valor => { this.onChangeHandler('user', valor) }}
                        />
                    </Input2>
                    <Input2 label="Idade">
                        <TextInput
                            style={styles.textInputMenor}
                            placeholder="Idade"
                            keyboardType='numeric'
                        //value={this.state.user}
                        //onChangeText={valor => { this.onChangeHandler('user', valor) }}
                        />
                    </Input2>
                </View>
                <Input2 label="Descrição">
                    <TextInput
                        style={styles.textInputMaior}
                        placeholder="Descrição"
                    //value={this.state.user}
                    //onChangeText={valor => { this.onChangeHandler('user', valor) }}
                    />
                </Input2>
                <Botao3 texto="Imagem" label="Insira uma imagem"/>
                <View style={styles.botao}>
                    <Botao1
                        label="ADICIONAR"
                        onPress={() => { this.props.navigation.navigate('Home') }}
                    />
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7FC',
        flex: 1
    },
    textInput: {
        backgroundColor: 'white',
        marginHorizontal: 30,
        borderWidth: 1
    },
    textInputMenor: {
        backgroundColor: 'white',
        marginHorizontal: 30,
        borderWidth: 1,
        width: 120
    },
    textInputMaior: {
        backgroundColor: 'white',
        marginHorizontal: 30,
        borderWidth: 1,
        height: 120
    },
    pesoIdade: {
        flexDirection: 'row'
    },
    botao: {
        paddingHorizontal: 30,
        paddingTop: 32
    }

})