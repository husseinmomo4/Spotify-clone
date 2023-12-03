import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Button = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
     <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
    height:55,
    width:"100%",
    backgroundColor:"blue",
    marginVertical: 10,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:100,
  },
  title:{
    color:"white",
    fontSize:18,
    fontWeight:"bold",
  },
})

export default Button