//Jacob
function binToTen(bin){
    let binString = String(bin) //Converts bin to string for easy manipulation
    let result = 0 //Will hold end result
    let expTracker = 0 //This is our exponent
    for(var i = binString.length-1; i >= 0; i--){ //Starts at right end, works backwards
        if(binString[i]==1){ //If that spot is a one, we will add to the result
            result += 2 ** expTracker //2^0 = 1, 2^1 = 2, etc.
        }
        expTracker++ //Increments exponent each time
    }
    return result
}

function baseTenToTwo(baseTen){
    var expTracker = 0 //This is our exponent
    var result = "" //This will hold our result
    while(2**(expTracker+1) < baseTen){ //This finds the biggest power of 2 less than our number
        expTracker++
    }
    while(baseTen != 0){ //This will keep going until baseTen is zero
        if(2**expTracker <= baseTen){ //If that power of two is less than or equal to baseTen...
            baseTen -= 2**expTracker //We subtract it from baseTen
            result += "1" //And add a 1 to the result
        }
        else result += "0" //Otherwise, add a 0
        expTracker-- //The exponent goes down by one now
    }
    return Number(result)
}

//Matt

function binaryToDecimal(binary) {
    let decimal = 0;
    let counter = 0;
    for (let i = binary.length - 1; i >= 0; i--) {
        decimal += binary[i] * Math.pow(2, counter);
        counter++;
    }
    return decimal;
}

// decimal to binary (does not handle negative numbers)

function decimalToBinary(decimal) {
    let binary = "";
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary;
}

console.log(binaryToDecimal("1010"));
console.log(binaryToDecimal("1111101"));
console.log(binaryToDecimal("10101"));
console.log(binaryToDecimal("10000001"));

console.log(decimalToBinary(5));
console.log(decimalToBinary(255));
console.log(decimalToBinary(256));
console.log(decimalToBinary(102));