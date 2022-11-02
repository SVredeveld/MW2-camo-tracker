import { Weapon, WeaponType_Launcher } from "../types"

export function getBaseChallengeForLauncher(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_Launcher.PILA: {
			return [
				{
					id: 0,
					description: "Get x kills",
					completed: getCompleted(weapon, 0),
				}
			]
		}
        case WeaponType_Launcher.Strela_P: {
			return [
				{
					id: 0,
					description: "Get x kills",
					completed: getCompleted(weapon, 0),
				}
			]
		}
        case WeaponType_Launcher.JOKR: {
			return [
				{
					id: 0,
					description: "Get x kills",
					completed: getCompleted(weapon, 0),
				}
			]
		}
        case WeaponType_Launcher.RPG_7: {
			return [
				{
					id: 0,
					description: "Get x kills",
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
        case WeaponType_Launcher.Strela_P: {
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
        case WeaponType_Launcher.JOKR: {
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
        case WeaponType_Launcher.RPG_7: {
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
