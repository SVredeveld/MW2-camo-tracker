export function getGoldChallenge(amount: number, streak: number) {
    return `${amount} x ${streak} kill without dying`;
}

export function getPlatinumChallengeForGuns(amount: number) {
    return `${amount} x 3 longshots`;

}


export function getPolyatomicChallengeForGuns() {
    return "25 headshots";
}

export function getPolyatomicChallengeForMelee(amount: number) {
    return `${amount} kills from behind`;
}

export function getPolyatomicChallengeForLaunchers() {
    return "15 double kills";
}