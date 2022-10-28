import { getBaseChallengeForAR, getMasterChallengeForAR } from './challenges/challengesAR';
import './style.scss';
import { Challenge, ChallengeProgress, Weapon, WeaponType } from './types';
import { GetweaponCategories } from './weaponsFactory';


function getChallengesByWeaponType(type: WeaponType, weapon: Weapon): ChallengeProgress {
	return {
		baseChallenges: getBaseChallengesByWeaponType(type, weapon),
		baseChallengesComplete: false,
		masterChallenges: getMasterChallengesByWeaponType(type,weapon),
		masterChallengesComplete: false
	};
}

function getBaseChallengesByWeaponType(type: WeaponType, weapon: Weapon): Challenge[] {
	switch(type) {
		case WeaponType.AR: return getBaseChallengeForAR(weapon);
		case WeaponType.SMG: return getBaseChallengeForAR(weapon);
		case WeaponType.SHOTGUN: return getBaseChallengeForAR(weapon);
		default: return [];
	}
}

function getMasterChallengesByWeaponType(type: WeaponType, weapon: Weapon): Challenge[] {
	switch(type) {
		case WeaponType.AR: return getMasterChallengeForAR(weapon);
		case WeaponType.SMG: return getMasterChallengeForAR(weapon);
		case WeaponType.SHOTGUN: return getMasterChallengeForAR(weapon);
		default: return [];
	}
}
const btnClicker = (weapon: string) =>{
	console.log(weapon);
}

 
function CreateARs() {
	const weaponsTableContainer = document.getElementById("weapons-table-container");

	if(weaponsTableContainer) {
		const weaponCategory = GetweaponCategories();
		weaponCategory.forEach(category => {
			let html = ``;
			html += 
			`
			<h4>${category.name}</h4>
			<table>
			`;
			category.weapons.forEach(weapon => {
				weapon.challenges = getChallengesByWeaponType(category.type, weapon);
				getChallengesByWeaponType(category.type, weapon);
				let wwweapon = weapon;
				html += 
					`<tr>
						<td class="weapon-name">${weapon.name}</td>`;

					weapon.challenges.baseChallenges.forEach(challenge => {
						html += 
						`<td><input id="btn-challenge" type="button" value="${challenge.description}"class="btn"/></td>`;	
					})
					
					html += 
					`</tr>
					<tr> 
						<td></td>`;
						weapon.challenges.masterChallenges.forEach(challenge => {
							html += 
							`<td><button class="btn btn-mastery">${challenge.description}</button></td>
							<tr><td></td></tr>`;	
						})
				})
				weaponsTableContainer.innerHTML += html
			})
		}
	}



CreateARs();




// const buttn = document.getElementById("btn");

// buttn?.addEventListener('click', function handleClick(event) {
// 	console.log('button clicked');
// 	console.log(event);
// 	console.log(event.target);
//  });

