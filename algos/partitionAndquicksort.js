var array1 = [4,5,3,6,2,7,8,9,1]

function partition(arr){
    var pivot = 0
    for(var i=1; i<arr.length; i++){
        if(arr[i]<arr[pivot]){
            let temp = arr[i];
            for (var j=i; j!=pivot; j--) {
                arr[j] = arr[j-1];
            }
            arr[j] = temp;
            pivot++;
        }
    }
    return pivot
}


// Jacob
function randint(start,stop){
    return Math.floor(Math.random()*(stop-start))+start
}

const arr = [4, 8, 5, 7, 1, 6, 10, 2, 3, 9]

function quicksort(arr, left=0, right=arr.length, counter=0){
    let i = left
    let j = right
    let pivot = arr[randint(left,right)]
    console.log(`Recursion number ${counter}, pivot is ${pivot}, array is ${arr}`)
    while (i != j){
        for (i; i<right; i++){
            if (arr[i] >= pivot){
                break
            }
        }
        for (j; j>left; j--){
            if (arr[j] <= pivot){
                break
            }
        }
        if (i != j){
            let temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
        }
    }
    if (left - j > 1 || left - j < -1){ //Left side
        quicksort(arr, left, j, counter+1)
    }
    if (j+1 - right > 1 || j+1 - right < -1){ //Right side
        quicksort(arr, j+1, right, counter+1)
    }
    return arr
}