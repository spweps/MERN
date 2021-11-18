function xor(a, b) {
    let xor = "";
    if (a.length != b.length) {
        return "Error: strings must be equal length";
    }
        
    else {
        for (i = 0; i < a.length; i++) {
            if (a[i] == b[i]) {
                xor += "0";
            }
            else {
                xor += "1";
            }
        }
    }
    return xor;
}


// -- left shift --
function bitwiseLSL(binaryStr, shiftAmount) { 
    let shifted = "";
    shifted = binaryStr.slice(shiftAmount);
    for (i = 0; i < shiftAmount; i++) {
        shifted += "0";
    }
    return shifted;
}