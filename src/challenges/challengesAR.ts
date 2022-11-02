import { Weapon, WeaponType_AR } from "../types"

export function getBaseChallengeForAR(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_AR.M4: {
			return [
				{
					id: 0,
					description: "Get x kills",
					completed: getCompleted(weapon, 0),
				},
				{
					id: 1,
					description: "Get x kills without reloading",
					completed: getCompleted(weapon, 1),
				}, 
				{
					id: 2,
					description: "Get x mounted",
					completed: getCompleted(weapon, 2),
				},  
				{
					id: 3,
					description: "Get x hipfire",
					completed: getCompleted(weapon, 3),
				},  
			]
		}
		case WeaponType_AR.TAQ_56: {
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
		case WeaponType_AR.Kastov762: {
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
		case WeaponType_AR.Lachmann556: {
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
		case WeaponType_AR.STB556: {
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
		case WeaponType_AR.M16: {
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
		case WeaponType_AR.Kastov74u: {
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
		}		case WeaponType_AR.Kastov545: {
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

export function getMasterChallengeForAR(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_AR.M4: {
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
		case WeaponType_AR.TAQ_56: {
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
		case WeaponType_AR.Kastov762: {
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
		case WeaponType_AR.Lachmann556: {
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
		case WeaponType_AR.STB556: {
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
		case WeaponType_AR.M16: {
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
		case WeaponType_AR.Kastov74u: {
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
		case WeaponType_AR.Kastov545: {
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
