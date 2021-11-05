//Timothy
const encode = (str) => {
    var newStr = ""
    for (let i=0;i<str.length;i++) { //walker
        var num = 0
        for (let j=0;j<str.length;j++) { //runner
            if (str[i]==str[j]) {
                num++
            }
        }
        if (!newStr.includes(str[i])) {
            newStr+=str[i] + num
        } console.log(newStr)
    }
    return newStr
}

var str = "aaabbbbccdddddeee" //a3b4c2d5e3
console.log(encode(str))

//Jacob
str = "aaabbccc"
function encode(str){
    let result = ""
    let obj = {}
    for(each of str){
        if(obj[each]){
            obj[each]++
        }
        else{
            obj[each]=1
        }
    }

    for (each of Object.keys(obj)){
        result += each //each = keys
        result += obj[each]
    }
    if (result.length > str.length){
        return str
    }
    return result
}

console.log(encode(str))

str2 = "a2b10c0"
function decode(str){
    let result = ""
    let num = "" //2 => 1 => 10
    let alpha = "" //a => b
    for (each of str){
        if (isNaN(Number(each))){ //Executes if not a number
            if (alpha && num){
                for (var i = 0; i<Number(num); i++){
                    result += alpha
                }
                alpha = ""
                num = ""
            }
            alpha = each
        }
        if (!isNaN(Number(each))){ //Executes if a number
            num += each
        }
    }
    for (var i = 0; i<Number(num); i++){
        result += alpha
    }
    return result
}

console.log(decode(str2))

//Andrew
const encodeString = string => {
    // create blank output, set letter equal to teh first letter, letter count starts at 1
    let output = "";
    let letter = string[0];
    let letterCount = 1;
    // add 1 to the string length to capture the last encode letter/number combo
    for (let i = 1; i < string.length +1; i++) {
        // if the letter we are checking is the same, add to the count
        if (string[i] == letter) {
            letterCount++;
        }
        // if not, send the letter and count to the output and reset the letter and count
        else {
            output += letter + letterCount;
            letter = string[i];
            letterCount = 1;
        }
    }
    return output;
}

console.log(encodeString("aaaaaabbbggzzzzzzzzzzzz")) //"a6b3g2z12"



//Devin
let myString = "aaabbcdddd"

function encode_string(str){
    const dict = {}
    for(i=0; i<str.length; i++){
        dict[str[i]]? dict[str[i]]++:
        dict[str[i]] = 1;
    }
    console.log(dict);
    let newString =""
    for(let letter in dict){
        console.log(dict[letter]);
        newString += letter + dict[letter];
    }
    console.log(newString);
    return newString;
}

let encodedString = encode_string(myString);

//a3b2c1d4
const print_newString = (str) => {
    let counter = 0
    
    let newString = ""
    while (counter <= str.length){
        if(isNaN(str[counter])){
            newString += str[counter]
        }else{
            let multiplier = "";
            multiplier += str[counter];
            while(! isNaN(str[counter+1])){
                multiplier +=str[counter+1];
                counter++;
            }
            // newString = a
            // multiplier = 100
            for(j=1; j<parseInt(multiplier); j++){
                newString += newString[newString.length-1];
            }
            console.log(newString);
            
        }
        counter++
        
    }
    return(newString)
    }
    print_newString(encodedString)