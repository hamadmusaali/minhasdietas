import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons'

Icon.loadFont();

const CardRefeicao = (props) => {
    const { titulo, prato, variacao, horario, navigation } = props;

    return (

        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.textTitulo}>Refeição {titulo}</Text>
                    <Icon2 name="restaurant" size={30} color="white" style={{ marginRight: 10, marginTop: 5 }} />
                </View>
                <View style={styles.conteudo}>
                    <Text style={styles.textConteudo}>Prato: {prato}</Text>
                    <Text style={styles.textConteudo}>Variação: {variacao}</Text>
                    <Text style={styles.textConteudo}>Horário: {horario}</Text>
                    <View style={styles.icones}>
                        <Icon name="trash" size={30} color="#ADD8E6" style={{ paddingLeft: 30 }} />
                        <Icon name="pencil" size={30} color="#ADD8E6" onPress={() => navigation.navigate('AlterarRefeicao')} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        backgroundColor: 'white',
        height: 240,
        elevation: 8,
        marginHorizontal: 30,
        marginTop: 32,
        marginBottom: 8
    },
    conteudo: {
        padding: 10
    },
    textTitulo: {
        fontSize: 22,
        color: 'white',
        marginTop: 5,
        marginLeft: 10
    },
    pesoIdade: {
        flexDirection: 'row',
        marginTop: 4
    },
    icones: {
        flexDirection: 'row-reverse'
    },
    containerImagem: {
        paddingTop: 10,
        paddingBottom: 10,
        alignSelf: 'center',
    },
    imagem: {
        width: 100,
        height: 100
    },
    header: {
        backgroundColor: '#ADD8E6',
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textConteudo: {
        marginTop: 16,
        fontSize: 20
    }
})

export default CardRefeicao;