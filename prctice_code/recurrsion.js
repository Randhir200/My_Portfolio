
//1. sum of arr elements
function sum(arr){
    if(arr.length === 1) return arr[0];
    return 0 + arr.pop() + sum(arr);// 4+3+2+1
}

// console.log(sum([1,2,3,4,5,6,7]));

//2. check palindrom

const isPalindrom = (str, i=str.length-1, s='')=>{
    console.log(i);
    if(i===0) {
        return str[i];
    }
    return [str[i] + isPalindrom(str, --i), str];//
    console.log('revStr: ', s);
    // return str === revStr ? true : false; 
}

// console.log(isPalindrom('rar'));

//3. Flattening arr;

const arr = [1,2, [1,2,[3,5, [3,5]]], [6,7], [0,9]];

function flattening(arr, depth = 1 ){
  let result = [];
  arr.forEach(ele => {
    if(Array.isArray(ele) && depth > 0) {
        result.push(...flattening(ele, --depth));
    }else{
        result.push(ele);
    }
  });
  return result
}

console.log(flattening(arr, 3));