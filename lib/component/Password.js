import React, {useState} from "react";
import { TextInput, StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Password = (props)=>{
    const [visible , setVisible]= useState(true);
    return(
        <View style={styles.container}> 
            <View style={{
                flex: 1,
                borderBottomColor: "#f8f8f8",
                borderBottomWidth: 3,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                  <TextInput
                  placeholder={props.placeholder}
                  name={props.name}
                  id={props.id}
                  value={props.value}
                  autoCorrect={props.autoCorrect}
                  onChangeText={props.onChangeText}
                  onFocus={props.onFocus}
                  secureTextEntry={visible}
                  keyboardType={props.keyboardType}
                  />  
                  <TouchableOpacity activeOpacity={0.5} onPress={()=>{
                    setVisible(!visible);
                  }}>
                    <MaterialIcons name={visible?"visibility":"visibility-off"}/>
                  </TouchableOpacity>
            </View>
        </View>    
    );
}


const styles = StyleSheet.create({
   
    container:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12,
    }
})


export default Password;