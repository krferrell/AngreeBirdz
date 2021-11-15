import React, { useEffect } from 'react';
import randomPick from './random';
import PauseButton from '../components/PauseButton';
import { useDispatch } from 'react-redux';
import { changeGame } from '../redux/gameState';

// Games
import CatchRuler from '../components/CatchRuler/GamePage';
import KGamePage from '../components/kennyGame/KGameEngine';

export let gamesList = [
    <CatchRuler name='Catch the Ruler' />, 
    <KGamePage name='Bananas for Bananas' />,
];

const randomGameSelect = ({ route, navigation }) => {

    let game;
    let index;

    const dispatch = useDispatch();

    const chosenGame = route.params.chosenGame


    useEffect(() => {
        index = null;
        game = null;
        dispatch(changeGame("PLAY"));
    }, [])

    const shuffleArray = (array) => {
        let currentIndex = array.length;
        let randomIndex;

        let gamesListPosition = [...Array(array.length).keys()];

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = randomPick(currentIndex);
            currentIndex--;

            // And swap it with the current element.
            // Visualization here https://bost.ocks.org/mike/shuffle/
            [gamesListPosition[currentIndex], gamesListPosition[randomIndex]] = [gamesListPosition[randomIndex], gamesListPosition[currentIndex]];
        }

        return gamesListPosition;
    }

    const chooseGame = () => {
        let randomNumber;
        let randomizedGameArray;

        game = chosenGame;

        if(game === null){

            randomNumber = randomPick(gamesList.length);
            randomizedGameArray = shuffleArray(gamesList);
            index = 0;  

            return (
                <>
                    {gamesList[randomizedGameArray[index]]}
                    <PauseButton index={index} />
                </>
            );

        }else{

            randomNumber = game;

            return (
                <>
                    {gamesList[randomNumber]}
                    <PauseButton navigation={navigation} />
                </>
            );
        };
    };

    return (
        <>{chooseGame()}</>
    );
};

export default randomGameSelect;