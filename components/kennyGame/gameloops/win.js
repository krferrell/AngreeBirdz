import { Dimensions } from "react-native";

let screenHeight = Dimensions.get("screen").height;
let screenWidth = Dimensions.get("screen").width;

export const checkWin = (entities) => {
  let bananas = entities.bananas;
  if (
    bananas.position[0] > screenHeight / 2 - 20 &&
    bananas.position[0] < screenHeight / 2 + 55 &&
    bananas.position[1] > screenWidth - 100
  ) {
    console.log("you win");
  }
  return entities;
};
