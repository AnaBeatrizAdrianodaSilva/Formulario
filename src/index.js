import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

import HomeScreen from "./screens/HomeScreen";
import CadastroScreen from "./screens/CadastroScreen";
import LoginScreen from "./screens/LoginScreen";

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#7113B7"
        barStyle={{ backgroundColor: '#46936F' }}
      >

        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='home' color={color} size={26} />
            )
          }}
        />

        <Tab.Screen
          name="CadastroScreen"
          component={CadastroScreen} 
          options={{
            tabBarLabel: 'Cadastro',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='account-plus' color={color} size={26} /> 
            )
          }}
        />

        <Tab.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          options={{
            tabBarLabel: 'Cadastro',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='account' color={color} size={26} /> 
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}