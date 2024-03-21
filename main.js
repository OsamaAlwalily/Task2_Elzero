//Task 1 part1

// console.log(((10 * 20 * 15) / 3 + 190 + 10) % 400); // 0

//Task 1 part2

// let num1 = 3;
// console.log((num1 = num1 + 3));
// let num2 = 3;
// console.log((num2 += 3));
// let num3 = 3;
// console.log((num3 *= 2));
// let num4 = 3;
// console.log((num4 = num4 * 2));
// let num5 = 3;
// console.log((num5 += 3 * true));
// let num6 = 3;
// console.log((num6 = num6 + 3 * true));

//Task 1 part3

// let num1 = "10";
// console.log((num1 = +num1 + 10));
// let num2 = "10";
// console.log(Number(num2) + 10);
// let num3 = "10";
// console.log(Number(num3) * 2);
// let num4 = "10";
// console.log((num4 = +num4 * 2));
// let num5 = "10";
// console.log((num5 *= 2));

//Task 1 part4

// let points = 10;

// points = ++points;
// points = ++points;
// points = points + true;

// console.log(points); // 13

// points = --points;
// points = --points;
// points = --points;
// points = points - true;
// points = points - true;

// console.log(points); // 8;

//Challenge1

// let a = 10;
// let b = "20";
// let c = 80;
// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
[++a]: 11   [++] :Prefix
[+] : arithmatic operation
[+b++]: 20   [+]:unary operation    [++]:postfix
[+] : arithmatic operation
[+c++]:80    [+]:unary operation    [++]:postfix
[+a++]:11    [+]:unary operation    [++]:postfix
[++a]:13     [++] :Prefix
[-b]:-21     [-]:unary nagation operation
[+c++]:81    [+]:unary operation    [++]:postfix
[-a++]:13    [-]:unary nagation operation    [++]:postfix
[+a]:14      [+]:unary operation
[--c]:81     [--] :Prefix
[+b]:21      [+]:unary operation
[--a]:13     [--] :Prefix
[+b++]:21    [+]:unary operation    [++]:postfix
[+b]:22      [+]:unary operation 
[a]:13
[--a]:12     [--] :Prefix
[+true]:1    [+]:unary operation
*/

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;
// console.log(+d);
// console.log(-d * +e);
// console.log(-d + ++e * ++g + ++f);

//Task 2 part1

// console.log(100_000);
// console.log(100000);
// console.log(1e5);
// console.log(10 * 10 * 10 * 10 * 10);
// console.log(5e4 + 5e4);
// console.log(10 ** 5);
// console.log(100000.0);
// console.log((100000.44444).toFixed(0));
// console.log(parseInt("100000"));
// console.log(parseInt("100000.500 Osama"));

//Task 2 part2

// console.log(-Number.MIN_SAFE_INTEGER);

//Task 2 part3

// var Max = Number.MAX_SAFE_INTEGER;
// var Max1 = String(Max);
// console.log(Max1.length);

//Task 2 part4

// let myVar = "100.56789 Views";

// console.log(Math.trunc(parseInt(myVar))); // 100
// console.log(parseFloat(myVar).toFixed(2)); // 100.57

//Task 2 part5

// let num = 10;
// let num1 = Number.isInteger(num);
// console.log(++num1); // 2

//Task 2 part6

// let flt = 10.4;
// console.log(Math.trunc(flt));
// console.log(Math.round(flt));
// console.log(Math.floor(flt));
// console.log(flt.toFixed(0));
// console.log(parseInt(flt));

//Task 2 part7

// console.log(Math.random(0, 4));

//Challenge2

// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;
// console.log(parseInt(Math.min(a, b, c, d)));
// console.log(a ** Math.trunc(d));
// console.log(parseInt(d));
// console.log(Math.round(d));
// console.log(Math.trunc(d));
// console.log(d.toFixed(0));
// console.log((Math.floor(b) / Math.ceil(d)).toFixed(2));
// console.log(Math.ceil(b / Math.ceil(d)));

