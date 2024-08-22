// function isArmstrongNumber(num) {
//     // Convert number to string to easily get each digit
//     let strNum = num.toString();
//     let numDigits = strNum.length; // Number of digits
//     let sum = 0;

//     // Loop through each digit, raise to power of number of digits, and add to sum
//     for (let i = 0; i < numDigits; i++) {
//         let digit = parseInt(strNum[i]); // Convert character back to integer
//         sum += Math.pow(digit, numDigits);
//     }

//     // Check if the calculated sum is equal to the original number
//     return sum === num;
// }

// // Example usage
// let number = 153;
// if (isArmstrongNumber(number)) {
//     console.log(`${number} is an Armstrong number.`);
// } else {
//     console.log(`${number} is not an Armstrong number.`);
// }

// function isArmstrong(number) {
// 	const digits = number.toString().split('');
// 	const order = digits.length;
// 	const sum = digits.reduce(
// 		(acc, digit) =>
// 			acc + Math.pow(parseInt(digit), order), 0);

// 	if (sum === number) {
// 		console.log(
// 			number + " is an Armstrong Number");
// 	}
// 	else {
// 		console.log
// 			(number + " is not an Armstrong Number");
// 	}
// }

isArmstrong(462);

var number=123;
var sum=0;
var pow = number.toString().length
while(number>0){
  var rem = number%10;
  sum=sum +(rem**pow);
  number =(number-rem)/10
}
console.log(sum)