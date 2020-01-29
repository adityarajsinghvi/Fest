
// import React, { Component } from 'react';
// import Accordion from 'react-native-collapsible/Accordion';
// import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';
// import EventsScreen from './event';
// import Flipcard from './FlipCard'


// const SECTIONS = [
//     {
//       ClubName : 'Android Club',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/1.png',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Android.jpg'
//     },
//     {
//       ClubName : 'Dramatics Club',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/2.png',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/drama.jpg'
//     },
//     {
//       ClubName : 'Ishare Club',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/3.png',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/ISHRAE.jpg'
//     },
//     {
//       ClubName : 'Fine Arts Club',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/4.png',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/FAC.jpg'
//     },
//     {
//       ClubName : 'Dance Club',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/5.png',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Dance-Club-Poster.jpg'
//     },
//     {
//       ClubName : 'Film Society',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/6.png',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/film%20society.jpg'
//     },
//     {
//       ClubName : 'Society of Automotive Engineers',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/7.PNG',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/sae%20draft1.jpg'
//     },
//     {
//       ClubName : 'Game Development Club',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/8.jpg',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Game%20Development_final.jpg'
//     },
//     {
//       ClubName : 'Rotaract Club',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/9.jpg',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/ROTARACT.jpg'
//     },
//     {
//       ClubName : 'The English Literary Association',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/10.png',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/LitSoc.jpg'
//     },
//     {
//       ClubName : 'Quiz Club',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/11.jpg',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/quiz%20club.jpg'
//     },
//     {
//       ClubName : 'Music Club',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/12.png',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Music-Club-Poster.jpg'
//     },
//     {
//       ClubName : 'NEN',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/13.png',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/NEN.jpg'
//     },
//     {
//       ClubName : 'Arignar Anna Tamizh Mandram',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/14.jpg',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Tamizh%20manadalm-100.jpg'
//     },
//     {
//       ClubName : 'Photography Club',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/15.png',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Photography%20Club.jpg'
//     },
//     {
//       ClubName : 'The Debate Society',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/16.png',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/DEBSOC.jpg'
//     },
//     {
//       ClubName : 'Trekking Club',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/17.png',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/trekking.jpg'
//     },
//     {
//       ClubName : 'VITeach',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/18.png',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/VITeach.jpg'
//     },
//     {
//       ClubName : 'PALS',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/19.png',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/PALS_Overall%20(1).jpg'
//     },
//     {
//       ClubName : 'Health Club',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/20.jpg',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Health%20Club.jpg'
//     },
//     {
//       ClubName : 'Aerospace Club',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/21.png',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Aerospace.jpg'
//     },
//     {
//       ClubName : 'IEEE Computer Society',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/22.jpg',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/IEEE%20Computer%20Society.jpg'
//     },
//     {
//       ClubName : 'Designers Club',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/23.jpg',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Designer_Overall.jpg'
//     },
//     {
//       ClubName : 'Energy & Environmental Protection Club',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/24.jpg',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Environmemental.jpg'
//     },
//     {
//       ClubName : 'Robotics Club',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/25.jpg',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/robotics.jpg'
//     },
//     {
//       ClubName : 'Energy & Fuel Users Association',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/26.jpg',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/enfuse.jpg'
//     },
//     {
//       ClubName : 'Enactus',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/27.png',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/ENATUS_Overall.jpg'
//     },
//     {
//       ClubName : 'Socrates Club',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/28.png',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/socrates.jpg'
//     },
//     {
//       ClubName : 'SPIE Student Chapter',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/29.png',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/SPIE_Overall%20(1).jpg'
//     },
//     {
//       ClubName : 'IEEE Signal Processing Society',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/30.png',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/IEEE%20Signal%20Processing%20Society%20(1).jpg'
//     },
//     {
//       ClubName : 'National Service Scheme',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/31.png',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/NSS%20Poster%20(1).jpg'
//     },
//     {
//       ClubName : 'code {y} gen',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/32.png',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Code-Y-Gen%20(1).jpg'
//     },
//     {
//       ClubName : 'Indian Concrete Institute',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/33.png',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Concrete%20Club%20Poster%20(1).jpg'
//     },
//     {
//       ClubName : 'Sports',
//       ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/34.png',
//       ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/ovsp.png'
//     },
  
//   ];
  
