import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Profile } from '../pages/profile/profile';
import Browse from '../pages/browse/browse';


const Tab = createMaterialTopTabNavigator();

function Notifications() {
    return(
        <View>
            <Text>Notifications</Text>
        </View>
    )
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: { fontSize: 15 },
        tabBarStyle: { backgroundColor: '#f76e42',paddingVertical: 5 },
        tabBarIndicatorStyle: {backgroundColor: "white"}
      }}
    >
      <Tab.Screen
        name="Browse"
        children={()=><Browse />}
        options={{ tabBarLabel: 'Browse' }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{ tabBarLabel: 'Chat' }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarLabel: 'My Profile' }}
      />
    </Tab.Navigator>
  );
}

export default function TopTabs() {
    return(
        
          <MyTabs />
    )
}