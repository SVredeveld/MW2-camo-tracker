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
import { Challenge, ChallengeProgress, MasteryType, Weapon, WeaponCategory, WeaponType, WeaponType_BattleRifle, WeaponType_LMG } from './types';
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
			 checkButton(btn);
			 //var background = !mastery ? '#2c2c00' : '#272727'; 

			 var background = !mastery ? '#272727' :
						challenge.mastery == MasteryType.Gold ? '#ffc1077a' :
						challenge.mastery == MasteryType.Plat ? '#e5e5e5a6' : 
						challenge.mastery == MasteryType.Poly ? '#8500d963' :
						'#2c2c00';
			 btn.style.backgroundColor = background; 
		 } 
		 else { 				
			 btn.style.background = 'none';
			 //var background = mastery ? '#4e4e00': '#454545' ; 
			 var background = !mastery ? '#454545' :
			 challenge.mastery == MasteryType.Gold ? '#ffc107a1' :
			 challenge.mastery == MasteryType.Plat ? '#e5e5e5e3' : 
			 challenge.mastery == MasteryType.Poly ? '#8500d98c' :
			 '#2c2c00';
			 btn.style.backgroundColor = background; 
			 //btn.style.color = '#F1F1F1'; 
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
	collectData(weapon);
	trackGoldChallengesCompletedPerCategory()
}

function collectData(weapon: Weapon) {
	var CompletedGoldPerWeapon = weapon.challenges?.masterChallenges.filter( (challenge) => {
		return challenge.mastery === MasteryType.Gold && challenge.completed;
	}).length;

	const numberOfGoldWeapons = document.getElementById("tracker")!;
	if(numberOfGoldWeapons){
		numberOfGoldWeapons.textContent = CompletedGoldPerWeapon?.toString() || null;
	}

}

function headerTracker(category: WeaponCategory) {
	const text = document.getElementById("tracker")!;
	var numberOfWeapons = 0;
	// category.weapons.forEach(element => {
	// 	numberOfWeapons +=1;
	// });

	for(var weapon of category.weapons) {
		numberOfWeapons += 1;
		console.log("test" + numberOfWeapons)
	}
	return numberOfWeapons;

}

function trackGoldChallengesCompletedPerCategory(category: WeaponCategory) {
	var completed = category.weapons.filter((challenge) => {
		return challenge.challenges?.masterChallenges.filter((master) => {
			master.mastery == MasteryType.Gold && master.completed;
		}).length
	}).length;
	console.log(`completed ${completed}`)
	return completed;
}

function CreateWeaponTables() {
	const weaponsTableContainer = document.getElementById("weapons-table-container");
	var totalNumberOfWeapons = 0;

	if(weaponsTableContainer) {
		const weaponCategory = GetweaponCategories();
		weaponCategory.forEach(category => {
			var weaponsInCategory = headerTracker(category).toString();
			var challengesCompleted = trackGoldChallengesCompletedPerCategory(category);
			var weaponsCounter = ` ${challengesCompleted} / ${weaponsInCategory}`;

			var headerText = document.createElement('h3');
			headerText.textContent = category.name + weaponsCounter;
			headerText.id = "weapons-list-" + category.type;
			headerText.className = "content";
			weaponsTableContainer.appendChild(headerText);

			var weaponsTable = document.createElement('table');
			weaponsTableContainer.appendChild(weaponsTable)

			category.weapons.forEach(weapon => {
				weapon.challenges = getChallengesByWeaponType(category.type, weapon);

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
				masterWeaponChallengePrefix.id = 'masterWeaponChallengePrefix';
				MasterWeaponRow.appendChild(masterWeaponChallengePrefix)


				weapon.challenges.masterChallenges.forEach(challenge => {
					var masterWeaponChallengeData = document.createElement('td');
					var masterWeaponChallenge = document.createElement('button');
					masterWeaponChallenge.textContent = challenge.description;
					masterWeaponChallenge.className = 'btn btn-mastery';

					if(challenge.mastery == MasteryType.Gold) {
						masterWeaponChallenge.className += '-gold'
					}
					if(challenge.mastery == MasteryType.Plat) {
						masterWeaponChallenge.className += '-plat'
					}					
					if(challenge.mastery == MasteryType.Poly) {
						masterWeaponChallenge.className += '-poly'
					}
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


