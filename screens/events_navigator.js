import {createAppContainer,createSwitchNavigator,createStackNavigator,createBottomTabNavigator} from 'react-navigation';
import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Events from './event'
import EventsFilter from './clubwise_events'


export default events_navigator = createMaterialTopTabNavigator({
    All :{screen : Events},
    Clubs:{screen:EventsFilter},
},
     {
    initialRouteName: 'All', 
    tabBarOptions:{
      activeTintColor: '#003D5F',
      inactiveTintColor: 'black',
      // scrollEnabled: true,
      style:{
        backgroundColor: '#FFF',
        borderBottomColor: 'grey',
        
      },
    
    
    }})