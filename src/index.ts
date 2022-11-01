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
		case WeaponType.BattleRifle: return getBaseChallengeForAR(weapon);
		default: return [];
	}
}

function getMasterChallengesByWeaponType(type: WeaponType, weapon: Weapon): Challenge[] {
	switch(type) {
		case WeaponType.AR: return getMasterChallengeForAR(weapon);
		case WeaponType.SMG: return getMasterChallengeForAR(weapon);
		case WeaponType.BattleRifle: return getMasterChallengeForAR(weapon);
		default: return [];
	}
}

function btnClicker(weapon: Weapon, challenge: Challenge) {
	console.log(challenge);
	 var btn = document.getElementById(weapon.name + '-' + challenge.id)
	 challenge.completed = !challenge.completed;
	 if(btn?.style) {
		if(challenge.completed == true){
			btn.style.background = 'url("img/checkmark.png") repeat 0 0';
			btn.style.backgroundRepeat = 'no-repeat';
			btn.style.backgroundSize = '40%';
			btn.style.backgroundPosition = 'center';
			btn.style.backgroundColor = '#272727'; 
			btn.style.color = '##fefefe';
			btn.style.opacity = '50%';
		} 
		else { 
			btn.style.background = 'none';
			btn.style.backgroundColor = '#454545';
			btn.style.color = '#F1F1F1'; 
			btn.style.opacity = '100%';
		}
	}
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
				getChallengesByWeaponType(category.type, weapon);

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

					baseWeaponChallenge.addEventListener('click', function() {
						btnClicker(weapon, challenge);
					})

					weaponRow.appendChild(baseWeaponChallengeData);
				})

				var MasterWeaponRow = document.createElement('tr');

				weapon.challenges.masterChallenges.forEach(challenge => {
					var masterWeaponChallengeData = document.createElement('td');
					var masterWeaponChallenge = document.createElement('button');
					masterWeaponChallenge.textContent = challenge.description;
					masterWeaponChallenge.className = 'btn btn-mastery';
					masterWeaponChallengeData.appendChild(masterWeaponChallenge);

					masterWeaponChallenge.addEventListener('click', function() {
						btnClicker(weapon, challenge);
					})
					var masterWeaponChallengeDataSpacer = document.createElement('td');

					MasterWeaponRow.appendChild(masterWeaponChallengeDataSpacer);
					MasterWeaponRow.appendChild(masterWeaponChallengeData);

				})
				weaponsTable.appendChild(weaponRow);
				weaponsTable.appendChild(MasterWeaponRow);
				
				var weaponRowSpacer = document.createElement('td');
				weaponsTable.appendChild(weaponRowSpacer);
			})
		})
	}
};

CreateWeaponTables();
