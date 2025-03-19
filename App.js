import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'; 
import Principal from './screens/Principal'; 
import Game from './screens/Game'; 
import Produit from './screens/Produit'; 
import Info from './screens/Info'; 
import ProduitOne from './screens/ProduitOne'; 
import GameDetails from './screens/GameDetails'; 



const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}} />
      <Stack.Screen name="Principal" component={Principal} options={{ headerShown: false}}/>
      <Stack.Screen name="Game" component={Game} options={{ headerShown: false}}/>
      <Stack.Screen name="Produit" component={Produit} options={{ headerShown: false}}/>
      <Stack.Screen name="Info" component={Info} options={{ headerShown: false}}/>
      <Stack.Screen name="ProduitOne" component={ProduitOne} options={{ headerShown: false}}/>
      <Stack.Screen name="GameDetails" component={GameDetails} options={{ headerShown: false}}/>
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
