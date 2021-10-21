import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeGame } from '../redux/gameState';
import { Pressable, StyleSheet, Image, Dimensions } from "react-native";
import MenuModal from './MenuModal';
import pauseBtn from '../assets/pause.png';

let screenWidth = Dimensions.get("screen").width;

const PauseButton = () => {

    const gameState = useSelector(state => state.gameState.value);

    const dispatch = useDispatch();

    return(
        <>
            {gameState === "PLAY" ?
                <Pressable 
                    style={styles.pauseBtn} 
                    onPress={() => {
                        dispatch(changeGame('PAUSE'))
                    }}
                >
                    <Image source={pauseBtn} style={styles.pauseBtnImg} />
                </Pressable> : 
                <MenuModal />
            }
        </>
    );
};


const styles = StyleSheet.create({
    pauseBtn: {
        backgroundColor: 'white',
        height: 40,
        width: 40,
        position: 'absolute',
        top: 10,
        left: screenWidth - 160
    },
    pauseBtnImg: {
        height: 40,
        width: 40,
    }
});

export default PauseButton;