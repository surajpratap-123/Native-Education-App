import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";

const UserData = () => {

  const[myData,setMyData]=useState([]);

  const UserData = async ()=>{

    try{
      const response=await fetch("https://thapatechnical.github.io/userapi/users.json") ;
      const realData= await response.json();
      setMyData(realData);
    }catch(error){
      console.log(error);
    }

  };
  useEffect(()=> UserData(),[])

  const showUserData =({item})=>{
    return( <View style={styles.card}>
             <View style={styles.imgContainer}>
              <Image
              style={styles.imgStyle}
              source={{uri:item.image}}
               />
              
             </View>
             <View>
             <View style={styles.bioDataContainer}>
             <Text style ={styles.bioData}> Bio-Data</Text>

             </View>

             <View style={styles.mainContain}>
              <Text style={styles.myName}> Name:{item.name}</Text>
              <Text style={styles.myName}> Email:{item.email}</Text>
              <Text style={styles.myName}> Mobile:{item.mobile}</Text>

             </View>

             </View>
    </View>

    )
  }

  return (
    <View >
             <Text style={styles.mainHeader}></Text>
             <FlatList
             keyExtractor={(item)=> item.id}
             data={myData}
             renderItem={showUserData}
             horizontal
             showsHorizontalScrollIndicator={false}
              />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    minHeight: "100%",
    paddingVertical: 50,
    backgroundColor: "#ebedee",
  },
  card: {
    width: 250,
    height: 350,
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: 20,
  },
  bioDataContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#353535",
    paddingVertical: 10,
    fontFamily: "JosefinSans_400Regular",
  },
  idNumber: {
    fontSize: 20,
    color: "rgba(255, 255, 255, 0.5)",
    fontFamily: "JosefinSans_400Regular",
    paddingRight: 10,
  },
  bioData: {
    fontSize: 30,
    color: "#fff",
    fontFamily: "JosefinSans_400Regular",
  },
  mainHeader: {
    fontSize: 30,
    color: "#a18ce5",
    textAlign: "center",
    fontFamily: "JosefinSans_400Regular",
  },
  imgContainer: {
    padding: 10,
  },
  imgStyle: {
    width: "100%",
    height: 180,
  },
  mainContain: {
    padding: 10,
    backgroundColor: "#353535",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  myName: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 10,
    alignSelf: "flex-start",
    textTransform: "capitalize",
    fontFamily: "JosefinSans_400Regular",
  },
})
export default UserData;