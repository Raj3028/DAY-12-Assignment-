/**
 * Q1. without actually running this code, you need to answer whether this code will run or not along with the reason
 
Q2. now run the above code and see the result/error. 
Analyze the difference bw your answer before and after running the code 

Q2. correct the code so that method chain starts working
 * 
 */
let num;
function filterOddNumbers(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
const evenNumbers = [1, 2, 3, 4, 5];
evenNumbers.push(6);
const afterFillter = evenNumbers.filter(filterOddNumbers);
console.log(afterFillter);

//OUTPUT: [ 2, 4, 6 ]