//   export default class AccordionView extends Component {
//     state = {
//       activeSections: [],
//       data2:[],
//     loding:true,
//     };
//     componentDidMount(){
//       fetch('http://www.vitchennaievents.com/vibrance/api/get_all_events.php')
//         .then(data=>data.json())
//         .then(data2=>{
//           console.log(data2)
//           this.setState({data2,loding:false})
//         })
  
//    }
  
//     _renderSectionTitle = section => {
//       return (
//         <View>
//           <Text>{section.ClubName}</Text>
//         </View>
//       );
//     };
  
//     _renderHeader = section => {
//       return (
//         <View style={{alignItems:"center",flexDirection:'row',borderColor:'black',width:"98%",marginVertical:10,borderRadius:20,padding:10,flexWrap:'wrap',elevation:10,backgroundColor:"#FFF"}}>
//           <Image
//           style={{height:100,width:100}}
//            source={{uri:section.ClubLogo}}
//            resizeMode='contain'
//            />
//            <View style={{flexWrap:'wrap',justifyContent:'flex-start',width:'67%',marginLeft:10}}>
//       <Text style={{fontSize:28,flexWrap:'wrap',paddingLeft:0,textAlign:'left'}}>{section.ClubName}</Text>
//            </View>
          
//         </View>
//       );
//     };
  
//     _renderContent = section => {
//       return (
//         <View>
//           <Image 
//           style={{justifyContent:'center',alignSelf:'center',height:300,width:300}}
//           source={{uri:section.ClubPoster}}
//           />
//          <EventsScreen data={this.state.data2} />
//         </View>
//       );
//     };
  
//     ///////  SEPARATION 
//     // _renderSectionTitle = section => {
//     //   return (
//     //     <View>
//     //       <Text>{section.content}</Text>
//     //     </View>
//     //   );
//     // };
  
//     // _renderHeader = section => {
//     //   return (
//     //     <View>
//     //       <Text>{section.title}</Text>
//     //     </View>
//     //   );
//     // };
  
//     // _renderContent = section => {
//     //   return (
//     //     <View>
//     //       <Text>{section.content}</Text>
//     //     </View>
//     //   );
//     // };
  
//     _updateSections = activeSections => {
//       this.setState({ activeSections });
//     };
  
//     render() {
//       return (
//         <ScrollView style={{flex:1,marginTop:30,marginLeft:5}}>
//            <View style={{justifyContent:"center",flex:1,alignItems:"center"}}>
//           <Accordion
//           sections={SECTIONS}
//           activeSections={this.state.activeSections}
//           // renderSectionTitle={this._renderSectionTitle}
//           renderHeader={this._renderHeader}
//           renderContent={this._renderContent}
//           onChange={this._updateSections}
//           underlayColor="#FFF"
//           duration={800}
          
//         />
//         {/* <FloatingButton /> */}
//         </View>
//         </ScrollView>
       
        
//       );
//     }
//   }




import React,{Component} from 'react';
import { View,Text,Image,ScrollView,TextInput,FlatList} from 'react-native';
// import Flipcard from './FlipCard';
// import { Item } from 'native-base';
import AccordionView from './lol'

