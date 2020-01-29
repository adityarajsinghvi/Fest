// // // // import React,{Component} from 'react';
// // // // import { View,Text, Image, ScrollView,TouchableOpacity,Alert,ToastAndroid} from 'react-native';
// // // // import { Card } from 'react-native-elements';


// // // // export default class Events extends Component {

  

// // // //   render() {    
// // // //     const users = [
// // // //       {
// // // //         id: 1,
// // // //         name: "American Tourister Bag",
// // // //         image: "https://5.imimg.com/data5/CF/AU/MY-3585505/american-tourister-backpack-tango-01-2017-500x500.jpg",
// // // //         map: "https://www.google.com/maps/vt/data=xZKP8hXQLwI1aJBtFVhlMKNWo2l5VE18doP7Yny7rW4AroWMaFa7gsj0gpBugrArMtfbOi4BJpqTgJ0SRUEUPyEZ3tcU17QX6_FZ8x3igOJgi86L71ML4n8S7_QZs68bJUReGLKhpyMFlrkpEKwBGHvqUM7Hn16kDnQ7eTLYLe6QPUPD0E3njJpuHlgi8KvIBQ",
// // // //         about:"A 32L bag For School and college going school. Bag big enough to accomodate a Laptop and some books and notebooks"
// // // //       },
// // // //       {
// // // //         id: 2,
// // // //         name: "Milton ThermoSteel Bottle",
// // // //         image: "https://rukminim1.flixcart.com/image/416/416/bottle/y/t/h/thermosteel-500-milton-500-thermosteel-original-imaeh89fhgzsrnsh.jpeg?q=70",
// // // //         map: "https://www.google.com/maps/vt/data=rk5EelB31foPhdyf0R05Gcvoe2-mv0urndkd1jSV2X0CJwmjTs8Z9y-X3XPVGahvK68mTopasj3wYtvVSkvwRkc1-qNyq_G_XOGXcySN1V3j67GCw_oI6wZMyAoqB3GRFTqZoEVr_EgVjCtNWMd2Zsk-tsuyD9kqmw",
// // // //         about:"Good Thermosteel bottle."
// // // //       },
// // // //       {
// // // //         id: 3,
// // // //         name: "SleepWell Matteress",
// // // //         image: "https://rukminim1.flixcart.com/image/416/416/jyafukw0/bed-mattress/5/z/y/single-4-75-42-discover-by-sleepwell-firm-paf-pu-foam-starlite-original-imafgjkknrthzujr.jpeg?q=70",
// // // //         map: "https://www.google.com/maps/vt/data=8CRHEpdJSjPPruCB3v5MJf38dBAIJ3hO0-Ks6bLLUrW99J4SUDBNAYvX0nzbgmTwjk3OyjbzggpxW909Ba4wtYDQoHQrl9JFy-BwL9aYV4ghMYEt2hSTDbXMzqf7RJLXFLXAqAgZwf33dqEhAzNm0qhL6hzyjNG_6g",
// // // //         about:"Comfortable Matteress for single bed."
// // // //       },
// // // //       {
// // // //         id: 4,
// // // //         name: "ClassMate 200 Pages Notebook",
// // // //         image: "https://rukminim1.flixcart.com/image/416/416/jw5a2kw0/diary-notebook/f/y/z/luxor-9000026991-original-imafgw9hrpzbnxzh.jpeg?q=70",
// // // //         map: "https://www.google.com/maps/vt/data=5mwWtMZ32_iwdG8vPOfgiQvgxLvM2Vq7bV_t3DcoRDgXUzHgEtw2KaYqinLsnIK9BBb3ww9CbQfHyVB2OwKVp5CExMkLMTjx3tISs9Zaq_olTdOAQ8TGXJ5oSIQBTVKicjUvH4qZVByJKQxmyqNALdpMvVP05PqachsgYftWDbl_bWjXoZYhSrp6Agb1PjBRwNQ",
// // // //         about:"Good Quality notebook for taking notes."
// // // //       },
      
// // // //     ];

// // // //     const userList = users.map(user=>{
// // // //       return(
        
// // // //         <TouchableOpacity 
// // // //         onPress={
// // // //           ()=>Alert.alert(user.name,
// // // //                user.about,
// // // //           [
// // // //             {
// // // //               text: 'Cancel',
              
// // // //               style: 'cancel',
// // // //             },
// // // //             {text: 'Register Event', onPress: () => ToastAndroid.show('Event Registered!!', ToastAndroid.SHORT)},
            
