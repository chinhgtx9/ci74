const str = "abcdef";
let arr = str.split('');
let newArr = [];
for(let i = arr.length - 1; i >= 0; i--){
    newArr.push(arr[i]);
}
console.log(newArr);