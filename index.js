//Problem 1;

const arr = [2, 0, 3, 4, 6, 7, 1]
const t =  7;

function findPair(arr, t){
    let left = 0;
    let right = arr.length -1;
    arr.sort((a,b)=> a-b);// 
   let ans = [];
    while(left<right){
        if(arr[left] + arr[right] > t){
            right--
        }else if(arr[left] + arr[right] < t){
            left++
        }else if(arr[left] + arr[right] == t){
            ans.push([arr[left], arr[right]]);
            left++
            right--
        }
    }

    return ans;


}

// console.log(findPair(arr, t));

// Problem 2

let str = '[]';

function validString(str) {
    let stack = [];
    const map = {
        ']' : '[',
        '}' : '{',
        ')' : '('
    };

    for (let i = 0; i < str.length; i++) {
        let current = str[i];

        if (Object.values(map).includes(current)) {
            stack.push(current);
        } else if (Object.keys(map).includes(current)) {
            if (stack.length === 0 || stack.pop() !== map[current]) {
                return 'Invalid';
            }
        }
    }

    return stack.length === 0 ? 'Valid' : 'Invalid';
}

console.log(validString(str));




// problem 3
const a = [3, 7, 0, -1, 9, 5]; 

function findMaxMin(arr) {
    let max = -Infinity;
    let min = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }

        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return [max, min];
}

// console.log(findMaxMin(a));



