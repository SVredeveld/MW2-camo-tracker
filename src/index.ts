import './style.scss';

let weapon_ar: string[] = ["stg", "volk", "scarrr", "newweapon"];

interface Challenge {
	description: string;
	completed: boolean;
}

interface Weapon {
	id: string;
	name: string;
	challenges: Challenge[];
	completed: boolean;
}

function getWeaponId() {
	return 'Random string';
}

function getChallengesByWeaponType(): Challenge {
	return {
		description: "test",
		completed: true,
	}
}

function addNewWeapon (name: string, type: string) {
	return {
		id: getWeaponId(),
		name,
		challenges: getChallengesByWeaponType()
	};
}

function CreateARs(weapon: string[]) {
  const element= document.getElementById("weapons-list-ar");
	
  if (element) {
		weapon.forEach(w => {
			let arTitle = "ar-title-"+w;
			element.innerHTML += `
				<li id="${arTitle}"> 
					${w}
				</li>
			`;
			const title = document.getElementById(arTitle);
			if(title) {
				console.log(arTitle)
				title.textContent = w;
				CreateChallengeslist(arTitle);
			}
		});

	
  }
}

let challenges_ar: string[] = ["headshots", "longshots", "500 kills"]

function CreateChallengeslist(title: string) {
 const element = document.getElementById(title);
 console.log(element)

 element?.innerHTML += `
	<p>${challenges_ar}</p>
 `
}
CreateARs(weapon_ar);


