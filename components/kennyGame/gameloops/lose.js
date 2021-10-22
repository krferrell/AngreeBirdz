export const checkLose = (entities) => {
  let bananas = entities.bananas;
  let monkey1 = entities.grabberMonkey1;
  let monkey2 = entities.grabberMonkey2;
  let monkey3 = entities.grabberMonkey3;

  if (
    (bananas.position[0] < monkey1.position[0] + 85 &&
      bananas.position[0] > monkey1.position[0] - 90 &&
      bananas.position[1] > monkey1.position[1] - 45 &&
      bananas.position[1] < monkey1.position[1] + 45) ||
    (bananas.position[0] < monkey2.position[0] + 85 &&
      bananas.position[0] > monkey2.position[0] - 90 &&
      bananas.position[1] > monkey2.position[1] - 45 &&
      bananas.position[1] < monkey2.position[1] + 45) ||
    (bananas.position[0] < monkey3.position[0] + 85 &&
      bananas.position[0] > monkey3.position[0] - 90 &&
      bananas.position[1] > monkey3.position[1] - 45 &&
      bananas.position[1] < monkey3.position[1] + 45)
  ) {
    console.log("you lose ");
  }

  return entities;
};
