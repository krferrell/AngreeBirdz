import React from 'react';
import { Image } from 'react-native';
import monkeySplash from '../../assets/monkeyGame/MonkeySplash.png';

const MonkeySplash = () => {
    return(
        <Image 
            source={monkeySplash} 
            style={{
                resizeMode: "stretch",
                position: 'absolute',
                height: 250,
                width: 350,
                right: 0,
            }}
        />
    )
}

export default MonkeySplash;