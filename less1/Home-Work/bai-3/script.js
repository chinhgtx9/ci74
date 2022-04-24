const arr =   [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3,5,5];
let countMax = 0;
let maxValue = 0;
for (var i = 0; i < arr.length; i++) {
    let count = 0;
    let value = 0;
    for (var j = 0; j < arr.length; j++) {
        if(arr[i] == arr[j]) {
            count = count + 1;
            value = arr[i];
        }
    }
    if(count > countMax) {
        countMax = count;
        maxValue = value ;
    }
}
console.log('value :' + maxValue + 'count :'+ countMax);