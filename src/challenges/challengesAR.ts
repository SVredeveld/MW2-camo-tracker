import { WeaponType, Weapon, WeaponType_AR } from "../types"

export function getBaseChallengeForAR(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_AR.M4: {
			return [
				{
					description: "Get x kills",
					completed: false,
				},
				{
					description: "Get x kills without reloading",
					completed: false,
				}, 
				{
					description: "Get x mounted",
					completed: false,
				},  
				{
					description: "Get x hipfire",
					completed: false,
				},  
			]
		}
		case WeaponType_AR.TAQ_Q: {
			return [
				{
					description: "Get x kills",
					completed: false,
				}, 
			]
		}
		default: {
			return [
				{
					description: "Get x kills",
					completed: false,
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
					description: "Get x longshots",
					completed: false,
				},

			]
		}
		case WeaponType_AR.TAQ_Q: {
			return [
				{
					description: "Get x kills",
					completed: false,
				}, 
			]
		}
		default: {
			return [
				{
					description: "Get x kills",
					completed: false,
				}, 
			]
		}
	}
}