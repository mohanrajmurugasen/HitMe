import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import TopTabs from './toptabs/topbar';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register } from './pages/browse/register';
import Login from './pages/browse/login';
import { Chating } from './pages/browse/chating';
// import { io } from "socket.io-client";
import Protected from './toptabs/protected';
import axios from "axios";
import { Provider } from 'react-redux';
import store from './store/action';

// const socket = io(`http://192.168.43.101:7000`); 

const Stack = createNativeStackNavigator();

export default function Aapp(props) {
  let hastoken = JSON.parse(localStorage.getItem('auth'));
  return (
    <Provider store={store}>
    <NavigationContainer independent={true}>
      <StatusBar barStyle="light-content" backgroundColor= "white" />
      <Stack.Navigator 
      initialRouteName={(hastoken !== null) ? ('TopTabs'): ('Login')}
      screenOptions={{ 
      headerStyle: { backgroundColor: '#f76e42',color:"red" }, 
      headerRight: () => 
      <View style={{flexDirection:"row"}}>
        <Icon name="star-outline" size={24} color={"white"} style={{paddingRight:15}} />
        <Icon name="ellipsis-vertical-outline" size={24} color={"white"} />
      </View>,
      }}>
        <Stack.Screen name="Register" component={Register} options={{ title: 'Register',headerTintColor: "white" }} />
        {/* <Stack.Screen name="Login" options={{ title: 'Login',headerShown: false }}>
          {props => <Login />}
        </Stack.Screen> */}
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login',headerShown: false }} />
        <Stack.Screen name="Chating" options={{ title: 'Mohanraj',headerTintColor: "white" }}>
          {props => <Chating />}
        </Stack.Screen>
        {/* <Stack.Screen name="Chating" component={Chating} options={{ title: 'Mohanraj',headerTintColor: "white" }} /> */}
        <Stack.Screen name="Protected" component={Protected} options={{ title: 'Hit Me Up',headerTintColor: "white" }} />
        {/* <Stack.Screen name="Protected" options={{ title: 'Hit Me Up',headerTintColor: "white" }}>
          {props => <Protected />}
        </Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

