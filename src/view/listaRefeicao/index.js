import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import HeaderVoltar from '../../components/headerVoltar';
import Botao1 from '../../components/botao1';
import CardRefeicao from '../../components/cardRefeicao';

export default class ListaRefeicao extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <HeaderVoltar title='Lista das refeições' navigation={this.props.navigation} />
                <ScrollView>
                    <View style={styles.botao}>
                        <Botao1
                            label="ADICIONAR"
                            onPress={() => { this.props.navigation.navigate('AddRefeicao') }}
                        />
                    </View>
                    <CardRefeicao 
                        navigation={this.props.navigation}
                        titulo="1"
                        prato="PRATO A"
                        variacao="PRATO B"
                        horario="08:00"
                    />
                    <CardRefeicao 
                        navigation={this.props.navigation}
                        titulo="2"
                        prato="PRATO C"
                        variacao="PRATO D"
                        horario="11:00"
                    />
                    <CardRefeicao 
                        navigation={this.props.navigation}
                        titulo="3"
                        prato="PRATO E"
                        variacao="PRATO F"
                        horario="14:00"
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
        paddingTop: 32,
        paddingHorizontal: 30
    }
})