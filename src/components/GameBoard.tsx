import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const TOTAL_ROUND = 5;

export default function GameBoard(props: any) {
    const characters = props.route.params.characters;
    const [curCharacter, setCurCharacter] = useState(characters[0]);
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
            setCurCharacter(characters[characters.indexOf(curCharacter) + 1]);
            setHide(true);
        }
    }

    const hasNext = () => {
        return characters.indexOf(curCharacter) !== characters.length - 1
    }

    return (
        <View style={styles.container}>
            {hide ? null : <Text>{curCharacter.type}</Text>}
            {hasNext() ? <Button title={hide ? 'Show': 'Next'} onPress={() => showNext()}></Button>
                : <Text>Game start</Text>}
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