// *  1.  Create a function that retruns th lenght of the array 

let numberArray = [123,45,6,90,0,10000]
//console.log(numberArray);

let arrylength = numberArray.length
console.log("1.length", arrylength);
// */

// /*  2. create a function that returns the sum of numbers in an array

 let sumArray = [3,3,5,5]
let totalSum = 0; 
sumArray.forEach((n) => totalSum += n);
 console.log("2,a.  for each sum",totalSum);

 let sumArray2 = [3,3,5,5]
 let totalsum2 = sumArray2.reduce((Number, current ) => Number + current);
 console.log("2,b.  reduce sum", totalsum2 );


// */

// /*  3. Create a function that checks if the name Onesmus exists in a given array

 let namesArray = ["Justus", "Godfrey", "Onesmus", "Boniface"]

 let realones = namesArray.filter(n => n === "Onesmus")
 console.log("3.Onesmus exists", realones);

// */

// /* 4. Create a function that return even numbers in a given array.

let intArrays = [1,2,3,4,4,55,6,7,8]
let evenNums = intArrays.filter(evens);
function evens(any) {
    return any % 2 === 0;
    
}
console.log("4.a, even numbers", evenNums);

let oddNums = intArrays.filter(oddnos);
function oddnos(all) {
    return all % 2 !==0;
}
console.log("4.b odd numbers", oddNums);
// */