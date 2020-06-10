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

/* ****************************************
      URLify a string
********************************************/
function URLify(str) {
	let result = '';
	for (let i = 0; i < str.length; i++) {
		if (str[i] === ' ') {
			result += '%20';
		} else {
			result += str[i];
		}
	}

	return result;
}

console.log('URLify =', URLify('dog cat'));

/* ****************************************
      Filtering an array
********************************************/
function filter(arr) {
	const newArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 5) {
			continue;
		} else {
			newArr.push(arr[i]);
		}
	}

	return newArr;
}

console.log('filter func =', filter([2, 43, 67, 4, 20, 1]));

/* ****************************************
      Max sum in the array
********************************************/
/* 
You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

Input: [4, 6, -3, 5, -2, 1]
Output: 12
*/

function maxSum(arr) {
	let max1 = 0;
	let max2 = 0;
	for (let i = 0; i < arr.length; i++) {
		max1 += arr[i];
		if (arr[i - 1] < 0) {
			max2 = max1 < max2 ? max2 : max1;
		}
	}

	return max1 > max2 ? max1 : max2;
}

console.log('maxSum =', maxSum([4, 6, -3, 5, -2, 1]));

/* ****************************************
     Merge arrays
********************************************/
/* 
Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11
*/

function mergeArr(arr1, arr2) {
	let idx1 = 0;
	let idx2 = 0;
	let ret = [];

	while (idx1 < arr1.length && idx2 < arr2.length) {
		if (arr1[idx1] <= arr2[idx2]) {
			ret.push(arr1[idx1]);
			idx1++;
		} else {
			ret.push(arr2[idx2]);
			idx2++;
		}
	}

	// one array is now empty.
	// Join the rest of the other array on.
	// this step needs some thinking!
	// can give you another hint that there's
	// no concatenation involved!

	while (idx2 < arr2.length) {
		ret.push(arr1[idx1]);
		idx1++;
	}

	while (idx1 < arr1.length) {
		ret.push(arr2[idx2]);
		idx1++;
	}

	// finally return the array;
	return ret;
}

console.log('MaergeArr =', mergeArr([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
