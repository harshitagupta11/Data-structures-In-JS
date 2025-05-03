/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

function isValid(str) {
  let stack = [];
  let paranthesis = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  for (let c of str) {
    if (paranthesis[c]) {
      stack.push(c);
    } else if(paranthesis[stack[stack.length-1]]==c) {
        stack.pop();
    }
    else {
      return false;
    }
  }
  return stack.length == 0 ? true : false;
}

const str = "()[]{}";

console.log(isValid(str));
console.log(isValid("()"));
console.log(isValid("[)"));
