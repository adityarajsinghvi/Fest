import React, { Component } from 'react';
import {
    Switch,
    ScrollView,
    Image,
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    Linking
  } from 'react-native';

import {Card,Button, Icon , Badge, Avatar} from 'react-native-elements';
import { SliderBox } from "react-native-image-slider-box";
  
export default class Merchandise extends Component{
  static navigationOptions = {
    title: 'Merchandise',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#003D5F',
    headerTitleStyle: {
      fontWeight: 'bold',
      flex:1
    },
  };

    render(){
        return(
            <SafeAreaView>
                {/* <View style={{backgroundColor: '#09091f',flexDirection: 'row',alignItems:'center'}}>
           <TouchableOpacity onPress={ () => this.props.navigation.openDrawer()}>
             <Image
              source={require('./images/drawer.png')}
              style={{ width: 25, height: 25, marginLeft: 5 }}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 20, padding: 20, color: 'red'}}>Merchandise</Text>
          </View> */}
          <ScrollView  style={{height:'90%'}}>

    <Card title = 'T-Shirts'>
    
              <SliderBox 
              images={['https://i.imgur.com/6Wvh3Dd.jpg','https://i.imgur.com/chDhjFN.jpg','https://i.imgur.com/pkHrUiq.jpg']}
              style={{height:400, width: '85%'}}
              circleLoop
              />
              <View style={{padding: 10}}>
              {/* <Button title='Proceed' onPress={ ()=> Linking.openURL('http://www.vitvibrance.com/Vibrance-Merchandise-master/index.html') }/> */}
              </View>
            </Card>

            <Card title = 'T-Shirts' >
            <SliderBox 
              images={['https://i.imgur.com/g7ahQW8.jpg','https://i.imgur.com/P8d7nfv.jpg','https://i.imgur.com/JTbbENb.jpg']}
              style={{height:460, width: '85%'}}
              circleLoop
              />
               <View style={{padding: 10}}>
              {/* <Button title='Proceed' onPress={ ()=> Linking.openURL('http://www.vitvibrance.com/Vibrance-Merchandise-master/index.html') }/> */}
              </View> 
            </Card>
            <Card title = 'T-Shirts' >
            <SliderBox 
              images={['https://i.imgur.com/zVloX1G.jpg','https://i.imgur.com/oXo22ZM.jpg','https://i.imgur.com/bVEM7Ad.jpg']}
              style={{height:460, width: '85%'}}
              circleLoop
              />
                <View style={{padding: 10}}>
              {/* <Button title='Proceed' onPress={ ()=> Linking.openURL('http://www.vitvibrance.com/Vibrance-Merchandise-master/index.html') }/> */}
              </View>
            </Card>
            <Card title = 'Hoodie' >
            <SliderBox 
              images={['https://i.imgur.com/364J6TP.jpg','https://i.imgur.com/sLJCma0.jpg','https://i.imgur.com/tSwvmzl.jpg']}
              style={{height:400, width: '85%'}}
              circleLoop
              />
              <View style={{padding: 10}}>
              {/* <Button title='Proceed' onPress={ ()=> Linking.openURL('http://www.vitvibrance.com/Vibrance-Merchandise-master/index.html') }/> */}
              </View>  
            </Card>
            <Card title = 'Wrist Band' >
              <Image
              source={{uri: 'https://i.imgur.com/K0W2sBQ.jpg'}} 
              style={{height: 200, width: '100%'}}
              />
                <View style={{padding: 10}}>
              {/* <Button title='Proceed' onPress={ ()=> Linking.openURL('http://www.vitvibrance.com/Vibrance-Merchandise-master/index.html') }/> */}
              </View>
            </Card>
            <Card title = 'Badge' >
              <Image
              source={{uri: 'https://i.imgur.com/h85nKj6.jpg'}} 
              style={{height: 200, width: '100%'}}
              />
                <View style={{padding: 10}}>
              {/* <Button title='Proceed' onPress={ ()=> Linking.openURL('http://www.vitvibrance.com/Vibrance-Merchandise-master/index.html') }/> */}
              </View>
            </Card>
            <Card title = 'Badge' >
              <Image
              source={{uri: 'https://i.imgur.com/w6LnL9v.jpg'}} 
              style={{height: 200, width: '100%'}}
              />
               <View style={{padding: 10}}>
              {/* <Button title='Proceed' onPress={ ()=> Linking.openURL('http://www.vitvibrance.com/Vibrance-Merchandise-master/index.html') }/> */}
              </View> 
            </Card>
            <Card title = 'Badge' >
              <Image
              source={{uri: 'https://i.imgur.com/Qs6WjOv.jpg'}} 
              style={{height: 200, width: '100%'}}
              />
              <View style={{padding: 10}}>
              {/* <Button title='Proceed' onPress={ ()=> Linking.openURL('http://www.vitvibrance.com/Vibrance-Merchandise-master/index.html') }/> */}
              </View>  
            </Card>
            <Card title = 'Shotglass'>
            <SliderBox 
              images={['https://i.imgur.com/Iaz1yz0.jpg','https://i.imgur.com/n1byKTf.jpg','https://i.imgur.com/hVcekzs.jpg']}
              style={{height:200, width: 150,marginLeft: 90}}
              circleLoop
              />
                <View style={{padding: 10}}>
              {/* <Button title='Proceed' onPress={ ()=> Linking.openURL('http://www.vitvibrance.com/Vibrance-Merchandise-master/index.html') }/> */}
              </View>
            </Card>
            <Card title = 'Metal Mug' >
              <Image
              source={{uri: 'https://i.imgur.com/LQ05tLq.jpg'}} 
              style={{height: 200, width: '100%'}}
              />
              <View style={{padding: 10}}>
              {/* <Button title='Proceed' onPress={ ()=> Linking.openURL('http://www.vitvibrance.com/Vibrance-Merchandise-master/index.html') }/> */}
              </View>  
            </Card>
            <Card title = 'Notebook' >
              <Image
              source={{uri: 'https://i.imgur.com/g6MHQ7a.jpg'}} 
              style={{height: 200, width: '100%'}}
              />
                <View style={{padding: 10}}>
              {/* <Button title='Proceed' onPress={ ()=> Linking.openURL('http://www.vitvibrance.com/Vibrance-Merchandise-master/index.html') }/> */}
              </View>
            </Card>
            <Card title = 'Bag' >
              <Image
              source={{uri: 'https://i.imgur.com/B9qw0GL.jpg'}} 
              style={{height: 200, width: '100%'}}
              />
               <View style={{padding: 10}}>
              {/* <Button title='Proceed' onPress={ ()=> Linking.openURL('http://www.vitvibrance.com/Vibrance-Merchandise-master/index.html') }/> */}
              </View> 
            </Card>
            <Card title = 'Bottle' >
              <Image
              source={{uri: 'https://i.imgur.com/LbTfj2P.jpg'}} 
              style={{height: 200, width: '100%'}}
              />
              <View style={{padding: 10}}>
              {/* <Button title='Proceed' onPress={ ()=> Linking.openURL('http://www.vitvibrance.com/Vibrance-Merchandise-master/index.html') }/> */}
              </View>  
            </Card>
            <Card title = 'Pouch' >
              <Image
              source={{uri: 'https://i.imgur.com/itc6zPS.jpg'}} 
              style={{height: 200, width: '100%'}}
              />
                <View style={{padding: 10}}>
              {/* <Button title='Proceed' onPress={ ()=> Linking.openURL('http://www.vitvibrance.com/Vibrance-Merchandise-master/index.html') }/> */}
              </View>
            </Card>
            <Card title = 'Keychain' >
              <Image
              source={{uri: 'https://i.imgur.com/0ylbkFf.jpg'}} 
              style={{height: 200, width: '100%'}}
              />
               <View style={{padding: 10}}>
              {/* <Button title='Proceed' onPress={ ()=> Linking.openURL('http://www.vitvibrance.com/Vibrance-Merchandise-master/index.html') }/> */}
              </View> 
            </Card>
            <Card title = 'Mug' >
              <Image
              source={{uri: 'https://i.imgur.com/u03oY37.jpg'}} 
              style={{height: 200, width: '100%'}}
              />
               <View style={{padding: 10}}>
              {/* <Button title='Proceed' onPress={ ()=> Linking.openURL('http://www.vitvibrance.com/Vibrance-Merchandise-master/index.html') }/> */}
              </View> 
            </Card>
            <Card title = 'Hanger' >
              <Image
              source={{uri: 'https://i.imgur.com/1XmTbIX.jpg'}} 
              style={{height: 200, width: '100%'}}
              />
               <View style={{padding: 10}}>
              {/* <Button title='Proceed' onPress={ ()=> Linking.openURL('http://www.vitvibrance.com/Vibrance-Merchandise-master/index.html') }/> */}
              </View> 
            </Card>
            <Card title = 'Covers' >
              <Image
              source={{uri: 'https://i.imgur.com/kfEmedh.jpg'}} 
              style={{height: 200, width: '100%'}}
              />
               <View style={{padding: 10}}>
              {/* <Button title='Proceed' onPress={ ()=> Linking.openURL('http://www.vitvibrance.com/Vibrance-Merchandise-master/index.html') }/> */}
              </View> 
            </Card>
  </ScrollView>
            </SafeAreaView>
        )
    }
}