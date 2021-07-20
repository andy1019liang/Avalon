import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { GameConfig } from 'src/core/gameConfig';
import { ICharacter } from '../core/character';
import Character from './Character';
import GameBoard from './GameBoard';

export default function ShowCharacters(props: any) {
    const characters = props.route.params.characters as ICharacter[];
    const gameConfig = props.route.params.gameConfig as GameConfig;
    const [curCharacterIndex, setCurCharacterIndex] = useState(0);
    const [hide, setHide] = useState(true);
    const showNext = () => {
        if(hide){
            setHide(false);
            return;
        }
        if(!hasNext()){
            return null;
        }
        else{
            setCurCharacterIndex(curCharacterIndex + 1);
            setHide(true);
        }
    }

    const hasNext = () => {
        return curCharacterIndex !== characters.length;
    }

    return (
        <View style={styles.container}>
            {hide ? null : 
            <Character character={characters[curCharacterIndex]}></Character>}
            {hasNext() ? <Button title={hide ? 'Show': 'Next'} onPress={() => showNext()}></Button>
                : <GameBoard gameConfig={gameConfig}></GameBoard>}
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});