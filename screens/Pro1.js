import React, { Component } from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import {
  Switch,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Divider, Card, Button } from 'react-native-elements';

 
export default class Pro1 extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View>
            <Image source={require('../assets/at1.jpg')} style={{width: '100%', height: 300, alignSelf:'stretch',shadowColor:'black',
        shadowRadius:0,
        shadowOffset:{height:20},
        shadowOpacity:1}} resizeMode="contain"/>
        </View>
        <View style={{borderColor:'#4F5364',borderWidth:3,margin:10,backgroundColor:'#4F5364',borderRadius:30,height:300,marginTop:40}}>
          <Text style={{color:'#E9ECF2',fontSize:20,textAlign:'center'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Text>
          <View style={{width: '100%',height: 50,justifyContent: 'center',alignItems: 'center',position: 'absolute',bottom: 0,marginTop:2}}>
          <Button
                    buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:'#04050B',width: 300}}
                    title='I am in!'/>
          </View>
        </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04050B',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    // padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    // fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});