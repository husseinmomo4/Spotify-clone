import { View, StyleSheet, Image, StatusBar, TouchableOpacity, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


const NFTImage = ({NFTData, image}) => {
  const navigation = useNavigation()
  const press = () => {
    navigation.navigate('NFTdetails', {NFTData})
  }

  return (
    <View style={{padding:12}}>
      <TouchableOpacity onPress={press}> 
         <Image source={NFTData.image}  style={{width:160, height:160, borderRadius:10 ,marginRight:-4 }}/>
      </TouchableOpacity>
      <Text>khuhuhi</Text>

      </View>
  );
};

export default NFTImage