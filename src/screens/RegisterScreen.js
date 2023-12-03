import { View,Text,SafeAreaView, ScrollView,} from 'react-native'
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

import React from 'react'
import Input from '../Project/Input'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Button from '../Project/Button'
import { useNavigation } from '@react-navigation/native';
const RegisterScreen = () => {
  const navigation = useNavigation()
  const[inputs, setInputs] = React.useState({
    studno:"",
    email:"",
    fullname:"",
    phone:"",
    password:"",
    passwordConfirm:"" });

  const [errors, setErrors] = React.useState({});
    
    const validate = () => {
    console.log("validate!");
    console.log(inputs);
    let isValid = true;

    if(!inputs.studno) {
      handleError("please Enter a student Number",
      "studno");
      isValid = true;
    }
    if(!inputs.email) {
    handleError("please Enter a Email Address",
    "email");
    isValid = false;}
 
    if(!inputs.fullname) {
      handleError("please Enter a Full Name",
      "fullname");
      isValid = false;}

      if(!inputs.phone) {
        handleError("please Enter a Phone Number",
        "phone");
        isValid = false;}

        if(!inputs.password) {
          handleError("please Enter a Password",
          "Password");
          isValid = false;}

          if(!inputs.passwordConfirm) {
            handleError("please Enter a passwordConfirm",
            "passwordConfirm");
            isValid = false;}

            if (isValid) register();
  };
  
const register =() => {
console.log("register!")
console.log(inputs); 

AsyncStorage.setItem('userData', JSON.stringify(inputs));
console.log("User Successfully Created!")

Dialog.show({
  type: ALERT_TYPE.SUCCESS,
  title: 'Success',
  textBody: 'Congrats! this is dialog box success',
  button: 'close',
  onHide: () => {navigation.navigate("LoginScreen")},
})


};

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input] :
       text }))
  };
  const handleError = (text, input) => {
    setErrors((prevState) => ({ ...prevState, [input] :
       text }))
  };

  return (
    <SafeAreaView style={{flex:1, backgroundColor:"white", }}>
      <AlertNotificationRoot>
      <ScrollView contentContainerStyle={{paddingTop:30, paddingHorizontal: 20,}}>
        <Input
          label="Student Number" 
       iconName="id-badge"
          placeholder="Enter your Student Number"
          onChangeText={(text) => handleOnChange(text, "studno")}
       onFocus={() => handleError(null, "studno")}
       error={errors.studno}
       />
       <Input 
       label="Full Name"
        iconName="user"
        placeholder="Enter your Full Number" 
        onChangeText={(text) => handleOnChange(text, "fullname")}
        onFocus={() => handleError(null, "fullname")}
        error={errors.fullname}
       />
       <Input 
       label="Phone Number"
        iconName="mobile"
        placeholder="Enter your Phone Number" 
        onChangeText={(text) => handleOnChange(text, "phone")}
        onFocus={() => handleError(null, "phone")}
        error={errors.phone}
        />
       <Input 
       label="Email Address"
        iconName="envelope"
        placeholder="Enter your Email Address" 
        onChangeText={(text) => handleOnChange(text, "email")}
        onFocus={() => handleError(null, "email")}
        error={errors.email}
        />
       <Input 
       label="Password"
        iconName="key"
         password 
         placeholder="Enter your Password" 
         onChangeText={(text) => handleOnChange(text, "password")}
         onFocus={() => handleError(null, "password")}
         error={errors.password}
         />
       <Input 
       label="Confirm Password"
        iconName="key" 
        password 
        placeholder="Enter your Confirm Password" 
        onChangeText={(text) => handleOnChange(text, "passwordConfirm")}
        onFocus={() => handleError(null, "passwordConfirm")}
        error={errors.passwordConfirm}
        />
    
    <Button title="Register" onPress={validate}  />
       </ScrollView>
         
       </AlertNotificationRoot>

    </SafeAreaView>
   
  )
}

export default RegisterScreen