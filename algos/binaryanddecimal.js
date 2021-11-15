function binaryToDecimal(n)
{
    let num = n;
    let dec_value = 0;
    let base = 1;
 
    let temp = num;
    while (temp) {
        let last_digit = temp % 10;
        temp = Math.floor(temp / 10);
 
        dec_value += last_digit * base;
 
        base = base * 2;
    }
 
    return dec_value;
}
 
    let num = 10101001;
 
    document.write(binaryToDecimal(num) + "<br>");

//Different set
    function binaryToDecimal(n)
{
    let num = n;
    let dec_value = 0;
 
    let base = 1;
 
    let len = num.length;
    for (let i = len - 1; i >= 0; i--) {
        if (num[i] == '1')
            dec_value += base;
        base = base * 2;
    }
 
    return dec_value;
}
 

 
    let num = "10101001";
    document.write(binaryToDecimal(num) + "<br>");


//Different
function decToBinary(n)
{
    let binaryNum = new Array(32);

    let i = 0;
    while (n > 0) {
        binaryNum[i] = n % 2;
        n = Math.floor(n / 2);
        i++;
    }
    for (let j = i - 1; j >= 0; j--)
        document.write(binaryNum[j]);
}

    let n = 17;
    decToBinary(n);