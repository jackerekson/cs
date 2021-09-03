const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


// largeArray run time

perf.start();                     // Starts timer
doublerAppend(largeArray);
let largeArrayAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(largeArray);
let largeArrayInsert = perf.stop();


console.log('Results for the LargeArray');
console.log("insert", largeArrayInsert.preciseWords);
console.log("append", largeArrayAppend.preciseWords);


//mediumArray run time

perf.start();                     // Starts timer
doublerAppend(mediumArray);
let mediumArrayAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(mediumArray);
let mediumArrayInsert = perf.stop();


console.log('Results for the mediumArray');
console.log("insert", mediumArrayInsert.preciseWords);
console.log("append", mediumArrayAppend.preciseWords);


//smallAray run time

perf.start();                     // Starts timer
doublerAppend(smallArray);
let smallArrayAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(smallArray);
let smallArrayInsert = perf.stop();


console.log('Results for the smallArray');
console.log("insert", smallArrayInsert.preciseWords);
console.log("append", smallArrayAppend.preciseWords);


//tinyArray run time

perf.start();                     // Starts timer
doublerAppend(tinyArray);
let tinyArrayAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let tinyArrayInsert = perf.stop();


console.log('Results for the tinyArray');
console.log("insert", tinyArrayInsert.preciseWords);
console.log("append", tinyArrayAppend.preciseWords);


// I am seeing that when the function adds to the front of a small array it does it quicker than adding to the back but as the array gets bigger adding to the front of the array it increases alot. this would make .unshift O(n^2) and .push O(n). .push scales much better than .unshift because tho .unshift is faster with smaller arrays it takes much longer with long arrays and .push scales the same with large arrays and short arrays

// .unshift is slower with larger numbers because it has to reasign indexes for every item it moves. 