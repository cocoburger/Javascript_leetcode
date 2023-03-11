function solution(numer1, denom1, numer2, denom2) {
   if ( denom1 === denom2 ) {
       return [numer1 + numer2, denom1]
   }
   let denom = getLCM(denom1, denom2);
   let gcd =getGCD( numer1 * denom2, numer2 * denom1);
    let numer = (numer1 * denom2+ numer2 * denom1) / gcd;
   return [numer,denom]

}

let getGCD = (num1, num2) => {
    let gcd = 1;

    for(let i=2; i<=Math.min(num1, num2); i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }

    return gcd;
}

let getLCM = (num1, num2) =>{
    let lcm = 1;

    while(true){
        if((lcm % num1 == 0) && (lcm % num2 == 0)){
            break;
        }
        lcm++;
    }
    return lcm
}
console.log(solution(1,2,3,4));