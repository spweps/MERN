//Joshua
function findIntersect(sortedArr1, sortedArr2) {
    let intersect = [];
    for (let num1 of sortedArr1) {
      // console.log(num1)
      for (let num2 of sortedArr2) {
        // console.log(num2)
        if (num1 === num2) {
          intersect.push(num1);
        }
      }
    }
    return intersect;
  
  }
  
  let arr1 = [1, 3, 5, 7, 9]
  let arr2 = [2, 4, 5, 8, 9, 3]
  
  console.log(findIntersect(arr1, arr2))

//Dunavan
const intersectSorted = (arr1, arr2) =>{
    let matchDict = {};
    let results = []
    for(let i = 0; i < arr1.length; i++){
        let counter = 0;
        if(matchDict[arr1[i]]){
            counter = matchDict[arr1[i]]+1;
        }
        for(counter; counter < arr2.length; counter++){
            if (arr1[i] === arr2[counter]){
                matchDict[arr1[i]] = counter;
                results.push(arr1[i]);
                break;
            }
        }
    }
    return results;
}

let test1 = ['a',3,3,'a',6]
let test2 = [2,3,'a',6,8]
console.log(intersectSorted(test1,test2))

//Devin
arr1 = [1, 3, 3, 5, 9]
arr2 = [3, 3, 5, 7, 8, 11]
// uses combine sort to improve efficiency
function MIfaster(arr1, arr2) {
    const newArr = [];
    let i = 0;
    let j=0;
    while (i < arr1.length && j < arr2.length){
        if (arr1[i] == arr2[j]){
            newArr.push(arr1[i])
            i++;
            j++;
        }
        else if (arr1[i] < arr2[j]){
            i++;
        }
        else (arr2[j] < arr1[i]){
            j++;
        }
    }
    console.log(newArr)
    return newArr
}

MIfaster(arr1, arr2);