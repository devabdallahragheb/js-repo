# JavaScript Interview Questions & Answers 🚀

> A comprehensive guide for JavaScript interview preparation - organized by topics

## 📋 Table of Contents

1. [JavaScript Fundamentals](#1-javascript-fundamentals)
2. [Data Types & Variables](#2-data-types--variables)
3. [Functions](#3-functions)
4. [Objects](#4-objects)
5. [Prototypes & Inheritance](#5-prototypes--inheritance)
6. [Asynchronous JavaScript](#6-asynchronous-javascript)
7. [ES6+ Features](#7-es6-features)
8. [Event Loop & Execution Context](#8-event-loop--execution-context)
9. [Browser APIs & Web Storage](#9-browser-apis--web-storage)
10. [Performance & Optimization](#10-performance--optimization)
11. [Advanced Concepts](#11-advanced-concepts)

---

## 1. JavaScript Fundamentals

### Q1: What is JavaScript?

**Answer:**
JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It's a multi-paradigm language supporting:
- Object-oriented programming
- Functional programming
- Procedural programming
- Event-driven programming

**Key Features:**
- Dynamic typing
- First-class functions
- Prototype-based inheritance
- Single-threaded with asynchronous capabilities

---

### Q2: What programming paradigms does JavaScript support?

**Answer:**
JavaScript is a **multi-paradigm** language supporting:

**1. Procedural Programming**
```javascript
let a = 5;
let b = 10;
let sum = a + b;
console.log(sum);
```

**2. Object-Oriented Programming (OOP)**
```javascript
class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}
const user = new User("Ali");
user.greet();
```

**3. Functional Programming**
```javascript
const add = (a, b) => a + b;
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
```

**4. Event-Driven Programming**
```javascript
button.addEventListener("click", () => {
  console.log("Clicked!");
});
```

**5. Asynchronous Programming**
```javascript
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);
```

---

### Q3: What is the V8 JavaScript engine?

**Answer:**
V8 is an open-source, high-performance JavaScript engine developed by Google, written in C++. It powers:
- Google Chrome
- Node.js
- Microsoft Edge

**Key Features:**
- Just-In-Time (JIT) compilation
- Garbage collection (mark-and-sweep algorithm)
- Implements ECMAScript and WebAssembly
- Runs on Windows, macOS, and Linux

**How it works:**
- Compiles JavaScript to native machine code
- Optimizes code at runtime
- Manages memory automatically

---

### Q4: What is garbage collection in V8 (mark-and-sweep)?

**Answer:**
V8 uses garbage collection to automatically free unused memory.

**Mark-and-Sweep Algorithm:**
1. **Mark Phase**: Mark all reachable objects starting from roots (globals, stack)
2. **Sweep Phase**: Remove unmarked (unreachable) objects
3. **Compact Phase**: Defragment memory

**Generational Collection:**
- **Young Generation**: Short-lived objects (frequent collection)
- **Old Generation**: Long-lived objects (less frequent collection)

This process runs automatically in the background.

---

### Q5: What is strict mode?

**Answer:**
Strict mode enables a restricted variant of JavaScript, helping catch errors and prevent unsafe actions.

**How to enable:**
```javascript
"use strict";
x = 10; // ❌ Error (x is not defined)
```

**Or inside a function:**
```javascript
function test() {
  "use strict";
  y = 20; // ❌ Error
}
```

**What it changes:**

**1. Prevents undeclared variables**
```javascript
"use strict";
x = 5; // ❌ ReferenceError
```

**2. No duplicate parameter names**
```javascript
"use strict";
function sum(a, a) { // ❌ Error
  return a + a;
}
```

**3. Prevents deleting variables**
```javascript
"use strict";
let x = 10;
delete x; // ❌ Error
```

**4. `this` is undefined in functions**
```javascript
"use strict";
function test() {
  console.log(this); // undefined (not window)
}
test();
```

**5. Prevents octal syntax**
```javascript
"use strict";
let x = 012; // ❌ Error
```

**Benefits:**
- ✅ Safer code
- ✅ Better debugging
- ✅ Prevents silent errors
- ✅ More predictable behavior

---

### Q6: What is `eval()` and why is it dangerous?

**Answer:**
`eval()` is a function that executes a string as JavaScript code.

**Example:**
```javascript
console.log(eval("1 + 2")); // 3

let x = 10;
eval("x + 5"); // 15

eval(`
  let a = 5;
  let b = 10;
  a + b;
`); // 15
```

**Why it's dangerous:**

**1. Security Risk**
```javascript
eval("alert('hacked')"); // Can execute malicious code
```

**2. Performance Issues**
- Slower execution
- Prevents JavaScript engine optimizations

**3. Hard to Debug**
- Code becomes unpredictable
- Difficult to maintain

**Safer Alternatives:**

**1. Direct expressions**
```javascript
let result = 1 + 2;
```

**2. JSON.parse (for JSON strings)**
```javascript
JSON.parse('{"name":"Ali"}');
```

**3. Function constructor (rare use)**
```javascript
const fn = new Function("a", "b", "return a + b");
fn(2, 3); // 5
```

---

## 2. Data Types & Variables

### Q7: What are the data types in JavaScript?

**Answer:**
JavaScript has **8 data types**:

**Primitive Types (7):**
1. **String**: `"hello"`
2. **Number**: `42`, `3.14`
3. **BigInt**: `9007199254740991n`
4. **Boolean**: `true`, `false`
5. **Undefined**: `undefined`
6. **Null**: `null`
7. **Symbol**: `Symbol('description')`

**Non-Primitive (1):**
8. **Object**: Arrays, Functions, Objects

```javascript
typeof "text"      // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object" (historical bug)
typeof Symbol()    // "symbol"
typeof {}          // "object"
```

---

### Q8: What is the difference between `null` and `undefined`?

**Answer:**

| Feature | `null` | `undefined` |
|---------|--------|-------------|
| **Meaning** | Intentional absence of value | Variable declared but not assigned |
| **Type** | `object` (legacy bug) | `undefined` |
| **Assignment** | Explicit | Default for uninitialized variables |
| **Use case** | Indicates absence of value | Variable itself is absent |
| **Conversion to number** | `0` | `NaN` |

**Examples:**
```javascript
let x;
console.log(x); // undefined

let y = null;
console.log(y); // null

typeof null;      // "object"
typeof undefined; // "undefined"
```

---

### Q9: What is hoisting?

**Answer:**
Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution.

**Function Hoisting:**
```javascript
sayHello(); // ✅ Works!

function sayHello() {
  console.log("Hello");
}
```

**Variable Hoisting (`var`):**
```javascript
console.log(x); // undefined (not error)
var x = 5;

// Interpreted as:
// var x;
// console.log(x);
// x = 5;
```

**`let` and `const` hoisting:**
```javascript
console.log(y); // ❌ ReferenceError: Cannot access before initialization
let y = 10;
```

**Key Point:**
- `var`: Hoisted and initialized with `undefined`
- `let`/`const`: Hoisted but in Temporal Dead Zone (TDZ)
- Functions: Fully hoisted

---

### Q10: What is the Temporal Dead Zone (TDZ)?

**Answer:**
The Temporal Dead Zone (TDZ) is the period between entering a scope and the variable declaration being initialized. During this time, accessing the variable throws a `ReferenceError`.

**Only applies to `let` and `const`, not `var`.**

**Example:**
```javascript
{
  // TDZ starts
  console.log(x); // ❌ ReferenceError
  let x = 5; // TDZ ends
  console.log(x); // ✅ 5
}
```

**With `var` (no TDZ):**
```javascript
{
  console.log(x); // undefined
  var x = 5;
}
```

**Why TDZ exists:**
- Catch programming errors early
- Prevent use before initialization
- More predictable code

---

### Q11: What is the difference between `var`, `let`, and `const`?

**Answer:**

| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| **Scope** | Function-scoped | Block-scoped | Block-scoped |
| **Hoisting** | Yes (initialized with `undefined`) | Yes (but TDZ) | Yes (but TDZ) |
| **Re-declaration** | ✅ Allowed | ❌ Not allowed | ❌ Not allowed |
| **Re-assignment** | ✅ Allowed | ✅ Allowed | ❌ Not allowed |
| **Temporal Dead Zone** | No | Yes | Yes |

**Examples:**
```javascript
// var
var x = 1;
var x = 2; // ✅ Allowed

// let
let y = 1;
let y = 2; // ❌ SyntaxError
y = 3; // ✅ Allowed

// const
const z = 1;
z = 2; // ❌ TypeError
const z = 3; // ❌ SyntaxError
```

**Block Scope Example:**
```javascript
if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}
console.log(a); // 1 (var is function-scoped)
console.log(b); // ❌ ReferenceError
console.log(c); // ❌ ReferenceError
```

---

### Q12: What is the difference between parameter and argument?

**Answer:**

- **Parameter**: Variable in function definition
- **Argument**: Actual value passed when calling function

**Example:**
```javascript
function myFunction(parameter1, parameter2, parameter3) {
  console.log(arguments[0]); // "argument1"
  console.log(arguments[1]); // "argument2"
  console.log(arguments[2]); // "argument3"
}

myFunction("argument1", "argument2", "argument3");
```

**Parameter** = `parameter1`, `parameter2`, `parameter3`  
**Argument** = `"argument1"`, `"argument2"`, `"argument3"`

---

## 3. Functions

### Q13: What are the different ways to define functions?

**Answer:**

**1. Function Declaration**
```javascript
function add(a, b) {
  return a + b;
}
```

**2. Function Expression**
```javascript
const add = function(a, b) {
  return a + b;
};
```

**3. Arrow Function (ES6)**
```javascript
const add = (a, b) => a + b;
```

**4. Constructor Function**
```javascript
const add = new Function('a', 'b', 'return a + b');
```

**5. Method Definition**
```javascript
const obj = {
  add(a, b) {
    return a + b;
  }
};
```

---

### Q14: What are arrow functions?

**Answer:**
Arrow functions provide a shorter syntax for writing functions, introduced in ES6.

**Syntax:**
```javascript
// Traditional Function Expression
var add = function(a, b) {
  return a + b;
}

// Arrow Function Expression
var arrowAdd = (a, b) => a + b;
```

**Short syntax variations:**
```javascript
// Traditional
var multiplyBy2 = function(num) {
  return num * 2;
}

// Arrow function (single parameter, no parentheses needed)
var arrowMultiplyBy2 = num => num * 2;
```

**Key Differences from traditional functions:**

**1. No `this` binding** (inherits from parent scope)
```javascript
var obj1 = {
  valueOfThis: function() {
    return this;
  }
}

var obj2 = {
  valueOfThis: () => {
    return this;
  }
}

obj1.valueOfThis(); // ✅ Returns obj1
obj2.valueOfThis(); // ❌ Returns window/global object
```

**2. No `arguments` object**
```javascript
function traditional() {
  console.log(arguments); // ✅ Works
}

const arrow = () => {
  console.log(arguments); // ❌ ReferenceError
};
```

**3. Cannot be used as constructors**
```javascript
const Person = (name) => {
  this.name = name;
};
new Person("John"); // ❌ TypeError
```

**4. Implicit return** (for single expressions)
```javascript
const double = x => x * 2; // Returns x * 2
```

**5. Cannot be used as generators**

---

### Q15: What is a closure?

**Answer:**
A closure is created when a function is defined inside another function and accesses variables from its outer function's scope, even after the outer function has finished execution.

**Example:**
```javascript
function outer() {
  let count = 0;
  
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3
```

**Use cases:**
- **Data encapsulation (private variables)**
```javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable
  
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(100);
account.deposit(50); // 150
account.getBalance(); // 150
// account.balance is not accessible
```

- **Maintaining state**
- **Function factories**
- **Event handlers and callbacks**

---

### Q16: What is currying?

**Answer:**
Currying transforms a function with multiple arguments into a sequence of functions, each taking a single argument.

**Example:**
```javascript
// Non-curried
function add(a, b) {
  return a + b;
}
add(3, 4); // 7

// Curried
function curriedAdd(a) {
  return function(b) {
    return a + b;
  }
}
curriedAdd(3)(4); // 7
```

**Practical example:**
```javascript
function multiply(a, b) {
  return a * b;
}

function currying(fn) {
  return function(a) {
    return function(b) {
      return fn(a, b);
    }
  }
}

var curriedMultiply = currying(multiply);

multiply(4, 3); // Returns 12
curriedMultiply(4)(3); // Also returns 12
```

**ES6 Arrow Syntax:**
```javascript
const curriedAdd = a => b => a + b;
curriedAdd(3)(4); // 7
```

**Benefits:**
- Partial application
- Function reusability
- Function composition

---

### Q17: What is the difference between `call`, `apply`, and `bind`?

**Answer:**
These methods control the value of `this` in function execution.

| Method | Executes Immediately | Arguments Format | Returns |
|--------|---------------------|------------------|---------|
| **`call()`** | ✅ Yes | Comma-separated | Function result |
| **`apply()`** | ✅ Yes | Array | Function result |
| **`bind()`** | ❌ No | Comma-separated | New function |

**Examples:**
```javascript
const employee = { name: "Ali" };

function greet(msg, punctuation) {
  console.log(msg + " " + this.name + punctuation);
}

// call - arguments individually
greet.call(employee, "Hello", "!"); // "Hello Ali!"

// apply - arguments as array
greet.apply(employee, ["Hello", "!"]); // "Hello Ali!"

// bind - returns new function
const bound = greet.bind(employee);
bound("Hello", "!"); // "Hello Ali!"
```

**Important: `bind()` can only be applied once**
```javascript
const obj = { x: 10 };

function test() {
  return this.x;
}

const fn = test.bind(obj);
console.log(fn()); // 10

// Chaining bind (only first works)
fn.bind({ x: 20 })(); // Still 10 ❗
```

**Real-world use cases:**
- Borrow methods from other objects
- Fix `this` in callbacks
- Partial function application

**Performance:**
- `call()` → slightly faster
- `apply()` → useful for dynamic arrays

---

### Q18: What are generator functions?

**Answer:**
Generator functions can pause execution and resume later, allowing them to produce multiple values over time.

**Syntax:** Use `function*` and `yield`

**How to define:**
```javascript
function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
```

**How it works:**
```javascript
const gen = myGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

**What is `yield`?**
- `yield` pauses the function and returns a value
- Function resumes when `.next()` is called

**Step-by-step execution:**
```javascript
function* demo() {
  console.log("Start");
  yield 1;

  console.log("Middle");
  yield 2;

  console.log("End");
  yield 3;
}

const g = demo();

g.next(); // "Start" → { value: 1, done: false }
g.next(); // "Middle" → { value: 2, done: false }
g.next(); // "End" → { value: 3, done: false }
```

**Infinite generator:**
```javascript
function* counter() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const c = counter();
console.log(c.next().value); // 0
console.log(c.next().value); // 1
console.log(c.next().value); // 2
```

**Pagination example:**
```javascript
function* pages() {
  yield "Page 1 data";
  yield "Page 2 data";
  yield "Page 3 data";
}

const p = pages();
console.log(p.next().value); // "Page 1 data"
console.log(p.next().value); // "Page 2 data"
```

**Key Features:**
1. **Lazy execution**: Code runs only when `.next()` is called
2. **Can pause and resume**: Normal functions cannot pause
3. **Can return multiple values**: Unlike functions that return only once

**Generator vs Normal Function:**

| Feature | Function | Generator |
|---------|----------|-----------|
| Execution | Runs once | Pauses/resumes |
| Return | Single value | Multiple values |
| Control | Automatic | Manual (next) |

**Real-world use cases:**
- Custom iterators
- Lazy loading data
- Pagination (API data)
- Streams
- State machines

**Simple analogy:**
- Function → machine that runs and finishes
- Generator → machine with a pause button (▶️ ⏸ ▶️)

---

### Q19: What is a callback function?

**Answer:**
A callback function is a function passed into another function as an argument, to be executed later.

**Example:**
```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback('Data loaded');
  }, 1000);
}

fetchData((data) => {
  console.log(data); // 'Data loaded' after 1 second
});
```

**Why we need callbacks:**
JavaScript is an event-driven language. Instead of waiting for a response, JavaScript keeps executing while listening for other events.

**Use cases:**
- Handle asynchronous operations
- Event handling
- Array methods (`map`, `filter`, etc.)

---

### Q20: What is callback hell?

**Answer:**
Callback Hell (pyramid of doom) is an anti-pattern with multiple nested callbacks that makes code hard to read and debug when dealing with asynchronous logic.

**Example:**
```javascript
getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      getMoreData(c, function(d) {
        getMoreData(d, function(e) {
          // Deeply nested...
        });
      });
    });
  });
});
```

**Solutions:**
1. **Promises**
```javascript
getData()
  .then(a => getMoreData(a))
  .then(b => getMoreData(b))
  .then(c => getMoreData(c))
  .catch(err => console.error(err));
```

2. **Async/Await**
```javascript
async function fetchData() {
  try {
    const a = await getData();
    const b = await getMoreData(a);
    const c = await getMoreData(b);
  } catch (err) {
    console.error(err);
  }
}
```

3. **Modularization**: Break into smaller functions

---

## 4. Objects

### Q21: How do you create objects in JavaScript?

**Answer:**

**1. Object Literal**
```javascript
const person = {
  name: 'John',
  age: 30
};
```

**2. Constructor Function**
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person = new Person('John', 30);
```

**3. `Object.create()`**
```javascript
const personProto = {
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};
const person = Object.create(personProto);
person.name = 'John';
```

**4. ES6 Classes**
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const person = new Person('John', 30);
```

---

### Q22: Why are objects important in JavaScript?

**Answer:**
Because everything in JavaScript is built on objects:

- **Arrays** are objects
- **Functions** are objects
- **Promises** are objects
- **DOM elements** are objects
- Dates, RegExp, Maps, Sets are all objects

**Example:**
```javascript
typeof [];        // "object"
typeof function(){}; // "function" (but still an object)
typeof new Date(); // "object"
```

Objects are the fundamental building blocks of JavaScript.

---

### Q23: What is JSON vs Object?

**Answer:**

| Feature | JSON | JavaScript Object |
|---------|------|-------------------|
| **Format** | String format | JS structure |
| **Keys** | Must be quoted strings | Can be unquoted |
| **Values** | String, Number, Boolean, Array, Object, null | Any JavaScript value |
| **Functions** | ❌ No functions | ✅ Can have functions |
| **Methods** | ❌ Not allowed | ✅ Allowed |
| **Trailing commas** | ❌ Not allowed | ✅ Allowed |
| **Use case** | Data interchange | Programming construct |

**Examples:**
```javascript
// JavaScript Object
const obj = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello");
  }
};

