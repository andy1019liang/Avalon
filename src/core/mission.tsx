export class Mission {
    playerCount: number;
    failCount: number;

    constructor(playerCount: number, failCount: number){
        this.playerCount = playerCount;
        this.failCount = failCount;
    }
}

export const playerMissionMap = {
    5: [
        new Mission(2,1),
        new Mission(3,1),
        new Mission(2,1),
        new Mission(3,1),
        new Mission(3,1)],
    6: [
        new Mission(2,1),
        new Mission(3,1),
        new Mission(3,1),
        new Mission(3,1),
        new Mission(4,1)],
    7: [
        new Mission(2,1),
        new Mission(3,1),
        new Mission(3,1),
        new Mission(4,2),
        new Mission(4,1)],
    8: [
        new Mission(3,1),
        new Mission(4,1),
        new Mission(4,1),
        new Mission(5,2),
        new Mission(5,1)],
    9: [
        new Mission(3,1),
        new Mission(4,1),
        new Mission(4,1),
        new Mission(5,2),
        new Mission(5,1)],
    10: [
        new Mission(3,1),
        new Mission(4,1),
        new Mission(4,1),
        new Mission(5,2),
        new Mission(5,1)],
}