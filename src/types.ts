export interface ChallengeProgress {
	baseChallenges: Challenge[];
	baseChallengesComplete: boolean;
	masterChallenges: Challenge[];
	masterChallengesComplete: boolean;
}

export interface Challenge {
	id?: number;
	description: string;
	completed: boolean;
}

export interface WeaponCategory {
	name: string;
	type: WeaponType;
	weapons: Weapon[];
}

export interface Weapon {
	name: string;
	challenges?: ChallengeProgress;
	completed: boolean;
}

export enum WeaponType {
	WeaponType_AR,
	WeaponType_SMG,
	WeaponType_BattleRifle
} 


export enum WeaponType_AR {
	M4 = "M4",
	TAQ_56 = "TAQ-56",
	Kastov762 = "Kastov-762",
	Lachmann556 = "Lachmann-556",
	STB556 = "STB-556",
	M16 ="M16",
	Kastov74u = "Kastov-74U",
	Kastov545 ="Kastov-545"
}

export enum WeaponType_BattleRifle {
	Lachmann_762 = "Lachmann-762",
	SO_14 = "SO-14",
	TAQ_V = "TAQ-V",
	FTac_Recon = "FTac Recon"
}

export enum WeaponType_SMG {
	VEL_46 = "Vel-46",
	MX9 = "MX9",
	Lachmann_sub ="Lachmann sub",
	Vaznev_9K ="Vaznev-9K",
	FFS_Hurricane ="FFS Hurricane",
	Minibak ="Minibak",
	PDSW_528 = "PDSW 528",
	Fennec_45 ="Fennec 45"
}

export enum WeaponType_Shotgun {
	Lockwood_300 = "Lockwood 300",
	Expedite_12 = "Expedite 12",
	Bryson_800 = "Bryson 800",
	Bryson_890 = "Bryson 890"
}

export enum WeaponType_LMG {
	SAKIN_MG38 = "SAKIN MG38",
	HCR_56 = "HCR 56",
	_556_Icarus = "556 Icarus",
	RAAL_MG = "RAAL MG",
	RPK = "RPK",
	RAPP_H = "RAPP H"
}

export enum WeaponType_Marksman {
	EBR_14 = "EBR_14",
	SPR_208 = "SP-R 208",
	Lockwood_MK2 = "Lockwood MK2",
	LMS = "LM-S",
	SAB_50 = "SA-B 50",
	TAQ_M = "TAQ-M"
}

export enum WeaponType_Sniper {
	MCPR_300 = "MCPR-300",
	Signal_50 = "Signal 50",
	LAB_330 = "LA-B 330", 
	SPX_80 = "SP-X 80"
}

export enum WeaponType_Handgun {
	P890 = "P890",
	_50_GS = ".50 GS",
	X12 = "X12",
	Basilisk = "Basilisk",
	X13_Auto = "X13 Auto"
}

export enum WeaponType_Launcher {
	PILA = "PILA",
	Strela_P = "Strela-P",
	JOKR = "JOKR",
	RPG_7 = "RPG-7"
}

export enum WeaponType_Melee {
	Riot_Shield = "Riot shield",
	Combat_Knife = "Combat knife"
}
