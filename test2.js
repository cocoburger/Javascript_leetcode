function solution(n, v) {
    let max = v[0];
    let max_diff = 0;

    if (n < 2) {
        return
    }

    if (n === 2) {
        return v[0] - v[1]
    }

    for(let i = 1; i<n; i++) {
        if(v[i] > max) {
            max = v[i];
        } else {
            let diff = max - v[i];

            if(diff > max_diff) {
                max_diff = diff;
            }

        }

        if (max_diff === 0) {
            max_diff = -1;
        }
    }
    return max_diff

}
