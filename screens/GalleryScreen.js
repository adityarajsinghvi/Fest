// import React from 'react';
// import {Image , TouchableOpacity } from 'react-native';
// import { createMaterialTopTabNavigator} from 'react-navigation-tabs';
// import { createStackNavigator } from 'react-navigation-stack';
// import All from './gallery/All';
// import First from './gallery/First';
// import Second from './gallery/Second';
// import Third from './gallery/Third';

// const TabNavigator = createMaterialTopTabNavigator({
//     All: { screen: All },
//     First: { screen: First },
//     Second: { screen: Second },
//     Third: { screen: Third },
//   },
//   {
//     initialRouteName: 'All', 
//     tabBarOptions:{
//       activeTintColor: '#003D5F',
//       inactiveTintColor: 'black',
//       // scrollEnabled: true,
//       style:{
//         backgroundColor: '#FFF',
//         borderBottomColor: 'grey',
        
//       },
//       // indicatorStyle:{
//       //   height: 2,
//       //   backgroundColor: 'white'
//       // }
//     }
  
//   }
//   );
  
//   // const contactscreen  = createStackNavigator({
//   //   contact: {
//   //     screen: TabNavigator,
//   //     // navigationOptions: ({navigation}) => ({
//   //     //   title: 'Contact us',
//   //     //   // headerLeft: <App/>,
//   //     //   headerStyle: {
//   //     //     backgroundColor: '#FFF',
//   //     //     height: 73,
//   //     //   },
//   //     //   headerTitleStyle: {
//   //     //     color: 'red',
//   //     //     fontSize: 25,
//   //     //     textAlign: 'right'
//   //     //   },
//   //     //   headerLeft: <TouchableOpacity onPress={ () => navigation.openDrawer()}>
//   //     //   <Image
//   //     //     source={require('./images/user.png')}
//   //     //     style={{ width: 25, height: 25, marginLeft: 5}}
//   //     //   />
//   //     // </TouchableOpacity>
        
//   //     // })
//   //   },
  
//   // })

//   export default TabNavigator;

import React, { Component } from 'react';
import {Image , TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import All from './gallery/All';
import First from './gallery/First';
import Second from './gallery/Second';
import Third from './gallery/Third';

// const TabNavigator = createMaterialTopTabNavigator({
//     Gallery: { screen: All },
//     // First: { screen: First },
//     // Second: { screen: Second },
//     // Third: { screen: Third },
//   },
//   {
//     initialRouteName: 'Gallery', 
//     tabBarOptions:{
//       activeTintColor: '#003D5F',
//       inactiveTintColor: 'black',
//       // scrollEnabled: true,
//       style:{
//         backgroundColor: '#FFF',
//         borderBottomColor: 'grey',
        
//       },
//       // indicatorStyle:{
//       //   height: 2,
//       //   backgroundColor: 'white'
//       // }
//     }
  
//   }
//   );
  
//   // const contactscreen  = createStackNavigator({
//   //   contact: {
//   //     screen: TabNavigator,
//   //     // navigationOptions: ({navigation}) => ({
//   //     //   title: 'Contact us',
//   //     //   // headerLeft: <App/>,
//   //     //   headerStyle: {
//   //     //     backgroundColor: '#FFF',
//   //     //     height: 73,
//   //     //   },
//   //     //   headerTitleStyle: {
//   //     //     color: 'red',
//   //     //     fontSize: 25,
//   //     //     textAlign: 'right'
//   //     //   },
//   //     //   headerLeft: <TouchableOpacity onPress={ () => navigation.openDrawer()}>
//   //     //   <Image
//   //     //     source={require('./images/user.png')}
//   //     //     style={{ width: 25, height: 25, marginLeft: 5}}
//   //     //   />
//   //     // </TouchableOpacity>
        
//   //     // }) 
//   //   },
  
//   // })

//   export default TabNavigator;

  export default class GalleryScreen extends Component{
    static navigationOptions = {title: 'Gallery',
  headerTitleStyle: {
    flex:1,  
  }}
    render(){
    return(<All/>);
  }}