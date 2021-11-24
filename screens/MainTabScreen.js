import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import womanWorkout from './womanWorkout';
import menWorkout from './menWorkout';
import profile from './profile';
import chest from './chest';
import legs from './legs';
import arms from './arms';
import abs from './abs';
import wabs from './wabs';
import wlegs from './wlegs';
import warms from './warms';
import support from './support';
import settings from './settings';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = (navigation) => (
    <Tab.Navigator
    initialRouteName="Home"
    inactiveColor="#79AEB2"
    activeColor="white"
    >
    <Tab.Screen
      name="Overview"
      component={HomeStackScreen}
      options={{   
        tabBarLabel: '',
        tabBarColor: '#4A6274',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Men's Section"
      component={menWorkingOut}
      options={{
        tabBarLabel: "",
        tabBarColor: '#4A6274',
        tabBarIcon: ({ color }) => (
          <Icon name="male-sharp" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Women's Section"
      component={womanWorkingOut}
      options={{
        tabBarLabel: "",
        tabBarColor: '#4A6274',
        tabBarIcon: ({ color }) => (
          <Icon name="female-sharp" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Account Section"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: "",
        tabBarColor: '#4A6274',
        tabBarIcon: ({ color }) => (
          <Icon name="person-sharp" color={color} size={25} />
        ),
      }}
    />
  </Tab.Navigator>
)

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions = {{
            headerStyle:{
              backgroundColor:'#4A6274',
            },
  
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}>
          <HomeStack.Screen name = "Home" component = {HomeScreen} options ={{
            title:'Home', headerTitleAlign:'center', 
            headerLeft: () => (
              <Icon.Button name = "ios-menu" size = {20} color = 'white'
              backgroundColor="#4A6274" onPress = {()=> {navigation.openDrawer()}}>
              </Icon.Button>
            )
          }}/>
          <HomeStack.Screen name = "setting" component = {settings} options ={{
            title:'Settings', headerTitleAlign:'center', 
            headerLeft: () => (
              <Icon.Button name = "ios-menu" size = {20} color = 'white'
              backgroundColor="#4A6274" onPress = {()=> {navigation.openDrawer()}}>
              </Icon.Button>
            )
          }}/>
          <HomeStack.Screen name = "support" component = {support} options ={{
            title:'Support', headerTitleAlign:'center', 
            headerLeft: () => (
              <Icon.Button name = "ios-menu" size = {20} color = 'white'
              backgroundColor="#4A6274" onPress = {()=> {navigation.openDrawer()}}>
              </Icon.Button>
            )
          }}/>
        </HomeStack.Navigator>
  )
  
  
  const womanWorkingOut = ({navigation}) => (
    <DetailsStack.Navigator screenOptions = {{
            headerStyle:{
              backgroundColor:'#4A6274',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}>
          <DetailsStack.Screen name = "Woman's Workout" component = {womanWorkout} options ={{
           title:"Women's Workout",headerTitleAlign:'center',
           headerLeft: () => (
             <Icon.Button name = "ios-menu" size = {25} color = 'white'
             backgroundColor="#4A6274" onPress = {()=> {navigation.openDrawer()}}>
             </Icon.Button>
           )
          }}/>
          <DetailsStack.Screen name = "warms workout" component={warms} options ={{
            title:'Arms Workout', headerTitleAlign:'center', 
            headerLeft: () => (
              <Icon.Button name = "ios-menu" size = {20} color = 'white'
              backgroundColor="#4A6274" onPress = {()=> {navigation.openDrawer()}}>
              </Icon.Button>
            )
          }}/>

          <DetailsStack.Screen name = "wlegs workout" component={wlegs} options ={{
            title:'Legs Workout', headerTitleAlign:'center', 
            headerLeft: () => (
              <Icon.Button name = "ios-menu" size = {20} color = 'white'
              backgroundColor="#4A6274" onPress = {()=> {navigation.openDrawer()}}>
              </Icon.Button>
            )
          }}/>

          <DetailsStack.Screen name = "wabs workout" component={wabs} options ={{
            title:'Abs Workout', headerTitleAlign:'center', 
            headerLeft: () => (
              <Icon.Button name = "ios-menu" size = {20} color = 'white'
              backgroundColor="#4A6274" onPress = {()=> {navigation.openDrawer()}}>
              </Icon.Button>
            )
          }}/>
        </DetailsStack.Navigator>
  )

  const menWorkingOut = ({navigation}) => (
    <HomeStack.Navigator screenOptions = {{
            headerStyle:{
              backgroundColor:'#4A6274',
            },
  
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}>
          <HomeStack.Screen name = "Men Workout" component = {menWorkout} options ={{
            title:"Men's Workout", headerTitleAlign:'center', 
            headerLeft: () => (
              <Icon.Button name = "ios-menu" size = {20} color = 'white'
              backgroundColor="#4A6274" onPress = {()=> {navigation.openDrawer()}}>
              </Icon.Button>
            )
          }}/>
          
          <HomeStack.Screen name = "chest workout" component={chest} options ={{
            title:'Chest Workout', headerTitleAlign:'center', 
            headerLeft: () => (
              <Icon.Button name = "ios-menu" size = {20} color = 'white'
              backgroundColor="#4A6274" onPress = {()=> {navigation.openDrawer()}}>
              </Icon.Button>
            )
          }}/>

          <HomeStack.Screen name = "arms workout" component={arms} options ={{
            title:'Arms Workout', headerTitleAlign:'center', 
            headerLeft: () => (
              <Icon.Button name = "ios-menu" size = {20} color = 'white'
              backgroundColor="#4A6274" onPress = {()=> {navigation.openDrawer()}}>
              </Icon.Button>
            )
          }}/>

          <HomeStack.Screen name = "abs workout" component={abs} options ={{
            title:'Abs Workout', headerTitleAlign:'center', 
            headerLeft: () => (
              <Icon.Button name = "ios-menu" size = {20} color = 'white'
              backgroundColor="#4A6274" onPress = {()=> {navigation.openDrawer()}}>
              </Icon.Button>
            )
          }}/>

          <HomeStack.Screen name = "legs workout" component={legs} options ={{
            title:'Legs Workout', headerTitleAlign:'center', 
            headerLeft: () => (
              <Icon.Button name = "ios-menu" size = {20} color = 'white'
              backgroundColor="#4A6274" onPress = {()=> {navigation.openDrawer()}}>
              </Icon.Button>
            )
          }}/>
          
        </HomeStack.Navigator>
  )

  const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions = {{
            headerStyle:{
              backgroundColor:'#4A6274',
            },
  
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}>

          <ProfileStack.Screen name = "Your Account" component = {profile} options ={{
            title:'Your Account', headerTitleAlign:'center', 
            headerLeft: () => (
              <Icon.Button name = "ios-menu" size = {20} color = 'white'
              backgroundColor="#4A6274" onPress = {()=> {navigation.openDrawer()}}>
              </Icon.Button>
            )     
          }}/>

        </ProfileStack.Navigator>
  )
