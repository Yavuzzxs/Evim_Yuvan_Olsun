import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { initializeApp } from "firebase/app"
import { firebaseConfig } from "./config.js";


import Main from "./source/Main"
import Let_House from './source/Let_House';
import Pay_House from './source/Pay_House';
import Afad_House from './source/Afad_House';
import Rent_House from './source/Rent_House';


initializeApp(firebaseConfig)


const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Let_House" component={Let_House} />
        <Stack.Screen name="Pay_House" component={Pay_House} />
        <Stack.Screen name="Afad_House" component={Afad_House} />
        <Stack.Screen name="Rent_House" component={Rent_House} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;