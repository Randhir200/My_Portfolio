let arr = [1,2,2,3,3,4,5,5,5,5];

function unique(arr){
    let ans = [];
    

    for(let i=0; i<arr.length; i++){
        if(ans.includes(arr[i])) continue;
        ans.push(arr[i]);
    }

    return ans;
}

console.log(unique(arr));