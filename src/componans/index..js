import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons';
import Page from '../screens/HomeScrenn';
import { TouchableOpacity } from 'react-native';

const NFTdetails = ({ route, navigation}) => {
  const {NFTData} = route.params
  const icons = () => {
    navigation.navigate('Page')
  }
  return (
    <LinearGradient colors={['#040306', '#131624' ]} style={{flex:1}}>
          <SafeAreaView style={{flex:1}}>
          
       <View style={{flex:1}}> 
       <TouchableOpacity onPress={icons}>
                <AntDesign name="arrowleft" size={30} color="white" style={{padding:8, marginTop:10, marginLeft:4 }} />
       </TouchableOpacity>
       <Image source={NFTData.image} style={{height:200, width:200, alignItems:"center", justifyContent:"center", marginLeft:80, marginTop:-38}}/>
    </View>
      </SafeAreaView>
      </LinearGradient>
   
  )
}

export default NFTdetails