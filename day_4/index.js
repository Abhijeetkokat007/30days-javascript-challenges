// Day 4 : Loop

// Activity 1 : for Loop

// task 1 : print number from 1 to 10 using for loop
console.log("task 1 : ")
for(let i=1 ; i<=10 ; i++) {
    console.log(  i)
}

// task 2 : write program to print the multiplication table of 5 using a  loop

console.log("task 2 : ")
for(let i=1 ; i<=10 ; i++) {
    console.log(i*5)
}

// Activity 2 : While Loop
// task 3 : write program to calculate the sum  of number from 1 to 10 using while loop 
console.log("task 3 : ")
let total = 0;
let i = 0
while (i<=10) {
    total += i ;
    i++;
}
console.log(total)

// task 4 : write program to print the number from 10 to 1   using while loop 
console.log("task 4 : ")

let a = 10
while (a>=1) {
    
    console.log(a)
    a--;
}

// activity 3 : do while loop

// task 5 : write program to print the number from 1 to 5 wsing do while 
console.log("task 5 : ")
i = 1;
do {
    console.log(i)
    i++
} while (i<=5);

// task 6 : write program to print the factorial of a number using do while loop
console.log("task 6 : ")
i = 1;
let factorial = 1
do {
    factorial *= i
    i++;
} while (i <= 5);

console.log(factorial)

// activty 4 : Neted loop
// task 6 : write program to print star pattern using nested loop
console.log("task 7 : ")


for (let k = 1; k <= 5 ; k++){
    let result = ""
 for ( let j = 1; j <= k ; j++){
    result += "*"
 }
 console.log(result) ;
}

console.log("reverse print ")

for (let k = 1; k <= 5 ; k++){
    let result = ""
 for ( let j = 1; j <= 6-k ; j++){
    result += "*"
 }
 console.log(result) ;
}


// Activity 5 :loop control stateme
// task 8 : writeb a program to print number from 1 to 10 , but skip  the number 5 using the continue
console.log("task 8 : ")
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}


// task 8 : writeb a program to print number from 1 to 10 , but stop   the number 7 using the continue

console.log("task 9 : ")
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}


