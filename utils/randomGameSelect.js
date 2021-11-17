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

    const dispatch = useDispatch();

    const chosenGame = route.params.chosenGame


    useEffect(() => {
        game = null;
        dispatch(changeGame("PLAY"));
    }, [])

    const chooseGame = () => {
        let randomNumber;
        game = chosenGame;
        
        if(game === null){
            randomNumber = randomPick(gamesList.length);
        }else{
            randomNumber = game
        }
        
        return (
            <>
                {gamesList[randomNumber]}
                <PauseButton navigation={navigation} />
            </>
        )
    }

    return (
        <>{chooseGame()}</>
    )
}

export default randomGameSelect;