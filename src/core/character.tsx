import * as characterDefinition from '../../assets/data/character.json';

export enum CharacterEnum {
    LoyalServantOfArthur = 'Loyal Servant of Arthur',
    MinionOfMordred = 'Minion of Mordred',
    Merlin = 'Merlin',
    Assassin = 'Assassin',
    Percival = 'Percival',
    Mordred = 'Mordred',
    Morgana = 'Morgana',
    Oberon = 'Oberon',
    LadyOfTheLake = 'Lady of the Lake'
}

export enum SideType {
    GOOD = 1,
    BAD
}

export interface ICharacter {
    name: string;
    description: string;
    side: SideType;
    image: string;
}

type CharacterType = Record<CharacterEnum, ICharacter>;

export const CharacterMap = {
    [CharacterEnum.LoyalServantOfArthur]: {
        name: characterDefinition.loyalServantOfArthur.name,
        description: characterDefinition.loyalServantOfArthur.description,
        side: characterDefinition.loyalServantOfArthur.isGood ? SideType.GOOD : SideType.BAD,
        image: characterDefinition.loyalServantOfArthur.image
    } as ICharacter,
    [CharacterEnum.MinionOfMordred]: {
        name: characterDefinition.MinionOfMordred.name,
        description: characterDefinition.MinionOfMordred.description,
        side: characterDefinition.MinionOfMordred.isGood ? SideType.GOOD : SideType.BAD,
        image: characterDefinition.MinionOfMordred.image
    } as ICharacter,
    [CharacterEnum.Merlin]: {
        name: characterDefinition.Merlin.name,
        description: characterDefinition.Merlin.description,
        side: characterDefinition.Merlin.isGood ? SideType.GOOD : SideType.BAD,
        image: characterDefinition.Merlin.image
    } as ICharacter,
    [CharacterEnum.Assassin]: {
        name: characterDefinition.Assassin.name,
        description: characterDefinition.Assassin.description,
        side: characterDefinition.Assassin.isGood ? SideType.GOOD : SideType.BAD,
        image: characterDefinition.Assassin.image
    } as ICharacter,
    [CharacterEnum.Percival]: {
        name: characterDefinition.Percival.name,
        description: characterDefinition.Percival.description,
        side: characterDefinition.Percival.isGood ? SideType.GOOD : SideType.BAD,
        image: characterDefinition.Percival.image
    } as ICharacter,
    [CharacterEnum.Morgana]: {
        name: characterDefinition.Morgana.name,
        description: characterDefinition.Morgana.description,
        side: characterDefinition.Morgana.isGood ? SideType.GOOD : SideType.BAD,
        image: characterDefinition.Morgana.image
    } as ICharacter,
    [CharacterEnum.Mordred]: {
        name: characterDefinition.Mordred.name,
        description: characterDefinition.Mordred.description,
        side: characterDefinition.Mordred.isGood ? SideType.GOOD : SideType.BAD,
        image: characterDefinition.Mordred.image
    } as ICharacter,
    [CharacterEnum.Oberon]: {
        name: characterDefinition.Oberon.name,
        description: characterDefinition.Oberon.description,
        side: characterDefinition.Oberon.isGood ? SideType.GOOD : SideType.BAD,
        image: characterDefinition.Oberon.image
    } as ICharacter,
    [CharacterEnum.LadyOfTheLake]: {
        name: characterDefinition.LadyOfTheLake.name,
        description: characterDefinition.LadyOfTheLake.description,
        side: characterDefinition.LadyOfTheLake.isGood ? SideType.GOOD : SideType.BAD,
        image: characterDefinition.LadyOfTheLake.image
    } as ICharacter
} as CharacterType;

export interface GoodBadCharacterCount {
    good: number;
    bad: number;
}

export const goodAndBadCharactersMap = {
    5: {
        good: 3,
        bad: 2
    } as GoodBadCharacterCount,
    6: {
        good: 4,
        bad: 2
    } as GoodBadCharacterCount,
    7: {
        good: 4,
        bad: 3
    } as GoodBadCharacterCount,
    8: {
        good: 5,
        bad: 3
    } as GoodBadCharacterCount,
    9: {
        good: 6,
        bad: 2
    } as GoodBadCharacterCount,
    10: {
        good: 6,
        bad: 4
    } as GoodBadCharacterCount,
}

export function getGoodBadCharacterCounts(playerNumber: number){
    switch(playerNumber){
        case 5:
            return goodAndBadCharactersMap[5];
        case 6:
            return goodAndBadCharactersMap[6];
        case 7:
            return goodAndBadCharactersMap[7];
        case 8:
            return goodAndBadCharactersMap[8];
        case 9:
            return goodAndBadCharactersMap[9];
        case 10:
            return goodAndBadCharactersMap[10];
        default:
            return goodAndBadCharactersMap[5];
    }
}