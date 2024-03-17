function cipher() {
	if (!document.getElementById("encryptedZone").classList.contains("off"))
		document.getElementById("eoutput").innerHTML = xorShift(trans(btoa(document.getElementById("einput").value)));
	if (!document.getElementById("decryptedZone").classList.contains("off"))
		document.getElementById("doutput").innerHTML = atob(trans(xorShift(document.getElementById("dinput").value)));
}

function xorShift(word) {
	if (!word) return null;
	function process(w, c = document.getElementById("code").value) {
		const encrypted = []; //storage for encryption
		for (let i = 0; i < w.length; i++) { //iterate word letter by letter
			encrypted.push(w.charCodeAt(i) ^ c); //convert letter to char number and xor bit shift by code
		}
		return String.fromCharCode(...encrypted) //return converted char numbers back to string
	}
	return process(word);
}

function trans(s) {
	if (s.length % 4 > 0) return console.log("Transpostion failed, not divisable by 4.");
	const result = [],
	  temp = s.split(""),
	  newResult = [],
	  swapEle = (a, i1, i2) => { 
		  a[i1] = a.splice(i2, 1, a[i1])[0];
		  newResult.push(a.join(""));
	  }
	  while (temp.length > 0) {
		  const output = [];
		  for (let i = 0; i < 4; i++) {
			  output.push(temp.shift());
		  }
		  result.push(output);
	  }
	  result.forEach(e => swapEle(e, 0, 2));
	  return newResult.join("");
}

function copy2clip(id) { //write the contents of output to clipboard
	navigator.clipboard.writeText(document.getElementById(id).innerHTML);
}

function toggleOutput() {
	function swap(id) {
		const target = document.getElementById(id);
		if (target.classList.contains("off")) target.classList.remove("off");
		else (target.classList.add("off"));
	}
	swap("encryptedZone");
	swap("decryptedZone");
}