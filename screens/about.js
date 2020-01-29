
import React,{ Component}  from 'react'
import {View,Text,ScrollView,StyleSheet} from 'react-native'
import { Icon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';


export default class About extends React.Component{
    static navigationOptions = {
        title: 'About',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#003D5F',
        headerTitleStyle: {
          fontWeight: 'bold',
          flex:1,
        },
      };
    render(){
        return(
        

        
                                <LinearGradient
          colors={['#0086cf', '#003D5F', '#002e47']}
          style={{justifyContent:'center',alignItems:"center",flex:1}}
             >
                 <ScrollView>

                 <View style={{alignItems:"center"}}>
                    <Text style={{fontSize:35, fontWeight:"bold",color:"#FFF",marginBottom:15,alignItems:"center",justifyContent:"center"}}> VIBRANCE </Text> 
                 </View>
                 
                 <View style={{margin:10,backgroundColor:'#7496a8',borderRadius:30,marginTop:40,flex:1,paddingHorizontal:10,elevation:20,shadowColor:'#afd1e3',shadowOffset:{height:10,width:10}}}>

                 <Text style={{color:'#E9ECF2',fontSize:20,padding:5}}>
                 Enchanted with the success of Vibrance, National level Cultural and Sports festival of VIT Chennai, it gives us immense pride and pleasure in presenting the 5th Edition Vibrance '20. Be with us on the 6th, 7th and 8th of February 2020 for the extravaganza! The carnival will assure variety from cricket to chess, dance battles to musical fiestas with the primary objective being - "To explore new talents and impart the qualities to the students."      

                 </Text>
                 <Text style={{color:'#E9ECF2',fontSize:20,padding:5}}>
                 The event enthralls the attendees by presenting EDM, Proshow and Choreo Night on three nights. We promise the audience and atmosphere of immense joy, leaving them with the thirst for more and more. In addition to the home crowd, an enormous number of participants from over 100 engineering colleges and universities in and around Chennai and other parts of the country took part in Vibrance '19. 

                     </Text>
                </View>
                 </ScrollView>
                   </LinearGradient>

          
           
        );
    }

}



