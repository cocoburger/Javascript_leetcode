function solution(html) {
    if (html === undefined) {
        return false;
    }
    console.log(html)
    const regex =/\//g;
    return regex.test(html);

}

console.log(solution("<div><button></div></button>"))