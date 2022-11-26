var isPalindrome = function(x) {
    var reversNum = x.toString()
    reversNum = reverseString(reversNum)
    return (reversNum == x ? true : false)
};

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}


console.log(isPalindrome(131));