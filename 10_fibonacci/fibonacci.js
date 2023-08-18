const fibonacci = function (count) {
	if (count < 0) return "OOPS";
	const fib = [0, 1];
	for (let index = 1; index < count; index++) {
		fib.push(fib[index] + fib[index - 1]);
	}
	return fib[count];
};

// Do not edit below this line
module.exports = fibonacci;
