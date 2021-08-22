import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/login/index';
import Tabs from './pages/tabs/index';
import Detalhe from './pages/comprar/detalhe';
import DetalheKm from './pages/checkkm/detalhe';
import register from './pages/register/index';
import lance from './pages/lance/index';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={ Login } />
        <Stack.Screen name="Tabs" component={ Tabs } />
        <Stack.Screen name="Detalhe" component={ Detalhe } />
        <Stack.Screen name="DetalheKm" component={ DetalheKm } />
        <Stack.Screen name="register" component={ register } />
        <Stack.Screen name="lance" component={ lance } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;