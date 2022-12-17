function solution(n, quests) {
    const arr2 = quests.reduce(function (acc, cur) {
        return acc.concat(cur);
    });
    const set = new Set([]);
    for ( let i = 0; i<arr2.length; i++ ){
        set.add(arr2[i])
    }
    for ( let i = 0; i<arr2.length; i++ ){
        console.log(set.has([i]))
    }
}

