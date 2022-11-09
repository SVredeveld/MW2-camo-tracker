import { MasteryType, Weapon, WeaponType_LMG, WeaponType_Shotgun } from "../types"
import { getGoldChallenge, getPlatinumChallengeForGuns, getPolyatomicChallengeForGuns, getStandardKills } from "./challengesShared"

export function getBaseChallengeForLMG(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_LMG.SAKIN_MG38: {
			return [
				{
					id: 0,
					description: getStandardKills(50),
					completed: getCompleted(weapon, 0),
				},
				{
					id: 1,
					description: "30 Prone Kills",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "10 Double Kills",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "50 Suppressor Kills",
					completed: getCompleted(weapon, 3),
				},  
			]
		}
		case WeaponType_LMG.HCR_56: {
			return [
				{
					id: 0,
					description: getStandardKills(50),
					completed: getCompleted(weapon, 0),
				},
				{
					id: 1,
					description: "50 ADS Kills",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "10 Double Kills",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "20 Mounted Kills",
					completed: getCompleted(weapon, 3),
				},  
			]
		}
		case WeaponType_LMG._556_Icarus: {
			return [
				{
					id: 0,
					description: getStandardKills(50),
					completed: getCompleted(weapon, 0),
				},
				{
					id: 1,
					description: "10 Double Kills",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "20 Mounted Kills",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "30 Crouch Kills",
					completed: getCompleted(weapon, 3),
				},  
			]
		}
		case WeaponType_LMG.RAAL_MG: {
			return [
				{
					id: 0,
					description: getStandardKills(50),
					completed: getCompleted(weapon, 0),
				},
				{
					id: 1,
					description: "15 Behind Kills",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "20 Mounted Kills",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "10 Hipfire Kills",
					completed: getCompleted(weapon, 3),
				},  
			]
		}
		case WeaponType_LMG.RPK: {
			return [
				{
					id: 0,
					description: getStandardKills(50),
					completed: getCompleted(weapon, 0),
				},
				{
					id: 1,
					description: "10 Double Kills",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "50 Suppressor Kills",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "20 Mounted Kills",
					completed: getCompleted(weapon, 3),
				},  
			]
		}
		case WeaponType_LMG.RAPP_H: {
			return [
				{
					id: 0,
					description: getStandardKills(50),
					completed: getCompleted(weapon, 0),
				},
				{
					id: 1,
					description: "10 Point Blank Kills",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "20 Mounted Kills",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "50 ADS Kills",
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

export function getMasterChallengeForLMG(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_LMG.SAKIN_MG38: {
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
		case WeaponType_LMG.HCR_56: {
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
		case WeaponType_LMG._556_Icarus: {
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
		case WeaponType_LMG.RAAL_MG: {
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
		case WeaponType_LMG.RPK: {
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
		case WeaponType_LMG.RAPP_H: {
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
