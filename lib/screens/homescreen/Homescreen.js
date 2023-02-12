import React from "react";
import { View, Text,StyleSheet,Image,ScrollView,ImageBackground,TextInput } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Homescreen=()=>{
    return(

        <ScrollView style={styles.container}>
        <View style={styles.topIcon}>
            <Entypo name="menu" size={50} color="black" />
        </View>

    </ScrollView>
);
}


const styles=StyleSheet.create({
    container:{
        backgroundColor: "#f8f8f8",
    },
    title:{
        fontSize: 24,
        marginTop: "12%",
        marginLeft: "4%",
        marginBottom: "4%",
        color: "grey",
    },
    topIcon:{
        height: 120,
        marginHorizontal: 24,
        paddingTop: 12,
    },
    categoryImage:{
        height: 180,
        marginLeft: 30,
        width: 280,
        marginTop: "4%",
        justifyContent:"center",
        alignItems:"center",
        elevation: 20,
    },
    productImage:{
        height: 320,
        width: 260,
        borderRadius: 10,
        marginBottom: 12,
        marginTop: 12,
    },
    productText:{
        fontSize: 18,
    },
    imageTitle:{
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },
    input:{
        height:70,
        width:"92%",
        elevation: 12,
        flexDirection: "row",
        marginHorizontal: 24,
        alignItems: "center",
        backgroundColor: "white",
    }
});

export default Homescreen;