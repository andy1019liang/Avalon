import React from 'react';
import { View, Button, StyleSheet,Text, Image, ImageBackground} from 'react-native';
import { ICharacter } from '../core/character';

export default function Character(props: any) {
    const character = props.character as ICharacter;
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={{
                    uri: character.image,
                }} 
                resizeMode="cover" 
                style={styles.image}>
                <Text style={styles.text}>{character.name}</Text>
                <Text style={styles.text}>{character.description}</Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        justifyContent: "center"
    }
});