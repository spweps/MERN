
function s2w(str){
    let words = []
    let punc = []
    //push 1 word into words for each word in string
    //identify a word
    //a word ends with ""
    //a word starts with the first non "" after a ""
    //track a word until a space, push it in, then reset the word
    let word = ''
    for (let char of str){
        if(char === " "){
            if(word.length){
                words.push(word)
                punc.push('')
                word = ""
            }
        }else if(char ===',' || char==='.' || char ==='!' || char ==='?'){
            if(word.length)
                words.push(word)
                word = ""
                punc.push('')
        }
        punc.push(char)
    }
    if(word.length)
    words.push(word)
    return [words, punc]
}
s2w("hello bob")

function rwo(str){
    let newstr = '';
    let words = data[0]
    let punc = data[1]

    let words = s2w(str)
    let w = words.length -1
    let p = 0

    // while(w>=0 || p < words.length){
    //     let word = words[w]
    //     let found = false
    //     if(word != '.' && word != ',' && word!='?' && word!='!'){
    //         newstr +=word
    //         found = true
    //     }
    //     let punc = words[p]
    //     if(punc == '.' || punc == ',' || punc =='?' || punc =='!'){
    //         newstr += punc
    //         if(p < words.length-1)
    //         newstr += ' '
    //         found = true
    //     }
    //     if(found && p < words.length-1)
    //     newstr +=' '
    //     w--
    //     p++
    // }
    // for(let i = words.length-1; i >=0; i--){
    //     newstr += words[i]
    //     if(i != 0)
    //     newstr += " "
    // }


    return newstr
}

//REVERSE WORD ARRAY
// Jacob

test = "Good morning... Vietnam?!?!"

function stringToArr(str){
    var words = str.split(" ")
    var newArr = []
    var puncArr = [] //[[1, ","], [2, "!"]]
    for (let i=words.length-1; i>=0; i--){
        newArr.push(words[i])
    }
    for (let j=0; j<words.length; j++){
        if(newArr[j][newArr[j].length-1]=="!" || newArr[j][newArr[j].length-1]=="?" || newArr[j][newArr[j].length-1]=="," || newArr[j][newArr[j].length-1]==";" || newArr[j][newArr[j].length-1]==":" || newArr[j][newArr[j].length-1]=="."){
            while (newArr[j][newArr[j].length-1]=="!" || newArr[j][newArr[j].length-1]=="?" || newArr[j][newArr[j].length-1]=="," || newArr[j][newArr[j].length-1]==";" || newArr[j][newArr[j].length-1]==":" || newArr[j][newArr[j].length-1]=="."){
                puncArr.push([j, newArr[j][newArr[j].length-1]])
                newArr[j] = newArr[j].slice(0,newArr[j].length-1)
            }
        }
    }
    for (let k=0; k<puncArr.length; k++){
        newArr[newArr.length-puncArr[k][0]-1]+=puncArr[k][1]
    }
    return newArr
}
console.log(stringToArr(test))