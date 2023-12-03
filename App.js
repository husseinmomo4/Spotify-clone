import { View, Text, StatusBar, ActivityIndicator } from 'react-native'
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Page from './src/screens/HomeScrenn';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/Hello page';
import RegisterScreen from './src/screens/RegisterScreen';
import HUss from './src/componans/HUss';
import NFTdetails from './src/componans/NFTdetails';
import Logout from './src/Project/Logout';
import LikeSonge from './src/componans/LikeSonge';

const App = () => {
  

const Tab = createBottomTabNavigator(); 
const Stack = createNativeStackNavigator();

    function BottomTabs () {
  return (
    
        <Tab.Navigator screenOptions={{
          tabBarStyle:{
              backgroundColor:"rgba(0,0,0,0.1)",
              position: "absolute",
              bottom:0,
              left:0,
              right:0,
              elevation:19,              
              borderTopWidth:0 
          }
      }}>
        <Tab.Screen 
          name="Home"
          component={Page}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "white"},
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="white" />
              ) : (
                <AntDesign name="home" size={24} color="white" />
              ),
          }}
        />

        <Tab.Screen
          name="Thread"
          component={HUss}
          options={{
            tabBarLabel: "Create",
            tabBarLabelStyle: { color: "white" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="create" size={24} color="white" />
              ) : (
                <Ionicons name="create-outline" size={24} color="white" />
              ),
          }}
        />
      </Tab.Navigator>
      )
    }


      return (
      
        <>
        <StatusBar  style="light" />
      <NavigationContainer>
        <Stack.Navigator 
             screenOptions={{headerShown:false,}}  >
          <Stack.Screen name="bottomTabs" component={BottomTabs} />
          <Stack.Screen name="LikeSonge" component={LikeSonge}  />
          <Stack.Screen name="Page" component={Page}  />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
          <Stack.Screen name="NFTdetails" component={NFTdetails} />
          <Stack.Screen name="Logout" component={Logout}  />


        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App