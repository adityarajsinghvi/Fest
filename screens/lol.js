
import React, { Component } from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';
import EventsScreenFilter from './eventsFilter';
import Flipcard from '../components/FlipCard'


const SECTIONS = [
    {
      ClubName : 'Android Club',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/1.png',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Android.jpg'
    },
    {
      ClubName : 'Dramatics Club',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/2.png',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/drama.jpg'
    },
    {
      ClubName : 'Ishare Club',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/3.png',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/ISHRAE.jpg'
    },
    {
      ClubName : 'Fine Arts Club',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/4.png',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/FAC.jpg'
    },
    {
      ClubName : 'Dance Club',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/5.png',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Dance-Club-Poster.jpg'
    },
    {
      ClubName : 'Film Society',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/6.png',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/film%20society.jpg'
    },
    {
      ClubName : 'Society of Automotive Engineers',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/7.PNG',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/sae%20draft1.jpg'
    },
    {
      ClubName : 'Game Development Club',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/8.jpg',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Game%20Development_final.jpg'
    },
    {
      ClubName : 'Rotaract Club',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/9.jpg',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/ROTARACT.jpg'
    },
    {
      ClubName : 'The English Literary Association',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/10.png',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/LitSoc.jpg'
    },
    {
      ClubName : 'Quiz Club',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/11.jpg',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/quiz%20club.jpg'
    },
    {
      ClubName : 'Music Club',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/12.png',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Music-Club-Poster.jpg'
    },
    {
      ClubName : 'NEN',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/13.png',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/NEN.jpg'
    },
    {
      ClubName : 'Arignar Anna Tamizh Mandram',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/14.jpg',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Tamizh%20manadalm-100.jpg'
    },
    {
      ClubName : 'Photography Club',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/15.png',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Photography%20Club.jpg'
    },
    {
      ClubName : 'The Debate Society',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/16.png',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/DEBSOC.jpg'
    },
    {
      ClubName : 'Trekking Club',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/17.png',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/trekking.jpg'
    },
    {
      ClubName : 'VITeach',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/18.png',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/VITeach.jpg'
    },
    {
      ClubName : 'PALS',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/19.png',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/PALS_Overall%20(1).jpg'
    },
    {
      ClubName : 'Health Club',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/20.jpg',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Health%20Club.jpg'
    },
    {
      ClubName : 'Aerospace Club',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/21.png',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Aerospace.jpg'
    },
    {
      ClubName : 'IEEE Computer Society',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/22.jpg',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/IEEE%20Computer%20Society.jpg'
    },
    {
      ClubName : 'Designers Club',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/23.jpg',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Designer_Overall.jpg'
    },
    {
      ClubName : 'Energy & Environmental Protection Club',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/24.jpg',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Environmemental.jpg'
    },
    {
      ClubName : 'Robotics Club',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/25.jpg',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/robotics.jpg'
    },
    {
      ClubName : 'Energy & Fuel Users Association',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/26.jpg',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/enfuse.jpg'
    },
    {
      ClubName : 'Enactus',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/27.png',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/ENATUS_Overall.jpg'
    },
    {
      ClubName : 'Socrates Club',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/28.png',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/socrates.jpg'
    },
    {
      ClubName : 'SPIE Student Chapter',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/29.png',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/SPIE_Overall%20(1).jpg'
    },
    {
      ClubName : 'IEEE Signal Processing Society',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/30.png',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/IEEE%20Signal%20Processing%20Society%20(1).jpg'
    },
    {
      ClubName : 'National Service Scheme',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/31.png',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/NSS%20Poster%20(1).jpg'
    },
    {
      ClubName : 'code {y} gen',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/32.png',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Code-Y-Gen%20(1).jpg'
    },
    {
      ClubName : 'Indian Concrete Institute',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/33.png',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/Concrete%20Club%20Poster%20(1).jpg'
    },
    {
      ClubName : 'Sports',
      ClubLogo: 'http://www.vitvibrance.com/wb31/clubs/34.png',
      ClubPoster: 'http://www.vitvibrance.com/wb31/clubs/opos/ovsp.png'
    },
  
  ];
  
  export default class AccordionView extends Component {
    state = {
      activeSections: [],
      data2:[],
      tobepassed :[],
    // loding:true,
    };

    componentWillMount(){
      fetch('http://vitchennaievents.com/vibrance/api/get_all_schools.php')
      .then(data=>data.json())
      .then(data2=>{
        // console.log(data2)
        this.setState({data2:data2,loding:false})
        
          // this.state.data2.forEach(element => {
          //   if(element.idclub === this.sec[0].clubid)
          //   {
          //     console.log(element);
          //     this.state.tobepassed.push(element)
          //   }
            
          // });
        // console.log(this.state.tobepassed);
        
        // console.log(this.state.data2);
        // console.log(this.sec[0].ClubName);
        
        
      })

        // var isid = this.state.data2.filter(club => club.idclub === this.sec[0].clubid)
        // console.log(this.state.data2);         
  
   }
 
   
// data = this.props.data;
  
    _renderSectionTitle = section => {
      return (
        <View>
          <Text>{section.ClubName}</Text>
        </View>
      );
    };
  
    _renderHeader = section => {
      return (
        <View style={{alignItems:"center",flexDirection:'row',borderColor:'black',width:"98%",marginVertical:10,borderRadius:20,padding:10,flexWrap:'wrap',elevation:10,backgroundColor:"#FFF"}}>
          <Image
          style={{height:100,width:100}}
           source={{uri:section.ClubLogo}}
           resizeMode='contain'
           />
           <View style={{flexWrap:'wrap',justifyContent:'flex-start',width:'67%',marginLeft:10}}>
      <Text style={{fontSize:28,flexWrap:'wrap',paddingLeft:0,textAlign:'left'}}>{section.ClubName}</Text>
           </View>
          
        </View>
      );
    };
  
    _renderContent = section => {
      return (
        <View>
          <Image 
          style={{justifyContent:'center',alignSelf:'center',height:300,width:300}}
          source={{uri:section.ClubPoster}}
          resizeMode="contain"
          />
         <EventsScreenFilter data={this.sec}/>
        </View>
      );
    };
  
    ///////  SEPARATION 
    // _renderSectionTitle = section => {
    //   return (
    //     <View>
    //       <Text>{section.content}</Text>
    //     </View>
    //   );
    // };
  
    // _renderHeader = section => {
    //   return (
    //     <View>
    //       <Text>{section.title}</Text>
    //     </View>
    //   );
    // };
  
    // _renderContent = section => {
    //   return (
    //     <View>
    //       <Text>{section.content}</Text>
    //     </View>
    //   );
    // };
  
    _updateSections = activeSections => {
      this.setState({ activeSections });
      
    };

    sec = [this.props.user]
  
    render() {
      
      
      return (
        
           <View style={{justifyContent:"center",flex:1,alignItems:"center",flex:1}}>
          <Accordion
          sections={this.sec}
          activeSections={this.state.activeSections}
          // renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
          underlayColor="#FFF"
          duration={800}
          
        />
        {/* <FloatingButton /> */}
        </View>
      
       
        
      );
    }
  }