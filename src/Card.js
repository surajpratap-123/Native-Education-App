import React from "react";
import { View ,Text, Image,StyleSheet } from "react-native";

const Card=(prop)=>{
    return(
        <View>
            <Text style={styles.textstyle}> {prop.text}</Text>
            <Image  style={styles.imgstyle} source={prop.img}/>
        </View>

    );
}
const styles= StyleSheet.create({
    textstyle:{
        display:"flex",
        alignItems:"center",

    },
    imgstyle:{
        width:200,
        height:100,
    },
})
export default Card;