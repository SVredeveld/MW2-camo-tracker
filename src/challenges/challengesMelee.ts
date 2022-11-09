import { MasteryType, Weapon, WeaponType_Melee } from "../types"
import { getGoldChallenge, getPlatinumChallengeForMelee, getPolyatomicChallengeForMelee, getStandardKills } from "./challengesShared"

export function getBaseChallengeForMelee(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_Melee.Riot_Shield: {
			return [
				{
					id: 0,
					description: getStandardKills(40),
					completed: getCompleted(weapon, 0),
				}
			]
		}
        case WeaponType_Melee.Combat_Knife: {
			return [
				{
					id: 0,
					description: getStandardKills(50),
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

export function getMasterChallengeForMelee(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_Melee.Riot_Shield: {
			return [
				{
					id: 6,
					description: getGoldChallenge(10, 2),
					completed: getCompleted(weapon, 6),
					mastery: MasteryType.Gold
				},
				{
					id: 7,
					description: getPlatinumChallengeForMelee(),
					completed: getCompleted(weapon, 7),
					mastery: MasteryType.Plat
				},
				{
					id: 8,
					description: getPolyatomicChallengeForMelee(10),
					completed: getCompleted(weapon, 8),
					mastery: MasteryType.Poly
				}
			]
		}
        case WeaponType_Melee.Combat_Knife: {
			return [
				{
					id: 6,
					description: getGoldChallenge(10, 2),
					completed: getCompleted(weapon, 6),
					mastery: MasteryType.Gold
				},
				{
					id: 7,
					description: getPlatinumChallengeForMelee(),
					completed: getCompleted(weapon, 7),
					mastery: MasteryType.Plat
				},
				{
					id: 8,
					description: getPolyatomicChallengeForMelee(20),
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
