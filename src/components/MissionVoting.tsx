import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
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
            dismiss(failCount < faillNeedToFaill);
        }
    });

    return (
        <View style={styles.container}>
            <Button 
                title="Pass"
                onPress={() => onPassPress()}></Button>
            <Button 
                title="Fail"
                onPress={() => onFaillPress()}></Button>
                
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