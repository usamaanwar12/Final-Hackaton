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
        <View style={styles.input}>
            <EvilIcons name="search" size={45} color="black" />
            <View style={{flex: 1}}>
                <TextInput placeholder="Search Your Product" style={{fontSize:18,color:"black"}} />
            </View>
        </View>
        <Text style={styles.title}>
        Categories
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <ImageBackground 
                imageStyle={{borderRadius: 12}}
                style={styles.categoryImage}
                source={require("../../assest/food-image.png")}
                >
                    <Text style={styles.imageTitle}>Food</Text>

                </ImageBackground>
                <ImageBackground 
                imageStyle={{borderRadius: 12}}
                style={styles.categoryImage}
                source={require("../../assest/beans.png")}
                >
                    <Text style={styles.imageTitle}>Beans</Text>

                </ImageBackground>
                <ImageBackground 
                imageStyle={{borderRadius: 12}}
                style={styles.categoryImage}
                source={require("../../assest/food-image.png")}
                >
                    <Text style={styles.imageTitle}>Food</Text>

                </ImageBackground>
        </ScrollView>
        <Text style={styles.title}>Product</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ marginLeft: 20}}>
                <Image
                    style={styles.productImage}
                    source={require("../../assest/cowpea.jpg")}
                />
            </View>
            <View style={{ marginLeft: 20}}>
                <Image
                    style={styles.productImage}
                    source={require("../../assest/cowpea.jpg")}
                />
            </View>
        </ScrollView>
        <Text style={styles.title}>Best Sell</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ marginLeft: 20}}>
                <Image
                    style={styles.productImage}
                    source={require("../../assest/cowpea.jpg")}
                />
            </View>
            <View style={{ marginLeft: 20}}>
                <Image
                    style={styles.productImage}
                    source={require("../../assest/cowpea.jpg")}
                />
            </View>
        </ScrollView>
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
        color: "black",
    },
    topIcon:{
        height: 120,
        marginLeft: "4%",
        paddingTop: 12,
    },
    categoryImage:{
        height: 100,
        marginLeft: 20,
        width: 160,
        marginTop: "4%",
        justifyContent:"center",
        alignItems:"center",
        elevation: 20,
    },
    productImage:{
        height: 100,
        width: 160,
        borderRadius: 10,
        marginBottom: 12,
        marginTop: 12,
    },
    productText:{
        fontSize: 18,
    },
    imageTitle:{
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    input:{
        height:55,
        width:"85%",
        elevation: 12,
        flexDirection: "row",
        marginLeft: "4%",
        alignItems: "center",
        backgroundColor: "white",
    }
});

export default Homescreen;