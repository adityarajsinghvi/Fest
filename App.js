import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Student from './screens/student';
import contactscreen from './screens/contact';
import GalleryScreen from './screens/GalleryScreen'
import Faculty from './screens/faculty';
import Events from './screens/event'
import All from './screens/gallery/All'
import First from './screens/gallery/First'
import Second from './screens/gallery/Second'
import Third from './screens/gallery/Third'
import ProShow from './screens/ProShows';
import VibranceButton from './components/VibranceButton';
import Drawer from './components/Drawer';
import Stats from './screens/stats';
import About from './screens/about'
import Merchandise from './screens/merchandise'
import events_navigator from './screens/events_navigator'

import {createAppContainer,createSwitchNavigator,createStackNavigator,createBottomTabNavigator} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import {createBottomTabNavigator} from 'react-navigation-tabs';

import Pro1 from './screens/Pro1'
import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AccordionView from './screens/EventsAccordion'
import { TouchableOpacity } from 'react-native-gesture-handler';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Events: events_navigator,
  Vibrance: {
    screen: () => NULL, // Empty screen
    navigationOptions: () => ({
        tabBarIcon: <VibranceButton/>// Plus button component
    })
  },
  ProShow: ProShow,
  contactscreen: contactscreen,
},
{
  initialRouteName : 'Home',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Home') {
        iconName = 'ios-home'; 
      } else if (routeName === 'Events') {
        iconName = 'ios-calendar';
      }else if (routeName === 'ProShow') {
        iconName = 'ios-people';
      }else if (routeName === 'contactscreen') {
        iconName = 'ios-call';
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
    },
    showLabel: false,
    activeTintColor: '#003D5F', // active icon color
    inactiveTintColor: '#001f30',  // inactive icon color
    style: {
        backgroundColor: '#FDFDFD', // TabBar background
        borderTopColor: 'white',
    }
  }
});

const AppStackNav = createStackNavigator({
    tabs:{
      screen:TabNavigator,
      navigationOptions: {
        headerStyle: {
          elevation: 0,       // remove shadow on Android
          shadowOpacity: 0, 
          borderBottomWidth: 0.3,
          borderBottomColor: 'gray',
          backgroundColor: '#F9F9F9',
        },
      }
    },
    gallery:{
      screen: GalleryScreen,
      navigationOptions: {
        headerStyle: {
          elevation: 0,       // remove shadow on Android
          shadowOpacity: 0, 
          borderBottomWidth: 0.3,
          borderBottomColor: 'gray',
          backgroundColor: '#F9F9F9',
        }
      }
    },
    stats:{
      screen:Stats,
      navigationOptions: {
        headerStyle: {
          title:"Stats",

          elevation: 0,       // remove shadow on Android
          shadowOpacity: 0, 
          borderBottomWidth: 0.3,
          borderBottomColor: 'gray',
          backgroundColor: '#F9F9F9',
        }
      }

    },
    about:{
      screen:About,
      navigationOptions: {
        headerStyle: {
          elevation: 0,       // remove shadow on Android
          shadowOpacity: 0, 
          borderBottomWidth: 0.3,
          borderBottomColor: 'gray',
          backgroundColor: '#F9F9F9',
        }
      }

    },
    Pro1:{
      screen : Pro1,
      navigationOptions: {
        headerStyle: {
          elevation: 0,       // remove shadow on Android
          shadowOpacity: 0, 
          borderBottomWidth: 0.3,
          borderBottomColor: 'gray',
          backgroundColor: '#F9F9F9',
        }
      }
    },
    Merch:{
      screen : Merchandise,
      navigationOptions:{
        headerStyle: {
          elevation: 0,       // remove shadow on Android
          shadowOpacity: 0, 
          borderBottomWidth: 0.3,
          borderBottomColor: 'gray',
          backgroundColor: '#F9F9F9',
        }
      
      }
    },
    Events:{
      screen: Events,
      navigationOptions: {
        headerStyle: {
          elevation: 0,       // remove shadow on Android
          shadowOpacity: 0, 
          borderBottomWidth: 0.3,
          borderBottomColor: 'gray',
          backgroundColor: '#F9F9F9',
        }
      }
    }

    
  },
  {
    headerLayoutPreset:'center'
  }
);

TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  const headerLeft = <Drawer />;
  const headerRight= () => NULL;
  const title = "Vibrance";
  const headerTitleStyle = {
    flex:1,
    fontWeight: 'bold',
    fontSize: 17,
    color:'#000000',
    textAlign: 'center',
  };
  
  return {
    title,headerLeft,headerRight,headerTitleStyle,
  }; 

};
const AppBottomContainer  = createSwitchNavigator(
{
  AppStackNav: AppStackNav,
  GalleryScreen: GalleryScreen,
},
);
const AppContainer = createAppContainer(AppBottomContainer);


export default class App extends React.Component {
  render() {
    return (
          <View style={{flex:1}}>
            <StatusBar barStyle="dark-content" />
            <AppContainer />
          </View>
    );
  }
}