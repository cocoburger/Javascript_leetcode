function solution(vote) {
    let A=0, B=0, C=0;
    for ( let i =0; i<vote.length; i++ ) {
        if (vote[i] === 'A') {
            A += 1;
        }
        if (vote[i] === 'B') {
            B+= 1;
        }
        if (vote[i] === 'C') {
            C+= 1;
        }
    }

    if (C >=( A + B) ) {
    return 'C'
    }

    if (A > B) {
        return 'A'
    }

    if (B > A) {
        return 'B'
    }

    return 'AB'

}
