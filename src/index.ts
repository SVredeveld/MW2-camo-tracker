import { getBaseChallengeForAR, getMasterChallengeForAR } from './challenges/challengesAR';
import { getBaseChallengeForBR, getMasterChallengeForBR } from './challenges/challengesBR';
import { getBaseChallengeForHangun, getMasterChallengeForHangun } from './challenges/challengesHandgun';
import { getBaseChallengeForLauncher, getMasterChallengeForLauncher } from './challenges/challengesLauncher';
import { getBaseChallengeForLMG, getMasterChallengeForLMG } from './challenges/challengesLMG';
import { getBaseChallengeForMarksman, getMasterChallengeForMarksman } from './challenges/challengesMarksman';
import { getBaseChallengeForMelee, getMasterChallengeForMelee } from './challenges/challengesMelee';
import { getBaseChallengeForShotgun, getMasterChallengeForShotgun } from './challenges/challengesShotgun';
import { getBaseChallengeForSMG, getMasterChallengeForSMG } from './challenges/challengesSMG';
import { getBaseChallengeForSniper, getMasterChallengeForSniper } from './challenges/challengesSniper';
import './style.scss';
import { Challenge, ChallengeProgress, Weapon, WeaponType, WeaponType_BattleRifle, WeaponType_LMG } from './types';
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
		case WeaponType.BattleRifle: return getBaseChallengeForBR(weapon);
		case WeaponType.SMG: return getBaseChallengeForSMG(weapon);
		case WeaponType.Shotgun: return getBaseChallengeForShotgun(weapon);
		case WeaponType.LMG: return getBaseChallengeForLMG(weapon);
		case WeaponType.Marksman: return getBaseChallengeForMarksman(weapon);
		case WeaponType.Sniper: return getBaseChallengeForSniper(weapon);
		case WeaponType.Handgun: return getBaseChallengeForHangun(weapon);
		case WeaponType.Launcher: return getBaseChallengeForLauncher(weapon);
		case WeaponType.Melee: return getBaseChallengeForMelee(weapon);
		default: return [];
	}
}

function getMasterChallengesByWeaponType(type: WeaponType, weapon: Weapon): Challenge[] {
	switch(type) {
		case WeaponType.AR: return getMasterChallengeForAR(weapon);
		case WeaponType.BattleRifle: return getMasterChallengeForBR(weapon);
		case WeaponType.SMG: return getMasterChallengeForSMG(weapon);
		case WeaponType.Shotgun: return getMasterChallengeForShotgun(weapon);
		case WeaponType.LMG: return getMasterChallengeForLMG(weapon);
		case WeaponType.Marksman: return getMasterChallengeForMarksman(weapon);
		case WeaponType.Sniper: return getMasterChallengeForSniper(weapon);
		case WeaponType.Handgun: return getMasterChallengeForHangun(weapon);
		case WeaponType.Launcher: return getMasterChallengeForLauncher(weapon);
		case WeaponType.Melee: return getMasterChallengeForMelee(weapon);
		default: return [];
	}
}

function checkButton(btn: HTMLElement) {
	btn.style.background = 'url("img/checkmark.png") repeat 0 0';
			btn.style.backgroundRepeat = 'no-repeat';
			btn.style.backgroundSize = '40%';
			btn.style.backgroundPosition = 'center';
			btn.style.color = '#fefefe';
			btn.style.opacity = '70%';
}

function setButtonColors(btn: HTMLElement, challenge: Challenge, mastery: boolean) {
	if(btn?.style) {
		if(challenge.completed == true)
		 {
			 console.log(challenge)
			 checkButton(btn);
			 var background = mastery ? '#2c2c00' : '#272727'; 
			 btn.style.backgroundColor = background; 

		 } 
		 else { 				
			 btn.style.background = 'none';
			 var background = mastery ? '#4e4e00': '#454545' ; 
			 btn.style.backgroundColor = background; 
			 btn.style.color = '#F1F1F1'; 
			 btn.style.opacity = '100%';
		 }
	 }
}

function btnClicker(weapon: Weapon, challenge: Challenge, mastery: boolean) {
	 var btn = document.getElementById(weapon.name + '-' + challenge.id)!
	 challenge.completed = !challenge.completed;
	 var localKeyString = weapon.name + '-' + challenge.id;
	 window.localStorage.setItem(localKeyString, challenge.completed.toString())
	setButtonColors(btn, challenge, mastery);
	
}
 
function CreateWeaponTables() {
	const weaponsTableContainer = document.getElementById("weapons-table-container");

	if(weaponsTableContainer) {
		const weaponCategory = GetweaponCategories();
		weaponCategory.forEach(category => {

			var headerText = document.createElement('h3');
			headerText.textContent = category.name;
			headerText.id = "weapons-list-" + category.type;
			headerText.className = "content";
			weaponsTableContainer.appendChild(headerText);

			var weaponsTable = document.createElement('table');
			weaponsTableContainer.appendChild(weaponsTable)

			category.weapons.forEach(weapon => {
				weapon.challenges = getChallengesByWeaponType(category.type, weapon);
				//getChallengesByWeaponType(category.type, weapon);

				var weaponRow = document.createElement('tr');
				var weaponName = document.createElement('td');
				weaponName.textContent = weapon.name;

				weaponRow.appendChild(weaponName);

				weapon.challenges.baseChallenges.forEach(challenge => {
					var baseWeaponChallengeData = document.createElement('td');
					var baseWeaponChallenge = document.createElement('button');
					baseWeaponChallenge.textContent = challenge.description;
					baseWeaponChallenge.className = 'btn';
					baseWeaponChallenge.id = weapon.name + '-' + challenge.id;
					baseWeaponChallengeData.appendChild(baseWeaponChallenge);
					setButtonColors(baseWeaponChallenge, challenge, false)

					baseWeaponChallenge.addEventListener('click', function() {
						btnClicker(weapon, challenge, false);
					})

					weaponRow.appendChild(baseWeaponChallengeData);
				})

				var MasterWeaponRow = document.createElement('tr');
				var masterWeaponChallengePrefix = document.createElement('td');
				MasterWeaponRow.appendChild(masterWeaponChallengePrefix)


				weapon.challenges.masterChallenges.forEach(challenge => {
					var masterWeaponChallengeData = document.createElement('td');
					var masterWeaponChallenge = document.createElement('button');
					masterWeaponChallenge.textContent = challenge.description;
					masterWeaponChallenge.className = 'btn btn-mastery';
					masterWeaponChallenge.id = weapon.name + '-' + challenge.id;

					masterWeaponChallengeData.appendChild(masterWeaponChallenge);
					setButtonColors(masterWeaponChallenge, challenge, true)


					masterWeaponChallenge.addEventListener('click', function() {
						btnClicker(weapon, challenge, true);
					})

					MasterWeaponRow.appendChild(masterWeaponChallengeData);

				})
				weaponsTable.appendChild(weaponRow);
				weaponsTable.appendChild(MasterWeaponRow);
				
				var weaponRowSpacer = document.createElement('td');
				weaponsTable.appendChild(weaponRowSpacer);
			})
		})

		//
	}
};

CreateWeaponTables();
