/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from "react";
// import { View } from "react-native";
// import { ToastAndroid } from "react-native";
import Login from "./lib/screens/auth_screen/login";
import SignUp from "./lib/screens/auth_screen/SignUp";
import Homescreen from "./lib/screens/homescreen/Homescreen";
const App = () =>{
  return(
    
    <>
      {/* <Login /> */}
      {/* <SignUp/> */}
      <Homescreen/>
      {/* <ToastAndroid ref={(ref)=> Toast.setRef(ref)} /> */}
    
    </>
  );
};











export default App;