// // // //           ],
// // // //           {cancelable: false},
// // // //         )}
// // // //          key={user.id}>
// // // //            <View style={{shadowOffset:{width:10,height:10},
// // // //     shadowColor:"black",
// // // //     shadowOpacity : 1}}>
// // // //              <Card style={{width:'80%',height:300}} title={user.name} >
// // // //             <View style={{flexDirection:"column"}}>
// // // //             <Image source={{uri:user.image}} style={{height:200,width:300}} resizeMode='contain'/>
// // // //             <View style={{flex:1,justifyContent:'center',flexDirection:'row'}}>
// // // //               <View style={{flex:1}}>
// // // //                   <Text>
// // // //                     <Text style={{fontSize:20, fontWeight:'bold'}}>20-11-19</Text>
// // // //                   </Text>
// // // //               </View>
// // // //               <View style={{flex:1}}>
// // // //                       <Text style={{fontSize:20, fontWeight:'bold'}}>
// // // //                         Rs. 500
// // // //                       </Text>
// // // //               </View>
// // // //               <View>
// // // //                         <Text style={{fontSize:20, fontWeight:'bold'}}>
// // // //                           2-4
// // // //                         </Text>
// // // //               </View>
// // // //             </View>
// // // //             </View>
// // // //           </Card>
// // // //            </View>
          
// // // //           </TouchableOpacity>
         
        
// // // //       )
// // // //     });

// // // //     return (
// // // //       <View>
// // // //         {/* <View style={{marginTop:20},{marginLeft:20},{backgroundColor: '#F5F5F5'}}>
// // // //           <Text style={{marginTop:25,marginLeft:20,fontSize: 20,fontWeight: 'bold'}}>Shopping Section</Text>
// // // //       </View> */}
// // // //       <ScrollView style={{backgroundColor: '#F5F5F5'},{marginBottom:60}}>
// // // //         {userList}
// // // //       </ScrollView>
// // // //       </View>
// // // //     );
// // // //   }
// // // // }




// // // import React,{Component} from 'react';
// // // import { View,Text,Image,ScrollView,TextInput} from 'react-native';
// // // import Flipcard from '../components/FlipCard';

// // // export default class EventsScreen extends Component {
// // //   state={
// // //     data2:[],
// // //     loding:true,
// // //   }

// // //  componentDidMount(){
// // //     fetch('http://www.vitchennaievents.com/technovit/api/get_all_events.php')
// // //       .then(data=>data.json())
// // //       .then(data2=>{
// // //         this.setState({data2,loding:false})
// // //       })
// // //  }

// // //   render() {
// // //     if(this.state.loding)
// // //       return( <Text>
// // //         "data is loding";
// // //       </Text>);

// // //       // const schoolid=()=>{
// // //       //   return(
// // //       //     <TextInput style={{height: 40}} placeholder="enter data"/>
// // //       //   )
       
// // //       // }

// // //     const userList = this.state.data2.map(user=>{
// // //       return(    
// // //           <View>
// // //               <Flipcard user={user}/>
// // //         </View>
// // //          )
// // //     });

// // //     return (
// // //         <ScrollView style={{backgroundColor: '#003D5F',marginBottom:10}}>
// // //             <View style={{margin:20,backgroundColor:'#F5F5F5'}}>
// // //                 <Text style={{marginTop:25,marginLeft:20,fontSize: 20,fontWeight: 'bold'}}>Upcoming Events</Text>
// // //             </View>
// // //               {/* {schoolid()} */}
// // //              {userList}
// // //         </ScrollView>
// // //       );
    
// // //   }
// // // }





// // // import React,{Component} from 'react';
// // // import { View,Text, Image, ScrollView,Animated,
// // //   Button,TouchableOpacity,Alert,ToastAndroid,StyleSheet} from 'react-native';
// // // import { Card } from 'react-native-elements';


// // // export default class Events extends Component {

// // //   componentWillMount() {
// // //     this.animatedValue = new Animated.Value(0);
// // //     this.value = 0;
// // //     this.animatedValue.addListener(({ value }) => {
// // //       this.value = value;
// // //     })
// // //     this.frontInterpolate = this.animatedValue.interpolate({
// // //       inputRange: [0, 180],
// // //       outputRange: ['0deg', '180deg'],
// // //     })
// // //     this.backInterpolate = this.animatedValue.interpolate({
// // //       inputRange: [0, 180],
// // //       outputRange: ['180deg', '360deg']
// // //     })
// // //     this.frontOpacity = this.animatedValue.interpolate({
// // //       inputRange: [89, 90],
// // //       outputRange: [1, 0]
// // //     })
// // //     this.backOpacity = this.animatedValue.interpolate({
// // //       inputRange: [89, 90],
// // //       outputRange: [0, 1]
// // //     })
// // //   }

