//This was a coding challenge that a TC graduate received from Wayfair; she was told not to use recursion to solve it which makes it considerably more tricky.


//Given a multidimensional array of words (there can be any number of inner arrays and the arrays can be of any length)

words = [
    ["quick", "lazy"],
    ["brown", "red", "grey"],
    ["fox", "dog"]
];

//return an array of all combinations of the words combined

combinations = [
 "quick brown fox",
 "quick brown dog",
 "quick red fox",
 "quick red dog",
 "quick grey fox",
 "quick grey dog",
 "lazy brown fox",
 "lazy brown dog",
 "lazy red fox",
 "lazy red dog",
 "lazy grey fox",
 "lazy grey dog"
];

//This can be solved either recursively or iteratively.

//Dunavan
words = [
    ["quick", "lazy"],
    ["brown", "red", "grey"],
    ["fox", "dog"],
    ["hound", "badger"]
];

const createCombos = (arr) => {
    let newString = '';
    let newArray = [];
    let counterArray = [];
    let running = true;
    for(let i = 0; i < arr.length; i++){
        counterArray[i] = 0;
    }
    while(running){
        for(let i =0; i< arr.length; i++){
            newString+= arr[i][counterArray[i]]+" ";
        }
        newString=newString.slice(0,newString.length-1)
        newArray.push(newString);
        newString='';
        counterArray[arr.length-1]++;
        for(let i=arr.length-1; i >= 0; i--){
            if(counterArray[0]>arr[0].length-1){
                running=false;
                break;
            }
            if(counterArray[i]>arr[i].length-1){
                counterArray[i]=0;
                counterArray[i-1]++;
            }
        }
    }
    return newArray;
}

