

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