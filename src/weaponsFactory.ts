import {
	WeaponCategory,
	WeaponType,
	WeaponType_AR,
	WeaponType_SMG
} from "./types";

export const GetweaponCategories = (): WeaponCategory[] => [
	{
		name: 'Assault Rifles',
		type: WeaponType.WeaponType_AR,
		weapons: [
			{
				name: WeaponType_AR.M4,
				completed: false
			},
			{
				name: WeaponType_AR.TAQ_56,
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
		type: WeaponType.WeaponType_SMG, 
		weapons: [
			{
				name: WeaponType_SMG.VEL_46,
				completed: false
			},
			{
				name: WeaponType_SMG.Lachmann_sub,
				completed: false
			}
		]
	},
	{
		name: 'Battle Rifle',
		type: WeaponType.WeaponType_BattleRifle, 
		weapons: [
			{
				name: WeaponType_SMG.FFS_Hurricane,
				completed: false
			},
			{
				name: WeaponType_SMG.Fennec_45,
				completed: false
			}
		]
	}
];