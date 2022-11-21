import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";


const ImageView =()=>{
    return(
  <View>
    <Text  >  how cool 🤠 these images are..... 👧 </Text>
    <Image
      
     source={require("../assets/kp.jpg")}></Image>
  </View>
    );
}

export default ImageView;