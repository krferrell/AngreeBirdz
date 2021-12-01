import React, { useEffect } from 'react';
import shuffleArray from './shuffleArray';
import PauseButton from '../components/PauseButton';
import { useDispatch, useSelector } from 'react-redux';
import { changeGame } from '../redux/gameState';
import { saveArray } from '../redux/gamesArrayState';
import Life from '../components/Life';

// Games
import SquishRoach from '../components/SquishRoach/GamePage';
import KGamePage from '../components/kennyGame/KGameEngine';

export let gamesList = [
    <SquishRoach name='Squish the Roach' />, 
    <KGamePage name='Bananas for Bananas' />,
];

const randomGameSelect = ({ route }) => {

    let game;

    const dispatch = useDispatch();

    const randomizedGamesArray = useSelector(state => state.gamesArray.value);
    const gameIndex = useSelector(state => state.gameIndex.value);

    // This is used in the level select page to chose a specific minigame
    const chosenGame = route?.params?.chosenGame;
    const fromGameSelect = route?.params?.fromGameSelect;

    useEffect(() => {
        game = null;
        dispatch(changeGame("PLAY"));

        if(randomizedGamesArray != []){
            dispatch(saveArray(shuffleArray(gamesList)));
        };

    }, []);

    const chooseGame = () => {

        game = chosenGame;

        // Player playes the main game
        if(fromGameSelect){
            // Picking a specific game
            return (
                <>
                    {gamesList[game]}
                    <PauseButton />
                </>
            );
        }else{
            return (
                <>
                    {gamesList[randomizedGamesArray[gameIndex]]}
                    <PauseButton />
                    <Life />
                </> 
            );
        };
    };

    return (
        <>{chooseGame()}</>
    );
};

export default randomGameSelect;