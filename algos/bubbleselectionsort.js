function bubbleSort(arr) {
    for(var i = 0; i<arr.length; i++){
        for(var j =0; j<arr.length; j++){
            if(arr[j] > arr [j+1]) {
                temp = arr[j]
                arr[j]= arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

// Christian

function bubbleSort(arr){
    var unsorted = true;

    while(unsorted){
        unsorted= false;
        for(var i=0; i < arr.length -1; i++){
            if(arr[i] > arr[i + 1]){
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                unsorted = true;
            }
        }
    }
    return arr;
}

// Carson
function bubbleSort(arr){
    for (var j=0; j<arr.length; j++)
        for (var i=0; i<arr.length; i++){
            var checker = arr[i+1]
            var value = arr[i]
            if (value > checker){
                arr[i] = checker
                arr[i+1] = value
            }
            if(value < checker){
                arr[i] = value
                arr[i+1] = checker
            }
        }
        return arr
    }

// Todd
function bubblesort(arr){
    for(var i = 0; i<arr.length; i++){
        for(var j =0; j<arr.length; j++){

            if(arr[j]>arr[j+1]){
                temp = arr[j]
                arr[j]= arr[j+1]
                arr[j+1] = temp
                console.log(temp);
            }
        }
    }
    return arr;
}

console.log(bubblesort([7,1,2,5,10,4]));

function selectionSort(arr){
    for(var i = 0; i<arr.length; i++){
        var minIndex = i;
        for(var j =i+1; j<arr.length; j++){
            if(arr[minIndex]>arr[j]){
                minIndex = j;
            }
        }
        temp = arr[minIndex]
        arr[minIndex]= arr[i]
        arr[i] = temp
        console.log(temp);
    }
    return arr;
}
console.log(selectionSort([7,1,2,5,10,4]));

// Logan
function bubbleSort(arr) {
    let unsorted = true;

    while (unsorted) {
        unsorted = false;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                unsorted = true;
            }
        }
    }
    return arr
}

function bubbleSortFLoop(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}

function selectionSort(arr) {
    //first for loop iterates through to swap the values
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        // second for loop to find minimum value
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            } 
        }
        // if i is not equal to the min it swaps the values, otherwise does nothing
        if (i != min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

let arr = [5,4,2,6,8,14,1,3]
console.log(arr);
// console.log(bubbleSort(arr))
// console.log(bubbleSortFLoop(arr))
console.log(selectionSort(arr))

// Jacob
function selectionSort(arr){
    var mindex = 0
    for(var i = 0; i<arr.length-1; i++){
        var min = arr[i]
        for(var j = i+1; j<arr.length; j++){
            if(arr[j] < min){
                min = arr[j]
                mindex = j
            }
        }
        var temp = arr[mindex]
        arr[mindex] = arr[i]
        arr[i] = temp
        console.log(arr)
    }
}

// Class
function selectionsort(arr){    
    for(var i = 0; i<arr.length; i++){
        var min = arr[i]
        var tracker = i
        for(var j =i; j<arr.length; j++){
            if(arr[j]< min){
                min = arr[j]
                tracker = j
            }
        }
        temp = arr[i];
        arr[i] = min;
        arr[tracker] = temp;
        console.log(arr)
    }
    return arr
}

console.log(selectionsort([10, 12, 24, 2, 3, 9, 21])) 