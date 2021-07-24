module.exports = {
  //param A : string
  //return an integer
  lengthOfLastWord: function (str) {
    const strArr = str.split(' ');
    return strArr[strArr.length - 1].length;
  },
};
