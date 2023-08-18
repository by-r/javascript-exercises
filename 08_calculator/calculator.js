const add = function (...args) {
	let add = 0;
	for (let i = 0; i < args.length; i++) {
		add += args[i];
	}
	return add;
};

const subtract = function (...args) {
	let diff = 0;
	for (let i = 0; i < args.length; i++) {
		if (args[i + 1]) {
			diff = args[i] - args[i + 1];
		}
	}
	return diff;
};

const sum = function (array) {
	let sum = 0;
	array.forEach((items) => {
		sum += items;
	});
	return sum;
};

const multiply = function (...args) {
	let prod = 1;
	for (let i = 0; i < args.length; i++) {
		prod *= args[i];
	}
	return prod;
};

const power = function (a, b) {
	return Math.pow(a, b);
};

const factorial = function (n) {
	if (n == 0) return 1;
	return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
