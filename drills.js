const Array = require('./arrayClass');

function main() {
	Array.SIZE_RATIO = 3;

	// Create an instance of the Array class
	let arr = new Array();

	// Add an item to the array
	/* 	arr.push(5);
	arr.push(3);
	arr.push(7); */
	/* 	arr.push(5);
	arr.push(15);
	arr.push(19);
	arr.push(45);
	arr.push(10);

	arr.pop();
	arr.pop();
  arr.pop(); */

	arr.push('tauhida');

	console.log(arr);
	console.log(arr.get(0));
}

main();
