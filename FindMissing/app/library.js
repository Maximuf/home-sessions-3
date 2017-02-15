'use strict'
const find = {
	findMissing(arr1, arr2){
		if(arguments.length !== 2){
			let msg = "Only two arguments are allowed";
			return msg;
		}
		let newArray = arr1.concat(arr2);
		let missingNum = [];
		let result = newArray.map(function(i){
			if(newArray.lastIndexOf(i) === newArray.indexOf(i)) {
				missingNum.push(i);
			}
		});
		if (missingNum.length < 1) {
			let finalResult = 0;
			return finalResult;
		} else {
			let finalResult = missingNum[0];
			return finalResult;
		}
		
	}
}
module.exports = find;