// // import React, { Component } from 'react';
// // import {
// //   StyleSheet,
// //   Text,
// //   View,
// //   TouchableOpacity,
// //   Animated,
// //   Image,
// //   ScrollView
// // } from 'react-native';

// // export default class  Flipcard extends Component {
// //   componentWillMount() {
// //     this.animatedValue = new Animated.Value(0);
// //     this.value = 0;
// //     this.animatedValue.addListener(({ value }) => {
// //       this.value = value;
// //     })
// //     this.frontInterpolate = this.animatedValue.interpolate({
// //       inputRange: [0, 180],
// //       outputRange: ['0deg', '180deg'],
// //     })
// //     this.backInterpolate = this.animatedValue.interpolate({
// //       inputRange: [0, 180],
// //       outputRange: ['180deg', '0deg']
// //     })
// //     this.frontOpacity = this.animatedValue.interpolate({
// //       inputRange: [0, 90],
// //       outputRange: [1, 0]
// //     })
// //     this.backOpacity = this.animatedValue.interpolate({
// //       inputRange: [0, 90],
// //       outputRange: [0, 1]
// //     })
// //   }

// //   flipCard() {
// //     if (this.value >= 90) {
// //       Animated.timing(this.animatedValue,{
// //         toValue: 0,
// //         duration:350
// //       }).start();
// //     } else {
// //       Animated.timing(this.animatedValue,{
// //         toValue: 180,
// //         duration:350
        
// //       }).start();
// //     }

// //   }

// //   render() {
// //     const frontAnimatedStyle = {
// //       transform: [
// //         { rotateY: this.frontInterpolate }
// //       ]
// //     }
// //     const backAnimatedStyle = {
// //       transform: [
// //         { rotateY: this.backInterpolate }
// //       ]
// //     }

// //     return (
// //       <View>
// //         <TouchableOpacity onPress={() => this.flipCard()}>
// //         <View>
          
// //           {/* *card details* */}
// //           <Animated.View style={[styles.flipCard,styles.card, frontAnimatedStyle, {opacity: this.frontOpacity}]}>
// //             <View style={{width:'90%',height:400}} title={this.props.user.eventname}>
// //                     <View style={{flexDirection:"column"}}>
// //                         <View style={{flex:1}}>
// //                           <Text style={{textAlign:"center"}}>{this.props.user.eventname}</Text>
// //                         </View>
// //                             <View>
// //                                <Image source={{uri:"https://5.imimg.com/data5/CF/AU/MY-3585505/american-tourister-backpack-tango-01-2017-500x500.jpg"}} style={{height:120,width:120,alignSelf:'center',marginTop:20}} resizeMode="contain"/>  
// //                             </View>
                         
// //                         <View style={{flexDirection:"row"}}>
// //                             <View style={{flex:1,justifyContent:'center',marginLeft:20}}>
// //                                 <Text>Event Date: {this.props.user.eventdate}</Text>
// //                             </View>
// //                             <View style={{flex:1,justifyContent:'center',marginLeft:20}}>
// //                                 <Text>Max TeamSize: {this.props.user.maxteamsize}</Text>
// //                             </View>
// //                             <View style={{flex:1,justifyContent:'center',marginLeft:20}}>
// //                                 <Text>Fee: {this.props.user.fee}</Text>
// //                             </View>
// //                             <View style={{flex:1,justifyContent:'center',marginLeft:20}}>
// //                                 <Text>Time: {this.props.user.eventtime}</Text>
// //                             </View>
// //                         </View>
// //                     </View>
// //             </View>
// //           </Animated.View>


// //           {/* <Animated.View style={[style.flipCard,styles.card,frontAnimatedStyle,{opacity:this.frontOpacity}]}>

// //             <View style={{fle}}>

// //             </View>


// //           </Animated.View> */}
          

