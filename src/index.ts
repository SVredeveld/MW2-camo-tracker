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
		case WeaponType.WeaponType_AR: return getBaseChallengeForAR(weapon);
		case WeaponType.WeaponType_SMG: return getBaseChallengeForAR(weapon);
		case WeaponType.WeaponType_BattleRifle: return getBaseChallengeForAR(weapon);
		default: return [];
	}
}

function getMasterChallengesByWeaponType(type: WeaponType, weapon: Weapon): Challenge[] {
	switch(type) {
		case WeaponType.WeaponType_AR: return getMasterChallengeForAR(weapon);
		case WeaponType.WeaponType_SMG: return getMasterChallengeForAR(weapon);
		case WeaponType.WeaponType_BattleRifle: return getMasterChallengeForAR(weapon);
		default: return [];
	}
}
function btnClicker(weapon: Weapon, challenge: Challenge) {
	console.log(challenge);
	 var btn = document.getElementById(weapon.name + '-' + challenge.id)
	 console.log(btn)
	 if(btn?.style)btn.style.backgroundColor = 'white';
}

 
function CreateWeaponTables() {
	const weaponsTableContainer = document.getElementById("weapons-table-container");

	if(weaponsTableContainer) {
		const weaponCategory = GetweaponCategories();
		weaponCategory.forEach(category => {

			var headerText = document.createElement('h4');
			headerText.textContent = category.name;
			weaponsTableContainer.appendChild(headerText)

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
