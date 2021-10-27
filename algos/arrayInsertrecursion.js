
// Dunavan
const combineSorted = (arr1, arr2) => {
    var combinedArr = [];
    var leftIndex = 0;
    var rightIndex = 0;
    while (leftIndex < arr1.length && rightIndex < arr2.length){
        if(arr1[leftIndex] > arr2[rightIndex]){
            combinedArr.push(arr2[rightIndex]);
            rightIndex++;
        }
        else {
            combinedArr.push(arr1[leftIndex]);
            leftIndex++;
        }
    } 
    return combinedArr.concat(arr1.slice(leftIndex)).concat(arr2.slice(rightIndex));
}

arr1 = [1, 3, 5, 7, 9];
arr2 = [2, 4, 6, 8, 10];
console.log(combineSorted(arr1,arr2));

const mergeSort = arr1 => {
    var midpoint = Math.floor(arr1.length/2);
    var left = arr1.slice(0,midpoint);
    var right = arr1.slice(midpoint);
    if(arr1.length<=1){
        return arr1;
    }
    return combineSorted(mergeSort(left),mergeSort(right));
}

arr3 = [1, 4, 3, 2, 5, 10, 7, 6, 9];
console.log(mergeSort(arr3));

// Logan
const combine = (leftArr, rightArr) => {
    let arr = leftArr.concat(rightArr)
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}

const mergeSort = (arr) => {
    // Base Case to end recursion
    if (arr.length == 1) {
        return arr
    }
    // Handles the splitting into subArrays
    const midPoint = Math.floor(arr.length/2);
    const left = arr.slice(0, midPoint);
    const right = arr.slice(midPoint, arr.length);
    // Calling merge function using mergeSort recursively: Will not run merge function until both left and right have only one value within them
    return combine(mergeSort(left), mergeSort(right))
}

// Christopher
function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++){
        let curVal = arr[i];
        for(let j = i; j > 0; j--){
            if(curVal < arr[j-1]){
                arr[j] = arr[j-1];
                arr[j-1] = curVal;
            }
            else {
                break;
            }
        }
    }
    return arr;
}


function combineSorted(arr1, arr2){
    var merged1 = insertionSort(arr1)
    var merged2 = insertionSort(arr2)
    var counter1 = 0
    var counter2 = 0
    var mergedArr = []
    while(counter1 + counter2 < arr1.length + arr2.length){
        if(arr1[counter1]<=arr2[counter2]){
            mergedArr.push(arr1[counter1])
            counter1++
        }else{
            mergedArr.push(arr2[counter2])
            counter2++
        }
    }
    return mergedArr;
}

function deconstArr(arr1){
    if(arr1.length==1){
        return arr1
    }
    else{
        var temp1 = arr1.slice(0, Math.floor(arr1.length/2))
        var temp2 = arr1.slice(Math.floor(arr1.length/2))        
        return combineSorted(deconstArr(temp1), deconstArr(temp2))
    }
}

arr1 = [1,4,3,2,10,12,5,6,8,15,18];
arr2 = [1,477,3,2,10,345,5,6,677,15,12];

result1 = combineSorted(arr1, arr2);
result2 = deconstArr(arr1);

// console.log(insertionSort(arr1));
// console.log(insertionSort(arr2));
console.log(result1);
console.log(result2);