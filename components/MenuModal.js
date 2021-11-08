import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Dimensions, StyleSheet,  } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeGame } from '../redux/gameState';
import { Link } from "react-router-native";

let screenWidth = Dimensions.get("screen").width;
let screenHeight = Dimensions.get("screen").height;

const MenuModal = () => {

    const gameState = useSelector(state => state.gameState.value);

    const dispatch = useDispatch();

    return (
        <View style={ styles.modalPageBackground}>
            <View style={ styles.modalContainer}>
                {
                    gameState === 'WIN' &&
                    <Text style={[styles.modalText, styles.winLoseText, styles.addShadow]}>You win!</Text>
                }

                {
                    gameState === 'LOSE' &&
                    <Text style={[styles.modalText, styles.winLoseText, styles.addShadow]}>You lose!</Text>
                }

                {
                    gameState === 'PAUSE' ? 
                    <Pressable
                        style={styles.playButton} 
                        onPress={() => dispatch(changeGame("PLAY"))}
                    >
                        <Text style={[styles.modalText, styles.addShadow]}>Resume?</Text> 
                    </Pressable> :
                    <Pressable
                        style={styles.playButton} 
                        onPress={() => {
                            dispatch(changeGame("PLAY"));
                        }}
                    >
                        <Text style={[styles.modalText, styles.addShadow]}>Replay?</Text>
                    </Pressable>
                }

                <Link to="/">
                    <Text style={[styles.modalText, styles.addShadow]}>Home Page</Text>
                </Link>
                <Link to="/levelselect">
                    <Text style={[styles.modalText, styles.addShadow]}>Level Select Page</Text>
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    modalPageBackground: {
        backgroundColor: 'rgba(0,0,0,0.3)', 
        height: screenHeight, 
        width: screenWidth
    },

    modalContainer: {
        display: "flex",
        backgroundColor: "#377F9D",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginLeft: "29%",
        marginTop: "1%",
        height: "95%",
        width: "40%",
        borderRadius: 85,
        flexDirection: "column",
        position: "absolute",

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },

    addShadow: {
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },

    modalText: {
        fontFamily: 'SchoolBell',
        fontSize: 35,
        padding: 5,
        color: "#fff",
        color: 'white',
    },

    winLoseText: {
        fontSize: 60,
        borderBottomWidth: 3,
        borderBottomColor: 'white',
    }
});

export default MenuModal;