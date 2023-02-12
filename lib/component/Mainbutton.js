import React from "react";
import Colors from "../constant/color";
import { Text, StyleSheet, View, TouchableNativeFeedback, } from "react-native";



const MainButton = (props)=>{
    return(
        <View style={styles.container}> 
            <TouchableNativeFeedback onPress={props.onPress}>
                <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                    {props.title}
                </Text>
                </View>

            </TouchableNativeFeedback>
        </View>    
    );
}


const styles = StyleSheet.create({
    buttonContainer:{
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primaryColor,
        marginTop: 12,
        elevation: 5,
    },
    container:{
       width: 300
    },
    buttonText:{
        color: Colors.buttonColor,
        fontWeight: "bold",
    }
})


export default MainButton;