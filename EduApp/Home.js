import React from "react";
import { View, Text, StyleSheet, Image } from "react-native"
import Menu from "../src/Menu";


const Home = () => {

  const description = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
  return (<View style={styles.maincontainer}>
    <View style={styles.hometop}>
      <Image style={styles.headerimage}
        resizeMode="contain"
        source={require("../assets/it.webp")} />
      <Text style={styles.mainHeader} >Welcome to</Text>
      <Text style={[styles.mainHeader, {
        fontSize: 40,
        color: "#4c5dab",
        marginTop: 0,


      },]} > Free IT hub </Text>
      <Text style={styles.parastyle}>{description} </Text>


    </View>
    <View style={styles.menustyle}>
      <View style={styles.linestyle}></View>

      <Menu />
      <View style={[styles.linestyle, { marginVertical: 20, }]}></View>

    </View>
  </View>

  );
};

const styles = StyleSheet.create({
  maincontainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",

    textAlign: "center",
  },
  hometop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerimage: {
    height: 200,
    width: "100%",
    //aspectRatio:1,
    //  display:"flex",
    // //  alignItems:"stretch",
    marginTop: 80,
    paddingVertical: 50,
    borderRadius: 20,
  },
  mainHeader: {

    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
    fontFamily:"JosefinSans_400Bold",
  },
  parastyle: {
    paddingBottom: 50,
    fontSize: 19,
    color: "7d7d7d",
    marginTop: 25,
    fontFamily : "JosefinSans_400Regular",
    
  },
  linestyle: {
    borderWidth: 1,
    borderColor: "blue",
   
  },
  menustyle:{
fontFamily:"JosefinSans_400Regular",
color:"#7d7d7d",

  }

});
export default Home;