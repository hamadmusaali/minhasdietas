import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import HeaderDrawNav from '../../components/headerDrawNav';
import Botao1 from '../../components/botao1';
import CardDieta from '../../components/cardDieta';

export default class Home extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <HeaderDrawNav title='Home' navigation={this.props.navigation} />
                <ScrollView>
                    <View style={styles.botao}>
                        <Botao1
                            label="ADICIONAR"
                            onPress={() => { this.props.navigation.navigate('AddDieta') }}
                        />
                    </View>

                    <CardDieta
                        titulo="Título da dieta"
                        descricao="Descrição da dieta, estou apenas escrevendo aqui para testar como ficaria uma descrição"
                        peso="X"
                        idade="Y"
                        onPress={() => { this.props.navigation.navigate('ListaRefeicao') }}
                        navigation={this.props.navigation}
                    />
                    <CardDieta
                        titulo="Título da dieta"
                        descricao="Descrição da dieta, estou apenas escrevendo aqui para testar como ficaria uma descrição"
                        peso="X"
                        idade="Y"
                        onPress={() => { this.props.navigation.navigate('ListaRefeicao') }}
                        navigation={this.props.navigation}
                    />
                    <CardDieta
                        titulo="Título da dieta"
                        descricao="Descrição da dieta, estou apenas escrevendo aqui para testar como ficaria uma descrição"
                        peso="X"
                        idade="Y"
                        onPress={() => { this.props.navigation.navigate('ListaRefeicao') }}
                        navigation={this.props.navigation}
                    />
                    <CardDieta
                        titulo="Título da dieta"
                        descricao="Descrição da dieta, estou apenas escrevendo aqui para testar como ficaria uma descrição"
                        peso="X"
                        idade="Y"
                        onPress={() => { this.props.navigation.navigate('ListaRefeicao') }}
                        navigation={this.props.navigation}
                    />
                </ScrollView>


            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7FC',
        flex: 1
    },
    botao: {
        paddingHorizontal: 30,
        paddingTop: 32
    },
    lista: {
        paddingHorizontal: 30,
        marginTop: 32
    }
})