//loop through the first layer
//check whether each arrays' contents all share the same data type WITHIN the array
//check whether each arrays' contents all share the same data type ACROSS arrays

console.log(typeof "this is a string");

console.log([1, 2, 3].every((num) => {
    return num > 10;
}))

function checkTypes(arr) {
    let initial = arr[0][0];
    return arr.every(subArr =>
        subArr.every(value =>
            typeof (value) === typeof (initial)
        )
    )
}