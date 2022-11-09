import { MasteryType, Weapon, WeaponType_Shotgun } from "../types"
import { getGoldChallenge, getPlatinumChallengeForGuns, getPolyatomicChallengeForGuns, getStandardKills } from "./challengesShared"

export function getBaseChallengeForShotgun(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_Shotgun.Lockwood_300: {
			return [
				{
					id: 0,
					description: getStandardKills(40),
					completed: getCompleted(weapon, 0),
				},
				{
					id: 1,
					description: "40 Suppressor Kills",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "25 One Shot Kills",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "20 Mounted Kills",
					completed: getCompleted(weapon, 3),
				},  
			]
		}
		case WeaponType_Shotgun.Expedite_12: {
			return [
				{
					id: 0,
					description: getStandardKills(40),
					completed: getCompleted(weapon, 0),
				},
				{
					id: 1,
					description: "15 Hipfire Kills",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "25 Prone Kills",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "30 ADS Kills",
					completed: getCompleted(weapon, 3),
				},  
			]
		}
		case WeaponType_Shotgun.Bryson_800: {
			return [
				{
					id: 0,
					description: getStandardKills(40),
					completed: getCompleted(weapon, 0),
				},
				{
					id: 1,
					description: "15 Hipfire Kills",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "10 Double Kills",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "20 One Shot Kills",
					completed: getCompleted(weapon, 3),
				},  
			]
		}
		case WeaponType_Shotgun.Bryson_890: {
			return [
				{
					id: 0,
					description: getStandardKills(40),
					completed: getCompleted(weapon, 0),
				},
				{
					id: 1,
					description: "???",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "???",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "???",
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

export function getMasterChallengeForShotgun(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_Shotgun.Lockwood_300: {
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
		case WeaponType_Shotgun.Expedite_12: {
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
		case WeaponType_Shotgun.Bryson_800: {
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
		case WeaponType_Shotgun.Bryson_890: {
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
