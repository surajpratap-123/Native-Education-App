import React  from "react";
import {StyleSheet,View,Text, TouchableOpacity} from "react-native";
import { useState } from "react";



const CounterNumber =()=>{


const[counter,setCounter]=useState(0);
    return(<View>
        <Text style={styles.counter}>{counter}

        </Text>
        <View style ={styles.button_group}> 
        <TouchableOpacity style={[styles.commonButton, styles.subtract]}
        onPress={()=>{setCounter(counter+10)}}
        >
            <Text style={styles.commontext}> +10</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.commonButton, styles.subtract]}
        onPress={()=>{setCounter(0)}}
        >
            <Text style={styles.commontext}> reset</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.commonButton, styles.add]}
        onPress={()=>{setCounter(counter-10)}}
        >
            <Text style={styles.commontext}> -10</Text>
        </TouchableOpacity>
        </View>
    </View>

    )
}

const styles=StyleSheet.create({
    textstyle :{ color: "red",},
    button_group: {
        width: "100%",
        display: "flex",
        alignItems: "center",
    },
    counter:{
        fontSize: 80,
        textAlign: "center",
        width:"100%",
        padding:20,
        marginTop: 60,
        marginBottom: 30,
    },
    commonButton: {
        alignItems: "center",
        justifyContent: "center",
    },
    commontext:{
        fontSize:25,
        color:"white",
        backgroundColor:"black",
        paddingVertical: 30,
       textAlign:"center",
       marginBottom: 15,
       margin: 4,
       width:100,


    }

})
export default CounterNumber;