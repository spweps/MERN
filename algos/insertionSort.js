
// Dunavan
function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++){
        let curVal = arr[i];
        for(let j = i-1; j >= 0; j--){
            if(curVal < arr[j]){
                arr[j+1] = arr[j];
                if(j==0){
                    arr[j] = curVal;
                }
            }
            else{
                arr[j+1] = curVal;
                break;
            }
        }
    }
    return arr;
}

arr1 = [1,4,3,2,10,12,5,6,8,15,18]

console.log(insertionSort(arr1));

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

// Jonathon
function insertSort(arr){
    for(var i = 1;i<arr.length;i++){
        var temp = arr[i]
        var j = i-1;
        while((j>=0)&&(temp<arr[j])){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr;
}
let arr = [5,4,2,6,8,14,1,3,10];
console.log(arr);
console.log(insertSort(arr));
code



// Jacob
function insertionSort(arr){ 
    var position;
    var position2;
    for (var i = 1; i < arr.length; i++){ //6, 5, [1, 2, 3, 4, 10, 12, 5, 6]
        if (arr[i] > arr[i-1]){
            continue
        }
        else {
            var temp = arr[i] //5
            position = i //6
            if (temp < arr[0]){ //Condition if it's lower than the first value
                for (var j = i; j > 0; j--){ //Shift everything over one by one
                    arr[j] = arr[j-1]
                } //5, 1, [1, 2, 3, 4, 10, 12, 5, 6]
                arr[0] = temp //[3, 4, 2, 10, 12, 1, 5, 6]
            }
            else { //5, 1, [1, 2, 3, 4, 10, 12, 5, 6]
                for (var k = 0; k<position; k++){ //Loop through to find the correct spot
                    if (temp > arr[k] && temp < arr[k+1]){
                        position2 = k+1; //4
                    }
                }
                for (var j = position; j > position2; j--){ //position2 = 4
                    arr[j] = arr[j-1] //5, 1, [1, 2, 3, 4, 10, 10, 12, 6]
                }
                arr[position2] = temp //5, 1, [1, 2, 3, 4, 5, 10, 12, 6]
            }
        }
    }
    console.log(arr)
}



// Monique
function insertionSort(arr) {
    for (var i=1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            let temp = arr[i];
            for (var j=i; temp < arr[j-1]; j--) {
                arr[j] = arr[j-1];
                }
                arr[j] = temp;
            }
        }
    return arr
}