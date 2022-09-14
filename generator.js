var text = document.getElementsByTagName('h1')[0];
var butt = document.getElementsByTagName('button')[0];
var span = document.getElementById('number');

let adjLen = adjectives.length;
let nouLen = nouns.length;
let btnTxt = "Generate!";

let counter = 0;

span.innerHTML = Math.trunc(adjLen * nouLen/100)*100;

function degenerate() {
	let str = adjectives[rng(0, adjLen)] + " " + nouns[rng(0, nouLen)];
	text.innerHTML = str.slice(0, 1).toUpperCase() + str.slice(1);
	counter ++;
	
	if (counter == 5) btnTxt = "Generate!!!";
	if (counter == 20) btnTxt = "Let's keep going!";
	if (counter == 40) btnTxt = "More! More!";
	if (counter == 50) btnTxt = "More!!!";
	if (counter == 60) btnTxt = "MOAR!!!";
	if (counter == 75) btnTxt = "You like that, don't you?";
	if (counter == 90) btnTxt = "You little perv!";
	if (counter == 100) btnTxt = "You want more?!";
	if (counter == 115) counter = 0;

	butt.innerHTML = btnTxt;
}

function rng(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}