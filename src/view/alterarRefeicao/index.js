import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import HeaderVoltar from '../../components/headerVoltar';
import Input2 from '../../components/input2';
import Botao1 from '../../components/botao1';

export default class AlterarRefeicao extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            dt: ''
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <HeaderVoltar title='Alterar Refeição' navigation={this.props.navigation} />
                <Text style={styles.titulo}>Refeição</Text>
                <Input2 label="Prato">
                    <TextInput
                        style={styles.textInput}
                        placeholder="Prato"
                    //value={this.state.user}
                    //onChangeText={valor => { this.onChangeHandler('user', valor) }}
                    />
                </Input2>
                <Input2 label="Variação">
                    <TextInput
                        style={styles.textInput}
                        placeholder="Variação"
                    //value={this.state.user}
                    //onChangeText={valor => { this.onChangeHandler('user', valor) }}
                    />
                </Input2>
                <Input2 label="Horário">
                    <TextInputMask
                        type={'datetime'}
                        options={{
                            format: 'HH:mm'
                        }}
                        placeholder='Horário'
                        value={this.state.dt}
                        onChangeText={text => { this.setState({ dt: text }) }}
                        style={styles.textInputHorario}
                    />
                </Input2>
                <View style={styles.botao}>
                    <Botao1
                        label="ALTERAR"
                        onPress={() => { this.props.navigation.navigate('ListaRefeicao') }}
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
    textInputHorario: {
        backgroundColor: 'white',
        marginHorizontal: 30,
        borderWidth: 1,
        width: 100
    },
    pesoIdade: {
        flexDirection: 'row'
    },
    botao: {
        paddingHorizontal: 30,
        paddingTop: 32
    },
    titulo: {
        marginLeft: 30,
        fontSize: 18,
        marginTop: 32
    }

})