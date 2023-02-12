import React from "react";
import { TextInput, StyleSheet, View } from "react-native";


const Input = (props)=>{
    return(
        <View style={styles.container}> 
            <View style={{
                flex: 1,
                borderBottomColor: "#f8f8f8",
                borderBottomWidth: 3,
                
            }}>
                  <TextInput
                  placeholder={props.placeholder}
                  name={props.name}
                  id={props.id}
                  value={props.value}
                  autoCorrect={props.autoCorrect}
                  onChangeText={props.onChangeText}
                  onFocus={props.onFocus}
                  secureTextEntry={false}
                  keyboardType={props.keyboardType}
                  />  
            </View>
        </View>    
    );
}


const styles = StyleSheet.create({
    input:{
        width: "100%",
        flexDirection: "row",
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F2F2F2",
        paddingLeft: 12,
    },
    container:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12,
    }
})


export default Input;