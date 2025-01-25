/* Simple Function Definition
 function functionName(para1,para2..){
 
               do some work
 };
  functionName(Pass an Argument as a value of parameter);*/
function countVowels(str){
  let i =0;
    for (const element of str) {
      if(element === 'a' || element === 'e' || element === 'i'|| element === 'o' || element === 'u'){
          i++;
      }
    }
    return i;
};
let jk = countVowels('My name is Gulfam');
console.log(jk);

/*arrow Functions
(parameters)=>{
                do some work 
  };
  now store in a variable
  const variable = (parameters)=>{
                do some work 
  };
  Now call it*/
const vowelCount = (str)=>{
    let j =0;
      for (const element of str) {
        if(element === 'a' || element === 'e' || element === 'i'|| element === 'o' || element === 'u'){
            j++;
        }
      }
      // return j;
      console.log(j);
      
    };
    // let strCount = vowelCount('My name is Gulfam');
    // console.log(strCount);
    vowelCount('I am a boy');



/* Array Methods
syntax:
arr.forEach(callBackFunction);
e.g:
    arr.forEach((val,idx,array)=>{
      console.log(val, idx, array);
      
    });
    
*/
let arr = [1, 2, 3, 4, 5];
arr.forEach((val)=>{
  console.log(val**=2);
})


/*Map
syntax:
it returns a new array after doing his work
let returnedArray = arr.map(callBackFunction);
console.log(returnedArray);
e.g:
    arr.map((val,idx,array)=>{
      console.log(val, idx, array);
      
    });
*/
let num = [1, 2, 3, 4, 5];
let newArray = num.map((val)=>{
  return(val**=2);
});
console.log(newArray);


/*Filter
syntax:
arr.filter(call back function);
*/

let arr3 = [90, 45, 67, 99, 98, 94, 999];

const result = arr3.filter((val)=>{
  return val > 90;
});
console.log(result);


let n = prompt("Enter a number");
let arrNum = [ ];
for(let i = 1; i <= n; i++){
  arrNum.push(i);
};
// arrNum.forEach((val)=>{
//   console.log(val);
  
// })

//Sum of Numbers
const sum = arrNum.reduce((res, curr)=>{
  return res + curr;
});
console.log('Sum =' + sum);
// Multiplication of Numbers
const mul = arrNum.reduce((res, curr)=>{
  return res * curr;
});
console.log('Multiplication =' + mul);


