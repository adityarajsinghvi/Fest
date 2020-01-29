
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput,KeyboardAvoidingView,ScrollView,Keyboard,TouchableWithoutFeedback,TouchableOpacity,BackHandler,Dimensions } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import {SliderBox} from 'react-native-image-slider-box'
import CountDown from 'react-native-countdown-component';
//import CountDown to show the timer
import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment';

const { width, height } = Dimensions.get('window');

export default class HomeScreen extends Component{

state={
    images:[
    
        'http://www.vitvibrance.com/images/4.jpg',
        'http://www.vitvibrance.com/images/5.jpg',
        'http://www.vitvibrance.com/images/6.jpg',
        'http://www.vitvibrance.com/images/13.jpg',
        'http://www.vitvibrance.com/images/14.jpg',
        'http://www.vitvibrance.com/images/15.jpg', 
        // 'https://source.unsplash.com/1024x768/?nature',
        // 'https://source.unsplash.com/1024x768/?water',
        // 'https://source.unsplash.com/1024x768/?girl',
        // 'https://source.unsplash.com/1024x768/?tree',
    ],
    totalDuration : 2531520,
}

  
    render(){
        
  var count = new Date("Feb 6,2020 00:00:00").getTime();
  
    var now = new Date().getTime();
    var d = count - now;

    var days = Math.floor(d/(1000*60*60*24));
    var hours = Math.floor((d%(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((d%(1000*60*60))/(1000*60));
    var seconds = Math.floor((d%(1000*60))/1000);
    var totalTime = (days*24*60*60) + (hours*60*60) + (minutes*60) + seconds
    

        return(
            <View style={{flex:1}}>
                <View style={{flex:0.4}}>
     <SliderBox
    images={this.state.images}
    sliderBoxHeight={height*0.3733}
    dotColor="#FFF"
    inactiveDotColor="#90A4AE"
    circleLoop
    />
                </View>
  
<View style={{flex:0.6,backgroundColor:"#003D5F",justifyContent:'center'}}>
    <LinearGradient
          colors={['#005f94', '#003D5F', '#001f30']}
          style={{flex:1,justifyContent:'center'}}
    >
        <View style={{flex: 0.3}}>

        </View>
        
                <View style={{alignSelf:'center',flex:0.4,paddingBottom:0}}>
        
            <Text style={{color:'#FFF',fontSize:width*0.07639,fontWeight:'bold',marginBottom:width*0.0509,fontFamily:'Roboto'}}>
                    Time to Vibrance 2020:
            </Text>
                <CountDown
                until={totalTime}
                digitTxtStyle={{width:'100%',textAlign:'center',color:'black'}}
                timetoShow={('D','H', 'M', 'S')}
                size={30}
                timeLabelStyle={color='#fff'}
                />   
        </View>
        <View style={{flex:0.3}}></View>
        
    
    </LinearGradient>

</View>

            </View>
        );
        
    }
}