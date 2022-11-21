import React from "react";
import { View } from "react-native";
import Card from "./Card";

const ImageFile=()=>{
    return(<View>
        <Card 
            text="this is my first text"
            img={require("../assets/kp.jpg")}
        />
        <Card 
            text="this is my second text"
            img={require("../assets/kp2.jpg")}
        />
    </View>

    );
}

export default ImageFile;