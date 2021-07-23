import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Button, StyleSheet, Text, Modal } from 'react-native';
import { GameConfig } from 'src/core/gameConfig';
import MissionVoting from './MissionVoting';
import TeamVoting from './TeamVoting';
import { Audio } from 'expo-av';

const TOTAL_ROUND = 5;

export enum GameStatus {
    OnGoing = 1,
    GoodSideWon,
    BadSideWon
}

export default function GameBoard(props: any) {
    const gameConfig = props.gameConfig as GameConfig;
    const [isMissionTeamVoteVisible, setIsMissionTeamVoteVisible] = useState(false);
    const [isMissionVoteVisible, setIsMissionVoteVisible] = useState(false);
    const [missionNumber, setMissionNumber] = useState(0);
    const [missionStatus, setMissionStatus] = useState([undefined] as (boolean | undefined)[]);
    const [isMissionTeamApproved, setIsMissionTeamApproved] = useState(false);
    const [gameStatus, setGameStatus] = useState(GameStatus.OnGoing);
    const [approveCount, setApproveCount] = useState(0);
    const [rejectCount, setRejectCount] = useState(0);
    const [successCount, setSuccessCount] = useState(0);
    const [failCount, setFailCount] = useState(0);
    const [sound, setSound] = useState(new Audio.Sound);
    const [rejectedCount, setRejectedCount] = useState(0);

    const onVoteForMissionTeamPress = () => {
        setIsMissionTeamVoteVisible(true);
    }

    const handleDismissMissionTeamVote = (pass: boolean, passCount: number, failCount: number) => {
        setIsMissionTeamApproved(pass);
        setIsMissionTeamVoteVisible(false);
        setApproveCount(passCount);
        setRejectCount(failCount);
        if(pass){
            setIsMissionVoteVisible(true);
            setRejectedCount(0);
        }
        else {
            setRejectedCount(rejectedCount+1);
        }
        if(rejectedCount === 5) {
            handleDismissMissionVote(false, 0, 0);
        }
    }

    const handleDismissMissionVote = (pass: boolean, passCount: number, failCount: number) => {
        missionStatus[missionNumber] = pass;
        setMissionStatus(missionStatus);
        setIsMissionVoteVisible(false);
        setSuccessCount(passCount);
        setFailCount(failCount);
        setMissionNumber(missionNumber + 1);
    }

    async function playSound() {        
        const { sound } = gameConfig.playerCount < 7 ? await Audio.Sound.createAsync(
            require('./../../assets/narrations/5PlayerNarration.mp3')
         ) : await Audio.Sound.createAsync(
            require('./../../assets/narrations/7PlayerNarration.mp3')
         );
         setSound(sound);

        await sound.playAsync(); 
    }

    async function stopSound(){
        sound.stopAsync();
    }

    const allMissionStatus: any[] = [];
    let succeedCount = 0;
        let failedCount = 0;
        gameConfig.missions.forEach((mission, i) => {
            succeedCount = missionStatus[i] === true ? succeedCount + 1 : succeedCount;
            failedCount = missionStatus[i] === false ? failedCount + 1 : failedCount;
            allMissionStatus.push(
                <View key={i}>
                    <Text>{`Mission ${i + 1} (${mission.failCount}): `}{missionStatus[i] === true ? 'Pass' : 
                    missionStatus[i] === false ? 'Fail' : ' '}</Text>
                </View>
            )
        });
    useEffect(() => {
        if(succeedCount > 2 || failedCount > 2){
            if(succeedCount > 2){
                setGameStatus(GameStatus.GoodSideWon);
            } else{ 
                setGameStatus(GameStatus.BadSideWon)
            }
        }
    })  

    const isGameOver = () => {
        return gameStatus !== GameStatus.OnGoing;
    }

    return (
        <View style={styles.container}>
            <Button title="play" onPress={() => playSound()}></Button>
            <Button title="stop" onPress={() => stopSound()}></Button>
            {isGameOver() ? <View>
                <Text>Game Over</Text>
                <Text>{gameStatus === GameStatus.GoodSideWon ? 'Good Side Won' : 'Bad Side Won'}</Text>
            </View> :
            <View>
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
                {approveCount !== 0 || rejectCount !== 0 ?
                <View>
                    <Text>Approve: {approveCount}</Text>
                    <Text>Reject: {rejectCount}</Text> 
                </View>
                : null
                }
                {successCount !== 0 || failCount !== 0 ?
                <View>
                    <Text>Success: {successCount}</Text>
                    <Text>Fail: {failCount}</Text>
                </View> : null
                }
            </View>
            }
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