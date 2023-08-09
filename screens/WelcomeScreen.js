import React, { Component } from "react";
import { SafeAreaView, View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import scale from "../scr/constants/responsive";
import { IMG_LOGO } from "../scr/assets/images";

export class WelcomeScreen extends Component {
    render() {
        return (
            <SafeAreaView style = {styles.container}>
            <View style={styles.container1}>
                <ImageBackground source={IMG_LOGO} resizeMode='cover' style={styles.image}></ImageBackground>
                <Text style={styles.text}>A M</Text>
                <Text style={styles.subtext}>G  E  N  E  R  A  T  E  M  U  S  I  C</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.text1}>Welcome!</Text>
                <Text style={styles.subtext1}>You can generate music based on your music files. We hope you have the good experiences in this app.</Text>
                <View style={styles.subcontainer}>
                    <TouchableOpacity style={styles.buttonContainer1} 
                    onPress={()=> this.props.navigation.navigate('SignIn')}>
                        <Text style={styles.button1}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer2}
                    onPress={()=> this.props.navigation.navigate("SignUp")}>
                        <Text style={styles.button2}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
        );
    }
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container:
    {
        height: '100%',
    },
    
    container1:
    {
        flex: 0.6,
        alignItems: 'center',
    },

    container2: {
        flex: 0.4,
        borderTopEndRadius: scale(40, 'w'),
        borderTopStartRadius: scale(40, 'w'),
        backgroundColor: 'orange',
    },

    image: {
        height: scale(162, 'h'),
        width: scale(201, 'w'),
        marginTop: scale(71, 'h'),
    },

    text: {
        fontSize: scale(50 , 'w'),
        fontWeight: 'bold', 
        color: 'black',
    },

    subtext: {
        fontSize: scale(18, 'w'),
        color: 'black'
    },

    text1: {
        fontSize: scale(40 , 'w'),
        fontWeight: 'bold', 
        color: 'black',
        marginTop: scale(48, 'h'),
        marginLeft: scale(17, 'w'),
    },

    subtext1: {
        width: scale(305, 'w'),
        height: scale(65, 'h'),
        marginLeft: scale(17, 'w'),
        fontSize: scale(17,'w'),
        color: 'black',
        marginTop: scale(20, 'h'),
    },

    subcontainer: {
        flexDirection: 'row',
        marginTop: scale(20, 'h'),
        marginHorizontal: scale(22, 'w'),
    },

    buttonContainer1: {
        width: scale(137, 'w'),
        height: scale(52, 'h'),
        backgroundColor: 'black',
        borderRadius: scale(50, 'w'),
        alignItems: 'center',
        justifyContent: 'center',
    },

    button1: {
        color: 'white',
        fontSize: scale(20, 'w'),
        fontWeight: 'bold',
    },

    buttonContainer2: {
        width: scale(137, 'w'),
        height: scale(52, 'h'),
        backgroundColor: 'white',
        borderRadius: scale(50, 'w'),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: scale(44, 'w'),
    },

    button2: {
        color: 'black',
        fontSize: scale(20, 'w'),
        fontWeight: 'bold',
    }
})
