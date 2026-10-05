//Eligible or Not Eligible for Voting

// let n = -10;

// if (n >= 0) {
//     console.log("Positive");
// }
// else {
//     console.log("Negative");
// }

// let n = 10;

// if (n > 0) {
//     console.log("Positive Number");
// }

// #Check Even Number
// let n = 20;

// if (n % 2 == 0) {
//     console.log("Even Number");
// }



// let age = 20;

// if (age >= 18) {
//     console.log("Eligible for Voting");
// }

// #Check Number Divisible by 5 and 10

// let n = 50;

// if (n % 5 == 0 && n % 10 == 0) {
//     console.log("Divisible by both 5 and 10");
// }

//Check Three-Digit Number

// let n = 345;

// if (n >= 100 && n <= 999) {
//     console.log("Three Digit Number");
// }

//Check Leap Year

// let year = 2024;

// if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//     console.log("Leap Year");
// }

//............. if else....

//Even or Odd

// let n = 15;

// if (n % 2 == 0) {
//     console.log("Even");
// }
// else {
//     console.log("Odd");
// }

//Positive or Negative

// let n = -10;

// if (n >= 0) {
//     console.log("Positive");
// }
// else {
//     console.log("Negative");
// }



//Largest of Two Numbers

// let a = 25;
// let b = 20;

// if (a > b) {
//     console.log("A is Largest");
// }
// else {
//     console.log("B is Largest");
// }

//Divisible by 5 or Not

// let n = 45;

// if (n % 5 == 0) {
//     console.log("Divisible by 5");
// }
// else {
//     console.log("Not Divisible by 5");
// }

//Pass or Fail with Average

// let m1 = 80;
// let m2 = 70;
// let m3 = 60;

// let average = (m1 + m2 + m3) / 3;

// if (average >= 40) {
//     console.log("Pass");
// }
// else {
//     console.log("Fail");
// }

//....if-else if..

//Check Character Type

// let ch = "A";

// if (ch >= "A" && ch <= "Z") {
//     console.log("Uppercase");
// }
// else if (ch >= "a" && ch <= "z") {
//     console.log("Lowercase");
// }
// else {
//     console.log("Not an Alphabet");
// }

//Day of the Week

// let day = 3;

// if (day == 1) {
//     console.log("Monday");
// }
// else if (day == 2) {
//     console.log("Tuesday");
// }
// else if (day == 3) {
//     console.log("Wednesday");
// }
// else if (day == 4) {
//     console.log("Thursday");
// }
// else if (day == 5) {
//     console.log("Friday");
// }
// else if (day == 6) {
//     console.log("Saturday");
// }
// else if (day == 7) {
//     console.log("Sunday");
// }
// else {
//     console.log("Invalid Day");
// }

//Calculate Discount

// let amount = 6000;
// let discount;

// if (amount >= 10000) {
//     discount = amount * 20 / 100;
// }
// else if (amount >= 5000) {
//     discount = amount * 10 / 100;
// }
// else if (amount >= 2000) {
//     discount = amount * 5 / 100;
// }
// else {
//     discount = 0;
// }

// console.log("Discount =", discount);


//Find Triangle Type

// let a = 10;
// let b = 10;
// let c = 10;

// if (a == b && b == c) {
//     console.log("Equilateral Triangle");
// }
// else if (a == b || b == c || a == c) {
//     console.log("Isosceles Triangle");
// }
// else {
//     console.log("Scalene Triangle");
// }


//Calculate Income Tax

// let income = 800000;
// let tax;

// if (income <= 250000) {
//     tax = 0;
// }
// else if (income <= 500000) {
//     tax = income * 5 / 100;
// }
// else if (income <= 1000000) {
//     tax = income * 20 / 100;
// }
// else {
//     tax = income * 30 / 100;
// }

// console.log("Tax =", tax);

//ATM Withdrawal

// let balance = 10000;
// let withdraw = 5000;

// if (withdraw <= 0) {
//     console.log("Invalid Amount");
// }
// else if (withdraw > balance) {
//     console.log("Insufficient Balance");
// }
// else if (withdraw % 100 != 0) {
//     console.log("Enter Amount in Multiples of 100");
// }
// else if (withdraw == balance) {
//     console.log("Cannot Withdraw Full Balance");
// }
// else {
//     balance = balance - withdraw;
//     console.log("Withdrawal Successful");
//     console.log("Remaining Balance =", balance);
// }