import { View, Text } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Logout = ({ onPress = () => {} }) => {
  const navigation = useNavigation(); 
    const handleLog =() => {
       AsyncStorage.getItem("isLoggedIn")
        .then(() => {
        navigation.navigate("HomeScreen")
        })
    }
  return (
    <View>
        <Entypo name="log-out" size={24} color="red"  onPress={handleLog}/>

    </View>
  )
}

export default Logout