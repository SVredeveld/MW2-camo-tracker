import { MasteryType, Weapon, WeaponType_Launcher } from "../types"
import { getGoldChallenge, getPlatinumChallengeForLaunchers, getPolyatomicChallengeForLaunchers, getStandardKills } from "./challengesShared"

export function getBaseChallengeForLauncher(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_Launcher.PILA: {
			return [
				{
					id: 0,
					description: getStandardKills(40),
					completed: getCompleted(weapon, 0),
				}
			]
		}
        case WeaponType_Launcher.Strela_P: {
			return [
				{
					id: 0,
					description: getStandardKills(40),
					completed: getCompleted(weapon, 0),
				}
			]
		}
        case WeaponType_Launcher.JOKR: {
			return [
				{
					id: 0,
					description: getStandardKills(40),
					completed: getCompleted(weapon, 0),
				}
			]
		}
        case WeaponType_Launcher.RPG_7: {
			return [
				{
					id: 0,
					description: getStandardKills(40),
					completed: getCompleted(weapon, 0),
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

export function getMasterChallengeForLauncher(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_Launcher.PILA: {
			return [
				{
					id: 6,
					description: getGoldChallenge(5, 2),
					completed: getCompleted(weapon, 6),
					mastery: MasteryType.Gold
				},
				{
					id: 7,
					description: getPlatinumChallengeForLaunchers(15),
					completed: getCompleted(weapon, 7),
					mastery: MasteryType.Plat
				},
				{
					id: 8,
					description: getPolyatomicChallengeForLaunchers(),
					completed: getCompleted(weapon, 8),
					mastery: MasteryType.Poly
				}

			]
		}
        case WeaponType_Launcher.Strela_P: {
			return [
				{
					id: 6,
					description: getGoldChallenge(5, 2),
					completed: getCompleted(weapon, 6),
					mastery: MasteryType.Gold
				},
				{
					id: 7,
					description: getPlatinumChallengeForLaunchers(25),
					completed: getCompleted(weapon, 7),
					mastery: MasteryType.Plat
				},
				{
					id: 8,
					description: getPolyatomicChallengeForLaunchers(),
					completed: getCompleted(weapon, 8),
					mastery: MasteryType.Poly
				}

			]
		}
        case WeaponType_Launcher.JOKR: {
			return [
				{
					id: 6,
					description: getGoldChallenge(5, 2),
					completed: getCompleted(weapon, 6),
					mastery: MasteryType.Gold
				},
				{
					id: 7,
					description: getPlatinumChallengeForLaunchers(10),
					completed: getCompleted(weapon, 7),
					mastery: MasteryType.Plat
				},
				{
					id: 8,
					description: getPolyatomicChallengeForLaunchers(),
					completed: getCompleted(weapon, 8),
					mastery: MasteryType.Poly
				}

			]
		}
        case WeaponType_Launcher.RPG_7: {
			return [
				{
					id: 6,
					description: getGoldChallenge(5, 2),
					completed: getCompleted(weapon, 6),
					mastery: MasteryType.Gold
				},
				{
					id: 7,
					description: getPlatinumChallengeForLaunchers(10),
					completed: getCompleted(weapon, 7),
					mastery: MasteryType.Plat
				},
				{
					id: 8,
					description: getPolyatomicChallengeForLaunchers(),
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
