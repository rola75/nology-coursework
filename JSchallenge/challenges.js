//1.
function isNumberPositive(num) {
    if (Math.sign(num) === 1) {      // add typeof num ==='number' to make sure only numbers work and not strings
        return true;
    } else if (Math.sign(num) === 0){
        return "Zero is not positive or negative.";
    } 
    return false; 

}

console.log(isNumberPositive(-1));  //false
console.log(isNumberPositive(10));  // true
console.log(isNumberPositive("-1"));  //false
console.log(isNumberPositive("10"));  //true
console.log(isNumberPositive("this is 1"));  //false
console.log(isNumberPositive(0)); //false

//2.
function convertDaysToAge(num) {
    return Math.round(num / 365);   //with Math.round you can avoid decimals or use toFixed() to pick number of decimals shown:.floor .trunc .ceil
}                                   //maybe try and make this give you weeks and days???

console.log(convertDaysToAge(3650));
console.log(convertDaysToAge(6570));
console.log(convertDaysToAge(10256));

//3.
console.log(Math.max(2, 1, 9));

function biggestOfThree(int) {
    let numb = [0];
    for ( let i = 0; i < int.length; i++) {
        if (int[i] > numb) {
            numb = int[i];
        }
    }return numb;
}

console.log(biggestOfThree([2, 1, 4,7 ,8 ,23]));
console.log(biggestOfThree([14, 56, 49]));
console.log(biggestOfThree([23, 1223, 445]));



/*
function largestOfThree(arr) {
    let largestNumber = [0,0];
    for (let arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
        for ( let subIndex = 0; subIndex < arr[arrayIndex].length; subIndex++) {
            if (arr[arrayIndex][subIndex] > largestNumber[arrayIndex]) {
                largestNumber[arrayIndex] = arr[arrayIndex][subIndex];
            }
        }
    } return largestNumber;
}

console.log(largestOfThree([[2, 1, 4], [6, 2, 3]])); */
//couldn't figure out the "no debugger available, can not send 'variables'"




//4.
const xName = ["Tim", "Bob", "Mac"];

console.log(xName[2])


//5.
let numbers = [2, 4, -5];
let result = true;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 0) {
        result = false;
        break;
    }
}
console.log(result);
