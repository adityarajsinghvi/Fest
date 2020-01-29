// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import Slideshow from 'react-native-image-slider-show';
// import PhotoGrid from 'react-native-image-grid';
// import { Image, TouchableOpacity, Text} from 'react-native';
// // import { render } from 'react-dom';
// import Gallery from 'react-grid-gallery'
// // import { Icon, Right } from 'native-base';
// // import { Appbar, Drawer, Button } from 'react-native-paper';
// // import { createAppContainer } from 'react-navigation';
// // import { createStackNavigator } from 'react-navigation-stack';

// const IMAGES =
// [{
//         src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//         thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
//         thumbnailWidth: 320,
//         thumbnailHeight: 174,
//         isSelected: true,
//         caption: "After Rain (Jeshu John - designerspics.com)"
// },
// {
//         src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//         thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
//         thumbnailWidth: 320,
//         thumbnailHeight: 212,
//         tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//         caption: "Boats (Jeshu John - designerspics.com)"
// },
 
// {
//         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//         thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
//         thumbnailWidth: 320,
//         thumbnailHeight: 212
// }]


// export default class SlideshowTest extends React.Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       items: [],
//       position: 1,
//       interval: null,
//       dataSource: [
//         {
//           title: 'Vibrance 2019',
//           caption: 'The Most Awaited fest of the year',
//           url: 'http://www.vitvibrance.com/img/gallery/i8.jpg',
          
//         }, {
//           title: 'Dancepacito',
//           caption: 'Show your moves in the dancepacito',
//           url: 'http://www.vitvibrance.com/img/gallery/i2.jpg',
//         }, {
//           title: 'EDM Night',
//           caption: 'Enjoy your evening dancing to the electronic music of the most famous DJs.',
//           url: 'http://www.vitvibrance.com/img/gallery/i10.jpg',
//         },
//       ],
//     };
//   }

//   componentWillMount() {
//     this.setState({
//       interval: setInterval(() => {
//         this.setState({
//           position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
//         });
//       }, 5000)
//     });
//   }

//   componentWillUnmount() {
//     clearInterval(this.state.interval);
//   }



//   componentDidMount() {
//     // Build an array of 60 photos
//     let items = Array.apply(null, Array(15  )).map((v, i) => {
//       return { id: i, src: 'http://www.vitvibrance.com/img/gallery/i1.jpg' }
//     });
//     this.setState({ items });
//   }


//   render() {
//     return (
//       <View>
//         <View style={styles.slide}>
//     <Slideshow 
//         dataSource={this.state.dataSource}
//         position={this.state.position}
//         onPositionChanged={position => this.setState({ position })}  style={styles.slide}/>
//       </View>
//     <View style={styles.Image}>
//     <Text style={{fontSize: 24, paddingBottom: 5}}>Inaugaration</Text>
//     <PhotoGrid
//         data = { this.state.items }
//         itemsPerRow = { 3 }
//         itemMargin = { 1 }
//         itemPaddingHorizontal={0}
//         renderHeader = { this.renderHeader }
//         renderItem = { this.renderItem }
//       />

// <Text style={{fontSize: 24, paddingBottom: 5}}>Valedictory</Text>
//     <PhotoGrid
//         data = { this.state.items }
//         itemsPerRow = { 3 }
//         itemMargin = { 1 }
//         itemPaddingHorizontal={0}
//         renderHeader = { this.renderHeader }
//         renderItem = { this.renderItem }
//       />
//     </View>
    
//     </View>
//     );
//   }


  

//   renderItem(item, itemSize, itemPaddingHorizontal) {
//     return(
//       <TouchableOpacity
//         key = { item.id }
//         style = {{ width: itemSize, height: itemSize, paddingHorizontal: itemPaddingHorizontal }}
//         onPress = { () => {
//           // Do Something
          

//         }}>
        
//         <Image
//           resizeMode = "cover"
//           style = {{ flex: 1 }}
//           source = {{ uri: item.src }}
//         />
//       </TouchableOpacity>
//     );
//   }

// }


 


// // class All extends React.Component {
// //     render() {
// //         return (
// //         <View>
// //           <Slideshow 
// //       dataSource={[
// //         { url:'http://placeimg.com/640/480/any' },
// //         { url:'http://placeimg.com/640/480/any' },
// //         { url:'http://placeimg.com/640/480/any' }
// //     ]}/>
// //             <Text>Hello</Text>
            

// //      </View>
// //         );
// //       }
// // }

// // export default All;

