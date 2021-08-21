module.exports = {
  //param A : string
  //return a strings
  solve: function (sentence) {
    sentence = sentence.replace(/\s+/g, ' ');
    return sentence.split(' ').reverse().join(' ');
  },
};
