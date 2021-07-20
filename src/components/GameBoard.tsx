import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Button, StyleSheet, Text, Modal } from 'react-native';
import { GameConfig } from 'src/core/gameConfig';
import MissionVoting from './MissionVoting';
import TeamVoting from './TeamVoting';

const TOTAL_ROUND = 5;

export default function GameBoard(props: any) {
    const gameConfig = props.gameConfig as GameConfig;
    const [isMissionTeamVoteVisible, setIsMissionTeamVoteVisible] = useState(false);
    const [isMissionVoteVisible, setIsMissionVoteVisible] = useState(false);
    const [missionNumber, setMissionNumber] = useState(0);
    const [missionStatus, setMissionStatus] = useState([undefined] as (boolean | undefined)[]);
    const [isMissionTeamApproved, setIsMissionTeamApproved] = useState(false);

    const onVoteForMissionTeamPress = () => {
        setIsMissionTeamVoteVisible(true);
    }

    const handleDismissMissionTeamVote = (pass: boolean) => {
        setIsMissionTeamApproved(pass);
        setIsMissionTeamVoteVisible(false);
        if(pass){
            setIsMissionVoteVisible(true);
        }
    }

    const handleDismissMissionVote = (pass: boolean) => {
        missionStatus[missionNumber] = pass;
        setMissionStatus(missionStatus);
        setIsMissionVoteVisible(false);
        setMissionNumber(missionNumber + 1);
    }

    const allMissionStatus = [];
    gameConfig.missions.forEach((mission, i) => {
        allMissionStatus.push(
            <View key={i}>
                <Text>{`Mission ${i + 1}: `}{missionStatus[i] === true ? 'Pass' : 
                missionStatus[i] === false ? 'Fail' : ' '}</Text>
            </View>
            
        )
    });
        

    return (
        <View style={styles.container}>
            {allMissionStatus}
            <Button 
                title="Vote for mission Team"
                onPress={() => onVoteForMissionTeamPress()}></Button>
            <Modal 
                visible={isMissionTeamVoteVisible}>
                <TeamVoting 
                    gameConfig={gameConfig}
                    isVisible={isMissionTeamVoteVisible}
                    dismiss={handleDismissMissionTeamVote}></TeamVoting>
                
            </Modal>
            <Modal 
                visible={isMissionVoteVisible}>
                <MissionVoting 
                    teamCount={gameConfig.missions[missionNumber].playerCount}
                    failCount={gameConfig.missions[missionNumber].failCount}
                    isVisible={isMissionVoteVisible}
                    dismiss={handleDismissMissionVote}></MissionVoting>
                
            </Modal>
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