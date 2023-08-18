const palindromes = function (str) {
	const newstr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
	return newstr.split("").reverse().join("") == newstr;
};

// Do not edit below this line
module.exports = palindromes;
