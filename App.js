import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';

import Login from './src/view/login';
import Register from './src/view/register';
import Menu from './src/components/menu';
import AddDieta from './src/view/addDieta';
import AddDietaDrawer from './src/view/addDieta';
import Home from './src/view/home';
import ListaRefeicao from './src/view/listaRefeicao';
import AlterarDieta from './src/view/alterarDieta';
import AddRefeicao from './src/view/addRefeicao';
import AlterarRefeicao from './src/view/alterarRefeicao';

const Stack = createStackNavigator();  

export default class App extends React.Component {

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

  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={ {headerShown: false} } />
            <Stack.Screen name="Register" component={Register} options={ {headerShown: false} } />
            <Stack.Screen name="Menu" component={Menu} options={ {headerShown: false} } />
            <Stack.Screen name="Home" component={Home} options={ {headerShown: false} } />
            <Stack.Screen name="AddDieta" component={AddDieta} options={ {headerShown: false} } />
            <Stack.Screen name="AddDietaDrawer" component={AddDietaDrawer} options={ {headerShown: false} } />
            <Stack.Screen name="AlterarDieta" component={AlterarDieta} options={ {headerShown: false} } />
            <Stack.Screen name="ListaRefeicao" component={ListaRefeicao} options={ {headerShown: false} } />
            <Stack.Screen name="AddRefeicao" component={AddRefeicao} options={ {headerShown: false} } />
            <Stack.Screen name="AlterarRefeicao" component={AlterarRefeicao} options={ {headerShown: false} } />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
  
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

