import React, { Component } from "react";
import { View, Text, SafeAreaView, ImageBackground, StyleSheet } from "react-native";
import { IMG_LOADING } from "../scr/assets/images";
import scale from "../scr/constants/responsive";

export class LoadingScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={IMG_LOADING} style={styles.image}>
                    <Text style={styles.text}>A M</Text>
                    <Text style={styles.subtext}>G  E  N  E  R  A  T  E  M  U  S  I  C</Text>
                </ImageBackground>
            </SafeAreaView>
        );
    }
};

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },

    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        marginTop: scale(-70, 'w'), 
        fontSize: scale(55 , 'w'),
        fontWeight: 'bold', 
        color: 'black',
    },

    subtext: {
        fontSize: scale(20, 'w'),
        color: 'black'
    }
    
})