// // //   flipCard() {
// // //     if (this.value >= 90) {
// // //       Animated.spring(this.animatedValue,{
// // //         toValue: 0,
// // //         tension:1000
// // //       }).start();
// // //     } else {
// // //       Animated.spring(this.animatedValue,{
// // //         toValue: 180,
// // //         tension:1000
        
// // //       }).start();
// // //     }

// // //   }

 
    
    

// // //   render() {

// // //     const frontAnimatedStyle = {
// // //       transform: [
// // //         { rotateY: this.frontInterpolate }
// // //       ]
// // //     }
// // //     const backAnimatedStyle = {
// // //       transform: [
// // //         { rotateX: this.backInterpolate }
// // //       ]}
// // //     const users = [
// // //       {
// // //         id: 1,
// // //         name: "American Tourister Bag",
// // //         image: "https://5.imimg.com/data5/CF/AU/MY-3585505/american-tourister-backpack-tango-01-2017-500x500.jpg",
// // //         map: "https://www.google.com/maps/vt/data=xZKP8hXQLwI1aJBtFVhlMKNWo2l5VE18doP7Yny7rW4AroWMaFa7gsj0gpBugrArMtfbOi4BJpqTgJ0SRUEUPyEZ3tcU17QX6_FZ8x3igOJgi86L71ML4n8S7_QZs68bJUReGLKhpyMFlrkpEKwBGHvqUM7Hn16kDnQ7eTLYLe6QPUPD0E3njJpuHlgi8KvIBQ",
// // //         about:"A 32L bag For School and college going school. Bag big enough to accomodate a Laptop and some books and notebooks"
// // //       },
// // //       {
// // //         id: 2,
// // //         name: "Milton ThermoSteel Bottle",
// // //         image: "https://rukminim1.flixcart.com/image/416/416/bottle/y/t/h/thermosteel-500-milton-500-thermosteel-original-imaeh89fhgzsrnsh.jpeg?q=70",
// // //         map: "https://www.google.com/maps/vt/data=rk5EelB31foPhdyf0R05Gcvoe2-mv0urndkd1jSV2X0CJwmjTs8Z9y-X3XPVGahvK68mTopasj3wYtvVSkvwRkc1-qNyq_G_XOGXcySN1V3j67GCw_oI6wZMyAoqB3GRFTqZoEVr_EgVjCtNWMd2Zsk-tsuyD9kqmw",
// // //         about:"Good Thermosteel bottle."
// // //       },
// // //       {
// // //         id: 3,
// // //         name: "SleepWell Matteress",
// // //         image: "https://rukminim1.flixcart.com/image/416/416/jyafukw0/bed-mattress/5/z/y/single-4-75-42-discover-by-sleepwell-firm-paf-pu-foam-starlite-original-imafgjkknrthzujr.jpeg?q=70",
// // //         map: "https://www.google.com/maps/vt/data=8CRHEpdJSjPPruCB3v5MJf38dBAIJ3hO0-Ks6bLLUrW99J4SUDBNAYvX0nzbgmTwjk3OyjbzggpxW909Ba4wtYDQoHQrl9JFy-BwL9aYV4ghMYEt2hSTDbXMzqf7RJLXFLXAqAgZwf33dqEhAzNm0qhL6hzyjNG_6g",
// // //         about:"Comfortable Matteress for single bed."
// // //       },
// // //       {
// // //         id: 4,
// // //         name: "ClassMate 200 Pages Notebook",
// // //         image: "https://rukminim1.flixcart.com/image/416/416/jw5a2kw0/diary-notebook/f/y/z/luxor-9000026991-original-imafgw9hrpzbnxzh.jpeg?q=70",
// // //         map: "https://www.google.com/maps/vt/data=5mwWtMZ32_iwdG8vPOfgiQvgxLvM2Vq7bV_t3DcoRDgXUzHgEtw2KaYqinLsnIK9BBb3ww9CbQfHyVB2OwKVp5CExMkLMTjx3tISs9Zaq_olTdOAQ8TGXJ5oSIQBTVKicjUvH4qZVByJKQxmyqNALdpMvVP05PqachsgYftWDbl_bWjXoZYhSrp6Agb1PjBRwNQ",
// // //         about:"Good Quality notebook for taking notes."
// // //       },
      
