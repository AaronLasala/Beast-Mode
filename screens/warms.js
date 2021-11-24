import React from 'react';
import{View,Text,Button,StyleSheet,ImageBackground} from 'react-native';

const warms = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/workout.jpg')}
      style={styles.container} >

  <View style = {styles.overlayContainer}>
    
      <View style= {styles.menuItem}>
     
      <ImageBackground source={require('../assets/wpushups.gif')}
        style={styles.image}>
        <Text style={{fontWeight: 'bold',
              color: 'white',position: 'absolute',
              bottom: 0, left: 60}}>Pushups</Text>
      </ImageBackground>    
      
     
      <ImageBackground source={require('../assets/wftdips.gif')}
        style={styles.image}>
          <Text style={{fontWeight: 'bold',
              color: 'white',position: 'absolute',
              bottom: 0, left: 50}}>Triceps Dips</Text>
      </ImageBackground>
      
      <ImageBackground source={require('../assets/wacircles.gif')}
        style={styles.image}>
        <Text style={{fontWeight: 'bold',
        color: 'white',position: 'absolute',
        bottom: 0, left: 55}}>Arm Circles</Text>
        </ImageBackground>
      
      <ImageBackground source={require('../assets/wsgators.gif')}
        style={styles.image}> 
        <Text style={{fontWeight: 'bold',
        color: 'white',position: 'absolute',
        bottom: 0, left: 40}}>Shoulder Gators</Text>
        </ImageBackground>  
      
        </View>
        </View>
      
    
  </ImageBackground>
    
);

}

export default warms;

const styles = StyleSheet.create({ 
menuContainer:{
  height:'40%',
},
top:{
  height: '20%',
  alignItems: 'center',
  justifyContent:'center',
},
header:{
  color: '#fff',
  fontSize:28,
  borderColor:'#fff',
  borderWidth:2,
  padding:20,
  paddingLeft:40,
  paddingRight:40,
  backgroundColor: 'rgba(255,255,255,.1)'
},
container:{
  flex: 1,
  width:'100%',
  height:'100%'
},
overlayContainer:{
  flex:1,
  backgroundColor: 'rgba(47,163,218,.4)'
},
menuItem:{
  marginTop: 10,
  width: '50%',
  height: '25%',
  padding: 10,
  alignSelf:'center'
},
image: {
  width: '100%',
  height: '100%',
  opacity: 1,
  borderColor: 'white',
  borderWidth:2,
  flexDirection:'column',
  marginTop:10,
  alignItems:'center',
  justifyContent:'center'
},

}); 