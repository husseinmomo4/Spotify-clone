import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'


const Press = ({titlee,}) => {
  return (
      <Pressable  style={{
            backgroundColor: "#131624",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            flexDirection:"row",
            alignItems:"center",
            marginVertical:7,
            borderColor:"#C0C0C0",
            borderWidth:0.8,
            height:40
          }}>
            <Text style={{fontWeight:"500", color:"white" , textAlign:"center", }}>
                {titlee}
            </Text>
            
          </Pressable>

  )
}
const styles = StyleSheet.create({

    })

export default Press