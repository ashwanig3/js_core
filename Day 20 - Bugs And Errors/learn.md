# Bugs & Errors

[Link](http://eloquentjavascript.net/08_error.html)

Or For Easir Understanding Checkout

[Link](http://javascript.info/error-handling)

## Types Of Errors

1. __Syntax Error:__ Caused by missing closing brackets, that kind of thing. These errors occur as soon as you try to run your code. Nothing in your program will happen if you have a syntax error because the JS interpreter can’t understand your code.
```
for (var key in person {
  //You forget the ')' so it will be a SyntaxError
  // SyntaxError: unexpected token {
  console.log(person[key]);
}
```

2. __ReferenceError:__ Caused by trying to do something with a variable that doesn’t exist. For example:
```
var a = 'cat';
console.log(b); // ReferenceError: b is not defined
```

3. __TypeError:__ Caused by trying to do something to a value that can’t be done with that type of value. For example
```
var a = 'cat';
a();   // TypeError: a is not a function
```

4. __RangeError:__  Caused by trying to do something that’s outside a permissible range of values. Common when using recursion and you add too many functions to the call stack. For Example
```
function sum (a) {
  sum(a - 1);
}
sum(10); //Uncaught RangeError: Maximum call stack size exceeded
```