// //           <Animated.View style={[{width:'97%',height:'90%'},styles.card,styles.flipCard,styles.flipCardBack, backAnimatedStyle, {opacity: this.backOpacity}]}>
// //             <View style={{width:'100%',height:'100%'}}>
// //                 <View style={{flexDirection:"column"}}>
// //                 <Text style={{textAlign:"center"}}>Description</Text>
// //                   <ScrollView style={{flex:1,marginLeft:20}}>
// //                     <Text>{this.props.user.eventdesc}</Text>
// //                   </ScrollView>
// //                   <View style={{flex:1,marginTop:15,marginLeft:0}}>
// //                     <Text>Venue :{this.props.user.venue}</Text>
// //                   </View>
                  
                
// //                 </View>
                               
// //                </View>
// //           </Animated.View>
// //           {/* *end of card details** */}
// //         </View>
// //       </TouchableOpacity>
// //       </View>
      
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   flipCard: {
// //     backfaceVisibility: 'hidden',
// //     borderRadius:15
// //   },
// //   flipCardBack: {
// //     position: "absolute",
// //   },
// //   card:{
// //       padding:10,
// //       margin:10,
// //       borderRadius:15,
// //       backgroundColor:'white',
      



// //   }
// // });


// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Animated,
//   Image,
//   ScrollView
// } from 'react-native';

// export default class  Flipcard extends Component {
//   componentWillMount() {
//     this.animatedValue = new Animated.Value(0);
//     this.value = 0;
//     this.animatedValue.addListener(({ value }) => {
//       this.value = value;
//     })
//     this.frontInterpolate = this.animatedValue.interpolate({
//       inputRange: [0, 180],
//       outputRange: ['0deg', '180deg'],
//     })
//     this.backInterpolate = this.animatedValue.interpolate({
//       inputRange: [0, 180],
//       outputRange: ['180deg', '0deg']
//     })
//     this.frontOpacity = this.animatedValue.interpolate({
//       inputRange: [0, 90],
//       outputRange: [1, 0]
//     })
//     this.backOpacity = this.animatedValue.interpolate({
//       inputRange: [0, 90],
//       outputRange: [0, 1]
//     })
//   }

//   flipCard() {
//     if (this.value >= 90) {
//       Animated.timing(this.animatedValue,{
//         toValue: 0,
//         duration:350
//       }).start();
//     } else {
//       Animated.timing(this.animatedValue,{
//         toValue: 180,
//         duration:350
        
//       }).start();
//     }

//   }

//   render() {
//     const frontAnimatedStyle = {
//       transform: [
//         { rotateY: this.frontInterpolate }
//       ]
//     }
//     const backAnimatedStyle = {
//       transform: [
//         { rotateY: this.backInterpolate }
//       ]
//     }

//     return (
//       <View>
//         <TouchableOpacity onPress={() => this.flipCard()}>
//         <View>
          
//           {/* **card details** */}
//           <Animated.View style={[styles.flipCard,styles.card, frontAnimatedStyle, {opacity: this.frontOpacity},{textAlign:"center",alignItems:"center",shadowColor:"black",shadowOffset:{height:10},elevation:5}]}>
//             <View style={{width:'90%',height:400}} title={this.props.user.eventname}>
//                     <View style={{flexDirection:"column"}}>
//                         <View style={{flex:1,justifyContent:"center",alignItems:"center",marginTop:10}}>
//                           <Text style={{marginTop:5,fontSize:20}}>{this.props.user.eventname}</Text>
//                         </View>
//                             <View >
//                                <Image source={{uri:"https://i.imgur.com/"+this.props.user.posterurl}} style={{height:330,width:'85%',alignSelf:"center"}} resizeMode="contain"/>  
//                             </View>
                         
//                         <View style={{flexDirection:"row"}}>
//                             <View style={{flex:1,justifyContent:'center',marginLeft:20}}>
//                                 <Text>Event Date: {this.props.user.eventdate}</Text>
//                             </View>
//                             <View style={{flex:1,justifyContent:'center',marginLeft:20}}>
//                                 <Text>Max TeamSize: {this.props.user.maxteamsize}</Text>
//                             </View>
//                             <View style={{flex:1,justifyContent:'center',marginLeft:20}}>
//                                 <Text>Fee: {this.props.user.fee}</Text>
//                             </View>
//                             <View style={{flex:1,justifyContent:'center',marginLeft:20}}>
//                                 <Text>Time: {this.props.user.eventtime}</Text>
//                             </View>
//                         </View>
//                     </View>
//             </View>
//           </Animated.View>


//           {/* <Animated.View style={[style.flipCard,styles.card,frontAnimatedStyle,{opacity:this.frontOpacity}]}>

//             <View style={{fle}}>

//             </View>


//           </Animated.View> */}
          

//           <Animated.View style={[{width:'90%',height:400},styles.card,styles.flipCard,styles.flipCardBack, backAnimatedStyle, {opacity: this.backOpacity}]}>
//             <View style={{width:'100%',height:400}}>
//                 <View style={{flexDirection:"column"}}>
//                 <Text style={{textAlign:"center"}}>Description</Text>
//                   <ScrollView style={{marginLeft:20}}>
//                     <Text>{this.props.user.eventdesc}</Text>
//                   </ScrollView>
//                   <View style={{flex:1,marginTop:15,marginLeft:0}}>
//                     <Text>Venue :{this.props.user.venue}</Text>
//                   </View>
                  
                
//                 </View>
                               
//                </View>
//           </Animated.View>
//           {/* **end of card details*** */}
//         </View>
//       </TouchableOpacity>
//       </View>
      
//     );
//   }
// }

// const styles = StyleSheet.create({
//   flipCard: {
//     backfaceVisibility: 'hidden',
//     borderRadius:15
//   },
//   flipCardBack: {
//     position: "absolute",
//   },
//   card:{
//       padding:10,
//       margin:10,
//       borderRadius:15,
//       backgroundColor:'white',
      



//   }
// });

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,Button,
  TouchableOpacity,
  Animated,
  Image,Linking,
  ScrollView,Dimensions
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp,
widthPercentageToDP as wp, } from 'react-native-responsive-screen';
const { width, height } = Dimensions.get('window');



