import React from "react";
import { Text } from "react-native";
import { xForce, yForce, xForceFinal, yForceFinal } from "./BirdMover";

const Bird = () => {
    return(
        <>
            <Text style={{ position: 'absolute', top: 10, left: 150}}>{parseInt(xForce * 1000)}</Text>
            <Text style={{ position: 'absolute', top: 25, left: 150}}>{parseInt(xForceFinal * 1000)}</Text>
            <Text style={{ position: 'absolute', top: 10, left: 200}}>{parseInt(yForce * 1000)}</Text>
            <Text style={{ position: 'absolute', top: 25, left: 200}}>{parseInt(yForceFinal * 1000)}</Text>
        </>
    )
}

export default Bird;