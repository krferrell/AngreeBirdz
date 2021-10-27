import React, { useEffect } from 'react';
import randomPick from './random';
import PauseButton from '../components/PauseButton';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { changeGame } from '../redux/gameState';

// Games
import GamePage from '../components/GameComponents/GamePage';
import KGamePage from '../components/kennyGame/KGameEngine';

export let gamesList = [
    <GamePage name='Knight Slayer' />, 
    <KGamePage name='Bananas for Bananas' />,
];

const randomGameSelect = () => {

    let game;

    const dispatch = useDispatch();
    const location = useLocation()
    const { chosenGame } = location.state


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
                <PauseButton />
            </>
        )
    }

    return (<>{chooseGame()}</>)
}

export default randomGameSelect;