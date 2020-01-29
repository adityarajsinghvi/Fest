// import React from 'react';
// import {View,StyleSheet,TouchableHighlight,Text,Image,Animated, Button} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import {createAppContainer,createSwitchNavigator,createStackNavigator,createBottomTabNavigator,withNavigation} from 'react-navigation';



// class Drawer extends React.Component{
//     buttonSize = new Animated.Value(1);
//     mode = new Animated.Value(0);

//     handdlePress = () =>{
//         Animated.sequence([
//             Animated.timing(this.buttonSize,{
//                 toValue:0.95,
//                 duration:10
//             }),
//             Animated.timing(this.buttonSize,{
//                 toValue:1
//             }),
//             Animated.timing(this.mode, {
//                 toValue: this.mode._value === 0 ? 1 : 0,
//                 duration:150
//             })
//         ]).start();
//     };
//     render(){
//         const sizeStyle = {
//             transform: [{scale: this.buttonSize}]
//         }

//         const drawerX = this.mode.interpolate({
//             inputRange: [0,1],
//             outputRange: [-250,0]
//         })
//         const drawerY = this.mode.interpolate({
//             inputRange: [0,1],
//             outputRange: [-430,-20]
//         })
//         return (
//             <View style={{alignItems:'center'}}>
//                 <Animated.View style={{position:"absolute",left: drawerX, top: drawerY}}>
//                     <View style={styles.drawer}>
//                         <Image source={require('../assets/vib11.jpg')}
//                         style = {{height:100,width:100,borderRadius:250,alignItems:"center",marginTop:10}}
//                             />
//                             <View style={{height:4,width:"100%",backgroundColor:"#003D5F",marginTop:8}}>

//                             </View>
//                         <Ionicons name="ios-images" size={24} color="white" />
//                         <TouchableOpacity style={{marginTop:5}} onPress={() => {this.props.navigation.navigate('about')}}>
//                             <Text style={{fontSize:20,textAlign:'center',color:"#003D5F",fontWeight:"300"}}>ABOUT</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={{marginTop:10}} onPress={() => {this.props.navigation.navigate('stats')}}>
//                             <Text style={{fontSize:20,textAlign:'center',color:"#003D5F",fontWeight:"300"}}>STATS</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </Animated.View>
//                 <Animated.View style={[styles.button,sizeStyle]}>
//                     <TouchableHighlight onPress={this.handdlePress} underlayColor={0}>
//                         <Ionicons name="ios-keypad" size={24} color="#005f94" />
//                     </TouchableHighlight> 
//                 </Animated.View>
//             </View>
//         );
//     }
// }

// export default withNavigation(Drawer);

// const styles = StyleSheet.create({
//     button:{
//         justifyContent:'center',
//         alignItems:'center',
//         shadowColor:'#005f94',
//         shadowRadius:5,
//         shadowOffset:{height:10},
//         shadowOpacity:0.3,
//         elevation:3,
//         marginLeft:20
//     },
//     drawer:{
//         position:'absolute',
//         // alignItems:'center',
//         // justifyContent:'center',
//         width:250,
//         height:450,
//         backgroundColor:'#FFFFFF',
//         elevation:3,
//         borderRadius:20,
//         shadowRadius:5,
//         shadowColor:'#7F58FF',
//         shadowOffset:{height:10},
//         shadowOpacity:0.3,
//         alignItems:"center",
        
//     }
// });


import React from 'react';
import {View,StyleSheet,TouchableHighlight,Text,Image,Animated,Dimensions, Button,Linking} from 'react-native';
import { Divider } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {createAppContainer,createSwitchNavigator,createStackNavigator,createBottomTabNavigator,withNavigation} from 'react-navigation';
import { SocialIcon} from 'react-native-elements'
import { heightPercentageToDP } from 'react-native-responsive-screen';
const { width, height } = Dimensions.get('window');



class Drawer extends React.Component{
    buttonSize = new Animated.Value(1);
    mode = new Animated.Value(0);

