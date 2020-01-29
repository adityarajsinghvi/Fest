// // import React from 'react';
// // import {ScrollView, View, Text, Image , StyleSheet,SafeAreaView, TouchableOpacity, Alert } from 'react-native';
// // import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";

// // export default class Proshow extends React.Component{
 
// //     render(){
// //       return(
// //         <SafeAreaView>
// //           {/* <View style={{backgroundColor: '#09091f',flexDirection: 'row',alignItems:'center'}}>
// //           <TouchableOpacity onPress={ () => this.props.navigation.openDrawer()}>
// //             <Image
// //               source={require('../assets/icon.png')}
// //               style={{ width: 25, height: 25, marginLeft: 5 }}
// //             />
// //           </TouchableOpacity>
// //           <Text style={{fontSize: 20, padding: 20, color: 'red'}}>Proshow</Text>
// //           </View> */}
// //           <ScrollView >
              
            


// //             <View style={{marginBottom: 50, padding: 10}}>
// //     <Collapse style={{borderBottomWidth:0,borderTopWidth:0}}>
// //       <CollapseHeader style={{flexDirection:'row',alignItems:'center',margin: 10, paddingHorizontal:20, paddingRight:40}}>
// //         <View style={{width:'30%',alignItems:'center', padding: 10}}>
          
// //           <Image
              
// //               // size = 'xlarge'
// //               source={require('../assets/at1.jpg')}
// //               style={{ height: 200, width: 150}}
// //               />
// //         </View>
// //         <View >
// //               <Text style={{textAlign:'center', fontSize: 30, fontWeight: 'bold', color: '#003D5F'}}>Amit Trivedi</Text>
// //               <View style={{flex:1, flexDirection:'row',flexWrap:'wrap', justifyContent:'center', paddingHorizontal:30}} >
// //               <Text style={{textAlign:'center', fontSize:16,}}>Lorem Ipsum is simply 
// //                                             dummy text of the printing </Text>
// //               </View>
// //               </View>
// //       </CollapseHeader>
// //       <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED', height: 200}}>
// //        <View >
// //          <Text style={{textAlign : 'center'}}>More Details about Event........</Text>
// //          <TouchableOpacity style={{position: "absolute", top:50,left:30, backgroundColor: '#003D5F', height:50, width: 150, borderRadius: 40, alignItems:'center',justifyContent:'center'}}
// //          onPress={ () => Alert.alert(
// //           'Day 1: Amit Trivedi',
// //           'More Event Description.............',
// //           [
// //             {
// //               text: 'PAY LATER',
// //               onPress: () =>console.log('Cancel Pressed'),
// //                                   style: 'cancel',
// //             },
// //             {
// //               text: 'PAY NOW', onPress: () => console.log('OK Pressed')
// //             },
            

// //           ],
// //           {cancelable:true}
// //         )}>
// //            <Text style={{fontSize:18, fontWeight: 'bold',color:'#FFF'}}>BUY TICKETS</Text>
// //          </TouchableOpacity>
         
// //        </View>
// //       </CollapseBody>
// //     </Collapse>
// //   </View>
// // {/**------------------------------------------------ */}
// //   <View style={{marginBottom: 100, padding: 20}}>
// //     <Collapse style={{borderBottomWidth:0,borderTopWidth:0}}>
// //       <CollapseHeader style={{flexDirection:'row',alignItems:'center',margin: 5, paddingHorizontal:10, paddingRight:100}}>
        
// //         <View style={{position:'relative',  right: 20}}>
// //               <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#003D5F'}}>Amit Trivedi</Text>
// //               <View style={{flex:1, flexDirection:'row',flexWrap: 'wrap', justifyContent:'center',position: 'relative', right: 20}} >
// //               <Text style={{textAlign:'center',fontSize:14,}}>Lorem Ipsum is simply 
// //                                             dummy text of the printing </Text>
// //               </View>
// //               </View>

// //               <View style={{width:'30%',alignItems:'center', padding: 10}}>
          
// //           <Image
              
