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
	money += 100;
	alert('Correct! you won 100 dollars!');
	alert('You now have ' + money + ' dollars!');
} else {
	money -= 100;
	alert('Wrong! You lost 100 dollars!');
	alert('You now have ' + money + ' dollars!');
}
