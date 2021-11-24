import React from 'react';
import{View,Text,Button,StyleSheet,ImageBackground} from 'react-native';

const abs = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/workout.jpg')}
      style={styles.container} >

  <View style = {styles.overlayContainer}>
    
      <View style= {styles.menuItem}>
     
      <ImageBackground source={require('../assets/mccycling.gif')}
        style={styles.image}>
        <Text style={{fontWeight: 'bold',
              color: 'white',position: 'absolute',
              bottom: 0, left: 35}}>Cycling Crunches</Text>
      </ImageBackground>    
      
     
      <ImageBackground source={require('../assets/mlraises.gif')}
        style={styles.image}>
          <Text style={{fontWeight: 'bold',
              color: 'white',position: 'absolute',
              bottom: 0, left: 55}}>Leg Raises</Text>
      </ImageBackground>
      
      <ImageBackground source={require('../assets/mrtwists.gif')}
        style={styles.image}>
        <Text style={{fontWeight: 'bold',
        color: 'white',position: 'absolute',
        bottom: 0, left: 45}}>Russian Twist</Text>
        </ImageBackground>
      
      <ImageBackground source={require('../assets/mfkicks.gif')}
        style={styles.image}> 
        <Text style={{fontWeight: 'bold',
        color: 'white',position: 'absolute',
        bottom: 0, left: 50}}>Flutter Kicks</Text>
        </ImageBackground>  
      
        </View>
        </View>
      
    
  </ImageBackground>
    
);

}

export default abs;

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