import { getBaseChallengeForAR, getMasterChallengeForAR } from './challenges/challengesAR';
import './style.scss';
import { Challenge, ChallengeProgress, WeaponType } from './types';
import { GetweaponCategories } from './weaponsFactory';


function getChallengesByWeaponType(type: WeaponType): ChallengeProgress {
	return {
		baseChallenges: getBaseChallengesByWeaponType(type),
		baseChallengesComplete: false,
		masterChallenges: getMasterChallengesByWeaponType(type),
		masterChallengesComplete: false
	};
}

function getBaseChallengesByWeaponType(type: WeaponType): Challenge[] {
	switch(type) {
		case WeaponType.AR: return getBaseChallengeForAR();
		case WeaponType.SMG: return getBaseChallengeForAR();
		case WeaponType.SHOTGUN: return getBaseChallengeForAR();
		default: return [];
	}
}

function getMasterChallengesByWeaponType(type: WeaponType): Challenge[] {
	switch(type) {
		case WeaponType.AR: return getMasterChallengeForAR();
		case WeaponType.SMG: return getMasterChallengeForAR();
		case WeaponType.SHOTGUN: return getMasterChallengeForAR();
		default: return [];
	}
}

function CreateARs() {
	const weaponsTableContainer = document.getElementById("weapons-table-container");
	const weaponTableChallengeDescription = document.getElementById("weapon-table-challenge-description");

	if(weaponsTableContainer) {
		const weaponCategory = GetweaponCategories();
		weaponCategory.forEach(category => {
			weaponsTableContainer.innerHTML += 
			`
			<h4>${category.name}</h4>
			`;
			category.weapons.forEach(weapon => {
				weapon.challenges = getChallengesByWeaponType(category.type);
				getChallengesByWeaponType(category.type);
				console.log(weapon)
				let html = 
					`
					<table>
						<tr>
							<td>${weapon.name}</td>
					`;

					weapon.challenges.baseChallenges.forEach(challenge => {
						console.log(challenge.description);
						html += 
								`
									<td>${challenge.description}</td>
								`;				
					})
					html += 
					
					`</tr>
					</table>
					`;
					weaponsTableContainer.innerHTML += html
		})
	})
}}

CreateARs();


