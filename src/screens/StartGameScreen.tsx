import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, TextInput, Keyboard, TouchableWithoutFeedback, Switch } from 'react-native';
import { characterTypes } from '../core/character';
import { GameConfig } from '../core/gameConfig';
import { generateCharacters } from '../core/services/gameService';

export default function StartGameScreen({navigation}:any) {

    const [playerCount, setPlayerCount] = useState('');

    //TODO - Build logic to show additional character when player number met.
    const [useCharacter2, setUseCharacter2] = useState(false);
    var characters = [];
    characters.push(
        <View key={1}>
            <Text>Use {characterTypes.CHARACTER1} </Text>
        </View>
    )
    if(Number(playerCount) > 5){
        characters.push(
            <View key={2}>
            <Text>Use {characterTypes.CHARACTER2} </Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff"}}
                thumColor={useCharacter2 ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={setUseCharacter2}
                value={useCharacter2}>
            </Switch>
        </View>
        )
    } 

    const beginGame = () => {
        const characters = generateCharacters(createGameConfig());
        navigation.navigate('ShowCharacters', {
            characters
        });
    }

    const createGameConfig = () => {
        const gameConfig = {
            playerCount: Number(playerCount),
            useCharacter2: useCharacter2
        } as GameConfig;
        return gameConfig;
    }
    return (
        <TouchableWithoutFeedback  onPress={Keyboard.dismiss} style={styles.container}>
            <View style={styles.container}>
                <Text>Starting...</Text>
                <View style={styles.inputGroup}>
                    <Text>How Many Players</Text>
                    <TextInput 
                        style={styles.input}
                        value={playerCount}
                        onChangeText={value => setPlayerCount(value)}
                        keyboardType="numeric"
                        />
                </View>
                {characters}
                <Button
                    title="Begin Game"
                    onPress={() => beginGame()}/>
                <Button
                    title="End Game"
                    onPress={() => navigation.navigate('Home')}/>
            </View>
            
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputGroup: {
        flexDirection: "row",
        height: 40,
        flexWrap: "wrap",
        justifyContent: 'center',
        alignItems: 'center',
        margin: 50
    },
    input: {
        height: 40,
        width: 50,
        margin: 12,
        borderWidth: 1,
    },
  });