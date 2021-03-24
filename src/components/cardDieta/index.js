import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const CardDieta = ( props ) => {
    const { onPress, titulo, peso, idade, descricao, navigation } = props;

    return (

        <TouchableOpacity onPress={onPress} style={styles.container}>
            
                <View style={styles.card}>
                    <View style={styles.conteudo}>
                        <Text style={styles.textTitulo}>{titulo}</Text>
                        <View style={styles.containerImagem}>
                            <Image style={styles.imagem} source={require('../../../imagens/dieta2.jpg')} />
                        </View>

                        <Text >Descrição: {descricao}</Text>
                        <View style={styles.pesoIdade}>
                            <Text style={{ paddingRight: 30 }}>Peso: {peso}</Text>
                            <Text >Idade: {idade}</Text>
                        </View>
                        <View style={styles.icones}>
                            <Icon name="trash" size={30} color="#ADD8E6" style={{ paddingLeft: 30 }} />
                            <Icon name="pencil" size={30} color="#ADD8E6" onPress={() =>  navigation.navigate('AlterarDieta') } />
                        </View>
                    </View>
                </View>
            

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        backgroundColor: 'white',
        width: 300,
        height: 275,
        borderRadius: 14,
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
        color: '#ADD8E6'
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
    }
})

export default CardDieta;