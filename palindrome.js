var isPalindrome = function(x) {
    var reversNum = x.toString()
    reversNum = reverseString(reversNum)
    return (reversNum == x ? true : false)
};

const reverseString = (str) => {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}


const isPalindrome2 = (x) => {
    const reversNum = x.toString().split("").reduceRight((acc, cur) => {
        return Number(acc + cur);
    },0);

    return (reversNum == x ? true : false)
}


console.log(isPalindrome(131));