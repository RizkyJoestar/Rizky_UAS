// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './splash_screen';
import Login from './Login';
import MainMenu from './main_menu';
import NewAccount from './NewAccount';
import NewList from './NewList';
import ListAccount from './ListAccount';
import ListTask from './ListTask';
import SelectAcount from './SelectAccount';
//import View from './Page/Tampil';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="NewAccount" component={NewAccount} />
        <Stack.Screen name="NewList" component={NewList} />
         <Stack.Screen name="ListAccount" component={ListAccount} />
        <Stack.Screen name="ListTask" component={ListTask} />
         <Stack.Screen name="SelectAcount" component={SelectAcount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
