//Q-1
// function print(){
//     console.log("hello,world!")
// }
// print()

//Q-2
// function sum(){
//     console.log(2+3)
// }
// sum()

//Q-3
// var a=1;
// var b=2;
// var c=4;
// function largestnumber(){
//     if(a>b && a>c){
//         console.log(a +"is largest number")
//     }else if(b>a && b>c){
//         consople.log(b +"is largest number")
//     }else {
//         console.log(c +"is largest number")
//     }
// }
// largestnumber()

//Q-4
// var number=10;
// function evenodd(){
//     if (number % 2 ==0){
//         console.log("true")
//     }else if(number % 2 ==1){
//         console.log(" false")
//     }
// }
// evenodd();

//Q-5
// let n = 5;
// function factorial(n) { 
//     if (n === 0) { 
//         return 1; 
//     } 
//     else { 
//         return n * factorial( n - 1 ); 
//     } 
// } 

// console.log(factorial(n));

//Q-6
// function reverseString(str) {
//     const strRev =  str.split('').reverse().join('');
//     console.log(strRev);
// }
// reverseString("hello");

//Q-8
// function findMin(arr) {
//     return Math.min(...arr);
// }

// Test the function
// console.log(findMin([3, 1, 4, 1, 5]));  

// Q-9
// let numbers = [20, 5.2, -120, 100, 30, 0]
// console.log(numbers.sort((a,b)=>a-b))

// Q-11
let arr=[1,2,3,4,5];
let sum=0;
function suma(){
    for(let ele of arr){
        sum +=ele;
    }
    console.log(sum)
}
suma();

// Q-11