// const styles = StyleSheet.create({
//     container : {
//       flex: 1,
//       backgroundColor: '#e6e6e6',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     plain: {
//       flex: 1,
//     },
//     plainText: {
//       alignItems: 'center',
//       marginTop: 200,
//       marginBottom: 0,
//     },
//     Drawercss: {
//         width: 400,
//     },
//     Image:{
//       paddingTop: 10,
      
//     },
//     slide:{
//       color: '#fff',
//     }
// });




import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box'

// import Immutable from 'immutable';
import ImageGallery, { openImageGallery } from '@expo/react-native-image-gallery';

class ListItem extends React.Component {
  _openInImageGallery = () => {
    let { item } = this.props;

    this._view.measure((rx, ry, w, h, x, y) => {
      openImageGallery({
        animationMeasurements: { w, h, x, y },
        list,
        item,
      });
    });
  };

  render() {
    let { item } = this.props;

    return (
      <TouchableWithoutFeedback onPress={this._openInImageGallery}>
        <Image
          ref={view => { this._view = view }}
          source={{ uri: item.imageUrl }}
          style={styles.thumbnail} />
      </TouchableWithoutFeedback>
    );
  }

}

class ImageGrid extends React.Component {
  render() {
    return (
      <View style={styles.imagegrid}>
        <View style={styles.header}>
          {/* <Text style={styles.heading}>Silent Disco Teaser Launch</Text> */}
        </View>

        <ScrollView contentContainerStyle={styles.layout}>
          {list.map(item => <ListItem key={item.imageUrl} item={item} />)}
        </ScrollView>
      </View>
    );
  }
}

export default class All extends React.Component {
    state={
        images:[
            'http://www.vitvibrance.com/images/1.jpg',
            'http://www.vitvibrance.com/images/2.jpg',
            'http://www.vitvibrance.com/images/3.jpg',
            'http://www.vitvibrance.com/images/14.jpg'
        ],
        totalDuration : 5184000,
    }
  render() {
    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
        <SliderBox
        images={this.state.images}
        sliderBoxHeight={300}
        dotColor="#FFF"
        inactiveDotColor="#90A4AE"
        circleLoop
        />
      
        <ImageGrid />

        <ImageGallery />

        <StatusBar barStyle="default" />
      </SafeAreaView>
      </ScrollView>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
var THUMBNAILS_PER_ROW = 3;
var THUMBNAIL_SPACING = 10;
var THUMBNAIL_SIZE = ((DEVICE_WIDTH - (THUMBNAIL_SPACING * ((THUMBNAILS_PER_ROW * 2) + 2))) / THUMBNAILS_PER_ROW);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  thumbnail: {
    margin: THUMBNAIL_SPACING,
    width: THUMBNAIL_SIZE,
    height: THUMBNAIL_SIZE,
  },
  header: {
    padding: 20,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
  },
  imagegrid: {
    flex: 1,
  },
  layout: {
    margin: THUMBNAIL_SPACING,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
});

const list = [
  {
    description: 'Silent Disco Teaser Launch',
    imageUrl: 'https://i.imgur.com/aR2Z1AT.jpg',
    width: 480,
    height: 480,
  },
  {
    description: 'Silent Disco Teaser Launch',
    imageUrl: 'https://i.imgur.com/vasSSLg.jpg',
    width: 640,
    height: 640,
  },
  {
    description: 'Silent Disco Teaser Launch',
    imageUrl: 'https://i.imgur.com/WzRwsKR.jpg',
    width: 640,
    height: 640,
  },
  {
    description: 'Silent Disco Teaser Launch',
    imageUrl: 'https://i.imgur.com/hhhQSjh.jpg',
    width: 640,
    height: 640,
  },
  {
    description: 'Silent Disco Teaser Launch',
    imageUrl: 'https://imgur.com/Wd1RcOf.jpg',
    width: 640,
    height: 640,
  },
  {
    description: 'Vibrance Website Launch',
    imageUrl: 'https://i.imgur.com/lvCcEJD.jpg',
    width: 640,
    height: 640,
  },
  {
    description: 'Vibrance Wesbite Launch',
    imageUrl: 'https://i.imgur.com/cENgMKB.jpg',
    width: 640,
    height: 640,
  },
  {
    description: 'Vibrance Website Launch',
    imageUrl: 'https://i.imgur.com/aIQlbjx.jpg',
    width: 640,
    height: 640,
  },
  {
    description: 'Vibrance Website Launch',
    imageUrl: 'https://i.imgur.com/IANbsJ9.jpg',
    width: 640,
    height: 640,
  }
];