import {
	WeaponCategory,
	WeaponType,
	WeaponType_AR,
	WeaponType_BattleRifle,
	WeaponType_Handgun,
	WeaponType_Launcher,
	WeaponType_LMG,
	WeaponType_Marksman,
	WeaponType_Melee,
	WeaponType_Shotgun,
	WeaponType_SMG,
	WeaponType_Sniper
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
				name: WeaponType_AR.Kastov74u,
				completed: false
			},
			{
				name: WeaponType_AR.Kastov545,
				completed: false
			},
		]
	},
	{
		name: 'Battle Rifles',
		type: WeaponType.BattleRifle, 
		weapons: [
			{
				name: WeaponType_BattleRifle.Lachmann_762,
				completed: false
			},
			{
				name: WeaponType_BattleRifle.SO_14,
				completed: false
			},
			{
				name: WeaponType_BattleRifle.TAQ_V,
				completed: false
			},			
			{
				name: WeaponType_BattleRifle.FTac_Recon,
				completed: false
			}
		]
	},
	{
		name: 'Submachine Guns',
		type: WeaponType.SMG, 
		weapons: [
			{
				name: WeaponType_SMG.VEL_46,
				completed: false
			},			
			{
				name: WeaponType_SMG.MX9,
				completed: false
			},
			{
				name: WeaponType_SMG.Lachmann_sub,
				completed: false
			},
			{
				name: WeaponType_SMG.Vaznev_9K,
				completed: false
			},
			{
				name: WeaponType_SMG.FFS_Hurricane,
				completed: false
			},
			{
				name: WeaponType_SMG.Minibak,
				completed: false
			},
			{
				name: WeaponType_SMG.PDSW_528,
				completed: false
			},
			{
				name: WeaponType_SMG.Fennec_45,
				completed: false
			}
		]
	},
	{
		name: 'Shotguns',
		type: WeaponType.Shotgun, 
		weapons: [
			{
				name: WeaponType_Shotgun.Lockwood_300,
				completed: false
			},
			{
				name: WeaponType_Shotgun.Expedite_12,
				completed: false
			},
			{
				name: WeaponType_Shotgun.Bryson_800,
				completed: false
			},		
			{
				name: WeaponType_Shotgun.Bryson_890,
				completed: false
			},
		]
	},
	{
		name: 'Light Machine Guns',
		type: WeaponType.LMG, 
		weapons: [
			{
				name: WeaponType_LMG.SAKIN_MG38,
				completed: false
			},
			{
				name: WeaponType_LMG.HCR_56,
				completed: false
			},
			{
				name: WeaponType_LMG._556_Icarus,
				completed: false
			},		
			{
				name: WeaponType_LMG.RAAL_MG,
				completed: false
			},
			{
				name: WeaponType_LMG.RPK,
				completed: false
			},
			{
				name: WeaponType_LMG.RAPP_H,
				completed: false
			}
		]
	},
	{
		name: 'Marksman Rifles',
		type: WeaponType.Marksman, 
		weapons: [
			{
				name: WeaponType_Marksman.EBR_14,
				completed: false
			},
			{
				name: WeaponType_Marksman.SPR_208,
				completed: false
			},
			{
				name: WeaponType_Marksman.Lockwood_MK2,
				completed: false
			},
			{
				name: WeaponType_Marksman.LMS,
				completed: false
			},
			{
				name: WeaponType_Marksman.SAB_50,
				completed: false
			},
			{
				name: WeaponType_Marksman.TAQ_M,
				completed: false
			}			
		]
	},
	{
		name: 'Sniper Rifles',
		type: WeaponType.Sniper, 
		weapons: [
			{
				name: WeaponType_Sniper.MCPR_300,
				completed: false
			},
			{
				name: WeaponType_Sniper.Signal_50,
				completed: false
			},
			{
				name: WeaponType_Sniper.LAB_330,
				completed: false
			},		
			{
				name: WeaponType_Sniper.SPX_80,
				completed: false
			}
		]
	},
	{
		name: 'Handguns',
		type: WeaponType.Handgun, 
		weapons: [
			{
				name: WeaponType_Handgun.P890,
				completed: false
			},
			{
				name: WeaponType_Handgun._50_GS,
				completed: false
			},
			{
				name: WeaponType_Handgun.X12,
				completed: false
			},		
			{
				name: WeaponType_Handgun.Basilisk,
				completed: false
			},
			{
				name: WeaponType_Handgun.X13_Auto,
				completed: false
			}
		]
	},
	{
		name: 'Launchers',
		type: WeaponType.Launcher,
		weapons: [
			{
				name: WeaponType_Launcher.PILA,
				completed: false
			},
			{
				name: WeaponType_Launcher.Strela_P,
				completed: false
			},
			{
				name: WeaponType_Launcher.JOKR,
				completed: false
			},
			{
				name: WeaponType_Launcher.RPG_7,
				completed: false
			}
		]
	},
	{
		name: 'Melee',
		type: WeaponType.Melee, 
		weapons: [
			{
				name: WeaponType_Melee.Riot_Shield,
				completed: false
			},
			{
				name: WeaponType_Melee.Combat_Knife,
				completed: false
			}
		]
	},
	
];