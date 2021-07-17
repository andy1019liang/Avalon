import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function Character({props}) {
    return (
        <View style={styles.container}>
            <Text>{{...props}}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});