import { Weapon, WeaponType_SMG } from "../types"

export function getBaseChallengeForSMG(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_SMG.VEL_46: {
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
		case WeaponType_SMG.MX9: {
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
		case WeaponType_SMG.Lachmann_sub: {
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
		case WeaponType_SMG.Vaznev_9K: {
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
		case WeaponType_SMG.FFS_Hurricane: {
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
		case WeaponType_SMG.Minibak: {
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
		case WeaponType_SMG.PDSW_528: {
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
		case WeaponType_SMG.Fennec_45: {
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

export function getMasterChallengeForSMG(weapon: Weapon) {
	switch(weapon.name) {
		case WeaponType_SMG.VEL_46: {
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
		case WeaponType_SMG.MX9: {
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
		case WeaponType_SMG.Lachmann_sub: {
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
		case WeaponType_SMG.Vaznev_9K: {
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
		case WeaponType_SMG.FFS_Hurricane: {
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
		case WeaponType_SMG.Minibak: {
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
		case WeaponType_SMG.PDSW_528: {
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
		case WeaponType_SMG.Fennec_45: {
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
