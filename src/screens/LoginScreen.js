import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Input from '../Project/Input';
import Button from '../Project/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import AlertNotification, { ALERT_TYPE } from 'react-native-alert-notification';
import { ScrollView } from 'react-native';

const LoginScreen = ({navigation}) => {

 const[inputs, setInputs] = React.useState({
    email:"",
    password:"",
 });
 const [errors, setErrors] = React.useState({});

 const validate = async () => {
    let isValid = true;

    if(!inputs.email) {
    handleError("please Enter a Email Address",
    "email");
    isValid = false;}

        if(!inputs.password) {
          handleError("please Enter a Password",
          "Password");
          isValid = false;
        }

     if (isValid) login();
      };
      
      const handleOnChange = (text, input) => {
        setInputs((prevState) => ({ ...prevState, [input] :
           text }))
      };

      const handleError = (text, input) => {
        setErrors((prevState) => ({ ...prevState, [input] :
           text }))
      };

      const login = async () => {
       // This should be replaced with a function that communicates with your server
       // and retrieves the stored user data. For this example, we will assume the
       // email and password match the stored user data.
        const user = { email: 'user@example.com', password: 'password' };

        if (user.email === inputs.email && user.password === inputs.password) {
          // Clear the inputs and errors
          setInputs({ email: '', password: '' });
          setErrors({});

          // Navigate to the Page component
          navigation.navigate("Page");
        } else {
          Dialog.show({
            type: ALERT_TYPE.DANGER,
            title: 'ERORR',
            textBody: 'Incorrect Username/Password',
            button: 'close',
          });
        }
      };

  return (
    <SafeAreaView style={{flex:1, backgroundColor:"white", }}>
      <AlertNotificationRoot>
      <ScrollView contentContainerStyle={{paddingTop:30, paddingHorizontal: 20,}}>
        <View>
          <Input 
       label="Email Address"
        iconName="user"
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

        <Button title="Login" onPress= {() => {validate()}} />
        

        <Text onPress={() => navigation.navigate("RegisterScreen")}  > Don t have an Account? Register </Text>
              </View>
  </ScrollView>
      </AlertNotificationRoot>
    </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
 },
});

export default LoginScreen;