export default class  Flipcard extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    })
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '0deg']
    })
    this.frontOpacity = this.animatedValue.interpolate({
      inputRange: [0, 90],
      outputRange: [1, 0]
    })
    this.backOpacity = this.animatedValue.interpolate({
      inputRange: [0, 90],
      outputRange: [0, 1]
    })
  }

  flipCard() {
    if (this.value >= 90) {
      Animated.timing(this.animatedValue,{
        toValue: 0,
        duration:350
      }).start();
    } else {
      Animated.timing(this.animatedValue,{
        toValue: 180,
        duration:350
        
      }).start();
    }

  }

  render() {
    const frontAnimatedStyle = {
      transform: [
        { rotateY: this.frontInterpolate }
      ]
    }
    const backAnimatedStyle = {
      transform: [
        { rotateY: this.backInterpolate }
      ]
    }

    return (
      <View>
        <TouchableOpacity onPress={() => this.flipCard()}>
        <View>
          
          {/* *card details* */}
          <Animated.View style={[styles.flipCard,styles.card, frontAnimatedStyle, {opacity: this.frontOpacity},{textAlign:"center",alignItems:"center",shadowColor:"black",shadowOffset:{height:"5%"},elevation:5}]}>
            <View style={{width:wp("90%"),height:hp("60%")}} title={this.props.user.eventname}>
                    <View style={{flexDirection:"column",flex:1}}>
                        <View style={{flex:0.1,justifyContent:"center",alignItems:"center",marginTop:"5%"}}>
                          <Text style={{marginTop:5,fontSize:hp('3%')}}>{this.props.user.eventname}</Text>
                        </View>
                            <View style={{flex:0.7,alignItems:'center',justifyContent:'center',alignContent:'center'}}>
                               <Image source={{uri:"https://i.imgur.com/"+this.props.user.posterurl}} style={{height:hp('48%'),width:wp('65%'),alignSelf:"center"}} resizeMode="contain"/>  
                            </View>
                         
                        <View style={{flex:0.1}}>
                            <View style={{flex:1,flexDirection:"row",borderRadius: hp('2%'), marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:'#E9ECF2'}}>
                            <View style={{flex:0.3,justifyContent:'center',paddingLeft:hp('1.5%')}}>
                                <Text adjustsFontSizeToFit numberOfLines={1} style={{fontWeight:"bold",alignItems:'center'}}>{this.props.user.eventdate}</Text>
                            </View>
                            <View style={{flex:0.3,justifyContent:'center',paddingLeft:hp('1.5%')}}>
                                <Text adjustsFontSizeToFit numberOfLines={1} style={{fontWeight:"bold"}}>Fee: {this.props.user.fee}</Text>
                            </View>
                            <View style={{flex:0.2,justifyContent:'center',paddingLeft:hp('1.5%')}}>
                                <Text adjustsFontSizeToFit numberOfLines={1} style={{fontWeight:"bold"}}><Ionicons name="ios-people" size={15} color="black" />{this.props.user.maxteamsize}</Text>
                            </View>
                            <View style={{flex:0.2,justifyContent:'center',paddingLeft:hp('1.5%')}}>
                              <Text adjustsFontSizeToFit numberOfLines={1} style={{fontWeight:"bold",fontSize:hp('2%')}}> -> </Text>
                            </View>
                            </View>
                        </View>
                    </View>
            </View>
          </Animated.View>


          {/* <Animated.View style={[style.flipCard,styles.card,frontAnimatedStyle,{opacity:this.frontOpacity}]}>

            <View style={{fle}}>

            </View>


          </Animated.View> */}
          

          <Animated.View style={[{width:wp("95%"),height:hp("60%"),flex:1},styles.card,styles.flipCard,styles.flipCardBack, backAnimatedStyle, {opacity: this.backOpacity}]}>
            {/* <View style={{flex:1,width:wp("90%"),height:hp("50%")}}> */}
                <View style={{flexDirection:"column",flex:1}}>
                  <View style={{flex:0.2,justifyContent:'center'}}>
                <Text style={{textAlign:"center"}}>Description</Text>
                </View>
                <View style={{flex:0.6}}>
                  <ScrollView style={{marginLeft:hp('2%'),marginRight:hp('2%')}}>
                    <Text>{this.props.user.eventdesc}</Text>
                  </ScrollView>
                  </View>
                  {/* <View style={{flex:1,marginTop:15,marginLeft:0}}>
                    <Text>Venue :{this.props.user.venue}</Text>
                  </View> */}
                  <View style={{flex:0.2,justifyContent:'center'}}>
                            <View style={{flex:0.6}}>
                              <View style={{flex:1,flexDirection:"row",borderRadius: 10,backgroundColor:'#E9ECF2',padding:hp('1%')}}>
                            <View style={{flex:0.5,justifyContent:'center',marginLeft:"2%"}}>
                                <Text adjustsFontSizeToFit numberOfLines={1} style={{fontWeight:"bold"}}>Venue: {this.props.user.venue}</Text>
                            </View>
                            <View style={{flex:0.5,justifyContent:'center',marginLeft:"10%",left:5}}>
                                <Text adjustsFontSizeToFit numberOfLines={1} style={{fontWeight:"bold"}}>Time: {this.props.user.eventtime}</Text>
                            </View>
                            </View>
                            </View>
                        </View>
                        <View style={{flex:0.2,justifyContent:'center'}}>
                            <Button title='Proceed' onPress={ ()=> Linking.openURL('https://www.vitchennaievents.com/vibrance/') }/>
                        </View>
                </View>
                               
               {/* </View> */}
          </Animated.View>
          {/* *end of card details** */}
        </View>
      </TouchableOpacity>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  flipCard: {
    backfaceVisibility: 'hidden',
    borderRadius:15
  },
  flipCardBack: {
    position: "absolute",
  },
  card:{
      padding:10,
      margin:10,
      borderRadius:15,
      backgroundColor:'white',
  }
});