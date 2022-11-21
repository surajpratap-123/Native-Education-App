import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity,Image } from "react-native";
import Course from "./Course";


const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Course")}> 
        {/* <Text> Course </Text> */}
        <Image style ={styles.iconsstyle}
        source={{
          uri:"https://img.icons8.com/stickers/90/000000/training.png"
        }} />
        </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("About")}> 
        {/* <Text> About </Text> */}
        <Image style ={styles.iconsstyle}
        source={{
          uri:"https://img.icons8.com/stickers/100/000000/about.png"
        }} />
        </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("UserData")}> 
        {/* <Text> Student </Text> */}
        <Image style ={styles.iconsstyle}
        source={{
          uri:"https://img.icons8.com/stickers/100/000000/conference.png"
        }} />
        </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Contact")}> 
        {/* <Text> Contact </Text> */}
        <Image style ={styles.iconsstyle}
        source={{
          uri:"https://img.icons8.com/stickers/100/000000/phone-office.png"
        }} />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  iconsstyle:{
    width:"50%",
    height:50,
    aspectRatio:1,
    paddingVertical:20,
  }

})
export default Menu;