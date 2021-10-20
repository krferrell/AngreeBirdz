import React from "react";
import { Button, StyleSheet } from "react-native";

const PauseButton = ({ setGameState }) => {
    return(
        <Button 
            style={styles.pauseButton} 
            onPress={() => setGameState("PAUSE")} 
            title={'X'}
        ></Button>
    )
};


const styles = StyleSheet.create({
    pauseButton: {
        height: 10,
        width: 10,
    }
})

export default PauseButton;