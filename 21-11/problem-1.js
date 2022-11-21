// String ends with?

function solution(str, ending) {
  let strLen = str.length;
  let endingLen = ending.length;
  if (str.substr(strLen - endingLen, endingLen) === ending) {
    return true;
  } else {
    return false;
  }
}

console.log(solution("abc", "bc"));