// JSON (string)
const json = '{"name":"John","age":30}';
```

---

### Q24: What is `JSON.stringify`?

**Answer:**
Converts a JavaScript object to a JSON string.

**Basic usage:**
```javascript
const obj = { name: "John", age: 30 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // '{"name":"John","age":30}'
```

**With formatting:**
```javascript
JSON.stringify(obj, null, 2); // Pretty print with 2-space indent
```

**Why it's risky in memoization:**
- Key collisions
- Order issues
- Performance cost

---

### Q25: What is `JSON.parse`?

**Answer:**
Converts a JSON string to a JavaScript object.

**Example:**
```javascript
const jsonString = '{"name":"John","age":30}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // "John"
```

**For JSON parsing (safer than eval):**
```javascript
// ✅ Use JSON.parse
JSON.parse('{"name":"Ali"}');

// ❌ Don't use eval
eval('{"name":"Ali"}'); // Dangerous!
```

---

### Q26: What is object reference issue?

**Answer:**
When you assign an object to another variable, both point to the same memory location.

**Example:**
```javascript
const a = { x: 1 };
const b = a;

b.x = 2;
console.log(a.x); // 2 (changed!)
```

Both `a` and `b` point to the same object in memory.

**Solution: Create a copy**
```javascript
const b = { ...a }; // Shallow copy
```

---

### Q27: What are dynamic/computed property names?

**Answer:**
ES6 allows using expressions as property names using square brackets.

**Example:**
```javascript
const key = "name";
const obj = {
  [key]: "Ali"
};
console.log(obj.name); // "Ali"
```

**Computed property:**
```javascript
const obj = {
  ["a" + "b"]: 123
};
console.log(obj.ab); // 123
```

**Dynamic example:**
```javascript
const prefix = "user_";
const obj = {
  [prefix + "name"]: "John",
  [prefix + "age"]: 30
};
console.log(obj.user_name); // "John"
```

---

### Q28: How do you merge objects?

**Answer:**

**1. Spread Operator (ES6)**
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 3, c: 4 }
```

**2. Object.assign()**
```javascript
const merged = Object.assign({}, obj1, obj2);
```

**Note:** Later properties overwrite earlier ones.

---

### Q29: What is `Object.assign`?

**Answer:**
Copies properties from source objects to a target object.

**Syntax:**
```javascript
Object.assign(target, ...sources)
```

**Example:**
```javascript
const a = { x: 1 };
const b = { y: 2 };
const c = Object.assign({}, a, b);
console.log(c); // { x: 1, y: 2 }
```

**Merge multiple objects:**
```javascript
const merged = Object.assign({}, obj1, obj2, obj3);
```

---

### Q30: What is optional chaining (`?.`)?

**Answer:**
Optional chaining allows safe access to nested properties without explicitly checking each level.

**Without optional chaining:**
```javascript
const city = user && user.address && user.address.city;
```

**With optional chaining:**
```javascript
const city = user?.address?.city;
```

**With arrays:**
```javascript
const firstItem = arr?.[0];
```

**With functions:**
```javascript
obj.method?.();
```

**Returns `undefined` if any level is `null` or `undefined`.**

---

### Q31: What is nullish coalescing operator (`??`)?

**Answer:**
The nullish coalescing operator returns the right-hand operand when the left is `null` or `undefined`.

**Example:**
```javascript
const name = obj.name ?? "default";
```

**Comparison:**
```javascript
const value = null ?? 'default';      // 'default'
const value = undefined ?? 'default'; // 'default'
const value = 0 ?? 'default';         // 0 (not 'default')
const value = '' ?? 'default';        // '' (not 'default')

// vs || operator
const x = 0 || 'default'; // 'default' (treats 0 as falsy)
const x = 0 ?? 'default'; // 0 (only null/undefined)
```

**Difference from `||`:**
- `??` only checks for `null`/`undefined`
- `||` checks for any falsy value (`0`, `''`, `false`, etc.)

---

### Q32: What is object immutability?

**Answer:**
Preventing changes to objects using:

**1. `Object.freeze()`** - Makes object completely immutable
```javascript
const frozen = Object.freeze({ name: 'John' });
frozen.age = 30;          // ❌ Fails silently
delete frozen.name;       // ❌ Fails
frozen.name = 'Jane';     // ❌ Fails
```

**2. `Object.seal()`** - Prevents adding/deleting properties
```javascript
const sealed = Object.seal({ name: 'John' });
sealed.age = 30;          // ❌ Fails
delete sealed.name;       // ❌ Fails
sealed.name = 'Jane';     // ✅ Works
```

**Comparison:**

| Method | Add Properties | Delete Properties | Modify Properties |
|--------|----------------|-------------------|-------------------|
| `Object.freeze()` | ❌ | ❌ | ❌ |
| `Object.seal()` | ❌ | ❌ | ✅ |
| Regular object | ✅ | ✅ | ✅ |

---

### Q33: What is the difference between shallow copy and deep copy?

**Answer:**

**Shallow Copy**: Copies only the first level; nested objects remain referenced.

**Example:**
```javascript
const user = {
  name: "Ali",
  address: {
    city: "Dubai"
  }
};

const copy = { ...user };
copy.address.city = "Cairo";

console.log(user.address.city); // "Cairo" ⚠️ Changed!
```

**Ways to create shallow copy:**
- Spread operator `{...obj}`
- `Object.assign({}, obj)`

**Deep Copy**: Copies all levels; creates independent objects.

**Example:**
```javascript
const user = {
  name: "Ali",
  address: {
    city: "Dubai"
  }
};

const copy = JSON.parse(JSON.stringify(user));
copy.address.city = "Cairo";

console.log(user.address.city); // "Dubai" ✅ Unchanged
```

**Modern way (best practice):**
```javascript
const copy = structuredClone(user);
```

**Key Differences:**

| Feature | Shallow Copy | Deep Copy |
|---------|--------------|-----------|
| **Copies level** | First level only | All levels |
| **Nested objects** | Shared references | Fully independent |
| **Safety** | Risk of mutation bugs | Safe |
| **Performance** | Faster | Slower |

**Simple Analogy:**
- Shallow copy → photocopy of a book cover only
- Deep copy → photocopy of the entire book page by page

**When to use:**
- Use **shallow copy** when data is flat (no nested objects) or performance is important
- Use **deep copy** when nested objects exist and you need full independence

---

### Q34: What is object destructuring?

**Answer:**
Destructuring allows extracting values from objects into distinct variables.

**Basic destructuring:**
```javascript
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const { name, age } = person;
console.log(name); // 'John'
console.log(age);  // 30
```

**Renaming:**
```javascript
const { name: personName } = person;
console.log(personName); // 'John'
```

**Default values:**
```javascript
const { country = 'USA' } = person;
console.log(country); // 'USA'
```

**Nested destructuring:**
```javascript
const user = {
  id: 1,
  info: {
    email: 'john@example.com'
  }
};
const { info: { email } } = user;
console.log(email); // 'john@example.com'
```

---

### Q35: Why are objects not ideal cache keys?

**Answer:**
Because object keys are:

- Only **strings or symbols** (automatically converted)
- Not safe for deep structures
- Can cause collisions

**Example:**
```javascript
const obj = {};
const key1 = { id: 1 };
const key2 = { id: 2 };

obj[key1] = "value1";
obj[key2] = "value2";

console.log(obj); // { "[object Object]": "value2" }
// Both keys converted to same string!
```

**Solution: Use `Map` for object keys**
```javascript
const map = new Map();
map.set(key1, "value1");
map.set(key2, "value2");
```

---

## 5. Prototypes & Inheritance

### Q36: What is a prototype?

**Answer:**
Every JavaScript object has an internal `[[Prototype]]` property that references another object. This creates a prototype chain used for inheritance.

**Example:**
```javascript
const obj = {};
console.log(obj.__proto__); // Object.prototype

const arr = [];
console.log(arr.__proto__); // Array.prototype
console.log(arr.__proto__.__proto__); // Object.prototype
```

**Prototype chain:** `arr → Array.prototype → Object.prototype → null`

---

### Q37: What is the prototype chain?

**Answer:**
When accessing a property, JavaScript looks:
1. On the object itself
2. On its prototype
3. On the prototype's prototype
4. Continues until reaching `null`

**Example:**
```javascript
const animal = {
  eats: true
};

const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(rabbit.eats);  // true (from prototype)
console.log(rabbit.jumps); // true (own property)
```

If property not found → JS looks in prototype → then next prototype → until null.

---

### Q38: What is the difference between `__proto__` and `prototype`?

**Answer:**

| `__proto__` | `prototype` |
|-------------|-------------|
| Property of **all objects** | Property of **constructor functions** |
| Points to the object's prototype | Template for instances created with `new` |
| Used to access prototype chain | Used to define shared methods/properties |

**Example:**
```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return `Hello, ${this.name}`;
};

const john = new Person('John');

console.log(john.__proto__ === Person.prototype); // true
```

---

### Q39: How does prototypal inheritance work?

**Answer:**
JavaScript uses **prototypal inheritance** where objects inherit directly from other objects.

**Using `Object.create()`:**
```javascript
const animal = {
  speak() {
    return "sound";
  }
};

const dog = Object.create(animal);
dog.bark = () => "woof";

console.log(dog.speak()); // "sound" (inherited)
console.log(dog.bark());  // "woof" (own method)
```

**Using ES6 Classes:**
```javascript
class Animal {
  eat() {
    console.log('Eating...');
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof!');
  }
}

const dog = new Dog();
dog.eat();  // 'Eating...' (inherited)
dog.bark(); // 'Woof!' (own method)
```

---

### Q40: What is a constructor function prototype?

**Answer:**
Constructor functions have a `prototype` property that is used as the prototype for instances created with `new`.

**Example:**
```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return "Hello " + this.name;
};

const p = new Person("Ali");
p.greet(); // "Hello Ali"
```

Methods on `prototype` are shared across all instances (memory efficient).

---

### Q41: What happens when using the `new` keyword?

**Answer:**
When you use `new` with a constructor function:

1. Creates a new empty object
2. Sets the object's `__proto__` to the constructor's `prototype`
3. Binds `this` to the new object
4. Executes the constructor function
5. Returns the object (unless constructor explicitly returns an object)

**Example:**
```javascript
function Person(name) {
  this.name = name;
}

const person = new Person('John');

// Equivalent to:
// 1. const person = {};
// 2. person.__proto__ = Person.prototype;
// 3. Person.call(person, 'John');
// 4. return person;
```

---

### Q42: What is `Object.create()`?

**Answer:**
Creates a new object with a specified prototype.

**Example:**
```javascript
const parent = { a: 1 };
const child = Object.create(parent);

console.log(child.a); // 1 (inherited from parent)

// Create object with null prototype (no inherited properties)
const pureObj = Object.create(null);
```

---

### Q43: What is `hasOwnProperty`?

**Answer:**
Checks if a property exists directly on the object (not inherited from prototype).

**Example:**
```javascript
const obj = {
  name: 'John'
};

console.log(obj.hasOwnProperty('name'));     // true (own property)
console.log(obj.hasOwnProperty('toString')); // false (inherited)
```

---

### Q44: What is the difference between own property and prototype property?

**Answer:**

| Own Property | Prototype Property |
|-------------|-------------------|
| Defined directly on object | Inherited from prototype |
| Returned by `hasOwnProperty()` | Not returned by `hasOwnProperty()` |

**Example:**
```javascript
function Person(name) {
  this.name = name; // Own property
}

Person.prototype.greet = function() { // Prototype property
  return "Hello";
};

const person = new Person("John");
console.log(person.hasOwnProperty('name'));  // true
console.log(person.hasOwnProperty('greet')); // false
```

---

### Q45: What is method sharing using prototype?

**Answer:**
Methods defined on prototype are shared across all instances, making it memory efficient.

**Example:**
```javascript
function Car(model) {
  this.model = model;
}

// Method on prototype (shared)
Car.prototype.drive = function() {
  console.log(`${this.model} is driving`);
};

const car1 = new Car("Tesla");
const car2 = new Car("BMW");

car1.drive(); // "Tesla is driving"
car2.drive(); // "BMW is driving"

// Same function reference
console.log(car1.drive === car2.drive); // true
```

---

### Q46: How to check the prototype chain?

**Answer:**

**1. Using `instanceof`:**
```javascript
console.log(obj instanceof Constructor);
```

**2. Using `isPrototypeOf`:**
```javascript
Person.prototype.isPrototypeOf(p);
```

**Example:**
```javascript
function Person() {}
const p = new Person();

console.log(p instanceof Person);               // true
console.log(Person.prototype.isPrototypeOf(p)); // true
```

---

### Q47: What is `instanceof`?

**Answer:**
Checks if an object's prototype chain includes a constructor's `prototype`.

**Example:**
```javascript
function Person() {}
const p = new Person();

console.log(p instanceof Person); // true
console.log(p instanceof Object); // true (Object.prototype in chain)

const arr = [];
console.log(arr instanceof Array); // true
```

---

### Q48: What is `Object.prototype`?

**Answer:**
`Object.prototype` is the top-level prototype for all objects in JavaScript.

**Example:**
```javascript
const obj = {};
console.log(obj.__proto__ === Object.prototype); // true

// All objects inherit from Object.prototype
const arr = [];
console.log(arr.__proto__.__proto__ === Object.prototype); // true
```

---

### Q49: Can you modify built-in prototypes?

**Answer:**
Yes, but it's **strongly discouraged**.

**Example:**
```javascript
Array.prototype.myMethod = function() {
  return this.length;
};

[1, 2, 3].myMethod(); // 3 (works but not recommended)
```

**⚠️ Why avoid:**
- Can break existing code
- Conflicts with future JavaScript features
- Affects all code in the application
- Violates separation of concerns
- Can cause unexpected behavior in third-party libraries

**Alternative:** Use utility functions or extend classes.

---

### Q50: What is ES6 class vs prototype?

**Answer:**
ES6 classes are **syntactic sugar** over prototypal inheritance.

**ES6 Class:**
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hello";
  }
}
```

**Equivalent using prototypes:**
```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return "Hello";
};
```

Both create the same prototype structure underneath.

---

### Q51: What is the difference between prototypal and classical inheritance?

**Answer:**

| Classical Inheritance | Prototypal Inheritance |
|----------------------|------------------------|
| Used in Java, C++, C# | Used in JavaScript |
| Classes inherit from classes | Objects inherit from objects |
| `class` keyword creates templates | Objects serve as prototypes |
| More rigid structure | More flexible |
| Instance created from class blueprint | Instance created by cloning/linking objects |

**JavaScript (Prototypal):**
```javascript
const animal = { eats: true };
const rabbit = Object.create(animal);
```

**Classical (concept):**
```
class Animal { }
class Rabbit extends Animal { }
```

Programmers build objects in traditional OO programming using classes and inheritance. Classical inheritance is confined to classes inheriting from other classes, but prototypal inheritance allows any object to be cloned via an object linking method.

---

## 6. Asynchronous JavaScript

### Q52: What is a Promise?

**Answer:**
A Promise is an object representing the eventual completion or failure of an asynchronous operation.

**Three States:**
1. **Pending**: Initial state, operation not completed yet
2. **Fulfilled (Resolved)**: Operation completed successfully
3. **Rejected**: Operation failed

**Example:**
```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve('Done');
    } else {
      reject('Error');
    }
  }, 1000);
});

