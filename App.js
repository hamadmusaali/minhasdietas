import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/view/login';
import Register from './src/view/register';
import Menu from './src/components/menu';
import AddDieta from './src/view/addDieta';
import Home from './src/view/home';
import ListaRefeicao from './src/view/listaRefeicao';
import AlterarDieta from './src/view/alterarDieta';
import AddRefeicao from './src/view/addRefeicao';
import AlterarRefeicao from './src/view/alterarRefeicao';

const Stack = createStackNavigator();  

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={ {headerShown: false} } />
          <Stack.Screen name="Register" component={Register} options={ {headerShown: false} } />
          <Stack.Screen name="Menu" component={Menu} options={ {headerShown: false} } />
          <Stack.Screen name="Home" component={Home} options={ {headerShown: false} } />
          <Stack.Screen name="AddDieta" component={AddDieta} options={ {headerShown: false} } />
          <Stack.Screen name="AlterarDieta" component={AlterarDieta} options={ {headerShown: false} } />
          <Stack.Screen name="ListaRefeicao" component={ListaRefeicao} options={ {headerShown: false} } />
          <Stack.Screen name="AddRefeicao" component={AddRefeicao} options={ {headerShown: false} } />
          <Stack.Screen name="AlterarRefeicao" component={AlterarRefeicao} options={ {headerShown: false} } />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
