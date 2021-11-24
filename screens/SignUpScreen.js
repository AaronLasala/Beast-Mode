import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity, Dimensions, Platform,TextInput, TouchableOpacityBase} from 'react-native'
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignUpScreen = ({navigation}) => {
  const [data,setData] = React.useState({
    userName: '',
    password: '',
    confirm_password:'',
    check_textInputChange:false,
    secureTextEntry:true,
    confirm_secureTextEntry:true,
  })
  
  const textInputChange = (val) => {
    if (val.length != 0){
      setData({
        ...data,
        userName:val,
        check_textInputChange: true
      });
    } else {
      setData({
        ...data,
        userName:val,
        check_textInputChange: false
      });
    }
   } 

   const handlePasswordChange = (val)=>{
      setData ({
        ...data,
        password:val
      })
   }
   const handleConfirmPasswordChange = (val)=>{
    setData ({
      ...data,
      confirm_password:val
    })
 }

   const updateSecureTextEntry = () => {
     setData ({
       ...data,
       secureTextEntry: !data.secureTextEntry
     })
   }
   const updateConfirmSecureTextEntry = () => {
    setData ({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry
    })
  }
  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
      <Image source={require('../assets/image/etopantay.png')}
             style={styles.logo}
             
              />
    </View>
    <Animatable.View 
            style={[styles.footer]}
            animation="fadeInUpBig">
      <Text style = {styles.register}>Create Account</Text>
      <Text style = {styles.text_footer}>Username</Text>
      <View style = {styles.action}>
        <FontAwesome 
          name = "user-o" 
          color = "#05375a" 
          size = {20}
          />
        <TextInput 
          placeholder = "Enter Your Username" 
          style = {styles.textInput} 
          autoCapitalize="none"
          onChangeText = {(val) => textInputChange(val)}
          />
        {data.check_textInputChange ?
        <Animatable.View
          animation = "bounceIn"
          >
        <Feather 
          name = "check-circle" 
          color= "green" 
          size = {20}
          />
          </Animatable.View>
          :null}
      </View>
      <Text style = {[styles.text_footer, {marginTop:35}]}>Password</Text>
      <View style = {styles.action}>
        <FontAwesome 
          name = "lock" 
          color = "#05375a" 
          size = {20}
          />
        <TextInput 
          secureTextEntry={data.secureTextEntry ? true : false} 
          placeholder = "Enter Your Password" 
          style = {styles.textInput}
          onChangeText = {(val) => handlePasswordChange(val)}
          />
        <TouchableOpacity
          onPress = {updateSecureTextEntry}
        >
          {data.secureTextEntry ?
          <Feather 
            name = "eye-off" 
            color= "grey"
            size = {20}
          />
          :
          <Feather 
            name = "eye" 
            color= "green"
            size = {20}
          />
          }
        </TouchableOpacity>
      </View>
      <Text style = {[styles.text_footer, {marginTop:35}]}>Confirm Password</Text>
      <View style = {styles.action}>
        <FontAwesome 
          name = "lock" 
          color = "#05375a" 
          size = {20}
          />
        <TextInput 
          secureTextEntry={data.confirm_secureTextEntry ? true : false} 
          placeholder = "Confirm Your Password" 
          style = {styles.textInput}
          onChangeText = {(val) => handleConfirmPasswordChange(val)}
          />
        <TouchableOpacity
          onPress = {updateConfirmSecureTextEntry}
        >
          {data.secureTextEntry ?
          <Feather 
            name = "eye-off" 
            color= "grey"
            size = {20}
          />
          :
          <Feather 
            name = "eye" 
            color= "green"
            size = {20}
          />
          }
        </TouchableOpacity>
      </View>
      <View style = {styles.button}>
        <LinearGradient
          colors = {['#4A6274','gray']}
          style={styles.signIn}
        >
          <TouchableOpacity
          onPress = {() => navigation.goBack()}
          style = {styles.signIn
            
          }
          >
          <Text style = {[styles.textSign, { color : '#fff'}]}>Sign Up</Text>
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity
          onPress = {() => navigation.goBack()}
          style = {[styles.signIn, {
            borderColor: '#4A6274',
            borderWidth: 2,
            marginTop:15
          }]}
          >
            <Text style = {[styles.textSign, {
              color: '#009387'
            }]}>Sign In</Text>
          </TouchableOpacity>
      </View>
    </Animatable.View>
  </View>
  )
}

export default SignUpScreen

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({  container: {
      flex: 1, 
      backgroundColor: '#4A6274'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    logo: {
      width: '50%',
      height: '90%',
      alignSelf:'center',
      marginTop:20
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    register: {
      color: '#05375a',
      fontSize: 22,
      marginBottom:20,
      fontWeight:'bold'
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
