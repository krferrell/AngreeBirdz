import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Dimensions, StyleSheet,  } from 'react-native';

let screenWidth = Dimensions.get("screen").width;
let screenHeight = Dimensions.get("screen").height;

const MenuModal = () => {


    return (
        <View style={ styles.modalBackground}>
        <Pressable
            style={styles.pauseButton} 
            onPress={() => setGameState("PAUSE")} 
            title={'Play'}
        ></Pressable>
            <Text style={styles.modalText}>helooooo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    modalBackground: {
        backgroundColor: 'rgba(0,0,0,0.3)', 
        height: screenHeight, 
        width: screenWidth
    },
    modalText: {
        position: 'absolute',
        top: screenHeight / 2,
        right: screenWidth / 2,
        color: 'red'
    },
    playButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        height: 10,
        width: 10,
    }
})

export default MenuModal;