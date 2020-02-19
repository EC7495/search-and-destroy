'use strict';

// Complete this algo
const binarySearch = (array, target, low =0, high= array.length) => {

	while(low<=high){
		let mid = Math.floor((low+high)/2)

		if(target === array[mid]) return true
		else if (target < array[mid]) high = mid -1
		else low = mid + 1
	}

	return false
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
