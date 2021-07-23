import React from 'react';
import { View, Button, StyleSheet,Text, Image, ImageBackground} from 'react-native';
import { ICharacter } from '../core/character';
import * as characterDefinition from './../../assets/data/character.json';

export default function Character(props: any) {
    const character = props.character as ICharacter;

    const getSource = (name: string) => {
        switch(name) {
            case characterDefinition.loyalServantOfArthur.name:
                return require('./../../assets/images/characters/loyalServantOfArthur.png')
            case characterDefinition.Assassin.name:
                return require('./../../assets/images/characters/assassin.png')
            case characterDefinition.Merlin.name:
                return require('./../../assets/images/characters/merlin.png')
            case characterDefinition.MinionOfMordred.name:
                return require('./../../assets/images/characters/minionOfMordred.png')
            case characterDefinition.Mordred.name:
                return require('./../../assets/images/characters/mordred.png')
            case characterDefinition.Morgana.name:
                return require('./../../assets/images/characters/morgana.png')
            case characterDefinition.Oberon.name:
                return require('./../../assets/images/characters/oberon.png')
            case characterDefinition.Percival.name:
                return require('./../../assets/images/characters/percival.png')
            default:
                return require('./../../assets/images/characters/loyalServantOfArthur.png')
        }
    }
    return (
        <View style={styles.container}>
            <Image
                source={getSource(character.name)}
                style={styles.image}>
                
            </Image>
            <Text style={styles.text}>{character.name}</Text>
            <Text style={styles.text}>{character.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },
    image: {
        padding: 10,
        height: "70%",
        width: "100%",
        resizeMode: 'stretch',
    },
    text: {
        justifyContent: "center"
    }
});