export function getStandardKills(amount: number) {
    return `get ${amount} kills`;
}

export function getGoldChallenge(amount: number, streak: number) {
    return `${amount} x ${streak} kill without dying`;
}

export function getPlatinumChallengeForGuns(amount: number) {
    return `${amount} Longshots`;

}

export function getPlatinumChallengeForMelee() {
    return `10 x 2 kill in 10 seconds`;

}

export function getPlatinumChallengeForLaunchers(amount: number) {
    return `${amount} Destroy killstreaks`;

}


export function getPolyatomicChallengeForGuns() {
    return "25 Headshots";
}

export function getPolyatomicChallengeForMelee(amount: number) {
    return `${amount} kills from behind`;
}

export function getPolyatomicChallengeForLaunchers() {
    return "15 Double kills";
}

