//Object for initialized dice and as reference
let diceArr = [];
//Object for dice rolled
let diceRolled = [];
let hasDiceRolled = false;

let player1 = {
	playerName:"Player 1",
	score:0,
};

let player2 = {
	playerName:"Player 1",
	score:0,
};

//init Dice and diceRolled
function initializeDice(){
	for(i = 0; i < 6; i++){
		diceArr[i] = {};
		diceArr[i].id = "die" + (i+1);
		diceArr[i].value = i + 1;
		diceArr[i].clicked = 0;

		diceRolled[i] = {};
		diceRolled[i].id = 1;
		diceRolled[i].value = i + 1;
		diceRolled[i].clicked = 0;
	}
}

/*Rolling dice values*/
function rollDice(){
	for(let i=0; i < 6; i++){
		if(diceRolled[i].clicked === 0){
			diceRolled[i].value = Math.floor((Math.random() * 6) + 1);
			diceRolled[i].id +=1;
			console.log(diceRolled[i]);
		}
	}
	
	hasDiceRolled = true;

	updateDiceImg(diceRolled);
}

/*Updating images of dice given values of rollDice*/
function updateDiceImg(diceRolled){
	let diceImage;
	for(let i = 0; i < 6; i++){
		diceImage = "images/" + diceRolled[i].value + ".png";
		console.log(diceImage);
		document.getElementById("die" + (i+1)).setAttribute("src", diceImage);
	}
}

function diceClick(img){
	let i = img.getAttribute("data-number");

	img.classList.toggle("transparent");
	
	if(hasDiceRolled === true){
		if(diceRolled[i].clicked === 0){
			diceRolled[i].clicked = 1;
		}
		else{
			diceRolled[i].clicked = 0;
		}
	
		displayScore(calculateScore(diceRolled));
	}
	

}

function displayScore(score){
	document.getElementsByClassName("row score")[0].textContent = String(score);
	console.log("display Score: " + score);
}

//object for scores for instances of 3 of same value
const threeScoreObject = {
	1:1000,
	2:200,
	3:300,
	4:400,
	5:500,
	6:600
};



function calculateScore(rolledDiceArray){
	let counter = {};
	let score = 0;

	//iterate through dice roll and count frequency of values
	for (let dice of rolledDiceArray) {
		if(dice.clicked === 1){
			if(counter[dice.value]){
				counter[dice.value]++;
			}else{
				counter[dice.value] = 1;
			}

			if(counter[dice.value] === 3){
				counter[dice.value] = 0;
				score += threeScoreObject[dice.value];
			}
		}
	}//end dice roll array iteration

	for(let dice in counter){
		let value = parseInt(dice);

		if(value === 1){
			score += ( 100 * (counter[dice]) );

		}
		else if (value === 5){
			score += ( 50 * (counter[dice]) );
		}
	}

	console.log(score);
	return score;
	
}

function addScore(playerName,score){
	playerName.score = score;
}

//helper function to determine if roll is Farkle
function isFarkle(rolledDiceArray){
	if(dice.clicked === 0){
		if(counter[dice.value]){
			counter[dice.value]++;
		}else{
			counter[dice.value] = 1;
		}

		if(counter[dice.value] === 3){
			counter[dice.value] = 0;
			score += threeScoreObject[dice.value];
		}
	}//end dice roll array iteration

	for(let dice in counter){
		let value = parseInt(dice);

		if(value === 1){
			score += ( 100 * (counter[dice]) );

		}
		else if (value === 5){
			score += ( 50 * (counter[dice]) );
		}

		if(score > 0){
			return false;
		}	
		else{
			return true;
		}

	}	
}
//Function to pass turn either from farkle or passing
// function passTurn(){}