// //               // size = 'xlarge'
// //               source={require('../assets/at1.jpg')}
// //               style={{ height: 200, width: 150}}
// //               />
// //         </View>
// //       </CollapseHeader>
// //       <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED', height: 200}}>
// //        <View >
// //          <Text style={{textAlign : 'center'}}>More Details about Event........</Text>
// //          <TouchableOpacity style={{position: "absolute", top:50,left:30, backgroundColor: '#003D5F', height:50, width: 150, borderRadius: 40, alignItems:'center',justifyContent:'center'}}
// //          onPress={ () => Alert.alert(
// //           'Day 1: Amit Trivedi',
// //           'More Event Description.............',
// //           [
// //             {
// //               text: 'PAY LATER',
// //               onPress: () =>console.log('Cancel Pressed'),
// //                                   style: 'cancel',
// //             },
// //             {
// //               text: 'PAY NOW', onPress: () => console.log('OK Pressed')
// //             }

// //           ],
// //           {cancelable:true}
// //         )}>
// //            <Text style={{fontSize:18, fontWeight: 'bold',color:'#FFF'}}>BUY TICKETS</Text>
// //          </TouchableOpacity>
         
// //        </View>
// //       </CollapseBody>
// //     </Collapse>
// //   </View>
// //   {/**--------------------------------------------------------- */}

// //   <View style={{marginBottom: 100, padding: 20}}>
// //     <Collapse style={{borderBottomWidth:0,borderTopWidth:0}}>
// //       <CollapseHeader style={{flexDirection:'row',alignItems:'center',margin: 10, paddingHorizontal:20, paddingRight:40}}>
// //       <View style={{width:'30%',alignItems:'center', padding: 10}}>
          
// //           <Image
              
// //               // size = 'xlarge'
// //               source={require('../assets/at1.jpg')}
// //               style={{ height: 200, width: 150}}
// //               />
// //         </View>
// //         <View >
// //               <Text style={{textAlign:'center', fontSize: 30, fontWeight: 'bold', color: '#003D5F'}}>Amit Trivedi</Text>
// //               <View style={{flex:1, flexDirection:'row',flexWrap:'wrap', justifyContent:'center', paddingHorizontal:30}} >
// //               <Text style={{textAlign:'center', fontSize:14,}}>Lorem Ipsum is simply 
// //                                             dummy text of the printing </Text>
// //               </View>
// //               </View>
// //       </CollapseHeader>
// //       <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED', height: 200}}>
// //        <View >
// //          <Text style={{textAlign : 'center'}}>More Details about Event........</Text>
// //          <TouchableOpacity style={{position: "absolute", top:50,left:30, backgroundColor: '#003D5F', height:50, width: 150, borderRadius: 40, alignItems:'center',justifyContent:'center'}}
// //          onPress={ () => Alert.alert(
// //           'Day 1: Amit Trivedi',
// //           'More Event Description.............',
// //           [
// //             {
// //               text: 'PAY LATER',
// //               onPress: () =>console.log('Cancel Pressed'),
// //                                   style: 'cancel',
// //             },
// //             {
// //               text: 'PAY NOW', onPress: () => console.log('OK Pressed')
// //             }

// //           ],
// //           {cancelable:true}
// //         )}>
// //            <Text style={{fontSize:18, fontWeight: 'bold',color:'#FFF'}}>BUY TICKETS</Text>
// //          </TouchableOpacity>
         
// //        </View>
// //       </CollapseBody>
// //     </Collapse>
// //   </View>
            
// //           </ScrollView>
          
        
// //         </SafeAreaView>
        
// //       )
// //     }
// //   }

// //   const styles = StyleSheet.create({
// //     probtn:{
// //       margin: 20,
// //       padding: 3
  
// //     },
    
// // })

// // // // UPDATED VERSION

// // import React, { Component } from 'react';
// // import Accordion from 'react-native-collapsible/Accordion';
// // import {
// //   Switch,
// //   ScrollView,
// //   Image,
// //   StyleSheet,
// //   SafeAreaView,
// //   Text,
// //   View,
// //   TouchableOpacity,
// // } from 'react-native';

