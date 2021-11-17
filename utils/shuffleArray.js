import randomPick from './random';

const shuffleArray = (array) => {
    let currentIndex = array.length;
    let randomIndex;

    let gamesListPosition = [...Array(array.length).keys()];

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = randomPick(currentIndex);
        currentIndex--;

        // And swap it with the current element.
        // Visualization here https://bost.ocks.org/mike/shuffle/
        [gamesListPosition[currentIndex], gamesListPosition[randomIndex]] = [gamesListPosition[randomIndex], gamesListPosition[currentIndex]];
    };

    return gamesListPosition;
}

export default shuffleArray;