
//if statement checks if a condition is true code inside the block is executed.

let testA   = 1;  

//  to check if testA equals  1

if (testA === 1) {
    console.log("testA is 1");  // run this if it equals to 1
}

/*if-else Statement
The if-else statement checks  condition. Ifis true the if block is executed otherwise, 
the else block runs.*/

let testB = 2;  


if (testB === 1) {
    console.log("testB is 1");  // not run because testB is = 2
} else {
    console.log("testB is not 1");  //  run because testB is not 1
}



/*if-else if-else Statement
The if-else if-else statement  check multiple conditions. 
The first condition that's true will execute, and the rest will be skipped.*/




let testC = 3;  

// if statement checks if  testC equals 1
if (testC === 1) {


      console.log("testC is   1");  // will not run 

// else if statement checks if testC equals 2
} else if (testC === 2) {

    console.log("testC  is 2");  // not run 

// else block runs if none of the above conditions are true
   } else {

    

    console.log("testC is neither 1 nor 2");  // run
}