promise
  .then(res => console.log(res))   // 'Done'
  .catch(err => console.log(err))
  .finally(() => console.log('Finished'));
```

---

### Q53: What are Promise methods?

**Answer:**

**1. Promise.all()** - Runs multiple promises in parallel; fails if any one fails

```javascript
Promise.all([promise1, promise2, promise3])
  .then(results => console.log(results)) // Array of all results
  .catch(error => console.error(error)); // If any fails
```

✔ Use when all promises must succeed

**2. Promise.allSettled()** - Waits for all; never rejects

```javascript
Promise.allSettled([promise1, promise2, promise3])
  .then(results => console.log(results));
// [{ status: 'fulfilled', value: ... }, { status: 'rejected', reason: ... }]
```

✔ Returns status of each promise  
✔ Never fails

**3. Promise.race()** - Returns first settled (resolved or rejected)

```javascript
Promise.race([promise1, promise2, promise3])
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

✔ First finished wins

**4. Promise.any()** - Returns first successful (resolved)

```javascript
Promise.any([promise1, promise2, promise3])
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

✔ Ignores failures  
✔ Fails only if all reject

**Comparison Table:**

| Method | Waits for | Fails when | Returns |
|--------|-----------|------------|---------|
| `Promise.all` | All | Any fail | Array of results |
| `Promise.allSettled` | All | Never | Status of all |
| `Promise.race` | First | First done | First result |
| `Promise.any` | First success | All fail | First success |

---

### Q54: What is async/await?

**Answer:**
`async/await` provides cleaner syntax for working with Promises.

**With Promises:**
```javascript
function fetchData() {
  return fetch('/api/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}
```

**With async/await:**
```javascript
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

**Rules:**
- `await` can only be used inside `async` functions
- `async` functions always return a Promise
- Use `try/catch` for error handling

---

## 7. ES6+ Features

### Q55: What are the features of ES6?

**Answer:**
ES6 (ECMAScript 2015) introduced many new features:

1. **Constants/immutable variables** (`const`)
2. **Block-scope support** (`let`, `const`)
3. **Arrow functions**
4. **Default parameters**
5. **Rest and Spread parameters**
6. **Template literals**
7. **Multi-line strings**
8. **Destructuring assignment**
9. **Enhanced object literals**
10. **Promises**
11. **Classes**
12. **Modules**

---

### Q56: What are template literals?

**Answer:**
Template literals allow embedded expressions and multi-line strings using backticks.

**ES6 (Template Literals):**
```javascript
const firstName = "John";
const lastName = "Doe";
const greeting = `Welcome to JS World, Mr. ${firstName} ${lastName}.`;
```

**ES5 (String Concatenation):**
```javascript
var greeting = 'Welcome to JS World, Mr. ' + firstName + ' ' + lastName + '.';
```

**Multi-line strings:**
```javascript
const html = `
  <div>
    <h1>Title</h1>
    <p>Content</p>
  </div>
`;
```

**Expression evaluation:**
```javascript
const result = `2 + 2 = ${2 + 2}`; // "2 + 2 = 4"
```

---

### Q57: What is the spread operator (`...`)?

**Answer:**
The spread operator expands iterables into individual elements.

**Arrays:**
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Copy array
const copy = [...arr1];

// Function arguments
Math.max(...arr1); // 3
```

**Objects:**
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3 }
```

---

### Q58: What is the rest parameter (`...`)?

**Answer:**
Rest parameter collects remaining arguments into an array.

**Example:**
```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3, 4); // 10
```

**Array destructuring:**
```javascript
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]
```

**Object destructuring:**
```javascript
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }
```

---

### Q59: What are default parameters?

**Answer:**
Default parameters provide default values when arguments are not provided.

**Example:**
```javascript
function greet(name = 'Guest', greeting = 'Hello') {
  return `${greeting}, ${name}!`;
}

greet();              // 'Hello, Guest!'
greet('John');        // 'Hello, John!'
greet('John', 'Hi');  // 'Hi, John!'
```

---

### Q60: What is destructuring assignment?

**Answer:**
Destructuring extracts values from arrays or objects into variables.

**Array destructuring:**
```javascript
const [a, b, c] = [1, 2, 3];

// Skip elements
const [first, , third] = [1, 2, 3];

// Default values
const [x = 0, y = 0] = [1];

// Swap variables
[a, b] = [b, a];
```

**Object destructuring:**
```javascript
const { name, age } = { name: 'John', age: 30 };

// Rename
const { name: userName } = { name: 'John' };

// Nested
const { address: { city } } = user;
```

---

### Q61: What are enhanced object literals?

**Answer:**
ES6 provides shorthand syntax for object properties and methods.

**Example:**
```javascript
const name = 'John';
const age = 30;

// Shorthand properties
const person = { name, age }; // Instead of { name: name, age: age }

// Computed property names
const key = 'dynamicKey';
const obj = {
  [key]: 'value'
};

// Method shorthand
const obj = {
  greet() { // Instead of greet: function() {}
    return 'Hello';
  }
};
```

---

### Q62: What are dynamic imports?

**Answer:**
Dynamic imports load modules on-demand using `import()` function.

**Syntax:**
```javascript
import("./Module").then((Module) => Module.method());
```

**Use cases:**

**1. Conditional import:**
```javascript
if (isLegacyBrowser()) {
  import('./polyfill.js').then(() => {
    // Use polyfill
  });
}
```

**2. Computed module specifier:**
```javascript
import(`messages_${getLocale()}.js`).then(module => {
  // Use module
});
```

**3. With async/await:**
```javascript
async function loadModule() {
  const module = await import('./module.js');
  module.doSomething();
}
```

**Benefits:**
- Smaller initial bundle size
- Faster initial load
- Load code only when needed

---

### Q63: What are modules in JavaScript?

**Answer:**
Modules allow organizing code into reusable files.

**Exporting:**
```javascript
// math.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// or
export { add, multiply };

// Default export
export default function subtract(a, b) {
  return a - b;
}
```

**Importing:**
```javascript
import { add, multiply } from './math.js';
import subtract from './math.js';

// Import all
import * as math from './math.js';
```

---

## 8. Event Loop & Execution Context

### Q64: What is the Event Loop?

**Answer:**
The event loop is the mechanism that handles asynchronous operations by managing the call stack, callback queue, and microtask queue.

**Order of execution:**
1. Execute synchronous code (call stack)
2. Process **microtask queue** (promises, queueMicrotask)
3. Process **macrotask queue** (setTimeout, setInterval)
4. Render (in browsers)
5. Repeat

**Example:**
```javascript
console.log('1');

setTimeout(() => console.log('2'), 0); // Macrotask

Promise.resolve().then(() => console.log('3')); // Microtask

console.log('4');

// Output: 1, 4, 3, 2
```

The event loop executes code, handles async tasks, and manages microtasks and macrotasks.

---

### Q65: What is a microtask?

**Answer:**
A microtask is a high-priority asynchronous task that runs:
- After current synchronous code finishes
- Before the next event loop (macrotask)

**Simple Event Loop Order:**
1. Execute sync code (call stack)
2. Run microtasks queue
3. Run macrotasks queue (like setTimeout, setInterval)

**Example:**
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Macrotask");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask");
});

