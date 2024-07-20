// const arr = [1,2,3,-2, -5, 1, 3];// 
// const t = 12;

// function solve(arr, t){
//     if(arr.length===0) return false;
//     for(let i=0; i<arr.length-1; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i] + arr[j] === t){
//                 // console.log(arr[i], arr[j])
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
    
//     return false;
// }

// console.log(solve(arr,t));

// let str = 'aabaa'; // 

// function checkP(str, n){ //aabaa, abaa, baa
//     // if(str.length===n)
//    if(n===str.length){
//        let revStr = '';
//    }
//     revStr = checkP(str[str.length-1]);
//     return true;
// }

// Given an array of 10 numbers, get the array of missing numbers between smallest and the largest numbers.

// Example:

// const arr =  [5,3,8,10,14,5,7,15,17,12]
// //[4,6,9,11,13,16]

// function findMissing(arr){
//   let ans = [];
//   let sortedArr = arr.sort((a,b)=> a-b);
//   for(let i=sortedArr[0]+1; i<sortedArr[sortedArr.length-1]; i++){
//      if(!sortedArr.includes(i)){
//        ans.push(i);
//      }
//   }
// //   console.log(ans);
//   return ans;
// }


// console.log(findMissing(arr))


// Just like any Javascript IDE, which checks for all brackets are balanced or not. Similarly write a function that will check if the given string is having all the brackets are closed.
// Example:
// a.
// Input: "function sample (args) { const arr=[]; return arr; }"
// Output: TRUE
// b.
// Input: "function sample(args)) { const arr=[]; return arr; }"
// Output: FALSE
// c.
// Input: "function sample(args) { const arr=[]; return arr;"
// Output: FALSE
// d.
// Input: "function sample(args) { const arr=[[[]; return arr; }"
// Output: FALSE

const brckt = '{}';

function solve(args) { 
  const map = {']':'[', ')': '(', '}' : '{'};
  const stack = [];
  
  for(let i=0; i<args.length; i++){
    const curr = args[i];
    if(Object.values(map).includes(curr)){
      stack.push(curr);
    }else if(Object.keys(map).includes(curr)){
        if(stack.length === 0 || stack.pop() !== map[curr]){
            return 'FALSE';
        }
    }
  }
 
  return stack.length === 0 ? 'TRUE' : 'FALSE' 

}

console.log(solve(brckt));