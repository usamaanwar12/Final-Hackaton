import React, {useState} from "react";
import { View, Text,StyleSheet,Image } from "react-native";
import Colors from "../../constant/color";
import Input from "../../component/Input";
import Password from "../../component/Password";
import MainButton from "../../component/Mainbutton";




const SignUp=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");

    const validate=()=>{
      const  RegExp=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if(password == "" && email =="" && fullname=="" ){
         alert("All field are empty")

        }else if(fullname== ""){
            alert("Fullname is empty")
        }
        else if(!RegExp.test(email)){
            alert("email is incorrect")
            
        }else if(password== ""){
            alert("password is empty")
        }else{
            alert("Successfully Sign Up")
        }
    }




        return(
            <View style={styles.container}>
                <View style={styles.center}>
                <Image source={require("../../assest/logo.jpg")} style={styles.imageTop} />
                <Text style={styles.title}>SIGN UP</Text>
                </View>
                <View style={styles.centerContainer}>
                <Input
                        placeholder={"Fullname"}
                        id={"fullname"}
                        name={"fullname"}
                        value={fullname}
                        onChangeText={(text)=>setFullname(text)}

                    />
                    <Input
                        placeholder={"Email"}
                        id={"email"}
                        name={"email"}
                        value={email}
                        onChangeText={(text)=>setEmail(text)}

                    />
                    <Password
                        placeholder={"Password"}
                        id={"password"}
                        name={"password"}
                        value={password}
                        onChangeText={(text)=>setPassword(text)}
                        
                    />
                    <MainButton 
                    onPress={()=>{
                        validate();
                    }}
                    title="SIGN UP"
                    />
                    <Text style={styles.forgetPassword} >
                        <Text style={{color:"black"}}>I have already an Account</Text>
                        LOG IN
                    </Text>
                </View>
            </View>
        );
}
const styles=StyleSheet.create({
    imageTop:{
        height : 100,
        width : 100,
        borderRadius : 15
    },
    container:{
        paddingHorizontal: 36,
        alignItems: "center",
        flex: 1,
        paddingTop: "15%",
        justifyContent: "center",
        backgroundColor: "white",   
    },
    centerContainer:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: "8%",
    },
    title:{
        fontSize: 25,
        color:Colors.accentColor,
    },
    forgetPassword:{
        marginBottom: 12,
        color: Colors.primaryColor,
        marginTop: "20%",
        fontWeight: "bold",

    },
    center:{
        alignItems: "center",
        justifyContent: "center",
    }
})


export default SignUp;