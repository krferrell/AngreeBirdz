import React, { useEffect } from 'react';
import randomPick from './random';
import PauseButton from '../components/PauseButton';

// Games
import GamePage from '../components/GameComponents/GamePage';
import KGamePage from '../components/kennyGame/KGameEngine';

const randomGameSelect = () => {
    
    let gamesList = [<GamePage />, <KGamePage />];

    const chooseGame = () => {
        let randomNumber = randomPick(gamesList.length);
        return gamesList[randomNumber]
    }

    return (
        <>
            {chooseGame()}
            <PauseButton />
        </>
    )
}

export default randomGameSelect;