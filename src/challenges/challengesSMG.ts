import { MasteryType, Weapon, WeaponType_SMG } from "../types"
import { getGoldChallenge, getPlatinumChallengeForGuns, getPolyatomicChallengeForGuns, getStandardKills } from "./challengesShared"

export function getBaseChallengeForSMG(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_SMG.VEL_46: {
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
					description: "15 Hipfire Kills",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "10 Double Kills",
					completed: getCompleted(weapon, 3),
				},  
			]
		}
		case WeaponType_SMG.MX9: {
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
		case WeaponType_SMG.Lachmann_sub: {
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
					description: "10 Hipfire Kills",
					completed: getCompleted(weapon, 3),
				},  
			]
		}
		case WeaponType_SMG.Vaznev_9K: {
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
					description: "15 Hipfire Kills",
					completed: getCompleted(weapon, 3),
				},  
			]
		}
		case WeaponType_SMG.FFS_Hurricane: {
			return [
				{
					id: 0,
					description: getStandardKills(50),
					completed: getCompleted(weapon, 0),
				},
				{
					id: 1,
					description: "50 Suppressor",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "50 ADS Kills",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "30 Prone Kills",
					completed: getCompleted(weapon, 3),
				},  
			]
		}		
		case WeaponType_SMG.Minibak: {
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
					description: "50 ADS Kills",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "15 Point Blank Kills",
					completed: getCompleted(weapon, 3),
				},  
			]
		}
		case WeaponType_SMG.PDSW_528: {
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
					description: "15 Hipfire Kills",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "10 Point Blank Kills",
					completed: getCompleted(weapon, 3),
				},  
			]
		}
		case WeaponType_SMG.Fennec_45: {
			return [
				{
					id: 0,
					description: getStandardKills(50),
					completed: getCompleted(weapon, 0),
				},
				{
					id: 1,
					description: "30 Crouch Kills",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "15 Behind Kills",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "10 Double Kills",
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

export function getMasterChallengeForSMG(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_SMG.VEL_46: {
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
		case WeaponType_SMG.MX9: {
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
		case WeaponType_SMG.Lachmann_sub: {
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
		case WeaponType_SMG.Vaznev_9K: {
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
		case WeaponType_SMG.FFS_Hurricane: {
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
		case WeaponType_SMG.Minibak: {
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
		case WeaponType_SMG.PDSW_528: {
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
		case WeaponType_SMG.Fennec_45: {
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
