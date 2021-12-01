import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Dimensions, StyleSheet,  } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeGame } from '../redux/gameState';
import { resetLives } from '../redux/livesState';
import { saveIndex } from '../redux/gameIndexState';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

let screenWidth = Dimensions.get("screen").width;
let screenHeight = Dimensions.get("screen").height;

const MenuModal = () => {

    const gameState = useSelector(state => state.gameState.value);
    const gamesArray = useSelector(state => state.gamesArray.value);
    const gameIndex = useSelector(state => state.gameIndex.value);

    const dispatch = useDispatch();

    const navigation = useNavigation();
    const route = useRoute();

    const fromGameSelect = route.params.fromGameSelect
    const chosenGameKey = route.params.chosenGame

    console.log("game array length", gamesArray.length)
    console.log("game index plus 1", gameIndex + 1)

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
                    gameState === 'PAUSE' &&
                    <Pressable
                        style={styles.playButton} 
                        onPress={() => {dispatch(changeGame("PLAY"))}}
                    >
                        <Text style={[styles.modalText, styles.addShadow]}>Resume</Text> 
                    </Pressable> 
                }

                {
                    (gameState === 'LOSE' || gameState === 'WIN') &&
                    (
                        // If the game is selected from the game select screen, at the end of the game the modal will ask if the player wants to replay the game 
                        fromGameSelect ?
                        <Pressable
                                style={styles.playButton} 
                                onPress={() => {
                                    dispatch(resetLives())
                                    dispatch(changeGame("PLAY"))
                                    dispatch(saveIndex(0))
                                        navigation.reset({
                                            index: 0,
                                            routes: [
                                                { name: 'Level Select' },
                                                {
                                                    name: 'Random Game Select',
                                                    params: { fromGameSelect: true, chosenGame: chosenGameKey },
                                                },
                                            ],
                                        })
                                }}
                        >
                            <Text style={[styles.modalText, styles.addShadow]}>Replay</Text>
                        </Pressable> :
                        // If not from the game select screen the modal will only ask to replay if you pass the final game
                        gamesArray.length === (gameIndex + 1) ?
                        <Pressable
                            style={styles.playButton} 
                            onPress={() => {
                                dispatch(resetLives())
                                dispatch(changeGame("PLAY"))
                                dispatch(saveIndex(0))
                                navigation.reset({
                                    index: 0,
                                    routes: [
                                        { name: 'Main Menu' },
                                        {
                                            name: 'Random Game Select',
                                            params: { fromGameSelect: false },
                                        },
                                    ],
                                })
                            }}
                        >
                            <Text style={[styles.modalText, styles.addShadow]}>Replay</Text>
                        </Pressable> :
                        <Pressable
                            style={styles.playButton} 
                            onPress={() => {
                                dispatch(changeGame("PLAY"))
                                dispatch(saveIndex(gameIndex + 1))
                            }}
                        >
                            <Text style={[styles.modalText, styles.addShadow]}>Continue</Text>
                        </Pressable>
                    )
                }

                <Pressable onPress={() => {
                    dispatch(changeGame("PLAY"))
                    fromGameSelect ?
                    navigation.navigate('Main Menu') :
                    navigation.goBack();
                }}>
                    <Text style={[styles.modalText, styles.addShadow]}>Home Page</Text>
                </Pressable>

                <Pressable onPress={() => {
                    dispatch(changeGame("PLAY"))
                    fromGameSelect ?
                    navigation.goBack() :
                    navigation.navigate('Level Select', { fromModal: true })
                }}>
                    <Text style={[styles.modalText, styles.addShadow]}>Level Select Page</Text>
                </Pressable>
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