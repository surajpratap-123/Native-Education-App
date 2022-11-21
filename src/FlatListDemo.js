import React from "react";
import { FlatList, StyleSheet ,Text} from "react-native";

const FlatListDemo = ()=>{
    const names =[{ name: "suraj",},
{name: "vinod",},
{name: "vinod",},
];
    return(
        <FlatList 
        
        data={names}
            renderItem={(Element) =>{
                return <Text style={styles.textStyle}> {Element.item.name}</Text>
            }}
        />

    );
};
const styles =StyleSheet.create({
    textStyle: {
        fontSize:40,
        padding: 30,
        backgroundColor: "blue",
         margin: 20,
         color: "white",
    },
    
});

export default FlatListDemo;