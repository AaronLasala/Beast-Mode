import React from 'react';
import{View,Text,Button,} from 'react-native';

const settings = ({navigation}) => {
    return (
      <View style = {{ flex:1, alignItems: 'center', justifyContent: 'center', 
      backgroundColor: '#4A6274'}}>
        <Text style = {{color:'black'}}> settings </Text>
        </View>
    );
  };


export default settings;