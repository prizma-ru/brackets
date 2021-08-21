module.exports = function check(str, bracketsConfig) {
  // your solution

  let stack = [];
  const OPEN_BRACKETS = bracketsConfig.map(m => m[0]);
  // const BRACKETS_PAIR = {
  //   ')': '(',
  //   '}': '{',
  //   '2': '1',
  //   '4': '3',
  //   '6': '5',

  // };
  var BRACKETS_PAIR = {
    addValue: function(mas) {
      //var testObj = {};
      for (let i = 0; i < mas.length; i++) {
        BRACKETS_PAIR[mas[i][1]] = mas[i][0];
    
      }
      //return BRACKETS_PAIR;
    },
  };
  BRACKETS_PAIR.addValue(bracketsConfig);


  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if (OPEN_BRACKETS.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }

      let topElement = stack[stack.length - 1];

      if (BRACKETS_PAIR[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;

}
