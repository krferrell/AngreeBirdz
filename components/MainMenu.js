import React from 'react';
import { Text } from 'react-native';
import { Link } from 'react-router-native';

const MainMenu = () => {
    return (
        <Link to='/gamepage'>
            <Text >Start</Text>
        </Link>
    )
}

export default MainMenu;