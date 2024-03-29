import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MainTabScreen from './screens/MainTabScreen';
import support from './screens/support';
import RootStackScreen from './screens/RootStackScreen';
import settings from './screens/settings';
import {DrawerContent} from './screens/DrawerContent';

import { AuthContext } from './components/context';
import { startClock } from 'react-native-reanimated';
import { StackRouter } from 'react-navigation';

const Drawer = createDrawerNavigator();

const App = () => {
  //const [isLoading, setIsLoading] = React.useState(true);
  //const [userToken, setUserToken] = React.useState(null);

const initialLoginState = {
  isLoading:true,
  userName: null,
  userToken: null,
};

const loginReducer = (prevState, action) => {
  switch (action.type) {
    case 'RETRIEVE_TOKEN':
      return{
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case 'LOGIN':
      return{
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };
    case 'LOGOUT':
      return{
        ...prevState,
        userName: null,
        userToken: null,
        isLoading: false,
      };
    case 'REGISTER':
      return{
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };

  }
}

const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
       //setUserToken('sdfj');
       //setIsLoading(false);
       const userToken = String(foundUser[0].userToken);
       const userName = foundUser[0].username;
       try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp:() => {
      //setUserToken('sdfj');
      //setIsLoading(false);
    },
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      //setIsLoading(false);
      let userToken;
      userToken = null
      try{
        userToken = await AsyncStorage.getItem('userToken')
      }catch (e){
        console.log(e);
      }
      console.log('user token: ', userToken);
      dispatch({type:'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  },[]);

  if( loginState.isLoading ){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size = "large" color="black" />
      </View>
    )
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken != null ? (
          <Drawer.Navigator drawerContent = { props => < DrawerContent {...props} />}>
          <Drawer.Screen name = "HomeDrawer" component = {MainTabScreen}  options = {{headerShown:false}} />
          <Drawer.Screen name = "SupportScreen" component = {support} options = {{headerShown:false}}/>
          <Drawer.Screen name = "SettingScreen" component = {settings} options = {{headerShown:false}}/>
          </Drawer.Navigator>
        )
      :
        <RootStackScreen/>
      }
      </NavigationContainer>
      </AuthContext.Provider>
  )
}

export default App;