//rotate-string and is-rotation


var str1 = "AACD";
var str2 = "ACDA";

function areRotations(str1, str2){
    return (str1.length == str2.length) && ((str1 + str1).indexOf(str2) != -1);
}
    if (areRotations(str1, str2))
        console.log("Strings are rotations of each other")
    else
        console.log("Strings are not rotations of each other")


// Jacob
function rotateString(str, n){
    if (n > str.length){
        n = n % str.length
    }
    return str.slice(n) + str.slice(0,n)
}

function isRotate(strA, strB){
    if (strA.length != strB.length){
        return false
    }
    for (let i=0; i<strA.length; i++){
        if (rotateString(strA, i) == strB){
            return true
        }
    }
    return false
}

// Devin
string1 = "abcdef"
string2 = "feabcd" //false
string3 = "efabcd" //true



function rotate_string(str){
    let lastChar = str[str.length-1]
    let strSlice = str.substring(0,str.length-1)
    // console.log(lastChar);
    // console.log(strSlice);
    let newString = lastChar + strSlice;
    // console.log(newString);
    return(newString)
}

rotate_string(string1);

function is_rotated(baseStr, testStr, counter=0){
    if (baseStr.length != testStr.length){
        return false;
    }
    console.log(counter)
    if( counter == baseStr.length+1){
        return false
    }
    else{
        let rotatedBase = rotate_string(baseStr);
        if(rotatedBase == testStr){
            return true
        }
        return is_rotated(rotatedBase, testStr, counter+1)
    }
}

console.log(is_rotated(string1, string2));


// Dunavan
const rotateString = (string, shift) => {
    var newString = "";
    var startingPoint = string.length-shift%string.length;
    var i = startingPoint;
    while( newString.length < string.length ){
        newString+=string[(i%string.length)]
        i++;
    }
    return newString;
}

const test1 = 'abcdefghi'
console.log(rotateString(test1,20))


const isRotation = (string1, string2) => {
    if(string1.length !== string2.length){
        return false;
    }
    if(string1 === string2){
        return true;
    }
    //check all possible rotations from rotateString and compare to arr2
    let maxPossibleShifts = string1.length;
    for(let i = 1; i < maxPossibleShifts; i++){
        let testShift = rotateString(string2,i);
        if(string1 === testShift){
            return true;
        }
    }
    return false;
}

const test2 = 'bcdefghig'
console.log(isRotation(test1,test2))



// Logan
const rotateString = (str, num) => {
    output = "";
    // first for loop works forwards from the beginning of our rotated values and adding them to the front
    for (let i = str.length-num; i < str.length; i++) {
        output += str[i];
    }
    console.log(output)
    // second for loop adds the rest of the string as it normally should but stops at our rotated values
    for (let i = 0; i < str.length-num; i++) {
        output += str[i];
    }
    return output
}

console.log(rotateString("Did I shine my shoes today?", 9));

const isRotation = (str1, str2) => {
    // quick check between string lengths (if unequal then it isn't rotated)
    if (str1.length != str2.length) {
        return false
    }
    // each iteration of i runs through my rotate function 
    for (let i = 1; i < str1.length + 1; i++) {
        if (rotateString(str1, i) == str2) {
            return true
        }
    }
    return false
}

console.log(isRotation("Did I shine my shoes today?", "es today?Did I shine my sho"));


// Douglas
function rotateStrLeft (str, x){
    let rotatedStr = str.substring(x, str.length) +
                    str.substring(0, x);
    return rotatedStr;
}

testStr = "abcde";

console.log(rotateStrLeft(testStr, 2));