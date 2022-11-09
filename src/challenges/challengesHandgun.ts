import { MasteryType, Weapon, WeaponType_Handgun } from "../types"
import { getGoldChallenge, getPlatinumChallengeForGuns, getPolyatomicChallengeForGuns, getStandardKills } from "./challengesShared"

export function getBaseChallengeForHangun(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_Handgun.P890: {
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
					description: "5 Double Kills",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "10 Point Blank Kills",
					completed: getCompleted(weapon, 3),
				},  
			]
		}
		case WeaponType_Handgun._50_GS: {
			return [
				{
					id: 0,
					description: getStandardKills(40),
					completed: getCompleted(weapon, 0),
				},
				{
					id: 1,
					description: "5 Double Kills",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "15 Mounted Kills",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "40 Kills with Akimbo",
					completed: getCompleted(weapon, 3),
				},  
			]
		}
		case WeaponType_Handgun.X12: {
			return [
				{
					id: 0,
					description: getStandardKills(30),
					completed: getCompleted(weapon, 0),
				},
				{
					id: 1,
					description: "25 ADS Kills",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "10 Hipfire Kills",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "40 Kills with Akimbo",
					completed: getCompleted(weapon, 3),
				},  
			]
		}
		case WeaponType_Handgun.Basilisk: {
			return [
				{
					id: 0,
					description: getStandardKills(40),
					completed: getCompleted(weapon, 0),
				},
				{
					id: 1,
					description: "30 ADS Kills",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "10 Point Blank Kills",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "30 Kills with Akimbo",
					completed: getCompleted(weapon, 3),
				},  
			]
		}
		case WeaponType_Handgun.X13_Auto: {
			return [
				{
					id: 0,
					description: getStandardKills(40),
					completed: getCompleted(weapon, 0),
				},
				{
					id: 1,
					description: "10 Hipfire Kills",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "10 Double Kills",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "40 Kills with Akimbo",
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

export function getMasterChallengeForHangun(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_Handgun.P890: {
			return [
				{
					id: 6,
					description: getGoldChallenge(5, 3),
					completed: getCompleted(weapon, 6),
					mastery: MasteryType.Gold
				},
				{
					id: 7,
					description: getPlatinumChallengeForGuns(15),
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
		case WeaponType_Handgun._50_GS: {
			return [
				{
					id: 6,
					description: getGoldChallenge(5, 3),
					completed: getCompleted(weapon, 6),
					mastery: MasteryType.Gold
				},
				{
					id: 7,
					description: getPlatinumChallengeForGuns(15),
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
		case WeaponType_Handgun.X12: {
			return [
				{
					id: 6,
					description: getGoldChallenge(5, 3),
					completed: getCompleted(weapon, 6),
					mastery: MasteryType.Gold
				},
				{
					id: 7,
					description: getPlatinumChallengeForGuns(15),
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
		case WeaponType_Handgun.Basilisk: {
			return [
				{
					id: 6,
					description: getGoldChallenge(5, 3),
					completed: getCompleted(weapon, 6),
					mastery: MasteryType.Gold
				},
				{
					id: 7,
					description: getPlatinumChallengeForGuns(15),
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
		case WeaponType_Handgun.X13_Auto: {
			return [
				{
					id: 6,
					description: getGoldChallenge(5, 3),
					completed: getCompleted(weapon, 6),
					mastery: MasteryType.Gold
				},
				{
					id: 7,
					description: getPlatinumChallengeForGuns(15),
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
