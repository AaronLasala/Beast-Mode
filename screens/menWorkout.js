import React from 'react';

import{TouchableHighlight,View,Text,Button,Image,ScrollView,Dimensions,StyleSheet,Alert, ImageBackground} from 'react-native';



const menWorkout = ({navigation}) => {
    return (
      
      <ImageBackground
        source={require('../assets/workout.jpg')}
        style={styles.container} >

      <View style = {styles.overlayContainer}>
        
          <View style= {styles.menuItem}>
          <TouchableHighlight onPress={() => navigation.navigate("chest workout")}>
          <ImageBackground source={require('../assets/chest.jpg')}
            style={styles.image}>
            <Text style={{fontWeight: 'bold',
                  color: 'white',position: 'absolute',
                  bottom: 0, left: 70}}>Chest</Text>
          </ImageBackground>    
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate("arms workout")}>
          <ImageBackground source={require('../assets/arms.jpg')}
            style={styles.image}>
              <Text style={{fontWeight: 'bold',
                  color: 'white',position: 'absolute',
                  bottom: 0, left: 20}}>Arms and Shoulders</Text>
          </ImageBackground>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate("legs workout")}>
          <ImageBackground source={require('../assets/squat.jpg')}
            style={styles.image}>
            <Text style={{fontWeight: 'bold',
            color: 'white',position: 'absolute',
            bottom: 0, left: 80}}>Legs</Text>
            </ImageBackground>
           </TouchableHighlight>
           <TouchableHighlight onPress={() => navigation.navigate("abs workout")}>
          <ImageBackground source={require('../assets/abs.jpg')}
            style={styles.image}> 
            <Text style={{fontWeight: 'bold',
            color: 'white',position: 'absolute',
            bottom: 0, left: 80}}>Abs</Text>
            </ImageBackground>  
           </TouchableHighlight>
            </View>
            </View>
          
        
      </ImageBackground>
        
    );
  
}

export default menWorkout;

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