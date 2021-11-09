//Jacob
function union(arr1, arr2){
    const newArr = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length){
        if (arr1[i] == arr2[j]){
            newArr.push(arr1[i])
            i++
            j++
        }
        else if (arr1[i] < arr2[j]){
            newArr.push(arr1[i])
            i++
        }
        else{
            newArr.push(arr2[j])
            j++
        }
    }
    while (j < arr2.length){
        newArr.push(arr2[j])
        j++
    }
    while (i < arr1.length){
        newArr.push(arr1[i])
        i++
    }
    return newArr
}

//Dunavan
const sortedUnion = (arr1, arr2) => {
    let unionArr = []
    let arr1Index = 0;
    let arr2Index = 0;
    while (arr1Index < arr1.length && arr2Index < arr2.length){
        if(arr1[arr1Index]<arr2[arr2Index]){
            unionArr.push(arr1[arr1Index]);
            arr1Index++;
        }
        if(arr1[arr1Index]>arr2[arr2Index]){
            unionArr.push(arr2[arr2Index]);
            arr2Index++;
        }
        if(arr1[arr1Index]===arr2[arr2Index]){
            unionArr.push(arr1[arr1Index]);
            arr1Index++;
            arr2Index++;
        }
    }
    return unionArr.concat(arr1.slice(arr1Index)).concat(arr2.slice(arr2Index));
}

let test1 = [1,2,2,3,5]
let test2 = [2,4,6,8,8]
console.log(sortedUnion(test1,test2))