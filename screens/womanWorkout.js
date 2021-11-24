import React from 'react';

import{TouchableHighlight,View,Text,Button,Image,ScrollView,Dimensions,StyleSheet,Alert, ImageBackground} from 'react-native';



const womanWorkout = ({navigation}) => {
    return (
      
      <ImageBackground
        source={require('../assets/workout.jpg')}
        style={styles.container} >

      <View style = {styles.overlayContainer}>
        
          <View style= {styles.menuItem}>
          <TouchableHighlight onPress={() => navigation.navigate("warms workout")}>
          <ImageBackground source={require('../assets/warms.jpg')}
            style={styles.image}>
              <Text style={{fontWeight: 'bold',
                  color: 'white',position: 'absolute',
                  bottom: 0, left: 40}}>Arms and Shoulders</Text>
          </ImageBackground>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate("wlegs workout")}>
          <ImageBackground source={require('../assets/wlegs.jpg')}
            style={styles.image}>
            <Text style={{fontWeight: 'bold',
            color: 'black',position: 'absolute',
            bottom: 0, left: 100}}>Legs</Text>
            </ImageBackground>
           </TouchableHighlight>
           <TouchableHighlight onPress={() => navigation.navigate("wabs workout")}>
          <ImageBackground source={require('../assets/wabs.jpg')}
            style={styles.image}> 
            <Text style={{fontWeight: 'bold',
            color: 'white',position: 'absolute',
            bottom: 0, left: 100}}>Abs</Text>
            </ImageBackground>  
           </TouchableHighlight>
            </View>
            </View>
          
        
      </ImageBackground>
        
    );
  
}

export default womanWorkout;

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
    marginTop: 70,
    width: '60%',
    height: '27%',
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