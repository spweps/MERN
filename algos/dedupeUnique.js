//DeDupe & Unique characters

// def solution(s):
//     frequency = {}
//     for [i] in (s):
//         if i not in frequency:
//             frequency[i] = 1
//         else:
//             frequency[i] +=1
//     for i in Range(len(s)):
//         if frequency[s[i]] ==1:
//             return i
//     return -1

function findUnique(str){
    let uniq = "";

    for(let i =0; i < str.length; i++){
        if(uniq.includes(str[i]) === false){
            uniq += str[i]
        }
    }
    return uniq;
}

console.log(findUnique("findunique ascertain unique"))

function findUnique(str){
    str = str.split("")
    str = new Set(str);
    str = [...str].join("");
    return str;
}
console.log(findUnique("findunique ascertain unique"))

function findUnique(str){
    return[...str].reduce((acc, curr)=>{
        return acc.includes(curr) ? acc : acc + curr;
    }, "")
}
console.log(findUnique("findunique ascertain unique"))
console.log(findUnique("please find all the unique letters"))


function uniqueChars (chars){
    for (var i = 0; i < chars.length; i++){
        var dupe = false
        for (var j=0;j<chars.length;j++){
            if(chars[i]==chars[j] && i!=j){
                dupe = true
            }
        }
        if(!dupe){
            unique.push(chars[i])
        }
    }
}


// Jacob
//DEDUPE gets rid of duplicate characters abcadcz > abcdz

function dedupe(str){
    strArr = str.split("")
    checkArr = [] //Will store one of each character
    for (var i = 0; i<str.length; i++){
        if (checkArr.includes(strArr[i])){ //Have we already seen it?
            strArr[i] = "" //Make it blank
        }
        else (checkArr.push(strArr[i])) //Add it to the list if not
    }
    newStr = ""
    for (each of strArr){
            newStr += each //Now we just go through and add 'em together
    }
    return newStr
}

//UNIQUE only singles remain abcdcbz => adz 

function unique(str){
    strArr = str.split("")
    checkArr = [] //Will store one of each character
    dupeArr = [] //Keeps track of duplicates
    for (var i = 0; i<str.length; i++){
        if (checkArr.includes(strArr[i])){ //Have we already seen it?
            dupeArr.push(strArr[i]) //Add it to the dupes list
        }
        else (checkArr.push(strArr[i])) //If not, add it to the check list
    }
    newStr = ""
    for (each of strArr){
        if (!dupeArr.includes(each)){ //Is it single?
            newStr += each //Add it to the string
        }
    }
    return newStr
}

//Dunavan
const dedupe = (string) =>{
    //keeps first instance of duped letter in string
    let newString = ""
    for(let i = 0; i < string.length; i++){
        if(!newString.toLowerCase().includes(string[i].toLowerCase())){
            newString+=string[i];
        }
    }
    return newString;
}

const test1 = "abcdAbce"
console.log(dedupe(test1));

const unique = (string) => {
    let newString = "";
    for(let i = 0; i < string.length; i++){
        let inRestOfString = string.toLowerCase().slice(i+1).includes(string[i].toLowerCase())
        let inBeginningOfString = string.toLowerCase().slice(0,i).includes(string[i].toLowerCase())

        if(!inRestOfString && !inBeginningOfString){
            newString+=string[i];
        }
    }
    return newString
}

const test2 = "abgcdAbce"
console.log(unique(test2));

//Instructor Chris
str = 'sdfsdas'
obj ={}
result =""
for(each of str){
    if(obj[each]){
        obj[each]++
    }else{
        obj[each]=1
    }
}

for (each of Object.keys(obj)){
    if(obj[each] == 1){
        result += each
    }
}



console.log(result)