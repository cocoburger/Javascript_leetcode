function solution (str) {
  return function (b, i = 0) {

      if(b) {
          if (i == 0) {
              return solution(str +' '+ b);
          } else {
              return solution(str + b + ' ');

          }

      }
      return(str);
  }
}






console.log(solution('가')('나')('다')());