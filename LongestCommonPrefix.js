var longestCommonPrefix = function(strs) {
    if(!strs.length) return '';

    let size = strs.length;

    if (strs[0] === '') {
        return '';
    }
    if (size == 1) {
        return strs[0]
    }
    strs.sort();

    // 문자열중 가장 길이가 짧은 길이 숫자를 end에 대입
    let end = Math.min(strs[0].length, strs[size-1].length);

    let i  =  0;
    while ( i < end && strs[0][i] == strs[size-1][i] )
        console.log(strs[0][i]);
        console.log(strs[size-1][i]);
        i++;

    let pre = strs[0].substring(0,i);
    return pre;
};

let input=["a"];
console.log( "The longest Common Prefix is : " +
    longestCommonPrefix( ["flower","flow","flight"]));
