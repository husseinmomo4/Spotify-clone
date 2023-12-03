import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';


const Input = ({ label, iconName, error, password, onFocus = () => {}, ...props }) => {
  const [hidenpass, sethidenpass] = React.useState 
  (password);
  const [isFocused, setIsFocused] = React.useState
  (false);

  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <View 
      style={[
        styles.input, { color: isFocused ? "darklue" : "powderlue"},
        ]}>

      <FontAwesome name={iconName} style={styles.icon} />
      <TextInput onFocus={() => {
        onFocus();
        setIsFocused(true);
      }} 
      onBlur={() => setIsFocused(false)}
      style={styles.textInput} secureTextEntry={hidenpass} 
      {...props}
      />

     {password && (<FontAwesome 
     onPress={() => sethidenpass(!hidenpass)} 
     name={hidenpass ? "eye" : "eye-slash"}
     style={styles.iconAya} 
     />)}
    </View>
    {error && <Text style={styles.textError}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginBottom: 20,
  },
  input: {
    backgroundColor: "lightcyan",
    height:55,
    flexDirection:"row",
    paddingHorizontal: 15,
    borderWidth: 0.75,
    alignItems: "center",
  },
  icon: {
    fontSize: 22,
    color: "darkblue", 
  },
  iconAya: {
    fontSize: 22,
    color: "darkblue", 
  },
  textInput: {
    flex:1,
    marginLeft:10,
  },
  textError: {
    marginTop: 7,
    color:"red",
    fontSize:13,

  }
})
export default Input 