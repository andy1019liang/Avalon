import { characterTypes } from "../character";
import { GameConfig } from "../gameConfig";

export function shuffle(array: any[]) {
    var currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

export function generateCharacters(gameConfig: GameConfig){
    let characters = [];
    let i = 0;

    if(gameConfig.useCharacter2){
        characters.push({
            type: characterTypes.CHARACTER2,
            id: i++
        });
    }
    for(i; i < gameConfig.playerCount; i++){
        
        characters.push({
            type: characterTypes.CHARACTER1,
            id: i
        });
    }
    characters = shuffle(characters);
    return characters;
}