import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, TextInput, Keyboard, TouchableWithoutFeedback, Switch } from 'react-native';
import { CharacterMap, CharacterEnum } from '../core/character';
import { GameConfig } from '../core/gameConfig';
import { generateCharacters } from '../core/services/gameService';

export default function StartGameScreen({navigation}:any) {

    const [playerCount, setPlayerCount] = useState('');
    //TODO - Build logic to show additional character when player number met.
    const [usePercival, setUsePercival] = useState(false);
    const [useMorgana, setUseMorgana] = useState(false);
    const [useMordred, setUseMordered] = useState(false);
    var characters = [];
    if(Number(playerCount) >= 7){
        characters.push(
            <View key={1}>
                <Text>Use {CharacterMap[CharacterEnum.Percival].name} </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff"}}
                    thumColor={usePercival ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={setUsePercival}
                    value={usePercival}>
                </Switch>
            </View>
        );
        characters.push(
            <View key={2}>
                <Text>Use {CharacterMap[CharacterEnum.Morgana].name} </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff"}}
                    thumColor={useMorgana ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={setUseMorgana}
                    value={useMorgana}>
                </Switch>
            </View>
        );
        characters.push(
            <View key={3}>
                <Text>Use {CharacterMap[CharacterEnum.Mordred].name} </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff"}}
                    thumColor={useMordred ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={setUseMordered}
                    value={useMordred}>
                </Switch>
            </View>
        );
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
            usePercival: usePercival,
            useMordred: useMordred,
            useMorgana: useMorgana
        } as GameConfig;
        return gameConfig;
    }

    const onPlayerCountChange =  (value: string) => {
        if(Number(value) < 5 || Number(value) > 10){
            return;
        }
        setPlayerCount(value);
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
                        onChangeText={value => onPlayerCountChange(value)}
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