const SECTIONS = [
  {
    ClubName : 'Android Club',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/1.png',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Android.jpg',
    key:1,
    clubid:"135"
  },
  {
    ClubName : 'Dramatics Club',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/2.png',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/drama.jpg',
    key:2,
    clubid:"107"
  },
  {
    ClubName : 'Ishare Club',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/3.png',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/ISHRAE.jpg',
    key:3,
    clubid:"117"
  },
  {
    ClubName : 'Fine Arts Club',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/4.png',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/FAC.jpg',
    key:4,
    clubid:"125"
  },
  {
    ClubName : 'Dance Club',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/5.png',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Dance-Club-Poster.jpg',
    key:5,
    clubid:"106"
  },
  {
    ClubName : 'Film Society',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/6.png',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/film%20society.jpg',
    key:6,
    clubid:"124"
  },
  {
    //to be checked
    ClubName : 'Society of Automotive Engineers',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/7.PNG',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/sae%20draft1.jpg',
    key:7,
    clubid:"116"
  },
  {
    ClubName : 'Game Development Club',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/8.jpg',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Game%20Development_final.jpg',    
    key:8,
    clubid:"126"
  },
  {
    ClubName : 'Rotaract Club',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/9.jpg',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/ROTARACT.jpg',
    key:9,
    clubid:"133"
  },
  {
    ClubName : 'The English Literary Association',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/10.png',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/LitSoc.jpg',
    key:10,
    clubid:"112"
  },
  {
    ClubName : 'Quiz Club',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/11.jpg',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/quiz%20club.jpg',    
    key:11,
    clubid:"110"
  },
  {
    ClubName : 'Music Club',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/12.png',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Music-Club-Poster.jpg',
    key:12,
    clubid:"118"
  },
  {
    ClubName : 'NEN',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/13.png',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/NEN.jpg',
    key:13,
    clubid:"119"
  },
  {
    ClubName : 'Arignar Anna Tamizh Mandram',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/14.jpg',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Tamizh%20manadalm-100.jpg',
    key:14,
    clubid:"105"
  },
  {
    ClubName : 'Photography Club',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/15.png',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Photography%20Club.jpg',
    key:15,
    clubid:"113"
  },
  {
    ClubName : 'The Debate Society',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/16.png',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/DEBSOC.jpg',
    key:16,
    clubid:"132"
  },
  {
    ClubName : 'Trekking Club',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/17.png',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/trekking.jpg',
    key:17,
    clubid:"115"
  },
  {
    ClubName : 'VITeach',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/18.png',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/VITeach.jpg',
    key:18,
    clubid:"108"
  },
  {
    ClubName : 'PALS',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/19.png',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/PALS_Overall%20(1).jpg',
    key:19,
    clubid:"122"
  },
  {
    ClubName : 'Health Club',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/20.jpg',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Health%20Club.jpg',
    key:20,
    clubid:"127"
  },
  {
    ClubName : 'Aerospace Club',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/21.png',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Aerospace.jpg',
    key:21,
    clubid:"104"
  },
  {
    ClubName : 'IEEE Computer Society',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/22.jpg',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/IEEE%20Computer%20Society.jpg',
    key:22,
    clubid:"130"
  },
  {
    ClubName : 'Designers Club',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/23.jpg',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Designer_Overall.jpg',
    key:23,
    clubid:"134"
  },
  {
    //to be checked
    ClubName : 'Energy & Environmental Protection Club',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/24.jpg',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Environmemental.jpg',
    key:24,
    clubid:"131"
  },
  {
    ClubName : 'Robotics Club',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/25.jpg',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/robotics.jpg',
    key:25,
    clubid:"114"
  },
  {
    ClubName : 'Energy & Fuel Users Association',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/26.jpg',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/enfuse.jpg',
    key:26,
    clubid:"123"
  },
  {
    ClubName : 'Enactus',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/27.png',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/ENATUS_Overall.jpg',
    key:27,
    clubid:"120"
  },
  {
    ClubName : 'Socrates Club',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/28.png',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/socrates.jpg',
    key:28,
    clubid:"121"
  },
  {
    ClubName : 'SPIE Student Chapter',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/29.png',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/SPIE_Overall%20(1).jpg',
    key:29,
    clubid:"109"
  },
  {
    ClubName : 'IEEE Signal Processing Society',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/30.png',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/IEEE%20Signal%20Processing%20Society%20(1).jpg',
    key:30,
    clubid:"111"
  },
  {
    ClubName : 'National Service Scheme',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/31.png',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/NSS%20Poster%20(1).jpg',
    key:31,
    clubid:"129"
  },
  {
    ClubName : 'code {y} gen',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/32.png',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Code-Y-Gen%20(1).jpg',
    key:32,
    clubid:"136"
  },
  {
    ClubName : 'Indian Concrete Institute',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/33.png',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Concrete%20Club%20Poster%20(1).jpg',
    key:33,
    clubid:"128"
  },
  {
    ClubName : 'Sports',
    ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/34.png',
    ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/ovsp.png',
    key:34,
    clubid:"103"
  },

];

export default class EventsFilter extends React.Component{


state = {
  activeSections: [],
  data2:[],
loding:true,
};

// componentDidMount(){
//   fetch('http://www.vitchennaievents.com/vibrance/api/get_all_events.php')
//     .then(data=>data.json())
//     .then(data2=>{
//       // console.log(data2)
//       this.setState({data2,loding:false})
//     })
//   }

    render(){
      return(
      <View style={{flex:1}}>
        <FlatList
        data = {SECTIONS}
        renderItem={({item}) => <AccordionView user={item} />}
        // initialNumToRender={1}
        extraData={false}
        disableVirtualization = {item => item.key}
        
        // getItemLayout={(item,index)=>{length:400}}
        // refreshing={false}
        keyExtractor={item => item.key}
        />
      </View>
      );
    }

}
