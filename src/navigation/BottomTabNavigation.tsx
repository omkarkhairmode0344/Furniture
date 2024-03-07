import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import {COLORS} from '../constants';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assests/images/home.png')}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                tintColor: focused ? COLORS.primary : COLORS.gray2,
              }}></Image>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assests/images/search.png')}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                tintColor: focused ? COLORS.primary : COLORS.gray2,
              }}></Image>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assests/images/profile.png')}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                tintColor: focused ? COLORS.primary : COLORS.gray2,
              }}></Image>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default BottomTabNavigation;