//Task3   part1

// let userName = "Elzero";
// console.log(userName[0].toLowerCase());
// console.log(userName.charAt(0).toLowerCase());
// console.log(userName.slice(0, 1).toLowerCase());
// console.log(userName.substring(0, 1).toLowerCase());
// console.log(userName.substr(0, 1).toLowerCase());
// console.log(userName.substr(0, 1).toLowerCase().repeat(3));

//Task3   part2

// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";

// console.log(word.includes("z"));
// console.log(word.startsWith("E"));
// console.log(word.endsWith("o"));

//challenge3

// let a = "Elzero Web School";
// console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));
// console.log(a[13].toUpperCase().repeat(8));
// console.log(a.split(" ", 1));
// console.log(a.substr(0, 6) + a.substr(10, 17));
// console.log(
//   a[0].toLowerCase() +
//     a.slice(1, a.length - 1).toUpperCase() +
//     a.slice(-1, a.length).toLowerCase()
// );
// console.log("Osama");

//Task4   part1

// console.log(100 == "100"); // true
// console.log(100 < 1000); // true
// console.log(110 > 100 && 10 < 20); // true
// console.log(-10 == "-10"); // true
// console.log(-(-50) >= +"-40"); // true
// console.log(-10 <= -"-40"); // true
// console.log(+"10" >= 10); // true
// console.log(+20 > false); // true

//Task4   part2

// let num1 = 10;
// let num2 = 20;

// console.log(num1 < num2); // true
// console.log(num2 >= num1); // true
// console.log(num1 <= num2); // true
// console.log(typeof num1 === typeof num2); // true
// console.log(num1 != num2); // true
// console.log(num1 !== num2); // true

//Task4   part3

// let a = 20;
// let b = 30;
// let c = 10;

// console.log((a < b && a > c) || a > b); // true
// console.log(a != b || a != c); // true
// console.log(!(a > b) && !(a == b) && !(a == c) && !(a <= c)); // true

//Challenge4

// let a = 10;
// a < 10
//   ? console.log(10)
//   : a >= 10 && a <= 40
//   ? console.log("10 to 40")
//   : a > 40
//   ? console.log("> 40")
//   : console.log("Unknown");

//----------------------------------------
//Task5   part1

// let num = 9;
// if (num < 10) {
//   console.log(`00${num}`);
// }
// let num2 = 20;
// if (num2 > 10 && num2 < 100) {
//   console.log(`0${num2}`);
// }
// let num3 = 110;
// if (num3 >= 100) {
//   console.log(num3);
// }

//Task5   part2

// let num1 = 9;
// let str = "9";
// let str2 = "20";
// if (num1 == str) {
//   console.log(`${num1} Is The Same Value As ${str}`);
// } else if (num1 !== str) {
//   console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
// } else if (num1 !== str) {
//   console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
// } else if (str != str2) {
//   console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
// }

//Task5   part3

// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// if (num3 > num1 && num3 != num2) {
//   console.log(
//     "30 Is Larger Than 10 And Type string Not The Same Type As number"
//   );
// }
// if (num3 > num1 && num3 == num2 && num3 !== num2) {
//   console.log(
//     "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
//   );
// }
// if (num3 !== num1 && num3 != num2) {
//   console.log(
//     `${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`
//   );
// }

//Task5   part4

// let num1 = 20;
// let num2 = 10;
// let num3 = 20;
// let num4 = 51;

// // Condition 1

// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 2

// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 3

// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 4

// if (num1 + num2 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 5

// if (num1 + num3 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 6

// if (num1 + num2 + num3 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }

//-------------------------------
//Challenge5

let job = "Maneger";
let Salary = 0;
switch (job) {
  case "Maneger":
    Salary = 8000;
    break;
  case "IT" || "Support":
    salary = 6000;
    break;
  case "Developer" || "Designer":
    salary = 7000;
    break;
  default:
    salary = 4000;
}
