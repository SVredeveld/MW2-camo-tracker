export interface Challenge {
	description: string;
	completed: boolean;
}

export interface Weapon {
	name: string;
	challenges?: ChallengeProgress;
	completed: boolean;
}

export enum WeaponType {
	AR = "AR",
	SMG = "SMG",
	SHOTGUN = "SHOTGUN"
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
