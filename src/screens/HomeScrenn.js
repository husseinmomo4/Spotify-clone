import { Pressable, SafeAreaView, StyleSheet, Text, ScrollView, View, Image, BackHandler, Alert,} from 'react-native'
import React, { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Home from '../componans/Home';
import { Entypo } from '@expo/vector-icons';

const Page = ({navigation}) => {


  return (
    <LinearGradient colors={['#040306', '#131624' ]} style={{flex:1}}>
     <SafeAreaView>
      <ScrollView    horizontalScrollbar={false}
      verticalScrollbar={false}>
        <View style={{padding:10, flexDirection:"row", alignItems:"center", justifyContent:"flex-start", top:5}}>
          
              <Text style={{color:"white", fontSize:20, fontWeight:"800", marginLeft:6, marginBottom:6}}>Good morning</Text>  
         </View>

         <View style={{ marginHorizontal:12, marginVertical:4, flexDirection:"row", alignItems:"center", gap:10, top:3, }} >
                     <Pressable style={{backgroundColor:"#282828", padding:10, borderRadius:20 }}>
            <Text style={{color:"white"}}>
              All  
            </Text>
          </Pressable>

          <Pressable style={{backgroundColor:"#282828", padding:10, borderRadius:30 }}>
            <Text style={{color:"white"}}>
              Musice
            </Text>
          </Pressable>

          <Pressable style={{backgroundColor:"#282828", padding:10, borderRadius:30 }}>
            <Text style={{color:"white"}}>podcasts & shows</Text>
          </Pressable>
         </View>    

           <Text style={{color:"white",marginLeft:13, marginTop:30, fontSize:25, fontWeight:"800", }}>Recently played</Text>
           
            
          <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}} >
        <Pressable style={{width:100, height:130, marginLeft:9, justifyContent:"center", alignItems:"center" }} 
        onPress={() => navigation.navigate(Amr)} >
          <Image  style={{borderRadius:4, width:115, height:115, marginLeft:20, top:16}} source={require('../../assets/11.jpg')}/>
        </Pressable>  

        <Pressable style={{width:100,  height:130,   justifyContent:"center", alignItems:"center", marginRight:90 }}  >
          <Image  style={{borderRadius:4, width:115, height:115, marginRight:40, top:14}} source={require('../../assets/large.jpg')}/>  
        </Pressable>  
     </View>
        
          <Text style={{color:"white", fontSize:16, fontWeight:"400", alignItems:"center", textAlign:"center", top:9, marginLeft:10  }}>
          Mohamed                                                               
          </Text>
         
          <Text style={{color:"white", fontSize:16, fontWeight:"400", textAlign:"center", marginLeft:40, marginVertical:8 }}>
          Ramadan max                                                               
          </Text>


      

        
<View style={{marginLeft:1, alignItems:"flex-start", flexDirection:"column", top:-49, paddingHorizontal:4, }}>
          <Text style={{color:"white", fontSize:17, fontWeight:"400" }}> Amr Diab Mix</Text>

</View>
<Text style={{color:"white", fontSize:25, fontWeight:"700", marginLeft:4}}> Shows to try </Text>


      <ScrollView    horizontalScrollbar={false}
      verticalScrollbar={false}>
        <Home  /> 
        </ScrollView>  
       

      </ScrollView>
     </SafeAreaView>
    </LinearGradient>
    
  )
}

export default Page

const styles = StyleSheet.create({
  search:{
    padding:10,
    backgroundColor:"gray"
  }
})