// // //     ];

// // //     const userList = users.map(user=>{
// // //       return(
// // //         <View>

// // // {/*         
        
// // //         <TouchableOpacity 
// // //         onPress={
// // //           ()=>Alert.alert(user.name,
// // //                user.about,
// // //           [
// // //             {
// // //               text: 'Cancel',
              
// // //               style: 'cancel',
// // //             },
// // //             {text: 'Register Event', onPress: () => ToastAndroid.show('Event Registered!!', ToastAndroid.SHORT)},
            
// // //           ],
// // //           {cancelable: false},
// // //         )}
// // //          key={user.id}>
// // //            <View style={{shadowOffset:{width:10,height:10},
// // //     shadowColor:"black",
// // //     shadowOpacity : 1}}>
// // //              <Card style={{width:'80%',height:300}} title={user.name} >
            
// // //             <View style={{flexDirection:"column"}}>
// // //             <Image source={{uri:user.image}} style={{height:200,width:300}} resizeMode='contain'/>
// // //             <View style={{flex:1,justifyContent:'center',flexDirection:'row'}}>
// // //               <View style={{flex:1}}>
// // //                   <Text>
// // //                     <Text style={{fontSize:20, fontWeight:'bold'}}>20-11-19</Text>
// // //                   </Text>
// // //               </View>
// // //               <View style={{flex:1}}>
// // //                       <Text style={{fontSize:20, fontWeight:'bold'}}>
// // //                         Rs. 500
// // //                       </Text>
// // //               </View>
// // //               <View>
// // //                         <Text style={{fontSize:20, fontWeight:'bold'}}>
// // //                           2-4
// // //                         </Text>
// // //               </View>
              
// // //             </View>
// // //             </View>
// // //           </Card>
// // //            </View>
          
// // //           </TouchableOpacity> */}

// // //           <TouchableOpacity onPress={() => this.flipCard()}>
// // //             <Animated.View style={[styles.flipCard, frontAnimatedStyle, {opacity: this.frontOpacity}]}>
// // //               <View>
// // //               <Image source={{uri:user.image}} style={{height:200,width:300}} resizeMode='contain'/>
// // //               </View>
// // //               <View style={{flexDirection:'row',paddingTop:10}}>
// // //                 <View style={{flex:1,alignSelf:'center',justifyContent:'center'}}>
// // //                   <Text style={{marginLeft:10}}>
// // //                     20-09-2019
// // //                   </Text>
// // //                 </View>
// // //                 <View style={{flex:1}}>
// // //                     <Text style={{justifyContent:'center',alignSelf:'center'}}>
// // //                       Rs. 500
// // //                     </Text>
// // //                 </View>
// // //                 <View style={{flex:1}}>
// // //                     <Text style={{alignSelf:"flex-end",marginRight:10}}>
// // //                       2-4
// // //                     </Text>
// // //                 </View>

// // //               </View>
// // //             </Animated.View>
// // //             <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle, {opacity: this.backOpacity}]}>
// // //               <Text style={{
// // //                 padding:10,
// // //                 fontSize:20,
// // //                 fontWeight:'400'
// // //               }}>
// // //                 Ea velit proident aliquip exercitation nostrud non in et reprehenderit exercitation deserunt sint pariatur Lorem. Est consequat exercitation ullamco et aliqua occaecat occaecat in culpa. Eu consequat minim officia velit sint in commodo duis anim adipisicing. Magna labore proident laborum reprehenderit nostrud labore.
// // //               </Text>
// // //               <Button 
// // //               title='Register'
// // //               style={{alignItems:'center',alignSelf:"center",justifyContent:'center'}}
// // //               onPress={()=>
// // //               {
// // //                 ToastAndroid.show('Event Registered!!', ToastAndroid.SHORT)
// // //               }}
// // //               />
// // //             </Animated.View>
// // //           </TouchableOpacity>
// // //           </View>
        
// // //       )
// // //     });

// // //     return (
    
       
// // //       <ScrollView style={{backgroundColor: '#F5F5F5'},{marginBottom:60}}>
// // //         {userList}
// // //       </ScrollView>
      
// // //     );
// // //   }
// // // }




// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //     backgroundColor:"#003D5F"
// // //   },
// // //   flipCard: {
// // //     width: 400,
// // //     height: 250,
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     backgroundColor: '#a1ddff',
// // //     backfaceVisibility: 'hidden',
// // //     borderRadius:15,
// // //     marginLeft:5,
// // //     marginVertical:20
// // //   },
// // //   flipCardBack: {
// // //     backgroundColor: "#ffc89c",
// // //     position: "absolute",
// // //     top: 0,
// // //   },
// // //   flipText: {
// // //     width: 90,
// // //     fontSize: 20,
// // //     color: '#003D5F',
// // //     fontWeight: 'bold',
// // //   }
// // // });



// // import React,{Component} from 'react';
// // import { View,Text,Image,ScrollView,TextInput} from 'react-native';
// // import Flipcard from '../components/FlipCard';

// // export default class EventsScreen extends Component {
// //   state={
// //     data2:[],
// //     loding:true,
// //   }

// //  componentDidMount(){
// //     fetch('http://www.vitchennaievents.com/technovit/api/get_all_events.php')
// //       .then(data=>data.json())
// //       .then(data2=>{
// //         console.log(data2)
// //         this.setState({data2,loding:false})
// //       })
// //  }

// //   render() {
// //     if(this.state.loding)
// //       return( <Text>
// //         "data is loding";
// //       </Text>);

// //       // const schoolid=()=>{
// //       //   return(
// //       //     <TextInput style={{height: 40}} placeholder="enter data"/>
// //       //   )
       
// //       // }

// //     const userList = this.state.data2.map(user=>{
// //       return(    
// //           <View>
// //               <Flipcard user={user}/>
// //         </View>
// //          )
// //     });

// //     return (
// //         <ScrollView style={{backgroundColor: '#E4E4E4'}}>
// //             <View style={{justifyContent:"center"}}>
// //                 <Text style={{marginTop:25,marginBottom:15,marginLeft:20,fontSize: 25,fontWeight: 'bold',color:'black',justifyContent:"center",alignItems:"center"}}>Upcoming Events</Text>
// //             </View>
// //               {/* {schoolid()} */}
// //              {userList}
// //         </ScrollView>
// //       );
    
// //   }
// // }


// import React,{Component} from 'react';
// import { View,Text,Image,ScrollView,TextInput,FlatList,ActivityIndicator} from 'react-native';
// import Flipcard from '../components/FlipCard';

// export default class EventsScreen extends Component {
//   state={
//     data2:[],
//     loding:true,
//   }

//  componentDidMount(){
//     fetch('http://www.vitchennaievents.com/technovit/api/get_all_events.php')
//       .then(data=>data.json())
//       .then(data2=>{
//         console.log(data2)
//         this.setState({data2,loding:false})
//       })

//  }

//   render() {
//     if(this.state.loding)
//     if(this.state.loding)
//     return( <View style={{alignItems:'center',justifyContent:'center',marginTop:300}}>
//       <ActivityIndicator size='large' color="#0000ff" />
//       <Text style={{color:"blue"}}>Loading</Text>
  
//     </View>
//   );

//     return (
  
//         <FlatList
//         horizontal = {true}
//         data={this.state.data2}
//         renderItem={({ item }) => {
//           return (
//                 <Flipcard user={item} />                                                                                                                                                                                           
//             )
        
//   }}
//       />
 
//       );

    
//   }
// }


import React,{Component} from 'react';
import { View,Text,Image,ScrollView,TextInput,FlatList,ActivityIndicator} from 'react-native';
import Flipcard from '../components/FlipCard';


export default class EventsScreen extends Component {
  state={
    data2:[],
    loding:true,
  }

 componentDidMount(){
    fetch('http://www.vitchennaievents.com/vibrance/api/get_all_events.php')
      .then(data=>data.json())
      .then(data2=>{
        console.log(data2)
        this.setState({data2,loding:false})
      })

 }

  render() {
    if(this.state.loding)
    return( <View style={{alignItems:'center',justifyContent:'center',marginTop:300}}>
      <ActivityIndicator size='large' color="#0000ff" />
      <Text style={{color:"blue"}}>Loading</Text>
  
    </View>
  );

    return (
  
        <FlatList
        data={this.state.data2}
        renderItem={({ item }) => {
          return (
        <Flipcard user={item} />                                                                                                                                                                                           
            )
        
  }}
      />
      );

    
  }
}