import React from "react";
import { Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import heart from "../assets/heart.png";

const Life = () => {

    const lives = useSelector(state => state.livesIndex.value);

    return(
        <>
            { lives >= 1 && <Image source={heart} style={[styles.heart, { left: 10 }]} />}
            { lives >= 2 && <Image source={heart} style={[styles.heart, { left: 70 }]} />}
            { lives >= 3 && <Image source={heart} style={[styles.heart, { left: 130 }]} />}
        </>
    )
}

const styles = StyleSheet.create({
    heart: {
        resizeMode: 'stretch',
        position: 'absolute',
        bottom: 10,
        height: 50,
        width: 50,
    },
});

export default Life;