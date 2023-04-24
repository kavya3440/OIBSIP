var result = document.getElementById('result');

function appendToResult(value) {
	if (result.value === '0') {
		result.value = value;
	} else {
		result.value += value;
	}
}

function clearResult() {
	result.value = '0';
}

function calculateResult() {
	result.value = eval(result.value);
}
