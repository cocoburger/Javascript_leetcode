const isValid = s => {
    // 홀수인 경우는 false
    if (s.length % 2 !== 0) return false;

    const stack = [];
    const map = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}'],
    ]);

    for ( let i = 0; i < s.length; i += 1 ) {
        // 맵에 key가 존재하면 true 아니면 false
        if ( map.has(s[i]) ) {
            // 맵에 key가 존재하면 stack 배열에 추가
            stack.push(map.get(s[i]));
            // stack의 마지막 요소와 s[i]가 다른 경우 false
        } else if ( s[i] !== stack.pop() ) {
            return false
        }
    }
    return stack.length === 0;
}

console.log(isValid("(}"));