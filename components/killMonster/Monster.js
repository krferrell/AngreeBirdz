import React from "react";
import { Image } from "react-native";
import monster from '../../assets/killMonster/monster.png';

const Monster = ({ position, size}) => {
    return (
        <Image 
            source={monster} 
            style={{ 
                position: "absolute", 
                resizeMode: "contain",
                bottom: position[0], 
                left: position[1],
                height: size[0],
                width: size[1]
            }} 
        />
    )
};

export default Monster;