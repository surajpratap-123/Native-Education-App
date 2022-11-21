import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";


const ChallingScrolling =()=>{
    const names=[
        { name: "Archive 81",
          year: "2022",
         Creator: "rebecca",
         Gerneric: "Horror",
        },
        { name: "Cheer",
        year: "2022",
       Creator: "djlkfjlbecca",
       Gerneric: "Horror, Thriller",
      },
      { name: "Cobra 1",
      year: "2022",
     Creator: "rebffecca",
     Gerneric: "Horror",
    },
    { name: " shivam 1",
    year: "2022",
   Creator: "kcmdkrebecca",
   Gerneric: "Horror, dangerous",
  },
    ];
    return(
        <View style={ StyleSheet.listStyle}>
            <FlatList
        style={ StyleSheet.listStyle}
        keyExtractor={(key) => { return key.name}}
        horizontal
        data ={names}
        renderItem ={ ({item}) =>{
            return <View>
                <Text style={styles.textStyle}>Name: {item.name}</Text>
                <Text style={styles.textStyle}>year: {item.year}</Text>
                <Text style={styles.textStyle}>Creator: {item.Creator}</Text>
                <Text style={styles.textStyle}>Gerneric: {item.Gerneric}</Text>
                
               


            </View>
        }}
        

         />
        </View>
    )
}

const styles= StyleSheet.create({
    listStyle:{
        textAlign:"center",
       margin:20,
       padding:5,
    },
    textStyle: {
        color: "white",
        padding: 10,
        
        fontSize: 30,
        backgroundColor: "#009688",
    },

})
export default ChallingScrolling;