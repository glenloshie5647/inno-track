/* 
   Filename: SophisticatedCode.js 
   Content: A complex and elaborate JavaScript code showcasing various advanced techniques
*/

// Define a class for a Person
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Create instances of the Person class
const person1 = new Person('John');
const person2 = new Person('Alice');

person1.sayHello();  // Output: Hello, my name is John
person2.sayHello();  // Output: Hello, my name is Alice

// Define a function to calculate the factorial of a number
function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(5));  // Output: 120

// Define a generator function for fibonacci sequence
function* fibonacci() {
  let current = 0;
  let next = 1;

  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const fibonacciGenerator = fibonacci();
console.log(fibonacciGenerator.next().value);  // Output: 0
console.log(fibonacciGenerator.next().value);  // Output: 1
console.log(fibonacciGenerator.next().value);  // Output: 1
console.log(fibonacciGenerator.next().value);  // Output: 2
console.log(fibonacciGenerator.next().value);  // Output: 3

// Define a decorator function to log the execution time of a given function
function logExecutionTime(fn) {
  return function (...args) {
    const startTime = performance.now();
    const result = fn(...args);
    const endTime = performance.now();
    console.log(`Execution time: ${endTime - startTime} milliseconds`);
    return result;
  };
}

// Apply the decorator to calculate factorial with logging execution time
const factorialWithTimeLog = logExecutionTime(factorial);
console.log(factorialWithTimeLog(10));  // Output: 3628800
// Example output: "Execution time: 0.125 milliseconds"

// Define a higher-order function to create a new function with a fixed context
function bindContext(fn, context) {
  return function (...args) {
    return fn.apply(context, args);
  };
}

const boundSayHello = bindContext(person1.sayHello, person2);
boundSayHello();  // Output: Hello, my name is John

// Define a class for a Stack data structure
class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  get length() {
    return this.stack.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.length);  // Output: 3
console.log(stack.pop());   // Output: 3
console.log(stack.pop());   // Output: 2
console.log(stack.length);  // Output: 1