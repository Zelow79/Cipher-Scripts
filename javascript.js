function cipher() {
    const gei = (id) => document.getElementById(id).value,
		code = [gei("c0"), gei("c1"), gei("c2"), gei("c3"), gei("c4"), gei("c5"), gei("c6"), gei("c7"), gei("c8"), gei("c9")], //array of secret codes for encryption
		word = document.getElementById("input").value;
	console.log(code);
	if (!word) return null;

	function process(w, c) {
		const encrypted = []; //storage for encryption
		for (let i = 0; i < w.length; i++) { //iterate word letter by letter
			encrypted.push(w.charCodeAt(i) ^ c); //convert letter to char number and xor bit shift by code
		}
		return String.fromCharCode(...encrypted) //return converted char numbers back to string
	}
	let result = word; //result will be modified based on number of codes given in code array
	for (let i = 0; i < code.length; i++) {
		result = process(result, code[i]);
	}
    document.getElementById("output").innerHTML = result;
	//return result;
}

function copy2clip() { //write the contents of output to clipboard
	navigator.clipboard.writeText(document.getElementById("output").innerHTML);
  }