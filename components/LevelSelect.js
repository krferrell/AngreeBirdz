import React, { useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import { gamesList } from '../utils/randomGameSelect';
import backgroundImg from '../assets/cloudBackground.png';
import arrow from '../assets/arrow.png'

let screenWidth = Dimensions.get("screen").width;
let screenHeight = Dimensions.get("screen").height;

const LevelSelect = ({ navigation, route }) => {

    // Sets up the pages of games variable and sets it to the right amount of pages depending on how many games there are and if there will be game pages with only one game
    let gamePages

    if(gamesList.length % 2 === 0){
        gamePages = gamesList.length / 2
    }else{
        gamePages = (gamesList.length / 2) + 1
    }

    const [ page, setPage ] = useState(1);

    const fromModal = route.params.fromModal 

    const gamesListView = () => {
        return (
            <View 
                style={{ 
                    display: 'flex', 
                    flexDirection: "row", 
                    alignItems: "center",
                    justifyContent: 'space-between'
                }}
            >
                {/* The arrow will render if the user isn't on page 1 */}
                {
                    page <= 1 ? 
                    null :
                    <Pressable onPress={() => setPage(page - 1)}>
                        <Image style={[styles.arrow, {transform: [{ rotate: "180deg" }]}]} source={arrow}/>
                    </Pressable>
                }
                {gamesList.map((game, key) => {
                    // Will render out only 2 games based on what page you are on
                    if((page - 1) * 2 === key || (page - 1) * 2 === key - 1){
                        return(
                            <Pressable
                                onPress={() => navigation.navigate('Random Game Select', { chosenGame: key, fromGameSelect: true })}
                                key={key}
                            >
                                <View 
                                    style={{ 
                                        display: 'flex', 
                                        flexDirection: "row", 
                                        alignItems: "center",
                                    }}
                                >
                                    <View 
                                        style={[
                                            styles.container, 
                                            styles.shadowBox, 
                                            styles.gameContainter,
                                        ]}
                                    >
                                        <Text 
                                            style={[
                                                styles.text, 
                                                styles.shadowText, 
                                                styles.gameText
                                            ]}
                                        >{game.props.name}</Text>
                                    </View>
                                </View>
                            </Pressable>
                        )
                    }
                })}
                {/* The arrow checks to see if you are on the last page */}
                {
                    page + 1 > gamePages ? 
                    null :
                    <Pressable onPress={() => setPage(page + 1)}>
                        <Image style={styles.arrow} source={arrow}/>
                    </Pressable>
                }
            </View>
        )
    }

    return (
        <ImageBackground source={backgroundImg} style={styles.background}>
            <View style={[styles.container, styles.shadowBox]}>
                <Text style={[styles.title, styles.shadowText]}>Practice Mode</Text>
                <View 
                    style={{ 
                        display: 'flex', 
                        flexDirection: "row", 
                        alignItems: "center", 
                        overflow: 'scroll'
                    }}
                >{gamesListView()}</View>
                <Pressable onPress={() => {
                    fromModal ?
                    navigation.navigate('Main Menu') :
                    navigation.goBack()
                }}>
                    <Text style={[styles.text, styles.shadowText, {paddingBottom: '1%'}]}>Back to home</Text>
                </Pressable>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    // code is used from the main page  and is repeated. Will refactor later
    background: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        height: screenHeight,
        width: screenWidth,
    },

    container: {
        display: "flex",
        backgroundColor: "#377F9D",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "1%",
        height: "95%",
        width: "80%",
        borderRadius: 65,
        flexDirection: "column",
        overflow: 'hidden'
    },
    
    title: {
        fontFamily: 'SchoolBell',
        fontSize: 50,
        paddingTop: "4%",
        textDecorationLine: "underline",
        color: "#fff",
    },
    
    gameContainter: {
        height: 200,
        width: 225,
        backgroundColor: 'lightblue',
        marginHorizontal: 10
    },

    gameText: {
        color: 'black',
        paddingTop: 10,
        fontSize: 20,
    },

    line: {
        backgroundColor: 'black',
        height: 5,
        width: 25,
    },

    text: {
        fontFamily: 'SchoolBell',
        color: "#fff",
        fontSize: 25,
        textDecorationLine: "underline",
    },

    shadowBox: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    
    shadowText: {
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },

    arrow: {
        height: 75,
        width: 75
    }
})

export default LevelSelect;