console.log("End");

// Output: Start, End, Microtask, Macrotask
```

**Why Microtasks Run First:**
JavaScript engine clears the microtask queue completely before moving to macrotasks.

---

### Q66: What are the sources of microtasks?

**Answer:**

**Microtasks:**
1. **Promises**
```javascript
Promise.resolve().then(() => {
  console.log("Promise microtask");
});
```

2. **queueMicrotask()**
```javascript
queueMicrotask(() => {
  console.log("queueMicrotask");
});
```

3. **async/await**
```javascript
async function test() {
  await null;
  console.log("after await (microtask)");
}
test();
```

4. **MutationObserver** (Browser only) - Used to detect DOM changes

---

### Q67: What is `queueMicrotask()`?

**Answer:**
`queueMicrotask()` schedules a function to run in the microtask queue.

**Example:**
```javascript
console.log("Start");

queueMicrotask(() => {
  console.log("Inside microtask");
});

console.log("End");

// Output:
// Start
// End
// Inside microtask
```

**When to use:**
- ✔ After current code finishes
- ✔ Before rendering
- ✔ Before macrotasks

---

### Q68: What is microtask vs macrotask?

**Answer:**

| Type | Examples | Priority |
|------|----------|----------|
| **Microtask** | Promise, queueMicrotask, async/await | High |
| **Macrotask** | setTimeout, setInterval, setImmediate | Low |

**Key Points:**
- ✔ Microtasks have higher priority than macrotasks
- ✔ Promises go to microtask queue
- ✔ Microtask queue is fully drained before next macrotask
- ✔ `queueMicrotask` gives manual control

**One-line Summary:**
Microtask = high priority async task executed right after sync code and before macrotasks.

---

## 9. Browser APIs & Web Storage

### Q69: What is Web Storage?

**Answer:**
Web Storage provides mechanisms for storing key-value pairs in the browser.

**1. LocalStorage** (persists until manually cleared):
```javascript
localStorage.setItem('user', 'John');
localStorage.getItem('user'); // 'John'
localStorage.removeItem('user');
localStorage.clear();
```

**2. SessionStorage** (persists until tab is closed):
```javascript
sessionStorage.setItem('temp', 'data');
sessionStorage.getItem('temp');
```

---

### Q70: What are the differences between cookie, local storage, and session storage?

**Answer:**

| Feature | Cookie | Local storage | Session storage |
|---------|--------|---------------|-----------------|
| **Accessed on** | Both server & client | Client only | Client only |
| **Expiry** | Manually configured | Forever until deleted | Until tab is closed |
| **SSL support** | Supported | Not supported | Not supported |
| **Maximum size** | 4KB | 5 MB | 5MB |
| **Accessible from** | Any window | Any window | Same tab |
| **Sent with requests** | Yes | No | No |

---

### Q71: What is IndexedDB?

**Answer:**
IndexedDB is a low-level client-side database used to store large amounts of structured data in the browser.

**Features:**
- ✔ Key-value storage
- ✔ Complex data types (objects, files, blobs)
- ✔ Indexes for fast searching
- ✔ Large storage capacity (more than localStorage)
- ✔ Asynchronous (non-blocking)
- ✔ Supports transactions
- ✔ Works like a NoSQL database in the browser

**Use Cases:**
- Offline apps
- Large data caching
- File storage (images, videos, blobs)
- Complex structured data

**Example:**
```javascript
const request = indexedDB.open('myDatabase', 1);

