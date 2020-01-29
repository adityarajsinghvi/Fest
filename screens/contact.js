import React from 'react';
import {Image , TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Faculty from './faculty.js';
import Student from './student.js';

const TabNavigator = createMaterialTopTabNavigator({
    Conveners: { screen: Faculty },
   // Student: { screen: Student },
  },
  {
    initialRouteName: 'Conveners', 
    tabBarOptions:{
      activeTintColor: '#003D5F',
      inactiveTintColor: 'black',
      // scrollEnabled: true,
      style:{
        backgroundColor: '#FFF',
        borderBottomColor: 'grey',
        
      },
      // indicatorStyle:{
      //   height: 2,
      //   backgroundColor: 'white'
      // }
    }
  
  }
  );
  
  // const contactscreen  = createStackNavigator({
  //   contact: {
  //     screen: TabNavigator,
  //     // navigationOptions: ({navigation}) => ({
  //     //   title: 'Contact us',
  //     //   // headerLeft: <App/>,
  //     //   headerStyle: {
  //     //     backgroundColor: '#FFF',
  //     //     height: 73,
  //     //   },
  //     //   headerTitleStyle: {
  //     //     color: 'red',
  //     //     fontSize: 25,
  //     //     textAlign: 'right'
  //     //   },
  //     //   headerLeft: <TouchableOpacity onPress={ () => navigation.openDrawer()}>
  //     //   <Image
  //     //     source={require('./images/user.png')}
  //     //     style={{ width: 25, height: 25, marginLeft: 5}}
  //     //   />
  //     // </TouchableOpacity>
        
  //     // })
  //   },
  
  // })

  export default TabNavigator;