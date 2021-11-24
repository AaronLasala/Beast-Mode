
import React, { Component } from "react";
import {View,Text,StyleSheet,SafeAreaView,TextInput,Platform,StatusBar,ScrollView,Image,Dimensions} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Category from "../components/Category";

const { height, width } = Dimensions.get('window')

class HomeScreen extends Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor:'#4A6274'}}>
            <View style={{ height: this.startHeaderHeight, backgroundColor: '#4A6274', borderBottomWidth: 0, borderBottomColor: '#4A6274' }}>
            
           
           
            </View>
            <ScrollView
                scrollEventThrottle={16}
            >
            <View style={{ flex: 1, backgroundColor: '#4A6274', paddingTop: 20 }}>
            <Text style={{ color:'white',fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                Essential Shop
            </Text>

            <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
            <Category imageUri={require('../assets/dumbell.jpg')}
                name="Dumbells" colorTextDefault='#f5f3f4'
            />
            <Category imageUri={require('../assets/machine.jpg')}
                name="Machines"
            />
            <Category imageUri={require('../assets/image/etopantay.png')}
                name="Shirts" 
            />
            <Category imageUri={require('../assets/shoes.jpg')}
                name="Shoes" 
            />
            </ScrollView>
            </View>
            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
            <Text style={{ color:'white', fontSize: 24, fontWeight: '700' }}>
                Introducing BEASTMODE
            </Text>
            <Text style={{ color:'white',fontWeight: '100', marginTop: 10 }}>
                IT'S ABOUT DRIVE, IT'S ABOUT POWER, WE STAY HUNGRY, WE DEVOUR. PUT IN THE WORK, PUT IN THE HOURS AND TAKE WHAT'S OURS.
            </Text>
            <View style={{ width: width - 40, height: 400, marginTop: 20 }}>
            <Image
                style={{ flex: 1, height: '100%', width: '100%', resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                source={require('../assets/mpushups.gif')}
            />
            <Image
            style={{ flex: 1, height: '100%', width: '100%', resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
            source={require('../assets/wpushups.gif')}
            />

           </View>
          </View>
         </View>
        </ScrollView>
      </View>
     </SafeAreaView>
     );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});