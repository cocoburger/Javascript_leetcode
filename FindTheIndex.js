var strStr = function ( haystack, needle) {
  if (needle.length === 0) return 0;
  let i = 0;
  let j = 0;
  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      i = i - j + 1;
    }
  }
  if (j === needle.length) return i - j;
  return -1;
}


const str = 'sadbutsad';
const findStr = 'sad';
let pos = 0;
while ( true ) {
  let foundStr = str.indexOf(findStr, pos)
  if ( foundStr == -1 ) {
    break;
  }
  console.log(foundStr);
  pos = foundStr + findStr.length;
}


