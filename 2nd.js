/*wwrite a code which can give grades to students according to their scores 
      90-100,A
      70-89,B
      60-69,C
      50-59,D
      0-49,F*/

 let a = prompt("Enter your marks:");

a = Number(a); 

if (a >= 90 && a <= 100) {
  console.log("Your grade is 'A'");
} else if (a >= 70 && a <= 89) {
  console.log("Your grade is 'B'");
} else if (a >= 60 && a <= 69) {
  console.log("Your grade is 'C'");
} else if (a >= 50 && a <= 59) {
  console.log("Your grade is 'D'");
} else if (a >= 0 && a <= 49) {
  console.log("You failed");
} else {
  console.log("Invalid marks entered");
}