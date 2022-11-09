import { MasteryType, Weapon, WeaponType_Sniper } from "../types"
import { getGoldChallenge, getPlatinumChallengeForGuns, getPolyatomicChallengeForGuns, getStandardKills } from "./challengesShared"

export function getBaseChallengeForSniper(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_Sniper.MCPR_300: {
			return [
				{
					id: 0,
					description: getStandardKills(50),
					completed: getCompleted(weapon, 0),
				},
				{
					id: 1,
					description: "10 x 2 Kills in 10 Secs",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "30 Prone Kills",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "10 Hipfire Kills",
					completed: getCompleted(weapon, 3),
				},  
			]
		}
		case WeaponType_Sniper.Signal_50: {
			return [
				{
					id: 0,
					description: getStandardKills(50),
					completed: getCompleted(weapon, 0),
				},
				{
					id: 1,
					description: "10 x 2 Kills in 10 Secs",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "30 Prone Kills",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "25 One Shot Kills",
					completed: getCompleted(weapon, 3),
				},  
			]
		}
		case WeaponType_Sniper.LAB_330: {
			return [
				{
					id: 0,
					description: getStandardKills(50),
					completed: getCompleted(weapon, 0),
				},
				{
					id: 1,
					description: "10 x 2 Kills in 10 Secs",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "25 One Shot Kills",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "50 Suppressor Kills",
					completed: getCompleted(weapon, 3),
				},  
			]
		}
		case WeaponType_Sniper.SPX_80: {
			return [
				{
					id: 0,
					description: getStandardKills(50),
					completed: getCompleted(weapon, 0),
				},
				{
					id: 1,
					description: "20 Mounted Kills ",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "25 One Shot Kills",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "50 Suppressor Kills",
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

export function getMasterChallengeForSniper(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_Sniper.MCPR_300: {
			return [
				{
					id: 6,
					description: getGoldChallenge(10, 3),
					completed: getCompleted(weapon, 6),
					mastery: MasteryType.Gold
				},
				{
					id: 7,
					description: getPlatinumChallengeForGuns(20),
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
		case WeaponType_Sniper.Signal_50: {
			return [
				{
					id: 6,
					description: getGoldChallenge(10, 3),
					completed: getCompleted(weapon, 6),
					mastery: MasteryType.Gold
				},
				{
					id: 7,
					description: getPlatinumChallengeForGuns(20),
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
		case WeaponType_Sniper.LAB_330: {
			return [
				{
					id: 6,
					description: getGoldChallenge(10, 3),
					completed: getCompleted(weapon, 6),
					mastery: MasteryType.Gold
				},
				{
					id: 7,
					description: getPlatinumChallengeForGuns(20),
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
		case WeaponType_Sniper.SPX_80: {
			return [
				{
					id: 6,
					description: getGoldChallenge(10, 3),
					completed: getCompleted(weapon, 6),
					mastery: MasteryType.Gold
				},
				{
					id: 7,
					description: getPlatinumChallengeForGuns(20),
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
