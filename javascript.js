function cipher() {
    const code = [304, 39, 57, 88, 20, 81, 66, 44, 101, 79], //array of secret codes for encryption
        word = document.getElementById("input").value;
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