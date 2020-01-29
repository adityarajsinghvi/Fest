import React,{ Component}  from 'react'
import {View,Text,ScrollView,StyleSheet} from 'react-native'
import { Icon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';

export default class Stats extends Component{
    static navigationOptions = {
        title: 'Statistics',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#003D5F',
        headerTitleStyle: {
          fontWeight: 'bold',
          flex:1
        },
      };
    state={
        prizeMoney:0,
        participants:0,
        Foot:0,
        loadingFoot:true,
        lodingPrize:true,
        lodingParticipants:true
    }

    render(){
        /* ** counter loop *** */
        const counterPrize=()=>{
            if(this.state.lodingPrize){
                this.state.prizeMoney=this.state.prizeMoney+4000
                this.setState({prizeMoney: this.state.prizeMoney}) 
                
                if(this.state.prizeMoney>=500000){
                this.setState({lodingPrize: false})
            }
            }
          
        }

        const counterFoot=()=>{
            if(this.state.loadingFoot){
                this.state.Foot=this.state.Foot+1500
                this.setState({Foot: this.state.Foot})
                
                if(this.state.Foot >=200000){
                this.setState({loadingFoot: false})
            }
            }
       
        }

        const counterParticipants=()=>{
            if(this.state.lodingParticipants){
                this.state.participants=this.state.participants+50
                this.setState({participants: this.state.participants})
                
                if(this.state.participants>=5000){
                this.setState({lodingParticipants: false})
            }
            }
            
        }

        /*  *** */
            // if(this.state.prizeMoney<=500000 && this.state.lodingPrize && this.state.lodingParticipants){
                return(
                    
                         <View style={{flex:1}}>
                             <LinearGradient
          colors={['#0086cf', '#003D5F', '#002e47']}
          style={{flex:1,justifyContent:'center'}}
             >
                          
                            
                            
                        
                        <View>
                            <Text style={styles.aboutHeader}>Vibrance'19 Statistics</Text> 
                            <Text style={styles.text}>Total Prize Money</Text>
                            <Text style={styles.data}> {this.state.prizeMoney}+</Text>
                            <Text style={{opacity:0}}>{setTimeout(counterPrize ,1)}</Text>
                            <Text style={styles.text}>Total Paticipants</Text>
                            <Text style={styles.data}>{this.state.participants}+</Text>
                            <Text style={{opacity:0}}>{setTimeout(counterParticipants,2)}</Text>
                            <Text style={styles.text}>FootFall</Text>
                            <Text style={styles.data}>{this.state.Foot}+</Text>
                            <Text style={{opacity:0}}>{setTimeout(counterFoot ,1)}</Text>
                            </View>
                   </LinearGradient> 
                       </View>
                  
                )
            // }
            // else{
            //     return (
            //         <ScrollView>
            //             <View>
            //                 <View>
            //                     <Text style={styles.aboutHeader}>Facts About Vibrance'19</Text>    
            //                 </View>
            //                 <View >
            //                     <Text>Total Prize Money:500000</Text>
            //                 </View>
            //                 <View>
            //                     <Text>Total Paticipants:5000</Text>
            //                 </View>
            //                 {/* <View>
            //                     <Text>Events:55+</Text>
            //                 </View> */}
            //                 <View>
            //                     <Text>FootFall:20000+</Text>
            //                 </View>
                            
            //             </View>
            //         </ScrollView>
            //     )
            // }
       
    }
}

const styles=StyleSheet.create({
    aboutHeader:{
        marginBottom:'7%',
        marginTop:0,
        // backgroundColor: '#fff',
        color:"#FFF",
        textAlign:"center",
        fontSize:35,
        fontWeight:"bold",

    },
    prizeHeader:{
        margin:'5%',
        backgroundColor: '#003D5F'
    },
    data:{
        textAlign:"center",
        fontSize: 35,
        color :"#FFF",
    },
    text:{
        textAlign:"center",
        fontSize: 30,
        color : "#FFF"
    },
    prizeText:{
        fontSize:25,
        textAlign:'center',
        fontFamily:'sans-serif-condensed',
        color:"white",
    }
})