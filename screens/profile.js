import React from 'react';
import{View,Button,ImageBackground,SafeAreaView, StyleSheet} from 'react-native';
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { mdiFaceMan } from '@mdi/js';

const profile = ({navigation}) => {

    return (
      <SafeAreaView style = {styles.container}>
        <View style = {styles.userInfoSection}>
          <View style = {{flexDirection:'row', marginTop:15}}>
            <Avatar.Image source = {require('../assets/christine.jpg')} size = {80}/>
            <View style = {{marginLeft:20}}>
              <Title style = {[styles.title, {marginTop:15, marginBottom:5}]}>Christine Ubando</Title>
              <Caption style = {styles.caption}>@ubando1123</Caption>
            </View>
          </View>
        </View>

        <View style = {styles.userInfoSection}>
          <View style = {styles.row}>
            <Icon name = "map-marker-radius" size = {20} color = 'white' />
            <Text style = {{ marginLeft:10, color:'white' }}>TIP QUEZON CITY</Text>
          </View>
          <View style = {styles.row}>
            <Icon name = "phone" size = {20} color = 'white'/>
            <Text style = {{ marginLeft:10, color:'white' }}>092222nog2nog</Text>
          </View>
          <View style = {styles.row}>
            <Icon name = "email" size = {20} color = 'white' />
            <Text style = {{ marginLeft:10, color:'white' }}>ubando1123@gmail.com</Text>
          </View>
        </View>

        <View style = {styles.infoBoxWrapper}>
          <View style = {[styles.infoBox, {borderRightWidth:1,borderRightColor:'#dddddd'}]}>
            <Title style = {{color:'white'}}>64</Title>
            <Caption style = {{color:'white'}}>kilogram</Caption>
          </View>
          <View style = {[styles.infoBox, {borderRightWidth:1,borderRightColor:'#dddddd'}]}>
            <Title style = {{color:'white'}}>5'4</Title>
            <Caption style = {{color:'white'}}>Height</Caption>
          </View>
          <View style = {styles.infoBox}>
            <Title style = {{color:'white'}}>24.2</Title>
            <Caption style = {{color:'white'}}>BMI</Caption>
          </View>
        </View>

        <View style = {styles.menuWrapper}>
          <TouchableRipple onPress={() => navigation.navigate("Men's Section")}>
            <View style = {styles.menuItem}>
              <Icon name = "face-agent" color = "white" size = {25} />
              <Text style = {styles.menuItemText}>Men Workouts</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => navigation.navigate("Women's Section")}>
            <View style = {styles.menuItem}>
              <Icon name = "face-woman" color = "white" size = {25} />
              <Text style = {styles.menuItemText}>Women Workouts</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => navigation.navigate("SettingScreen")}>
            <View style = {styles.menuItem}>
              <Icon name = "cog" color = "white" size = {25} />
              <Text style = {styles.menuItemText}>Settings</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => navigation.navigate("SupportScreen")}>
            <View style = {styles.menuItem}>
              <Icon name = "account-check" color = "white" size = {25} />
              <Text style = {styles.menuItemText}>Support</Text>
            </View>
          </TouchableRipple>
        </View>

      </SafeAreaView>
    )
  }


export default profile;

const styles = StyleSheet.create({ 
  container:{
    flex:1,
    backgroundColor:'#4A6274'
  },
  userInfoSection:{
    paddingHorizontal: 30,
    marginBottom:25,
  },
 title: {
   fontSize: 24,
   fontWeight:'bold',
   color:'white'
 },
 caption:{
   fontSize:14,
   lineHeight:14,
   fontWeight:'500',
   color:'white'
 },
 row:{
   flexDirection:'row',
   marginBottom:10,
 },
 infoBoxWrapper:{
   borderBottomColor:'#dddddd',
   borderBottomWidth:1,
   borderTopColor:'#dddddd',
   borderTopWidth:1,
   flexDirection:'row',
   height:100,
 },
 infoBox:{
   width:'33.333333%',
   alignItems:'center',
   justifyContent:'center',
 },
 menuWrapper:{
   marginTop:10,
 },
 menuItem:{
   flexDirection:'row',
   paddingVertical:15,
   paddingHorizontal:30,
 },
 menuItemText:{
   color:'white',
   marginLeft:20,
   fontWeight:'600',
   fontSize:16,
   lineHeight:26,
 },
})