    handdlePress = () =>{
        Animated.sequence([
            Animated.timing(this.buttonSize,{
                toValue:0.95,
                duration:10
            }),
            Animated.timing(this.buttonSize,{
                toValue:1
            }),
            Animated.timing(this.mode, {
                toValue: this.mode._value === 0 ? 1 : 0,
                duration:90
            })
        ]).start();
    };
    render(){
        const sizeStyle = {
            transform: [{scale: this.buttonSize}]
        }

        const drawerX = this.mode.interpolate({
            inputRange: [0,1],
            outputRange: [-0.6366*width,0]
        })
        const drawerY = this.mode.interpolate({
            inputRange: [0,1],
            outputRange: [-0.5350*height,-0.0248*height]
        })
        return (
            <View style={{alignItems:'center'}}>
                <Animated.View style={{position:"absolute",left: drawerX, top: drawerY,flex:1}}>
                    <View style={styles.drawer}>
                        <View style={{flex:0.1}}></View>
                        <View style={{flex:0.7}}>
                        <TouchableOpacity style={{paddingTop:25}} onPress={() => {this.props.navigation.navigate('about')}}>
                            <Text style={{fontSize:20,textAlign:'center'}}>ABOUT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{paddingTop:25}} onPress={() => {this.props.navigation.navigate('stats')}}>
                            <Text style={{fontSize:20,textAlign:'center'}}>STATISTICS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{paddingTop:25}} onPress={() => {this.props.navigation.navigate('Events')}}>
                            <Text style={{fontSize:20,textAlign:'center'}}>EVENTS</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{paddingTop:25}} onPress={() => {Linking.openURL('http://vitchennaievents.com/vibrance/login/')}}>
                            <Text style={{fontSize:20,textAlign:'center'}}>REGISTER</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{paddingTop:25}} onPress={() => {Linking.openURL('http://www.vitvibrance.com/sponsorship.pdf')}}>
                            <Text style={{fontSize:20,textAlign:'center'}}>SPONSORSHIP</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:"row",flex:0.1}}>
                            <View style={{flex:1,flexDirection:'row',marginBottom:heightPercentageToDP('5%')}}>
                            <View style={{flex:0.2}}>
                                <TouchableOpacity  onPress={()=>{Linking.openURL('https://www.instagram.com/vibrancevit/?igshid=nmkv03ipzuml')}}>
                                    <View>
                                    <SocialIcon  
                                        type='instagram'
                                        iconSize={25}
                                        style={{width: 35, height: 35, borderRadius: 35/2}}
                                        />
                                        </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{flex:0.2}}>
                                <TouchableOpacity  onPress={()=>{Linking.openURL('https://www.facebook.com/VibranceVIT/')}}>
                                    <SocialIcon  
                                        type='facebook'
                                        iconSize={25}
                                        style={{width: 35, height: 35, borderRadius: 35/2}}
                                        />
                                </TouchableOpacity>
                            </View>

                            <View style={{flex:0.2}}>
                                <TouchableOpacity  onPress={()=>{Linking.openURL('https://twitter.com/VibranceVIT?s=08')}}>
                                    <SocialIcon  
                                        type='twitter'
                                        iconSize={25}
                                        style={{width: 35, height: 35, borderRadius: 35/2}}
                                        />
                                </TouchableOpacity>
                            </View>
                            
                            <View style={{flex:0.2}}>
                                <TouchableOpacity  onPress={()=>{Linking.openURL('https://www.youtube.com/channel/UCHxh_2xYwcm-bnkwN4rc5QA')}}>
                                    <SocialIcon  
                                        type='youtube'
                                        iconSize={25}
                                        style={{width: 35, height: 35, borderRadius: 35/2}}
                                        />
                                </TouchableOpacity>
                            </View>

                            <View style={{flex:0.2}}>
                                <TouchableOpacity  onPress={()=>{Linking.openURL('https://www.snapchat.com/add/vibrancevit')}}>
                                <Image source={require('../assets/snapchat.png')} style={{width: 46, height: 46, borderRadius: 46/2}}/>

                                </TouchableOpacity>
                            </View>
                            </View>
                        </View>
                        
                      
                            
                            <View style={{flex:0.1,width: '100%',height: 50,justifyContent: 'center',alignItems: 'center',bottom: 0,marginTop:2}}>
                            <Text adjustsFontSizeToFit numberOfLines={1} style={{paddingTop:10, paddingBottom: 15, fontFamily: 'sans-serif-condensed'}}>ENGAGE. ENTHRAL. ENTERTAIN.</Text>
                        </View>
                    </View>
                </Animated.View>


                <Animated.View style={[styles.button,sizeStyle]}>
                    <TouchableHighlight onPress={this.handdlePress} underlayColor={0}>
                        <Ionicons name="ios-keypad" size={24} color="#005f94" />
                    </TouchableHighlight> 
                </Animated.View>
            </View>
        );
    }
}

export default withNavigation(Drawer);

const styles = StyleSheet.create({
    button:{
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#005f94',
        shadowRadius:5,
        shadowOffset:{height:10},
        shadowOpacity:0.3,
        elevation:3,
        marginLeft:20
    },
    drawer:{
        width:0.6366*width,
        height:0.5599*height,
        backgroundColor:'#FFFFFF',
        elevation:3,
        borderRadius:20,
        shadowRadius:5,
        flex:1,
        shadowColor:'#7F58FF',
        shadowOffset:{height:10},
        shadowOpacity:0.3,
    }
});