import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { GameConfig } from 'src/core/gameConfig';


export default function MissionVoting(props: any) {
    const teamCount = props.teamCount as number;
    const faillNeedToFaill = props.failCount as number;
    const isVisible = props.isVisible;
    const dismiss = props.dismiss;

    const [passCount, setPassCount] = useState(0);
    const [failCount, setFailCount] = useState(0);

    const onPassPress = () => {
        setPassCount(passCount + 1);
    }

    const onFaillPress = () => {
        setFailCount(failCount + 1);
    }

    useEffect(() => {
        if(passCount + failCount === teamCount){
            dismiss(failCount < faillNeedToFaill, passCount, failCount);
        }
    });

    return (
        <View style={styles.container}>
            <View style={styles.votingView}>
                <TouchableOpacity
                    onPress={() => onPassPress()}
                    key={1}
                    style={styles.acceptTokenTouchable}
                    activeOpacity={0.5}>
                    <Image
                    source={require('./../../assets/images/Success.png')}
                    style={styles.acceptTokenImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onFaillPress()}
                    key={2}
                    style={styles.acceptTokenTouchable}
                    activeOpacity={0.5}>
                    <Image
                    source={require('./../../assets/images/Fail.png')}
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