let arr = [-4, 2, 1, 9, 7, 5],
    target = 3
let bruteForceTwoSum = (array, sum) => {
  let result = []
  for (let i = 0; i < array.length; i++){
    for (let j = i + 1; j < array.length; j++){
      if (array[j] === sum - array[i]){
        result.push([array[i], array[j]])
      }
    }
  }
  return result
}
console.log(bruteForceTwoSum(arr, target));

