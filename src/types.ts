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
}
export enum WeaponType_SMG {
	MP5 = "MP5",
	Firebird = "Firebird"
}

export enum WeaponType {
	AR = "AR" ,
	SMG = "SMG",
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
