function changeColor() {
	randNumDec1 = Math.floor(Math.random() * Math.pow(256, 3));
	randNumDec2 = Math.floor(Math.random() * Math.pow(256, 3));
	randNumDec3 = Math.floor(Math.random() * Math.pow(256, 3));
	
	randNumHex1 = randNumDec1.toString(16);
	randNumHex2 = randNumDec2.toString(16);
	randNumHex3 = randNumDec3.toString(16);

	document.getElementById('name').style.color = '#' + randNumHex1;
	document.getElementById('chameleon1').style.color = '#' + randNumHex2;
	document.getElementById('chameleon2').style.color = '#' + randNumHex3;
}

setInterval(changeColor, 500);
