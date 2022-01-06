let money = 0;

let ans1 = prompt('What is the Pokemon with the Pokedex ID of 4?');

if (ans1 === 'Squirtle' || ans1 == 'squirtle') {
	money += 100;
	alert('Correct! you won 100 dollars!');
	alert('You now have ' + money + ' dollars!');
} else {
	money -= 100;
	alert('Wrong! You lost 100 dollars!');
	alert('You now have ' + money + ' dollars!');
}

let ans2 = prompt('What year did Minecraft come out?');

if (ans2 === '2011') {
	money += 200;
	alert('Correct! you won 200 dollars!');
	alert('You now have ' + money + ' dollars!');
} else {
	money -= 100;
	alert('Wrong! You lost 100 dollars!');
	alert('You now have ' + money + ' dollars!');
}

let ans3 = prompt('In Marvel Comics and movies, who is known as the Mad Titan?');

if (ans3 === 'Thanos' || ans3 == 'thanos') {
	money += 500;
	alert('Correct! you won 500 dollars!');
	alert('You now have ' + money + ' dollars!');
} else {
	money -= 100;
	alert('Wrong! You lost 100 dollars!');
	alert('You now have ' + money + ' dollars!');
}

alert('You have won ' + money + " dollars. Let's see what prize you are taking home!");

if (money >= 800) {
	location.href = 'car.html';
} else if (money >= 300) {
	location.href = 'iphone.html';
} else if (money >= 0) {
	location.href = 'gum.html';
} else {
	location.href = 'kanga.html';
}
