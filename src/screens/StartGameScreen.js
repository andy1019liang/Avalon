import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';


export default function StartGameScreen() {
    const [playerCount, setPlayerCount] = useState('');

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
        alignItems: 'center'
    },
    input: {
        height: 40,
        width: 50,
        margin: 12,
        borderWidth: 1,
    },
  });