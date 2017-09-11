// First exercise

var first = ['zero', 'one', 'two', 'three', 'four'];

var output = document.getElementById('new');

output.innerHTML = first;

// Second exercise

var output2 = document.getElementById('new2');

document.getElementById("btn1").onclick=MM;

function MM () {
	var a=document.getElementById('num1').value;
	var b=document.getElementById('num2').value;

	if (isFinite(a)) {
		first[a]=b;
	} else {
		alert ("It's something wrong. Try again");
	}

	var output2 = document.getElementById('new2');

	output2.innerHTML = first;
};

// Third exercise
var output3 = document.getElementById('new3');

document.getElementById("pop").onclick=NN;

function NN () {
	
	first.pop();

	output3.innerHTML = first;
};

// Fourth exercise
var output4 = document.getElementById('new4');

document.getElementById("shift").onclick=OO;

function OO () {
	
	first.shift();

	output4.innerHTML = first;
};

// Fifth exercise
document.getElementById("push").onclick=PP;

function PP () {
	var a=document.getElementById('pushInput').value;
	first.push(a);
	
	var output5 = document.getElementById('new5');

	output5.innerHTML = first;
};

// Sixth exercise
document.getElementById("unshift").onclick=RR;

function RR () {
	var a=document.getElementById('unshiftInput').value;

	first.unshift(a);
	
	var output6 = document.getElementById('new6');

	output6.innerHTML = first;
};





