//Jacob
//convert hexadecimal to base ten
//convert base ten to hexadecimal

function hexToTen(hex){
    let result = 0
    let expTracker = 0
    let temp = 0
    for(var i = hex.length-1; i >= 0; i--){
        if (isNaN(hex[i])){ //Gotta convert A-F to numbers we can use
            if (hex[i]=="A"){
                temp = 10
            }
            else if (hex[i] == "B"){
                temp = 11
            }
            else if (hex[i] == "C"){
                temp = 12
            }
            else if (hex[i] == "D"){
                temp = 13
            }
            else if (hex[i] == "E"){
                temp = 14
            }
            else temp = 15
            result += temp * (16 ** expTracker)
        }
        else result += Number(hex[i]) * (16 ** expTracker)
        expTracker++
    }
    return result
}

function baseTenToHex(baseTen){
    var expTracker = 0
    var result = ""
    var counter = 0
    while(16**(expTracker+1) < baseTen){
        expTracker++
    }
    while(baseTen != 0){
        if(16**expTracker <= baseTen){
            counter = 0
            while (16 ** expTracker <= baseTen){
                baseTen -= 16 ** expTracker
                counter++
            }
            if (counter < 10) result += String(counter)
            else if (counter == 10){
                result += "A"
            }
            else if (counter == 11){
                result += "B"
            }
            else if (counter == 12){
                result += "C"
            }
            else if (counter == 13){
                result += "D"
            }
            else if (counter == 14){
                result += "E"
            }
            else if (counter == 15){
                result += "F"
            }
        }
        else result += "0"
        expTracker--
    }
    return result
}

//Dunavan
const hexToDecimal = (num) => {
    const conversion = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'a': 10,
        'b': 11,
        'c': 12,
        'd': 13,
        'e': 14,
        'f': 15
    }
    if(typeof num === 'number'){
        num = num.toString();
    }
    let sign = 1;
    if(num[0] == "-"){
        sign = -1;
        num = num.slice(1)
    }
    let length = num.length;
    let decimal = 0;
    for(let i = 0; i < length; i ++){
        decimal+=conversion[num[i]]*(16**(length-1-i));
    }
    return decimal*sign;
} 

const test3 = '2465'
console.log(hexToDecimal(test3))

const decimalToHex = (num) => {
    const conversion = {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: 'a',
        11: 'b',
        12: 'c',
        13: 'd',
        14: 'e',
        15: 'f'
    }
    let hex = "";
    let sign = "";
    if(num < 0){
        sign = '-';
        num = num*-1;
    }
    for(let i = 10; i>=0; i--){
        let times = Math.floor(num/(16**i))
        num = num - times * (16**i);
        hex+=conversion[times];
    }
    let final=""
    for(let char of hex){
        if(char !=='0'){
            final += char;
        }
    }
    return sign+final;
}