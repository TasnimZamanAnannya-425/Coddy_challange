function unlockDoor(doorCode, numAttempts, clue) {
    for (let i = 1; i <= numAttempts; i++) {
        if (i === doorCode) {
            return "Door unlocked! The code was " + doorCode;
        }
    }
    return clue;
}