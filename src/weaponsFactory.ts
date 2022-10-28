import {
	WeaponCategory,
	WeaponType,
	WeaponType_AR,
	WeaponType_SMG
} from "./types";

export const GetweaponCategories = (): WeaponCategory[] => [
	{
		name: 'Assault Rifles',
		type: WeaponType.AR,
		weapons: [
			{
				name: WeaponType_AR.M4,
				completed: false
			},
			{
				name: WeaponType_AR.TAQ_Q,
				completed: false
			}
		]
	},
	{
		name: 'Submachine Guns',
		type: WeaponType.SMG, 
		weapons: [
			{
				name: WeaponType_SMG.MP5,
				completed: false
			},
			{
				name: WeaponType_SMG.Firebird,
				completed: false
			}
		]
	}
];