---
title: 'JavaScript Questions'
path: '/javascript-questions'
date: '2019-01-19'
---

- Explain event delegation.
  > Answer like this in a blockquote...
- Explain how `this` works in JavaScript.
  - Can you give an example of one of the ways that working with `this` has changed in ES6?
- Explain how prototypal inheritance works.
- What's the difference between a variable that is: `null`, `undefined` or undeclared?
  - How would you go about checking for any of these states?
- What is a closure, and how/why would you use one?
- What language constructions do you use for iterating over object properties and array items?
- Can you describe the main difference between a `forEach` loop and a `.map()` loop and why you would pick one versus the other?
- What's a typical use case for anonymous functions?
- What's the difference between host objects and native objects?
- Explain the difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
- Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`
- Can you explain what `.call` and `.apply` do? What's the notable difference between the two?
- Explain `Function.prototype.bind`.
- What's the difference between feature detection, feature inference, and using the UA string?
- Explain "hoisting".
- Describe event bubbling.
- Describe event capturing.
- What's the difference between an "attribute" and a "property"?
- What are the pros and cons of extending built-in JavaScript objects?
- What is the difference between `==` and `===`?
- Explain the same-origin policy with regards to JavaScript.
- Why is it called a Ternary operator, what does the word "Ternary" indicate?
- What is strict mode? What are some of the advantages/disadvantages of using it?
- What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
- What tools and techniques do you use debugging JavaScript code?
- Explain the difference between mutable and immutable objects.
  - What is an example of an immutable object in JavaScript?
  - What are the pros and cons of immutability?
  - How can you achieve immutability in your own code?
- Explain the difference between synchronous and asynchronous functions.
- What is event loop?

  > Great video by Philip Roberts: https://www.youtube.com/watch?v=8aGhZQkoFbQ  
  > In JS, code that would be "blocking" (setTimeout for example) lands on the browser's stack but is then passed off to the browser's webapis where the setTimeout waits out its duration until it's ready to be executed. When it's ready it doesn't just throw it back onto the call stack and disrupt whatever else is running, it gets passed to the task queue to wait.  
  > Now the event loop steps in...  
  > The event loop's job is to look at the stack and to look at the task queue. If the stack is empty, it takes the first thing on the task queue and pushes it onto the stack to be run.

  > An XHR request (request to an outside source) falls into the "blocking" category as well and is handled the same way.

  > setTimeout 0 doesn't run the code immediately, it runs it next...ish

  > There's also a Render Queue that tries to run renders at 60 fps but can't run while there are tasks in the Call Stack. So it waits and runs renders whenever there's an opening. If you have blocking code on the stack it will block and cause problems with render jank.

  > Takeaway  
  > Don't put slow code on the stack. Run it async, in other words pass it off to webapis while it does its slow thing.

* What is the difference between call stack and task queue?

  > The call stack is a data structure that records where in the program we currently are.
  > So if we step into a function, we push something onto the stack, if we return from a function, we pop off the top of the stack.

* What are the differences between variables created using `let`, `var` or `const`?
* What are the differences between ES6 class and ES5 function constructors?
* Can you offer a use case for the new arrow `=>` function syntax? How does this new syntax differ from other functions?
* What advantage is there for using the arrow syntax for a method in a constructor?
* What is the definition of a higher-order function?
* Can you give an example for destructuring an object or an array?
* Can you give an example of generating a string with ES6 Template Literals?
* Can you give an example of a curry function and why this syntax offers an advantage?
* What are the benefits of using `spread syntax` and how is it different from `rest syntax`?
* How can you share code between files?
* Why you might want to create static class members?

## Coding questions

- Make this work:

```javascript
duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
```

- Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
