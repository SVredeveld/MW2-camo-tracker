export interface Challenge {
	id?: number;
	description: string;
	completed: boolean;
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

export interface WeaponCategory {
	name: string;
	type: WeaponType;
	weapons: Weapon[];
}

export interface ChallengeProgress {
	baseChallenges: Challenge[];
	baseChallengesComplete: boolean;
	masterChallenges: Challenge[];
	masterChallengesComplete: boolean;
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
