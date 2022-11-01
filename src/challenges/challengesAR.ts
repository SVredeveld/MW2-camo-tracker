import { Weapon, WeaponType_AR } from "../types"

export function getBaseChallengeForAR(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_AR.M4: {
			return [
				{
					id: 0,
					description: "Get x kills",
					completed: false,
				},
				{
					id: 1,
					description: "Get x kills without reloading",
					completed: false,
				}, 
				{
					id: 2,
					description: "Get x mounted",
					completed: false,
				},  
				{
					id: 3,
					description: "Get x hipfire",
					completed: false,
				},  
			]
		}
		case WeaponType_AR.TAQ_56: {
			return [
				{
					id: 0,
					description: "Get x kills",
					completed: false,
				}, 
			]
		}
		default: {
			return [
				{
					id: 9,
					description: "This challenge is currently unknown",
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
					id: 0,
					description: "Get x master longshots",
					completed: false,
				},

			]
		}
		case WeaponType_AR.TAQ_56: {
			return [
				{
					id: 0,
					description: "Get x master kills",
					completed: false,
				}, 
			]
		}
		default: {
			return [
				{
					id: 9,
					description: "This challenge is currently unknown",
					completed: false,
				}, 
			]
		}
	}
}