request.onsuccess = (event) => {
  const db = event.target.result;
  // Use database
};
```

---

## 10. Performance & Optimization

### Q72: What is memoization?

**Answer:**
Memoization is an optimization technique where a function stores (caches) the result of previous computations and returns the cached result when the same inputs occur again.

It improves performance by avoiding repeated calculations.

**Example:**
```javascript
function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (key in cache) {
      return cache[key];
    }
    
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const fibonacci = memoize((n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

fibonacci(40); // Fast due to memoization
```

**Cautions:**
- Memory overhead
- Not suitable for functions with side effects
- `JSON.stringify` limitations (order, circular references)

---

### Q73: What is debouncing?

**Answer:**
Debouncing delays function execution until after a specified time has passed since the last invocation.

**Example:**
```javascript
function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Use case: Search input
const search = debounce((query) => {
  console.log('Searching for:', query);
}, 300);

inputElement.addEventListener('input', (e) => {
  search(e.target.value);
});
```

**Use cases:**
- Search input
- Window resize
- Form validation

---

### Q74: What is throttling?

**Answer:**
Throttling ensures a function is called at most once in a specified time period.

**Example:**
```javascript
function throttle(func, limit) {
  let inThrottle;
  
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Use case: Scroll event
const handleScroll = throttle(() => {
  console.log('Scroll position:', window.scrollY);
}, 200);

window.addEventListener('scroll', handleScroll);
```

**Debouncing vs Throttling:**
- **Debounce**: Execute after user stops acting
- **Throttle**: Execute at regular intervals while user acts

---

## 11. Advanced Concepts

### Q75: What are Map and Set?

**Answer:**

**Map**: Key-value pairs (any type as key)
```javascript
const map = new Map();
map.set('name', 'John');
map.set(1, 'number key');
map.set({}, 'object key');

map.get('name'); // 'John'
map.has('name'); // true
map.size; // 3
map.delete('name');
map.clear();
```

**Set**: Unique values only
```javascript
const set = new Set([1, 2, 2, 3]);
console.log(set); // Set {1, 2, 3}

set.add(4);
set.has(2); // true
set.delete(2);
set.size; // 3
```

---

### Q76: What is Object vs Map vs Set?

**Answer:**

| Feature | Object | Map | Set |
|---------|--------|-----|-----|
| **Stores** | Key-value | Key-value | Values only |
| **Key type** | String/Symbol | Any type | N/A |
| **Order** | Not guaranteed | Insertion order | Insertion order |
| **Size** | Manual | `map.size` | `set.size` |
| **Performance** | Slower for frequent ops | Faster for large data | Fast for uniqueness |
| **Iteration** | `for...in`, `Object.keys()` | `for...of` | `for...of` |

**When to use:**
- Use **Object** → simple data structures
- Use **Map** → dynamic keys, frequent add/remove, any key type
- Use **Set** → remove duplicates, membership check

---

### Q77: What is WeakMap and WeakSet?

**Answer:**
Weak collections store objects with weak references (allow garbage collection).

**WeakMap:**
```javascript
const weakMap = new WeakMap();
let obj = { name: 'John' };

weakMap.set(obj, 'metadata');
console.log(weakMap.get(obj)); // 'metadata'

obj = null; // Object can be garbage collected
```

**WeakSet:**
```javascript
const ws = new WeakSet();

ws.add({ name: "Ali" }); // ✅ valid
ws.add(10);              // ❌ Error (not allowed)

let user = { name: "Ali" };
ws.add(user);
console.log(ws.has(user)); // true

user = null; // object becomes eligible for garbage collection
```

**Characteristics:**
- Keys/values must be **objects only**
- No iteration (no `forEach`, no `size`)
- Weak references (garbage collection friendly)

**WeakSet vs Set:**

| Feature | Set | WeakSet |
|---------|-----|---------|
| **Values** | Any type | Only objects |
| **Garbage collection** | No | Yes (weak refs) |
| **Iteration** | Yes | No |
| **Size property** | Yes | No |

**Use Cases:**
- **Tracking objects privately**
```javascript
const visited = new WeakSet();

function process(obj) {
  if (visited.has(obj)) return;
  visited.add(obj);
  console.log("Processing...");
}
```
- **Memory-safe caching**
- **DOM element tracking**
- Private data
- Prevents memory leaks

**Why WeakSet is useful:**
- ✔ Prevents memory leaks
- ✔ Automatic cleanup
- ✔ Good for temporary object tracking

---

### Q78: What is Deno?

**Answer:**
Deno is a modern runtime for JavaScript and TypeScript, created by Ryan Dahl (the same creator of Node.js).

It is designed to fix many limitations of Node.js and provide a secure, modern, and simpler runtime.

**Simple Definition:**
Deno = secure runtime for JavaScript + TypeScript + Web APIs

**Key Features:**

**1. Built-in TypeScript Support** - No setup needed
```javascript
console.log("Hello from Deno");
```
✔ No tsconfig, no compilation step

**2. Secure by Default** 🔒
```bash
deno run app.ts # ❌ No file access allowed by default
deno run --allow-read app.ts # ✅ Explicit permission
```

**3. No node_modules** ❌
```javascript
import { serve } from "https://deno.land/std/http/server.ts";
```
✔ No package.json  
✔ No node_modules

**4. Built-in Standard APIs** - fetch, WebSocket, timers, streams

**5. Permission-Based Security Model**
```bash
--allow-read    # file system
--allow-net     # network
--allow-env     # environment variables
```

**Deno vs Node.js:**

| Feature | Deno | Node.js |
|---------|------|---------|
| Creator | Ryan Dahl | Ryan Dahl (earlier) |
| TypeScript | Built-in | Needs setup |
| Security | Secure by default | No default security |
| Modules | URL imports | npm + node_modules |
| Config file | Optional | package.json |
| API style | Web standard APIs | Node-specific APIs |

**Why Deno was created:**
- Security problems (full system access)
- Messy dependency system (node_modules)
- Outdated module design (CommonJS)

**When to use Deno:**
- ✔ Modern backend APIs
- ✔ Secure applications
- ✔ TypeScript-first projects
- ✔ Lightweight services

---

### Q79: What is collation?

**Answer:**
Collation is a set of rules that determine how text is compared and sorted in databases or programming languages.

It defines:
- Alphabetical order
- Case sensitivity (A vs a)
- Accent sensitivity (é vs e)
- Language-specific sorting rules

**Example:**
```javascript
// String comparison with locale
'ä'.localeCompare('z', 'de'); // -1 (ä before z in German)
'ä'.localeCompare('z', 'sv'); // 1 (ä after z in Swedish)
```

**Database Example (MySQL):**
```sql
CREATE TABLE users (
  name VARCHAR(50) COLLATE utf8_general_ci -- case-insensitive
);
```

**Types of Collation Behavior:**
1. **Case Sensitivity**: A = a (insensitive) or A ≠ a (sensitive)
2. **Accent Sensitivity**: e = é (insensitive) or e ≠ é (sensitive)
3. **Language Rules**: Different languages sort differently

**Key Point:**
Collation = rules for comparing and sorting text (case, accents, language)

---

### Q80: What is the double tilde (`~~`) operator?

**Answer:**
Double tilde is a bitwise operator that truncates numbers to 32-bit integers.

**Example:**
```javascript
console.log(~~4.9);  // 4
console.log(~~4.1);  // 4
console.log(~~-4.9); // -4
```

It removes the decimal part (truncates toward zero).

**How it works:**
The tilde (`~`) is a bitwise NOT operator.
- `~x` = bitwise NOT of x
- `~~x` = NOT of NOT x → effectively converts to integer

**Equivalent Methods:**

**1. Math.trunc (recommended)**
```javascript
Math.trunc(4.9); // 4
```

**2. parseInt**
```javascript
parseInt(4.9); // 4
```

**3. Double tilde**
```javascript
~~4.9; // 4
```

**Important Behavior:**
Works like truncation (not floor):
```javascript
~~-4.9; // -4  (NOT -5)
Math.floor(-4.9); // -5
```

**Why developers used it:**
- ✔ Very fast bitwise operation
- ✔ Short syntax
- ✔ Common in older JS codebases

**Limitations:**
- ❌ Only works with 32-bit integers
- ❌ Not readable for beginners
- ❌ Can behave unexpectedly with large numbers

**Modern best practice:**
✔ `Math.trunc(x)` (clean + readable)

---

### Q81: What is the purpose of `array.some()` method?

**Answer:**
The `some()` method tests whether **at least one element** in the array passes the test implemented by the provided function. Returns a boolean.

**Example:**
```javascript
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var odd = (element) => element % 2 !== 0;

console.log(array.some(odd)); // true (the odd element exists)
```

---

### Q82: How do you create specific number of copies of a string?

**Answer:**
The `repeat()` method constructs and returns a new string with the specified number of copies.

**Example:**
```javascript
"Hello".repeat(4); // 'HelloHelloHelloHello'
"*".repeat(10);    // '**********'
"abc ".repeat(2);  // 'abc abc '
```

This method was added to ECMAScript 2015 specification.

---

### Q83: How do you display data in a tabular format using console?

**Answer:**
The `console.table()` displays data in the console in a tabular format to visualize complex arrays or objects.

**Example:**
```javascript
const users = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 35 }
];

console.table(users);
// Displays a formatted table in console
```

---

## Summary & Best Practices

This comprehensive guide covers essential JavaScript interview topics organized by categories:

✅ **Fundamentals**: JavaScript basics, V8 engine, strict mode, eval()  
✅ **Data Types**: Primitives, null vs undefined, hoisting, TDZ, var/let/const  
✅ **Functions**: Arrow functions, closures, currying, call/apply/bind, generators, callbacks  
✅ **Objects**: Creation methods, JSON, destructuring, copying, immutability, dynamic properties  
✅ **Prototypes**: Prototype chain, inheritance, constructor functions, `__proto__` vs `prototype`  
✅ **Async**: Promises, async/await, Promise methods, callbacks, callback hell  
✅ **ES6+**: Template literals, spread/rest, destructuring, modules, dynamic imports  
✅ **Event Loop**: Microtasks vs macrotasks, queueMicrotask, execution order  
✅ **Browser APIs**: Web Storage, localStorage, sessionStorage, IndexedDB, cookies  
✅ **Performance**: Memoization, debouncing, throttling  
✅ **Advanced**: Map/Set, WeakMap/WeakSet, Deno, collation, operators

**Interview Preparation Tips:**
1. **Understand concepts deeply**, not just syntax
2. **Practice with code examples** - write and run them
3. **Explain concepts in simple terms** - teach others
4. **Build projects** using these concepts
5. **Review regularly** - repetition strengthens understanding
6. **Focus on "why"** not just "what"
7. **Prepare real-world examples** for each concept

**Common Interview Topics to Master:**
- Closures and scope
- Promises and async/await
- Prototype chain and inheritance
- Event loop and execution context
- ES6+ features
- Performance optimization techniques

Good luck with your JavaScript interviews! 🚀
