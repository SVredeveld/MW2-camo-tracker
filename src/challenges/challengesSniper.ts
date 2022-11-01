import { Weapon, WeaponType_Sniper } from "../types"

export function getBaseChallengeForSniper(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_Sniper.MCPR_300: {
			return [
				{
					id: 0,
					description: "Get x kills",
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
		case WeaponType_Sniper.Signal_50: {
			return [
				{
					id: 0,
					description: "Get x kills",
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
		case WeaponType_Sniper.LAB_330: {
			return [
				{
					id: 0,
					description: "Get x kills",
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
		case WeaponType_Sniper.SPX_80: {
			return [
				{
					id: 0,
					description: "Get x kills",
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

export function getMasterChallengeForSniper(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_Sniper.MCPR_300: {
			return [
				{
					id: 6,
					description: "GOLD",
					completed: getCompleted(weapon, 6),
				},
				{
					id: 7,
					description: "PLAT",
					completed: getCompleted(weapon, 7),
				},

			]
		}
		case WeaponType_Sniper.Signal_50: {
			return [
				{
					id: 6,
					description: "GOLD",
					completed: getCompleted(weapon, 6),
				},
				{
					id: 7,
					description: "PLAT",
					completed: getCompleted(weapon, 7),
				},

			]
		}
		case WeaponType_Sniper.LAB_330: {
			return [
				{
					id: 6,
					description: "GOLD",
					completed: getCompleted(weapon, 6),
				},
				{
					id: 7,
					description: "PLAT",
					completed: getCompleted(weapon, 7),
				},

			]
		}
		case WeaponType_Sniper.SPX_80: {
			return [
				{
					id: 6,
					description: "GOLD",
					completed: getCompleted(weapon, 6),
				},
				{
					id: 7,
					description: "PLAT",
					completed: getCompleted(weapon, 7),
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

function getCompleted(weapon: Weapon, id: number) {
	var bool = localStorage.getItem(weapon.name + '-' + id);
	if(bool === null || bool == 'false') {
		return false;
	} else {
		return true;
	}
}
