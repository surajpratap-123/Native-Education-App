// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });




//============>>>>>>>>>>>> Jai shree shyam


import React from "react";
import { Text, StyleSheet, View } from "react-native";
// import FlatListDemo from "./src/FlatListDemo";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ImageView from "./src/ImagesPic";
import ImageFile from "./src/ImageFile";
import ChallingScrolling from "./src/ChallingScrolling";
import CounterNumber from "./src/Counter";
import Home from "./EduApp/Home";
import About from "./src/About";
import Course from "./src/Course";
import UserData from "./src/UserData";
import Contact from "./src/Contact";
import AppLoading from "expo-app-loading";
import { 
 
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_700Bold,
 } from '@expo-google-fonts/josefin-sans'
 import { useFonts } from 'expo-font';

 import { 
  
  NunitoSans_600SemiBold,
NunitoSans_600SemiBold_Italic,
NunitoSans_700Bold,
  } from '@expo-google-fonts/nunito-sans'
const App = () => {

   let [fontsLoaded] = useFonts({
    "JosefinsSans":require("../Awesome/assets/font/JosefinSans-SemiBold.ttf"),
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    NunitoSans_600SemiBold_Italic,
    NunitoSans_700Bold,
    JosefinSans_700Bold,
     NunitoSans_600SemiBold,
      });
  // if(!fontsLoaded){
  //   <AppLoading />
 // }
  const Stack = createNativeStackNavigator();


  const getFullName = (first, second, third) => {
    return `my name is ${first} ${second}`;
  }
  return (<NavigationContainer>
       
    {/* <Text style={styles.Textstyle}> hello world {getFullName("suraj","pratap")}</Text> */}
    {/* <FlatListDemo /> */}
    {/* <ImageView /> */}
    {/* <ImageFile /> */}
    {/* <ChallingScrolling /> */}
    {/* <CounterNumber /> */}
    
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="UserData" component={UserData} />
        <Stack.Screen name="Contact" component={Contact} />

      </Stack.Navigator>
    </NavigationContainer>
    


  )
}
const styles = StyleSheet.create({
  Textstyle: {
    margin: 100,
    color: "red",
  }
})
export default App