// // const SECTIONS = [
// //   {
// //     title: <Image 
// //     source ={require('../assets/arrow.png')}
// //     style={{zIndex:10,height:25,width:25}}
// //     />,
// //     poster: <Image
// //     source={require('../assets/at1.jpg')}
// //    style={{zIndex: 10,height:200,width:200}}
// //    />,
// //     content: <Text style={{textAlign : 'center'}}>More Details about Event........</Text>,
// //   },
// //   {
// //     title:<Image 
// //     source ={require('../assets/arrow.png')}
// //     style={{zIndex:10,height:25,width:25}}
// //     />,
// //     poster: <Image
// //     source={require('../assets/at1.jpg')}
// //     style={{zIndex: 10,height:200,width:200}}
// //    />,
// //     content: <Text style={{textAlign : 'center'}}>More Details about Event........</Text>,
// //   },
// //   {
// //     title:<Image 
// //     source ={require('../assets/arrow.png')}
// //     style={{zIndex:10,height:50,width:50}}
// //     />,
// //     poster: <Image
// //     source={require('../assets/at1.jpg')}
// //     style={{zIndex: 10,height:200,width:200,opacity:.2}}
// //    />,
// //     content: <Text style={{textAlign : 'center'}}>More Details about Event........</Text>,
// //   },
  
// // ];

 
// // export default class Proshow extends Component {
// //   state = {
// //     activeSections: [],
// //   };
 
// //   _renderSectionTitle = section => {
// //     return (
// //       <View style={{margin:15,alignItems:'center', flex:1}}>
          
// //           {section.poster}
// //           <View style={{flex:1, flexDirection:'column', padding:10}}>
// //           <Text>Name: </Text>
// //           <Text>Price: </Text>
// //           </View>
// //         </View>
// //     );
// //   };
 
// //   _renderHeader = section => {
// //     return (
// //       <View style={{alignItems:'center'}}>
          
// //         <Text>{section.title}</Text>
// //         <View style={{height:10}}>

// //         </View>
// //         </View>
        
// //     );
// //   };
 
// //   _renderContent = section => {
// //     return (
// //       <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED', height: 200}}>
// //          {section.content}         
// //        </View>
// //     );
// //   };
 
// //   _updateSections = activeSections => {
// //     this.setState({ activeSections});
// //   };
 
// //   render() {
// //     return (
// //       <View style={{height: '99%'}}>
// //         {/* <View style={{backgroundColor: '#09091f',flexDirection: 'row',alignItems:'center'}}>
// //            <TouchableOpacity onPress={ () => this.props.navigation.openDrawer()}>
// //              <Image
// //               source={require('./images/drawer.png')}
// //               style={{ width: 25, height: 25, marginLeft: 5 }}
// //             />
// //           </TouchableOpacity>
// //           <Text style={{fontSize: 20, padding: 20, color: 'red'}}>Proshow</Text>
// //           </View> */}
// //           {/* </View> */}
// //           <ScrollView style={{}} >
// //         <Accordion
// //         sections={SECTIONS}
// //         activeSections={this.state.activeSections}
// //         renderSectionTitle={this._renderSectionTitle}
// //         renderHeader={this._renderHeader}
// //         renderContent={this._renderContent}
// //         onChange={this._updateSections}
// //       />
// //       </ScrollView>
// //       </View>
      
// //     );
// //   }

// // }


// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#F5FCFF',
// //   },
// //   title: {
// //     textAlign: 'center',
// //     fontSize: 22,
// //     fontWeight: '300',
// //     marginBottom: 20,
// //   },
// //   header: {
// //     backgroundColor: '#F5FCFF',
// //     // padding: 10,
// //   },
// //   headerText: {
// //     textAlign: 'center',
// //     fontSize: 16,
// //     // fontWeight: '500',
// //   },
// //   content: {
// //     padding: 20,
// //     backgroundColor: '#fff',
// //   },
// //   active: {
// //     backgroundColor: 'rgba(255,255,255,1)',
// //   },
// //   inactive: {
// //     backgroundColor: 'rgba(245,252,255,1)',
// //   },
// //   selectors: {
// //     marginBottom: 10,
// //     flexDirection: 'row',
// //     justifyContent: 'center',
// //   },
// //   selector: {
// //     backgroundColor: '#F5FCFF',
// //     padding: 10,
// //   },
// //   activeSelector: {
// //     fontWeight: 'bold',
// //   },
// //   selectTitle: {
// //     fontSize: 14,
// //     fontWeight: '500',
// //     padding: 10,
// //   },
// //   multipleToggle: {
// //     flexDirection: 'row',
// //     justifyContent: 'center',
// //     marginVertical: 30,
// //     alignItems: 'center',
// //   },
// //   multipleToggle__title: {
// //     fontSize: 16,
// //     marginRight: 8,
// //   },
// // });

// import React, { Component } from 'react';
// import Accordion from 'react-native-collapsible/Accordion';
// import {
//   Switch,
//   ScrollView,
//   Image,
//   StyleSheet,
//   SafeAreaView,
//   Text,
//   View,
//   TouchableOpacity,
// } from 'react-native';
// import { Divider, Card, Button } from 'react-native-elements';

 
// export default class Proshow extends Component {
//   render() {
//     return (
//         <ScrollView>
//             <View style={{paddingTop: 15}}>
//                 <Text style={{fontSize:20,fontWeight:'bold',fontFamily:'serif',textAlign:'center',alignContent:'center'}}>
//                     PRO SHOW
//                 </Text>
//                 <Divider style={{ backgroundColor: 'black', width: '100%', height: 3 }} />
//             </View>
//             <View>
//                 <Card title="Amit Trivedi"
//                 image={require('../assets/at1.jpg')}>
//                     <Button
//                     buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:'#001f30'}}
//                     title='FEB 6~6PM'
//                     onPress={() => {this.props.navigation.navigate('Pro1')}}/>
//                 </Card>
//                 <Card title="Amit Trivedi"
//                 image={require('../assets/at1.jpg')}>
//                     <Button
//                     buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:'#001f30'}}
//                     title='FEB 6~6PM'
//                     onPress={() => {this.props.navigation.navigate('Pro1')}}/>
//                 </Card>
//                 <Card title="Amit Trivedi"
//                 image={require('../assets/at1.jpg')}>
//                     <Button
//                     buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:'#001f30'}}
//                     title='FEB 6~6PM'
//                     onPress={() => {this.props.navigation.navigate('Pro1')}}/>
//                 </Card>
//             </View>
//         </ScrollView>
//     );
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
//   title: {
//     textAlign: 'center',
//     fontSize: 22,
//     fontWeight: '300',
//     marginBottom: 20,
//   },
//   header: {
//     backgroundColor: '#F5FCFF',
//     // padding: 10,
//   },
//   headerText: {
//     textAlign: 'center',
//     fontSize: 16,
//     // fontWeight: '500',
//   },
//   content: {
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   active: {
//     backgroundColor: 'rgba(255,255,255,1)',
//   },
//   inactive: {
//     backgroundColor: 'rgba(245,252,255,1)',
//   },
//   selectors: {
//     marginBottom: 10,
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   selector: {
//     backgroundColor: '#F5FCFF',
//     padding: 10,
//   },
//   activeSelector: {
//     fontWeight: 'bold',
//   },
//   selectTitle: {
//     fontSize: 14,
//     fontWeight: '500',
//     padding: 10,
//   },
//   multipleToggle: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginVertical: 30,
//     alignItems: 'center',
//   },
//   multipleToggle__title: {
//     fontSize: 16,
//     marginRight: 8,
//   },
// });



import React, { Component } from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import {
  Switch,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  View,Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Divider, Card, Button } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

export default class Proshow extends Component {
  render(){
    return(<View style={{flex:1}}>
      <Image source={require('../assets/pro.jpg')} 
      style={{resizeMode:'cover',height:.95*height,width:width}}
      />

    </View>);

  }
}