import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { AuthContext } from '../components/context';

export function DrawerContent (props){

const [isDarkTheme, setIsDarkTheme] = React.useState(false);

const {signOut} = React.useContext(AuthContext);

const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
}

    return(
        <View style = {{flex:1, backgroundColor:'#4A6274'}}>
            <DrawerContentScrollView {...props} screenOptions = {{drawerStyle: {backgroundColor:'black',}}}> 
                <View style= {styles.drawerContent}>
                    <View style = {styles.userInfoSection}>
                        <View style={{marginTop: 10, flexDirection:'row'}}> 
                            <Avatar.Image
                            source = {
                                require('../assets/christine.jpg')
                            }
                            size = {50}
                            />
                        <View style = {{marginLeft:15, flexDirection:'column'}}>
                            <Title style={styles.Title}> Christine Ubando </Title>
                            <Caption style= {styles.caption}> ubando1123@gmail.com </Caption>
                            </View>
                        </View>
                        <View style = {styles.section}>
                            <Paragraph style = {[styles.paragraph, styles.caption]}> BMI: </Paragraph>
                            <Caption style = {[styles.paragraph, styles.caption]}>24.2</Caption>
                            <Caption style = {[styles.paragraph, styles.caption1]}>(Healthy)</Caption>
                        </View>
                    </View>
                </View>

                <Drawer.Section style = { styles.middleDrawerSection}>
                    <DrawerItem 
                        icon = {({size}) =>(
                        <Icon name = "home-outline" color = {'white'} size= {size}/>)}
                    label = "Home" activeTintColor = "white" inactiveTintColor= "white"
                    onPress = {() => {props.navigation.navigate("Overview")}}
                    />
                    <DrawerItem 
                        icon = {({size}) =>(
                        <Icon name = "face-agent" color = {'white'} size= {size}/>)}
                    label = "Men's Workout" activeTintColor = "white" inactiveTintColor= "white"
                    onPress = {() => {props.navigation.navigate("Men's Section")}}
                    />
                    <DrawerItem 
                        icon = {({size}) =>(
                        <Icon name = "face-woman" color = {'white'} size= {size}/>)}
                    label = "Women's Workout" activeTintColor = "white" inactiveTintColor= "white"
                    onPress = {() => {props.navigation.navigate("Women's Section")}}
                    />
                    <DrawerItem 
                        icon = {({size}) =>(
                        <Icon name = "cog-outline" color = {'white'} size= {size}/>)}
                    label = "Settings" activeTintColor = "white" inactiveTintColor= "white"
                    onPress = {() => {props.navigation.navigate('SettingScreen')}}
                    />
                    <DrawerItem 
                        icon = {({size}) =>(
                        <Icon name = "account-check-outline" color = {'white'} size= {size}/>)}
                    label = "Support" activeTintColor = "white" inactiveTintColor= "white"
                    onPress = {() => {props.navigation.navigate('SupportScreen')}}
                    />
                    <DrawerItem 
                        icon = {({size}) =>(
                        <Icon name = "account-circle" color = {'white'} size= {size}/>)}
                    label = "Profile" activeTintColor = "white" inactiveTintColor= "white"
                    onPress = {() => {props.navigation.navigate('Account Section')}}
                    />
                    
                    
                </Drawer.Section>
                <Drawer.Section style = {styles.blaDrawerSection} title={<Text style={{color:"white",}}>Preferences</Text>}>
                    <TouchableRipple onPress = {() => {toggleTheme()}} >
                        <View style = {styles.preference}>
                            <Text style = {styles.darkTheme}>Dark Theme</Text>
                            <View pointerEvents = "none">
                                <Switch value = {isDarkTheme} />
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </DrawerContentScrollView> 
            <Drawer.Section style= {styles.bottomDrawerSection}>
                <DrawerItem 
                    icon = {({size}) =>(
                    <Icon 
                    name = "exit-to-app" 
                    color = {'white'} 
                    size= {size}
                    />
                )}
                label = "Log Out" activeTintColor = "white" inactiveTintColor= "white"
                onPress = {() => {signOut()}}
            />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex : 1,
    },
    userInfoSection: {
        paddingLeft:10,
    },
    Title:{
        fontSize:16,
        fontWeight: 'bold',
        color: 'white',
    },
    darkTheme:{
        marginTop:10,
        color: 'white',
    },
    caption:{
        fontSize:14,
        lineHeight: 14,
        color: 'white',
        marginBottom: 15,
    },
    caption1:{
        fontSize:14,
        lineHeight: 14,
        marginBottom: 15,
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems: 'center',
    },
    section:{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight:15,
        marginTop: 10,
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3,
        color: 'white',
    },
    drawerSection:{
        marginTop: 15,
    },
    middleDrawerSection:{
        marginBottom: 15,
        borderTopColor: '#79AEB2',
        borderTopWidth:1,
    },
    blaDrawerSection:{
       
    },
    bottomDrawerSection: {
        marginBottom:15,
        borderTopColor: '#79AEB2',
        borderTopWidth:1,
    },
    preference:{
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal:16,
    },
})