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
			},
			{
				name: WeaponType_AR.Kastov762,
				completed: false
			},
			{
				name: WeaponType_AR.Lachmann556,
				completed: false
			},
			{
				name: WeaponType_AR.STB556,
				completed: false
			},
			{
				name: WeaponType_AR.M16,
				completed: false
			},
			{
				name: WeaponType_AR.Kastov545,
				completed: false
			},
			{
				name: WeaponType_AR.Kastov545,
				completed: false
			},
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
	},
	{
		name: 'Battle Rifle',
		type: WeaponType.BATTLERIFLE, 
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