import React from 'react';
import{View,Text,Button,StyleSheet,ImageBackground} from 'react-native';

const wabs = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/workout.jpg')}
      style={styles.container} >

  <View style = {styles.overlayContainer}>
    
      <View style= {styles.menuItem}>
     
      <ImageBackground source={require('../assets/wcrunches.gif')}
        style={styles.image}>
        <Text style={{fontWeight: 'bold',
              color: 'white',position: 'absolute',
              bottom: 0, left: 60}}>Crunches</Text>
      </ImageBackground>    
      
     
      <ImageBackground source={require('../assets/wplank.jpg')}
        style={styles.image}>
          <Text style={{fontWeight: 'bold',
              color: 'white',position: 'absolute',
              bottom: 0, left: 70}}>Plank</Text>
      </ImageBackground>
      
      <ImageBackground source={require('../assets/wrtwists.gif')}
        style={styles.image}>
        <Text style={{fontWeight: 'bold',
        color: 'white',position: 'absolute',
        bottom: 0, left: 45}}>Russian Twist</Text>
        </ImageBackground>
      
      <ImageBackground source={require('../assets/wsciscors.gif')}
        style={styles.image}> 
        <Text style={{fontWeight: 'bold',
        color: 'white',position: 'absolute',
        bottom: 0, left: 60}}>Scissors</Text>
        </ImageBackground>  
      
        </View>
        </View>
      
    
  </ImageBackground>
    
);

}

export default wabs;

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