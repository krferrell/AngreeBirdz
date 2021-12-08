import React from "react";
import { Dimensions, Image } from "react-native";
import gun from "../../assets/killMonster/gun.png";
import charge from "../../assets/killMonster/charge.png";

const Gun = ({ chargePosition, chargeSize }) => {

    let screenWidth = Dimensions.get("screen").width;

    return (
        <>
            <Image 
                source={charge} 
                style={{ 
                    position: "absolute", 
                    bottom: chargePosition[0], 
                    left: chargePosition[1],
                    width: chargeSize[0],
                    height: chargeSize[1],
                }} 
            />
            <Image 
                source={gun} 
                style={{ 
                    position: "absolute", 
                    bottom: -20, 
                    left: screenWidth / 6
                }} 
            />
        </>
    )
};

export default Gun;