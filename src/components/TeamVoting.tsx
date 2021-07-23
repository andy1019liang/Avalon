import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { GameConfig } from 'src/core/gameConfig';


export default function TeamVoting(props: any) {
    const gameConfig = props.gameConfig as GameConfig;
    const isVisible = props.isVisible;
    const dismiss = props.dismiss;

    const [passCount, setPassCount] = useState(0);
    const [failCount, setFailCount] = useState(0);
    const [player, setPlayer] = useState(1);

    const onPassPress = () => {
        setPassCount(passCount + 1);
        setPlayer(player+1);
    }

    const onFaillPress = () => {
        setFailCount(failCount + 1);
        setPlayer(player+1);
    }

    useEffect(() => {
        if(passCount + failCount === gameConfig.playerCount){
            dismiss(passCount > failCount, passCount, failCount);
        }
    });

    return (
        <View style={styles.container}>
            <Text>Vote for mission team</Text>
            <Text>Player {player}</Text>
            <View style={styles.votingView}>
                <TouchableOpacity
                    onPress={() => onPassPress()}
                    key={1}
                    style={styles.acceptTokenTouchable}
                    activeOpacity={0.5}>
                    <Image
                    source={require('./../../assets/images/Accept.png')}
                    style={styles.acceptTokenImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onFaillPress()}
                    key={2}
                    style={styles.acceptTokenTouchable}
                    activeOpacity={0.5}>
                    <Image
                    source={require('./../../assets/images/Reject.png')}
                    style={styles.acceptTokenImage}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    votingView: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 50
    },
    acceptTokenTouchable: {
        alignItems: 'center',
        height: "50%",
        width: "50%",
        margin: 10
    },
    acceptTokenImage: {
        padding: 10,
        margin: 10,
        height: "100%",
        width: "100%",
        resizeMode: 'stretch',
    }
});