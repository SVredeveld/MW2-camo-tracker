export interface Challenge {
	description: string;
	completed: boolean;
}

export interface Weapon {
	name: string;
	challenges?: ChallengeProgress;
	completed: boolean;
}

export enum WeaponType_AR {
	M4 = "M4",
	TAQ_Q = "TAC-Q",
	Kastov762 = "Kastov-762",
	Lachmann556 = "Lachmann-556",
	STB556 = "STB-556",
	M16 ="M16",
	Kastov74u = "Kastov-74U",
	Kastov545 ="Kastov-545"
}
export enum WeaponType_SMG {
	MP5 = "MP5",
	Firebird = "Firebird"
}

export enum WeaponType {
	AR = "AR" ,
	SMG = "SMG",
	BATTLERIFLE = "BATTLERIFLE",
	SHOTGUN = "SHOTGUN"
} 

// export enum WeaponName {
// 	M4 = "M4",
// 	TAQ_Q = "TAC-Q",
// 	MP5 = "MP5",
// 	Firebird = "Firebird"
// }



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
