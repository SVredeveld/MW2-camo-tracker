import {
	WeaponCategory,
	WeaponType
} from "./types";

export const GetweaponCategories = (): WeaponCategory[] => [
	{
		name: 'Assault Rifles',
		type: WeaponType.AR,
		weapons: [
			{
				name: "M4",
				completed: false
			},
			{
				name: "TAC-Q",
				completed: false
			}
		]
	},
	{
		name: 'Submachine Guns',
		type: WeaponType.SMG, 
		weapons: [
			{
				name: "MP5",
				completed: false
			},
			{
				name: "Firebird",
				completed: false
			}
		]
	}
];