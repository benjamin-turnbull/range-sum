function range(start, end) {
	let sequence = [];
 	for (i = start; i <= end; i++) {
 		sequence.push(i);
 	}
 	return sequence;
 }

function sum (array) {
	let sum = 0;
	for (i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}


console.log(sum(range(1, 10)));