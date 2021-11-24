import React from 'react';
import{View,Text,Button,StyleSheet} from 'react-native';


const DetailsScreen = ({navigation}) => {
    return (
      <View style = {{ flex:1, alignItems: 'center', justifyContent: 'center', 
      backgroundColor: '#4A6274'}}>
        <Text style = {{color:'white'}}> Details Screen </Text>
        <Button color= '#4A6274'
          title = "Go to details screen...again"
          onPress={()=>navigation.push("Details")}
          />
          <Button color= '#4A6274'
          title = "Go home"
          onPress={()=>navigation.navigate("Home")}
          />
          <Button color= '#4A6274'
          title = "Go back"
          onPress={()=>navigation.goBack()}
          />
        </View>
    );
  };

export default DetailsScreen;