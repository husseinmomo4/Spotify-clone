import { Text, View, Image, FlatList, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DATA } from '../componans/Data';

const LikeSonge = () => {
 
  return (
   <LinearGradient colors={['#a34c0d', '#592804', '#241001', '#000000']} style={{flex:1}}>
    <AntDesign name="arrowleft" size={30} color="white" style={{padding:8, marginTop:10, marginLeft:4 }} />
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
<Image source={require('../../assets/images/spo9.jpg')} style={{width:220, height:200, alignSelf:"center", marginLeft:73}} />
   </View>
   <View style={{paddingLeft:50, margin:10, flexDirection:"row"}}>
    <MaterialCommunityIcons name="spotify" size={30} color="#62fc03"/>
   <Text style={{color:"white", fontSize:16, fontWeight:"600",}} >spotify</Text>
    </View>
    <View style={{alignItems:"center", paddingLeft:"80%", margin:10}} >
    <AntDesign name="play" size={44} color="#62fc03" />

    </View>

      <FlatList data={DATA}  renderItem={({item}) => {
   return (
    <TouchableOpacity style={{width:'100%', height:50, flexDirection:'row', justifyContent:'space-between', paddingLeft:10, margin:10}}>
     <Image source={{uri:item.image}} style={{height:50,width:50, borderRadius:5, gap:20}}  />
<View>
      <Text style={{color:"white", marginRight:200, margin:10}}>{item.title}</Text>
    </View>
    </TouchableOpacity>
   )
    }}      
    /> 
       </LinearGradient>
  )
}

export default LikeSonge