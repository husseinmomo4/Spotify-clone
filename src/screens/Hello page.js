import { View, Text, Pressable, Alert, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo,} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';
import Press from '../Project/Press';

const HomeScreen = ({navigation}) => {

  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex:1}}>
<SafeAreaView>
      <View style={{height:"20%"}} />
      <Entypo style={{textAlign:"center"}} name="spotify" size={80} color="white" />
    <Text style={{
      color:"white",
      fontSize:40,
      textAlign:"center",
      top:"3%",
      fontWeight:"600",
      
    }}>
   Millions of Songs Free on spotify!
    </Text>
      <View  style={{height: 80}} />
    <Pressable 
    style={{
      backgroundColor:"#1D8954",
      padding:10,
      justifyContent:"center",
      alignItems: "center",
      marginLeft:"auto",
      marginRight:"auto",
      width: 300,
      borderRadius:25,
      marginVertical: 7,
    }}>
      <Text style={{color:"black", alignItems:"center"}}>sign in with spotify</Text>
    </Pressable>
  
    <Press titlee="Continue with phone number "/>    
    <Press titlee="Continue with phone number "  /> 
    <Press titlee="Continue with phone number "/>

      <Pressable
          onPress={() => navigation.navigate('LoginScreen')}
      style={{ alignItems:"center", marginVertical:9 }}>
       <Text style={{color:"white", fontSize:18,  }}> Log in  </Text>
      </Pressable>
</SafeAreaView>   
</LinearGradient>
  )
}

export default HomeScreen