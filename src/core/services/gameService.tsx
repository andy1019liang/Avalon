import { CharacterEnum, CharacterMap, getGoodBadCharacterCounts, goodAndBadCharactersMap, ICharacter } from "../character";
import { GameConfig } from "../gameConfig";
import { playerMissionMap } from "../mission";

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
    const playerCount = gameConfig.playerCount;
    const goodAndBadCharacterCount = getGoodBadCharacterCounts(playerCount);
    let characters: ICharacter[] = [];
    let goodPlayerCount = 0;
    let badPlayerCount = 0;
    let i = 0;

    characters.push(CharacterMap[CharacterEnum.Merlin]);
    characters.push(CharacterMap[CharacterEnum.Assassin]);

    goodPlayerCount++;
    badPlayerCount++;

    if(gameConfig.usePercival){
        characters.push(CharacterMap[CharacterEnum.Percival]);
        goodPlayerCount++;
    }

    if(gameConfig.useMorgana){
        characters.push(CharacterMap[CharacterEnum.Morgana]);
        badPlayerCount++;
    }

    if(gameConfig.useMordred){
        characters.push(CharacterMap[CharacterEnum.Mordred]);
        badPlayerCount++;
    }

    if(gameConfig.useOberon){
        characters.push(CharacterMap[CharacterEnum.Oberon]);
        badPlayerCount++;
    }

    if(gameConfig.useLadyOfTheLake){
        characters.push(CharacterMap[CharacterEnum.LadyOfTheLake]);
        goodPlayerCount++;
    }

    while(goodPlayerCount < goodAndBadCharacterCount.good){
        characters.push(CharacterMap[CharacterEnum.LoyalServantOfArthur]);
        goodPlayerCount++;
    }

    while(badPlayerCount < goodAndBadCharacterCount.bad){
        characters.push(CharacterMap[CharacterEnum.MinionOfMordred]);
        badPlayerCount++;
    }
    characters = shuffle(characters);
    return characters;
}

export function generateMission(playerCount: number){
    return playerMissionMap[playerCount];
}