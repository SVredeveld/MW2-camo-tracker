import { MasteryType, Weapon, WeaponType_AR } from "../types"
import { getGoldChallenge, 
	getPolyatomicChallengeForGuns,
	getPlatinumChallengeForGuns, 
	getStandardKills } from './challengesShared';


export function getBaseChallengeForAR(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_AR.M4: {
			return [
				{
					id: 0,
					description: getStandardKills(50),
					completed: getCompleted(weapon, 0),
				},
				{
					id: 1,
					description: "Get x kills without reloading",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "Get x mounted",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "Get x hipfire",
					completed: getCompleted(weapon, 3),
				},  
			]
		}
		case WeaponType_AR.TAQ_56: {
			return [
				{
					id: 0,
					description: getStandardKills(50),
					completed: getCompleted(weapon, 0),
				}, 
				{
					id: 1,
					description: "10 Double kills",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "50 ADS kills",
					completed: getCompleted(weapon, 2),
				}, 
				{
					id: 3,
					description: "15 Hipfire kills",
					completed: getCompleted(weapon, 3),
				}, 
			]
		}
		case WeaponType_AR.Kastov762: {
			return [
				{
					id: 0,
					description: getStandardKills(50),
					completed: getCompleted(weapon, 0),
				}, 
				{
					id: 1,
					description: "20 Mounted kills",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "50 ADS kills",
					completed: getCompleted(weapon, 2),
				}, 
				{
					id: 3,
					description: "15 Behind kills",
					completed: getCompleted(weapon, 3),
				}, 
			]
		}
		case WeaponType_AR.Lachmann556: {
			return [
				{
					id: 0,
					description: getStandardKills(50),
					completed: getCompleted(weapon, 0),
				}, 
				{
					id: 1,
					description: "10 Double kills",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "50 kills with suppressor",
					completed: getCompleted(weapon, 2),
				}, 
				{
					id: 3,
					description: "10 Hipfire kills",
					completed: getCompleted(weapon, 3),
				}, 
			]
		}
		case WeaponType_AR.STB556: {
			return [
				{
					id: 0,
					description: getStandardKills(50),
					completed: getCompleted(weapon, 0),
				}, 
				{
					id: 1,
					description: "20 Mounted kills",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "10 Double kills",
					completed: getCompleted(weapon, 2),
				}, 
				{
					id: 3,
					description: "30 Crouch kills",
					completed: getCompleted(weapon, 3),
				}, 
			]
		}
		case WeaponType_AR.M16: {
			return [
				{
					id: 0,
					description: getStandardKills(50),
					completed: getCompleted(weapon, 0),
				}, 
				{
					id: 1,
					description: "10 Double kills",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "30 Crouch kills",
					completed: getCompleted(weapon, 2),
				}, 
				{
					id: 3,
					description: "20 Mounted kills",
					completed: getCompleted(weapon, 3),
				}, 
			]
		}
		case WeaponType_AR.Kastov74u: {
			return [
				{
					id: 0,
					description: getStandardKills(50),
					completed: getCompleted(weapon, 0),
				}, 
				{
					id: 1,
					description: "15 Point Blank kills",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "10 Double kills",
					completed: getCompleted(weapon, 2),
				}, 
				{
					id: 3,
					description: "30 Crouch kills",
					completed: getCompleted(weapon, 3),
				}, 
			]
		}		case WeaponType_AR.Kastov545: {
			return [
				{
					id: 0,
					description: getStandardKills(50),
					completed: getCompleted(weapon, 0),
				}, 
				{
					id: 1,
					description: "10 Hipfire kills",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "50 ADS kills",
					completed: getCompleted(weapon, 2),
				}, 
				{
					id: 3,
					description: "50 Suppressor kills",
					completed: getCompleted(weapon, 3),
				}, 
			]
		}
		default: {
			return [
				{
					id: 9,
					description: "This challenge is currently unknown",
					completed: getCompleted(weapon, 9),
				}, 
			]
		}
	}
}

