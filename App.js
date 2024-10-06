import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import Details from './src/screens/Details';
import DrawerTab from './src/assets/components/DrawerTab'


const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          drawerType: 'front',
          overlayColor: 'rgba(0,0,0,0.5)',
        }}
        drawerContent={(props) => <DrawerTab {...props} />}
      >
        <Drawer.Screen 
          name="Login" 
          component={Login} 
          options={{
            drawerItemStyle: { display: 'none' },
          }} 
        />
        <Drawer.Screen 
          name="Dashboard" 
          component={Dashboard} 
          options={{
            drawerItemStyle: { display: 'none' },
          }} 
        />
        <Drawer.Screen 
          name="Details" 
          component={Details} 
          options={{
            drawerItemStyle: { display: 'none' },
          }} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