export function getMasterChallengeForAR(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_AR.M4: {
			return [
				{
					id: 6,
					description: getGoldChallenge(10, 3),
					completed: getCompleted(weapon, 6),
					mastery: MasteryType.Gold
				},
				{
					id: 7,
					description: getPlatinumChallengeForGuns(25),
					completed: getCompleted(weapon, 7),
					mastery: MasteryType.Plat
				},
				{
					id: 8,
					description: getPolyatomicChallengeForGuns(),
					completed: getCompleted(weapon, 8),
					mastery: MasteryType.Poly
				}
			]
		}
		case WeaponType_AR.TAQ_56: {
			return [
				{
					id: 6,
					description: getGoldChallenge(10, 3),
					completed: getCompleted(weapon, 6),
					mastery: MasteryType.Gold
				},
				{
					id: 7,
					description: getPlatinumChallengeForGuns(25),
					completed: getCompleted(weapon, 7),
					mastery: MasteryType.Plat
				},
				{
					id: 8,
					description: getPolyatomicChallengeForGuns(),
					completed: getCompleted(weapon, 8),
					mastery: MasteryType.Poly
				}
			]
		}
		case WeaponType_AR.Kastov762: {
			return [
				{
					id: 6,
					description: getGoldChallenge(10, 3),
					completed: getCompleted(weapon, 6),
					mastery: MasteryType.Gold
				},
				{
					id: 7,
					description: getPlatinumChallengeForGuns(25),
					completed: getCompleted(weapon, 7),
					mastery: MasteryType.Plat
				},
				{
					id: 8,
					description: getPolyatomicChallengeForGuns(),
					completed: getCompleted(weapon, 8),
					mastery: MasteryType.Poly
				}
			]
		}
		case WeaponType_AR.Lachmann556: {
			return [
				{
					id: 6,
					description: getGoldChallenge(10, 3),
					completed: getCompleted(weapon, 6),
					mastery: MasteryType.Gold
				},
				{
					id: 7,
					description: getPlatinumChallengeForGuns(25),
					completed: getCompleted(weapon, 7),
					mastery: MasteryType.Plat
				},
				{
					id: 8,
					description: getPolyatomicChallengeForGuns(),
					completed: getCompleted(weapon, 8),
					mastery: MasteryType.Poly
				}
			]
		}
		case WeaponType_AR.STB556: {
			return [
				{
					id: 6,
					description: getGoldChallenge(10, 3),
					completed: getCompleted(weapon, 6),
					mastery: MasteryType.Gold
				},
				{
					id: 7,
					description: getPlatinumChallengeForGuns(25),
					completed: getCompleted(weapon, 7),
					mastery: MasteryType.Plat	
				},
				{
					id: 8,
					description: getPolyatomicChallengeForGuns(),
					completed: getCompleted(weapon, 8),
					mastery: MasteryType.Poly
				}
			]
		}
		case WeaponType_AR.M16: {
			return [
				{
					id: 6,
					description: getGoldChallenge(10, 3),
					completed: getCompleted(weapon, 6),
					mastery: MasteryType.Gold
				},
				{
					id: 7,
					description: getPlatinumChallengeForGuns(25),
					completed: getCompleted(weapon, 7),
					mastery: MasteryType.Plat
				},
				{
					id: 8,
					description: getPolyatomicChallengeForGuns(),
					completed: getCompleted(weapon, 8),
					mastery: MasteryType.Poly
				}
			]
		}
		case WeaponType_AR.Kastov74u: {
			return [
				{
					id: 6,
					description: getGoldChallenge(10, 3),
					completed: getCompleted(weapon, 6),
					mastery: MasteryType.Gold
				},
				{
					id: 7,
					description: getPlatinumChallengeForGuns(25),
					completed: getCompleted(weapon, 7),
					mastery: MasteryType.Plat
				},
				{
					id: 8,
					description: getPolyatomicChallengeForGuns(),
					completed: getCompleted(weapon, 8),
					mastery: MasteryType.Poly
				}
			]
		}
		case WeaponType_AR.Kastov545: {
			return [
				{
					id: 6,
					description: getGoldChallenge(10, 3),
					completed: getCompleted(weapon, 6),
					mastery: MasteryType.Gold
				},
				{
					id: 7,
					description: getPlatinumChallengeForGuns(25),
					completed: getCompleted(weapon, 7),
					mastery: MasteryType.Plat
				},
				{
					id: 8,
					description: getPolyatomicChallengeForGuns(),
					completed: getCompleted(weapon, 8),
					mastery: MasteryType.Poly
				}
			]
		}
		default: {
			return [
				{
					id: 9,
					description: "This challenge is currently unknown",
					completed: getCompleted(weapon, 9),
				}, 
			]
		}
	}
}

function getCompleted(weapon: Weapon, id: number) {
	var bool = localStorage.getItem(weapon.name + '-' + id);
	if(bool === null || bool == 'false') {
		return false;
	} else {
		return true;
	}
}
