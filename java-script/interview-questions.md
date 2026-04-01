# 🚀 JavaScript Interview Guide

A comprehensive guide covering fundamental to advanced JavaScript concepts with clear explanations, code examples, and production insights.

---

## 📚 Table of Contents

### 1. JavaScript Fundamentals
- 1.1 Hoisting
- 1.2 Temporal Dead Zone (TDZ)
- 1.3 Strict Mode
- 1.4 null vs undefined
- 1.5 eval() Function
- 1.6 V8 JavaScript Engine
- 1.7 JavaScript Paradigms

### 2. Data Types & Variables
- 2.1 Primitive vs Reference Types
- 2.2 Type Coercion
- 2.3 var vs let vs const

### 3. Functions
- 3.1 Functions as First-Class Citizens
- 3.2 Closures
- 3.3 Arrow Functions
- 3.4 call, apply, and bind
- 3.5 Currying
- 3.6 Higher-Order Functions
- 3.7 IIFE (Immediately Invoked Function Expressions)
- 3.8 Generator Functions
- 3.9 Callback Functions
- 3.10 Callback Hell

### 4. Objects & Arrays
- 4.1 Objects in JavaScript
- 4.2 Object vs JSON
- 4.3 JSON.stringify() and JSON.parse()
- 4.4 Object Reference Behavior
- 4.5 Dynamic & Computed Properties
- 4.6 Object Merging (Spread vs Object.assign)
- 4.7 Optional Chaining & Nullish Coalescing
- 4.8 Object Immutability (freeze, seal)
- 4.9 Shallow vs Deep Copy
- 4.10 Object as Cache Keys
- 4.11 Array Methods (map, filter, reduce, some, every)

### 5. Prototypes & Inheritance
- 5.1 What is a Prototype?
- 5.2 Prototype Chain
- 5.3 prototype vs __proto__
- 5.4 Constructor Functions
- 5.5 new Keyword Internals
- 5.6 Object.create()
- 5.7 instanceof Operator
- 5.8 ES6 Classes
- 5.9 Classical vs Prototypal Inheritance

### 6. Asynchronous JavaScript
- 6.1 What are Promises?
- 6.2 Promise States
- 6.3 Promise Methods (all, allSettled, race, any)
- 6.4 async/await
- 6.5 Error Handling in Async Code
- 6.6 Promise Chaining vs async/await
- 6.7 Handling Multiple Concurrent Requests

### 7. Event Loop & Execution Context
- 7.1 Call Stack
- 7.2 Event Loop Explained
- 7.3 Microtasks vs Macrotasks
- 7.4 Execution Context
- 7.5 Scope and Scope Chain
- 7.6 this Keyword Behavior
- 7.7 Microtask Starvation

### 8. ES6+ Features & Modern JavaScript
- 8.1 let and const
- 8.2 Arrow Functions
- 8.3 Template Literals
- 8.4 Destructuring Assignment
- 8.5 Default Parameters
- 8.6 Rest and Spread Operators
- 8.7 Enhanced Object Literals
- 8.8 ES6 Classes
- 8.9 Modules (import/export)
- 8.10 Dynamic Imports
- 8.11 Symbol Type
- 8.12 Iterators and Iterables

### 9. Browser APIs & Web Storage
- 9.1 localStorage vs sessionStorage vs Cookies
- 9.2 IndexedDB
- 9.3 Web Workers
- 9.4 Service Workers
- 9.5 Fetch API

### 10. Performance & Optimization
- 10.1 Memoization
- 10.2 Debouncing
- 10.3 Throttling
- 10.4 Lazy Loading
- 10.5 Code Splitting

### 11. Advanced Concepts
- 11.1 Map vs Object
- 11.2 Set Data Structure
- 11.3 WeakMap & WeakSet
- 11.4 Proxy and Reflect
- 11.5 Event Delegation
- 11.6 Memory Leaks
- 11.7 Garbage Collection
- 11.8 Double Tilde Operator (~~)
- 11.9 console.table()
- 11.10 Collation
- 11.11 Deno Runtime

---

## 1. JavaScript Fundamentals

### 1.1 Hoisting

**What is Hoisting?**

Hoisting is JavaScript's default behavior where variable and function declarations are moved to the top of their scope before code execution.

**Key Points:**
- Function declarations are fully hoisted
- `var` declarations are hoisted and initialized with `undefined`
- `let` and `const` are hoisted but not initialized (Temporal Dead Zone)

**Examples:**

```js
// Function hoisting
greet(); // Works!
function greet() {
  console.log("Hello");
}

// var hoisting
console.log(x); // undefined (not ReferenceError)
var x = 10;

// let/const - TDZ
console.log(y); // ReferenceError
let y = 20;
```

**Production Insight:**
Always declare variables at the top of their scope to avoid confusion and bugs related to hoisting.

---

### 1.2 Temporal Dead Zone (TDZ)

**What is TDZ?**

The Temporal Dead Zone is the period between entering a block scope and the actual variable initialization for `let` and `const` declarations.

**Why it exists:**
- Prevents accessing variables before initialization
- Catches potential bugs early
- Enforces better coding practices

**Example:**

```js
{
  // TDZ starts
  console.log(name); // ReferenceError: Cannot access 'name' before initialization
  
  let name = "Alice"; // TDZ ends
  console.log(name); // "Alice"
}
```

**Comparison with var:**

```js
console.log(x); // undefined
var x = 5;

console.log(y); // ReferenceError
let y = 5;
```

---

### 1.3 Strict Mode

**What is Strict Mode?**

Strict mode is a feature that enables a stricter and more secure version of JavaScript, helping catch common errors and prevent unsafe actions.

**How to Enable:**

```js
// Global strict mode
"use strict";

// Function-level strict mode
function myFunction() {
  "use strict";
  // strict code here
}
```

**What Strict Mode Changes:**

1. **Prevents undeclared variables:**
```js
"use strict";
x = 10; // ReferenceError: x is not defined
```

2. **No duplicate parameter names:**
```js
"use strict";
function sum(a, a) { // SyntaxError
  return a + a;
}
```

3. **Prevents deleting variables:**
```js
"use strict";
let x = 10;
delete x; // SyntaxError
```

4. **`this` is undefined in functions:**
```js
"use strict";
function test() {
  console.log(this); // undefined (not window)
}
test();
```

5. **Prevents octal syntax:**
```js
"use strict";
let x = 012; // SyntaxError
```

**Benefits:**
- Safer code
- Better debugging
- Catches silent errors
- More predictable behavior

---

### 1.4 null vs undefined

**Key Differences:**

| Feature | null | undefined |
|---------|------|-----------|
| Meaning | Intentional absence of value | Variable declared but not assigned |
| Type | `object` (legacy bug) | `undefined` |
| Assignment | Explicitly assigned | Default for uninitialized variables |
| Usage | Represents "no object" | Indicates missing value |
| Conversion | Converts to 0 in numeric context | Converts to NaN |

**Examples:**

```js
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null

console.log(typeof null); // "object" (JavaScript quirk)
console.log(typeof undefined); // "undefined"

// Numeric conversion
console.log(null + 5); // 5
console.log(undefined + 5); // NaN

// Equality
console.log(null == undefined); // true
console.log(null === undefined); // false
```

---

### 1.5 eval() Function

**What is eval()?**

`eval()` is a function that executes a string as JavaScript code.

**Example:**

```js
console.log(eval("1 + 2")); // 3
eval("console.log('Hello')"); // "Hello"

let x = 10;
eval("x + 5"); // 15
```

**Why eval() is Dangerous ❌**

1. **Security Risk:**
```js
// Malicious code can be executed
eval(userInput); // Never do this!
```

2. **Performance Issues:**
- Slower execution
- Prevents JavaScript engine optimizations
- Cannot be minified properly

3. **Hard to Debug:**
- Code becomes unpredictable
- Difficult to maintain

**Safer Alternatives:**

```js
// Instead of eval for expressions
let result = 1 + 2;

// For JSON parsing
const obj = JSON.parse('{"name":"Alice"}');

// Function constructor (still avoid if possible)
const fn = new Function("a", "b", "return a + b");
fn(2, 3); // 5
```

---

### 1.6 V8 JavaScript Engine

**What is V8?**

V8 is an open-source, high-performance JavaScript engine developed by Google, written in C++.

**Where it's used:**
- Google Chrome browser
- Node.js runtime
- Microsoft Edge (Chromium-based)

**Key Features:**

1. **Just-In-Time (JIT) Compilation:**
   - Compiles JavaScript to native machine code
   - Optimizes hot code paths
   - Deoptimizes when needed

2. **Garbage Collection:**
   - Automatic memory management
   - Mark-and-sweep algorithm
   - Generational collection (young/old generations)

3. **Hidden Classes:**
   - Optimizes object property access
   - Creates internal type systems

4. **Inline Caching:**
   - Speeds up repeated property access

**Performance Tips:**
- Keep object shapes consistent
- Avoid deleting properties
- Use monomorphic functions when possible

---

### 1.7 JavaScript Paradigms

**JavaScript is Multi-Paradigm:**

JavaScript supports multiple programming styles:

1. **Procedural Programming:**
```js
function calculateTotal(price, tax) {
  return price + (price * tax);
}
```

2. **Object-Oriented Programming (Prototype-based):**
```js
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return `Hello, ${this.name}`;
};
```

3. **Functional Programming:**
```js
const add = (a) => (b) => a + b;
const numbers = [1, 2, 3].map(x => x * 2);
```

4. **Event-Driven Programming:**
```js
button.addEventListener('click', () => {
  console.log('Clicked');
});
```

5. **Asynchronous Programming:**
```js
async function fetchData() {
  const data = await fetch('/api/data');
  return data.json();
}
```

---

## 2. Data Types & Variables

### 2.1 Primitive vs Reference Types

**Primitive Types:**
- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- BigInt

**Characteristics:**
- Immutable
- Stored by value
- Compared by value

```js
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (unchanged)
```

**Reference Types:**
- Objects
- Arrays
- Functions

**Characteristics:**
- Mutable
- Stored by reference
- Compared by reference

```js
let obj1 = { x: 10 };
let obj2 = obj1;
obj2.x = 20;
console.log(obj1.x); // 20 (changed!)
```

---

### 2.2 Type Coercion

**Implicit Coercion:**

```js
"5" + 3; // "53" (number to string)
"5" - 3; // 2 (string to number)
true + 1; // 2
false + 1; // 1
```

**Explicit Coercion:**

```js
String(123); // "123"
Number("456"); // 456
Boolean(0); // false
parseInt("42px"); // 42
parseFloat("3.14"); // 3.14
```

**Falsy Values:**
- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

---

### 2.3 var vs let vs const

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Hoisting | Yes (initialized undefined) | Yes (TDZ) | Yes (TDZ) |
| Redeclaration | Allowed | Not allowed | Not allowed |
| Reassignment | Allowed | Allowed | Not allowed |
| Temporal Dead Zone | No | Yes | Yes |

**Examples:**

```js
// var - function scoped
function varTest() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10
}

// let - block scoped
function letTest() {
  if (true) {
    let y = 10;
  }
  console.log(y); // ReferenceError
}

// const - block scoped, immutable binding
const PI = 3.14;
PI = 3; // TypeError

// But object properties can be modified
const obj = { x: 1 };
obj.x = 2; // Allowed
obj = {}; // TypeError
```

---

## 3. Functions

### 3.1 Functions as First-Class Citizens

**What does this mean?**

In JavaScript, functions are first-class citizens, meaning they can be:
- Assigned to variables
- Passed as arguments
- Returned from other functions
- Stored in data structures

**Examples:**

```js
// Assigned to variable
const greet = function(name) {
  return `Hello, ${name}`;
};

// Passed as argument
function executeFunc(fn, value) {
  return fn(value);
}
executeFunc(greet, "Alice");

// Returned from function
function createMultiplier(factor) {
  return function(num) {
    return num * factor;
  };
}
const double = createMultiplier(2);
double(5); // 10

// Stored in array
const operations = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b
];
```

---

### 3.2 Closures

**What is a Closure?**

A closure is created when a function retains access to variables from its outer (enclosing) scope, even after the outer function has finished execution.

**How Closures Work:**

```js
function outer() {
  let count = 0;
  
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

**Use Cases:**

1. **Data Encapsulation (Private Variables):**
```js
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return "Insufficient funds";
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
account.deposit(500); // 1500
account.withdraw(200); // 1300
// balance is private, cannot be accessed directly
```

2. **Function Factories:**
```js
function createGreeter(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");

sayHello("Alice"); // "Hello, Alice!"
sayHi("Bob"); // "Hi, Bob!"
```

3. **Maintaining State:**
```js
function createTimer() {
  let startTime = Date.now();
  
  return {
    getElapsed() {
      return Date.now() - startTime;
    },
    reset() {
      startTime = Date.now();
    }
  };
}
```

**Production Insight:**
Closures are powerful but can lead to memory leaks if not managed properly. Be cautious with event listeners and timers that capture large closures.

---

### 3.3 Arrow Functions

**Syntax:**

```js
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// With single parameter (parentheses optional)
const square = x => x * x;

// With no parameters
const greet = () => "Hello";

// With block body
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
```

**Key Differences from Regular Functions:**

1. **No own `this` binding (Lexical `this`):**
```js
const obj = {
  name: "Alice",
  regularFunc: function() {
    console.log(this.name); // "Alice"
  },
  arrowFunc: () => {
    console.log(this.name); // undefined (inherits from outer scope)
  }
};
```

2. **No `arguments` object:**
```js
function regular() {
  console.log(arguments); // Works
}

const arrow = () => {
  console.log(arguments); // ReferenceError
};

// Use rest parameters instead
const arrow = (...args) => {
  console.log(args);
};
```

3. **Cannot be used as constructors:**
```js
const Person = (name) => {
  this.name = name;
};
new Person("Alice"); // TypeError
```

4. **No `prototype` property:**
```js
const arrow = () => {};
console.log(arrow.prototype); // undefined
```

**When to Use Arrow Functions:**
- ✅ Callbacks and array methods
- ✅ When you want lexical `this`
- ✅ Short, concise functions
- ❌ Object methods that need `this`
- ❌ Event handlers that need `this`
- ❌ Constructors

---

### 3.4 call, apply, and bind

**Purpose:**
All three methods are used to control the `this` context of a function.

**Comparison:**

| Method | Execution | Arguments | Use Case |
|--------|-----------|-----------|----------|
| `call` | Immediate | Individual (comma-separated) | Call function with specific `this` |
| `apply` | Immediate | Array | Call function with array of args |
| `bind` | Returns new function | Preset arguments | Create reusable function with fixed `this` |

**Examples:**

```js
const person = {
  name: "Alice",
  greet: function(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
  }
};

const anotherPerson = { name: "Bob" };

// call - immediate execution, comma-separated args
person.greet.call(anotherPerson, "Hello", "!"); // "Hello, Bob!"

// apply - immediate execution, array of args
person.greet.apply(anotherPerson, ["Hi", "..."]); // "Hi, Bob..."

// bind - returns new function
const greetBob = person.greet.bind(anotherPerson);
greetBob("Hey", "?"); // "Hey, Bob?"

// Partial application with bind
const greetBobHello = person.greet.bind(anotherPerson, "Hello");
greetBobHello("!!!"); // "Hello, Bob!!!"
```

**Practical Use Cases:**

1. **Borrowing Methods:**
```js
const numbers = { data: [1, 2, 3, 4, 5] };
const sum = Array.prototype.reduce.call(numbers.data, (a, b) => a + b);
```

2. **Finding max/min:**
```js
const nums = [5, 2, 8, 1, 9];
Math.max.apply(null, nums); // 9
```

3. **Event Handlers:**
```js
class Button {
  constructor(label) {
    this.label = label;
  }
  
  handleClick() {
    console.log(`${this.label} clicked`);
  }
  
  attachListener(element) {
    element.addEventListener('click', this.handleClick.bind(this));
  }
}
```

---

### 3.5 Currying

**What is Currying?**

Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.

**Examples:**

```js
// Non-curried function
function add(a, b, c) {
  return a + b + c;
}
add(1, 2, 3); // 6

// Curried version
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
curriedAdd(1)(2)(3); // 6

// Arrow function syntax
const curriedAdd = a => b => c => a + b + c;

// Partial application
const addOne = curriedAdd(1);
const addOneAndTwo = addOne(2);
addOneAndTwo(3); // 6
```

**Practical Use Cases:**

```js
// Configuration function
const log = level => message => timestamp => {
  console.log(`[${timestamp}] ${level}: ${message}`);
};

const logError = log("ERROR");
const logInfo = log("INFO");

logError("Something went wrong")(Date.now());
logInfo("Process started")(Date.now());

// Event handling
const handleEvent = eventType => selector => callback => {
  document.querySelector(selector)
    .addEventListener(eventType, callback);
};

const onClick = handleEvent("click");
const onSubmit = handleEvent("submit");

onClick("#button")(() => console.log("Clicked"));
onSubmit("#form")((e) => e.preventDefault());
```

**Benefits:**
- Reusability
- Partial application
- Function composition
- More declarative code

---

### 3.6 Higher-Order Functions

**What are Higher-Order Functions?**

Functions that either:
1. Take one or more functions as arguments, OR
2. Return a function as a result

**Common Examples:**

```js
// Array methods
const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map(x => x * 2); // [2, 4, 6, 8, 10]

// filter
const evens = numbers.filter(x => x % 2 === 0); // [2, 4]

// reduce
const sum = numbers.reduce((acc, x) => acc + x, 0); // 15

// Custom higher-order function
function withLogging(fn) {
  return function(...args) {
    console.log(`Calling with args: ${args}`);
    const result = fn(...args);
    console.log(`Result: ${result}`);
    return result;
  };
}

const add = (a, b) => a + b;
const addWithLogging = withLogging(add);
addWithLogging(2, 3);
// Calling with args: 2,3
// Result: 5
```

---

### 3.7 IIFE (Immediately Invoked Function Expressions)

**What is IIFE?**

A function that is executed immediately after it's defined.

**Syntax:**

```js
// Basic IIFE
(function() {
  console.log("I run immediately!");
})();

// With parameters
(function(name) {
  console.log(`Hello, ${name}`);
})("Alice");

// Arrow function IIFE
(() => {
  console.log("Arrow IIFE");
})();

// Return value
const result = (function() {
  return 42;
})();
```

**Use Cases:**

1. **Avoiding Global Scope Pollution:**
```js
(function() {
  var privateVar = "I'm private";
  // Code here doesn't pollute global scope
})();
```

2. **Module Pattern:**
```js
const myModule = (function() {
  let privateCounter = 0;
  
  return {
    increment() {
      privateCounter++;
    },
    getCount() {
      return privateCounter;
    }
  };
})();

myModule.increment();
myModule.getCount(); // 1
```

3. **Async IIFE (modern use):**
```js
(async () => {
  const data = await fetch('/api/data');
  console.log(await data.json());
})();
```

---

### 3.8 Generator Functions

**What are Generators?**

Generator functions can pause execution and resume later, yielding multiple values over time.

**Syntax:**

```js
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Using for...of
for (const num of numberGenerator()) {
  console.log(num); // 1, 2, 3
}
```

**Practical Examples:**

```js
// ID Generator
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const ids = idGenerator();
ids.next().value; // 1
ids.next().value; // 2

// Infinite sequence
function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Range generator
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

[...range(1, 5)]; // [1, 2, 3, 4, 5]
```

**Use Cases:**
- Lazy evaluation
- Infinite sequences
- Async iteration
- State machines

---

### 3.9 Callback Functions

**What is a Callback?**

A callback is a function passed as an argument to another function, which is then invoked inside the outer function.

**Examples:**

```js
// Simple callback
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

greet("Alice", function() {
  console.log("Callback executed!");
});

// Array methods use callbacks
[1, 2, 3].forEach(function(num) {
  console.log(num);
});

// Event listeners
button.addEventListener('click', function() {
  console.log('Button clicked!');
});

// Asynchronous callbacks
setTimeout(function() {
  console.log("Executed after 1 second");
}, 1000);
```

**Why We Need Callbacks:**

JavaScript is event-driven and non-blocking. Callbacks allow asynchronous operations:

```js
// Simulating API call
function fetchData(callback) {
  setTimeout(() => {
    const data = { user: "Alice", age: 30 };
    callback(data);
  }, 1000);
}

fetchData(function(data) {
  console.log("Data received:", data);
});
console.log("Request sent..."); // Executes first
```

---

### 3.10 Callback Hell

**What is Callback Hell?**

Callback Hell (or "Pyramid of Doom") occurs when multiple nested callbacks make code hard to read and maintain.

**Example of Callback Hell:**

```js
getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      getMoreData(c, function(d) {
        getMoreData(d, function(e) {
          console.log(e);
        });
      });
    });
  });
});
```

**Problems:**
- Hard to read
- Difficult to debug
- Error handling is complex
- Maintenance nightmare

**Solutions:**

1. **Named Functions:**
```js
function handleA(a) {
  getMoreData(a, handleB);
}

function handleB(b) {
  getMoreData(b, handleC);
}

getData(handleA);
```

2. **Promises:**
```js
getData()
  .then(a => getMoreData(a))
  .then(b => getMoreData(b))
  .then(c => getMoreData(c))
  .then(d => getMoreData(d))
  .then(e => console.log(e))
  .catch(error => console.error(error));
```

3. **Async/Await:**
```js
async function processData() {
  try {
    const a = await getData();
    const b = await getMoreData(a);
    const c = await getMoreData(b);
    const d = await getMoreData(c);
    const e = await getMoreData(d);
    console.log(e);
  } catch (error) {
    console.error(error);
  }
}
```

## 4. Objects & Arrays

### 4.1 Objects in JavaScript

**Everything is Object-Based:**

JavaScript is fundamentally object-oriented (prototype-based). Almost everything in JavaScript behaves like an object:

```js
// Arrays are objects
typeof []; // "object"

// Functions are objects
typeof function() {}; // "function" (but still an object)

// Even primitives have object wrappers
const str = "hello";
str.toUpperCase(); // String object wrapper provides methods
```

**Creating Objects:**

```js
// Object literal
const person = {
  name: "Alice",
  age: 30,
  greet() {
    return `Hello, ${this.name}`;
  }
};

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// ES6 Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Object.create
const person = Object.create(null); // No prototype
```

---

### 4.2 Object vs JSON

**Key Differences:**

| Feature | Object | JSON |
|---------|--------|------|
| Format | JavaScript data structure | String format |
| Functions | Can have methods | No functions allowed |
| Keys | Can be unquoted | Must be quoted strings |
| Values | Any JavaScript type | String, Number, Boolean, Array, Object, null |
| Comments | Allowed | Not allowed |
| Trailing Commas | Allowed (modern JS) | Not allowed |

**Examples:**

```js
// JavaScript Object
const obj = {
  name: "Alice",
  age: 30,
  greet: function() { return "Hello"; },
  createdAt: new Date()
};

// JSON (String format)
const json = '{"name":"Alice","age":30}';

// JSON cannot contain:
// - Functions
// - undefined
// - Symbols
// - Dates (must be strings)
```

---

### 4.3 JSON.stringify() and JSON.parse()

**JSON.stringify() - Object to String:**

```js
const obj = { name: "Alice", age: 30 };
const json = JSON.stringify(obj);
console.log(json); // '{"name":"Alice","age":30}'

// Pretty print with spacing
JSON.stringify(obj, null, 2);

// Replacer function
JSON.stringify(obj, (key, value) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value;
});
```

**JSON.parse() - String to Object:**

```js
const json = '{"name":"Alice","age":30}';
const obj = JSON.parse(json);
console.log(obj.name); // "Alice"

// Reviver function
JSON.parse(json, (key, value) => {
  if (key === "age") {
    return value + 1;
  }
  return value;
});
```

**Risks and Limitations:**

1. **Data Loss:**
```js
const obj = {
  func: () => {},
  undef: undefined,
  date: new Date(),
  symbol: Symbol('test')
};

JSON.stringify(obj);
// '{"date":"2024-01-01T00:00:00.000Z"}'
// Functions, undefined, and symbols are lost!
```

2. **Circular References:**
```js
const obj = { a: 1 };
obj.self = obj;
JSON.stringify(obj); // TypeError: Converting circular structure to JSON
```

3. **Performance Issues:**
```js
// Large objects can be slow to stringify
const huge = { /* thousands of properties */ };
JSON.stringify(huge); // Can be slow
```

---

### 4.4 Object Reference Behavior

**Objects are Passed by Reference:**

```js
const a = { x: 1 };
const b = a; // b points to same object

b.x = 2;
console.log(a.x); // 2 (a is also changed!)

// Comparison by reference
const obj1 = { x: 1 };
const obj2 = { x: 1 };
console.log(obj1 === obj2); // false (different references)
console.log(obj1 === obj1); // true (same reference)
```

**Function Parameters:**

```js
function modifyObject(obj) {
  obj.value = 100; // Modifies original
  obj = { value: 200 }; // Reassignment doesn't affect original
}

const myObj = { value: 1 };
modifyObject(myObj);
console.log(myObj.value); // 100 (modified)
```

**Production Insight:**

This is a common source of bugs. Always be aware when passing objects to functions or assigning them to variables.

---

### 4.5 Dynamic & Computed Properties

**Dynamic Property Names:**

```js
const key = "name";
const obj = {
  [key]: "Alice", // Computed property name
  ["first" + "Name"]: "Bob",
  [Symbol.iterator]: function*() { yield 1; }
};

console.log(obj.name); // "Alice"
console.log(obj.firstName); // "Bob"
```

**Accessing Properties Dynamically:**

```js
const user = { name: "Alice", age: 30 };

const prop = "name";
console.log(user[prop]); // "Alice"

// Useful for iterating
const keys = ["name", "age"];
keys.forEach(key => {
  console.log(`${key}: ${user[key]}`);
});
```

**Dynamic Property Creation:**

```js
const obj = {};
const fields = ["name", "age", "email"];

fields.forEach((field, index) => {
  obj[field] = `value${index}`;
});

console.log(obj); // { name: "value0", age: "value1", email: "value2" }
```

---

### 4.6 Object Merging (Spread vs Object.assign)

**Object.assign():**

```js
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

Object.assign(target, source);
console.log(target); // { a: 1, b: 3, c: 4 } (mutated!)

// Non-mutating version
const merged = Object.assign({}, target, source);
```

**Spread Operator (Modern & Recommended):**

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 3, c: 4 }
console.log(obj1); // { a: 1, b: 2 } (unchanged)
```

**Comparison:**

| Feature | Object.assign | Spread (...) |
|---------|---------------|--------------|
| Syntax | Longer | Cleaner |
| Mutates first arg | Yes | No |
| Triggers setters | Yes | No |
| Browser Support | IE11+ | Modern browsers |

**Deep Merge:**

```js
// Both are SHALLOW merges
const obj1 = { a: { x: 1 } };
const obj2 = { a: { y: 2 } };

const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: { y: 2 } } - obj1.a is lost!

// For deep merge, use libraries like lodash or custom recursion
```

---

### 4.7 Optional Chaining & Nullish Coalescing

**Optional Chaining (?.):**

Safely access nested properties without checking each level:

```js
const user = {
  name: "Alice",
  address: {
    city: "NYC"
  }
};

// Without optional chaining
const city = user && user.address && user.address.city;

// With optional chaining
const city = user?.address?.city; // "NYC"
const zip = user?.address?.zip; // undefined (no error!)

// Optional method calling
user.greet?.(); // Only calls if greet exists

// Optional array access
const firstItem = array?.[0];
```

**Nullish Coalescing (??):**

Provides default value only for `null` or `undefined`:

```js
const value1 = null ?? "default"; // "default"
const value2 = undefined ?? "default"; // "default"
const value3 = 0 ?? "default"; // 0 (not "default"!)
const value4 = "" ?? "default"; // "" (not "default"!)
const value5 = false ?? "default"; // false (not "default"!)

// Compare with || operator
const a = 0 || "default"; // "default" (0 is falsy)
const b = 0 ?? "default"; // 0 (0 is not null/undefined)
```

**Combining Both:**

```js
const username = user?.profile?.name ?? "Guest";
const settings = user?.preferences?.theme ?? "light";
```

**Production Insight:**

These features prevent runtime crashes and make code more readable. Always use them when dealing with potentially undefined data.

---

### 4.8 Object Immutability (freeze, seal)

**Object.freeze() - Fully Immutable:**

```js
const obj = { name: "Alice", age: 30 };
Object.freeze(obj);

obj.name = "Bob"; // Silently fails (throws in strict mode)
obj.newProp = "value"; // Silently fails
delete obj.age; // Silently fails

console.log(obj); // { name: "Alice", age: 30 } (unchanged)

// Check if frozen
Object.isFrozen(obj); // true
```

**Object.seal() - Prevent Add/Remove:**

```js
const obj = { name: "Alice", age: 30 };
Object.seal(obj);

obj.name = "Bob"; // Works! (can modify existing)
obj.newProp = "value"; // Fails (cannot add)
delete obj.age; // Fails (cannot delete)

console.log(obj); // { name: "Bob", age: 30 }

// Check if sealed
Object.isSealed(obj); // true
```

**Object.preventExtensions() - Prevent Add Only:**

```js
const obj = { name: "Alice" };
Object.preventExtensions(obj);

obj.name = "Bob"; // Works
obj.age = 30; // Fails (cannot add)
delete obj.name; // Works (can delete)
```

**Comparison:**

| Method | Add Props | Modify Props | Delete Props | Reconfigure |
|--------|-----------|--------------|--------------|-------------|
| freeze | ❌ | ❌ | ❌ | ❌ |
| seal | ❌ | ✅ | ❌ | ❌ |
| preventExtensions | ❌ | ✅ | ✅ | ✅ |

**Important Note:**

All three methods create SHALLOW immutability:

```js
const obj = {
  name: "Alice",
  address: { city: "NYC" }
};

Object.freeze(obj);
obj.address.city = "LA"; // Works! Nested object is not frozen
```

**Use Cases:**
- Redux state management
- Configuration objects
- Constants
- Preventing accidental mutations

---

### 4.9 Shallow vs Deep Copy

**Shallow Copy:**

Only copies first level; nested objects are still referenced:

```js
const original = {
  name: "Alice",
  address: { city: "NYC" }
};

// Methods for shallow copy
const copy1 = { ...original };
const copy2 = Object.assign({}, original);
const copy3 = Object.create(Object.getPrototypeOf(original), 
  Object.getOwnPropertyDescriptors(original));

copy1.name = "Bob"; // Doesn't affect original
copy1.address.city = "LA"; // DOES affect original! (shared reference)

console.log(original.address.city); // "LA"
```

**Deep Copy:**

Copies all levels recursively:

```js
// Method 1: JSON (limitations: loses functions, dates, etc.)
const deep1 = JSON.parse(JSON.stringify(original));

// Method 2: structuredClone (Modern, recommended)
const deep2 = structuredClone(original);

// Method 3: Custom recursive function
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  
  const clone = Array.isArray(obj) ? [] : {};
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  
  return clone;
}

const deep3 = deepClone(original);

// Method 4: Libraries (lodash)
const deep4 = _.cloneDeep(original);
```

**Comparison:**

| Method | Speed | Deep Copy | Functions | Dates | Circular Refs |
|--------|-------|-----------|-----------|-------|---------------|
| Spread | Fast | ❌ | ✅ | ✅ | ❌ |
| JSON | Medium | ✅ | ❌ | ❌ | ❌ |
| structuredClone | Medium | ✅ | ❌ | ✅ | ✅ |
| Custom | Slow | ✅ | ✅ | ✅ | Depends |
| Lodash | Medium | ✅ | ✅ | ✅ | ✅ |

---

### 4.10 Object as Cache Keys

**The Problem:**

Objects can't directly be used as cache keys because they're limited to strings/symbols:

```js
const cache = {};

const obj1 = { id: 1 };
const obj2 = { id: 2 };

cache[obj1] = "value1";
cache[obj2] = "value2";

console.log(cache);
// { '[object Object]': 'value2' }
// Both keys became the same string!

console.log(cache[obj1]); // "value2" (wrong!)
```

**Solution: Use Map:**

```js
const cache = new Map();

const obj1 = { id: 1 };
const obj2 = { id: 2 };

cache.set(obj1, "value1");
cache.set(obj2, "value2");

console.log(cache.get(obj1)); // "value1" ✅
console.log(cache.get(obj2)); // "value2" ✅
```

**WeakMap for Garbage Collection:**

```js
const cache = new WeakMap();

let obj = { id: 1 };
cache.set(obj, "value");

obj = null; // Object can now be garbage collected
```

**Memoization with JSON.stringify (Risky):**

```js
function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args); // Risky!
    
    if (key in cache) {
      return cache[key];
    }
    
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Issues:
// - Order matters: {a:1,b:2} vs {b:2,a:1}
// - Functions/symbols lost
// - Performance overhead
```

**Better Memoization with Map:**

```js
function memoize(fn) {
  const cache = new Map();
  
  return function(...args) {
    const key = args[0]; // Or create composite key
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
```

---

### 4.11 Array Methods (map, filter, reduce, some, every)

**map() - Transform Each Element:**

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(x => x * 2);
console.log(doubled); // [2, 4, 6, 8]

// With index and array
const withIndex = numbers.map((num, index) => num * index);
// [0, 2, 6, 12]

// Object transformation
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 }
];
const names = users.map(u => u.name); // ["Alice", "Bob"]
```

**filter() - Keep Elements That Pass Test:**

```js
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(x => x % 2 === 0);
console.log(evens); // [2, 4, 6]

// Filter objects
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 25 }
];
const adults = users.filter(u => u.age >= 18);
```

**reduce() - Reduce to Single Value:**

```js
// Sum
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10

// Object from array
const users = ["Alice", "Bob"];
const userObj = users.reduce((acc, name, index) => {
  acc[index] = name;
  return acc;
}, {});
// { 0: "Alice", 1: "Bob" }

// Grouping
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 }
];
const byAge = people.reduce((acc, person) => {
  (acc[person.age] = acc[person.age] || []).push(person);
  return acc;
}, {});
// { 30: [{Alice}, {Bob}], 25: [{Charlie}] }

// Flatten array
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
// [1, 2, 3, 4, 5]
```

**some() - Test if ANY Element Passes:**

```js
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(x => x % 2 === 0);
console.log(hasEven); // true

const hasNegative = numbers.some(x => x < 0);
console.log(hasNegative); // false

// Short-circuits (stops on first true)
const result = numbers.some(x => {
  console.log(x);
  return x > 2;
});
// Logs: 1, 2, 3 (stops after finding 3 > 2)
```

**every() - Test if ALL Elements Pass:**

```js
const numbers = [2, 4, 6, 8];
const allEven = numbers.every(x => x % 2 === 0);
console.log(allEven); // true

const allPositive = [-1, 2, 3].every(x => x > 0);
console.log(allPositive); // false

// Short-circuits (stops on first false)
```

**find() & findIndex() Bonus:**

```js
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: "Bob" }

const index = users.findIndex(u => u.id === 2);
console.log(index); // 1
```

**Method Chaining:**

```js
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
  .filter(x => x % 2 === 0)  // [2, 4, 6]
  .map(x => x * 2)           // [4, 8, 12]
  .reduce((a, b) => a + b, 0); // 24

console.log(result); // 24
```

## 5. Prototypes & Inheritance

### 5.1 What is a Prototype?

**Definition:**

Every JavaScript object has an internal `[[Prototype]]` property that enables inheritance. This prototype is a reference to another object from which the current object inherits properties and methods.

**Key Points:**
- Prototypes enable inheritance in JavaScript
- All objects inherit from `Object.prototype` by default
- Prototypes form a chain

**Example:**

```js
const obj = {};
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// Arrays inherit from Array.prototype
const arr = [];
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true

// Functions inherit from Function.prototype
function fn() {}
console.log(Object.getPrototypeOf(fn) === Function.prototype); // true
```

---

### 5.2 Prototype Chain

**How it Works:**

When accessing a property on an object, JavaScript:
1. Checks the object itself
2. If not found, checks the object's prototype
3. Continues up the chain until `null`

**Example:**

```js
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(rabbit.eats); // true (from animal)
console.log(rabbit.jumps); // true (own property)
rabbit.walk(); // "Animal walks" (from animal)

// Prototype chain:
// rabbit -> animal -> Object.prototype -> null
```

**Checking the Chain:**

```js
console.log(rabbit.hasOwnProperty('jumps')); // true
console.log(rabbit.hasOwnProperty('eats')); // false (inherited)

// Get prototype
Object.getPrototypeOf(rabbit); // animal

// Check if in prototype chain
animal.isPrototypeOf(rabbit); // true
```

---

### 5.3 prototype vs __proto__

**Key Differences:**

| Feature | `prototype` | `__proto__` |
|---------|-------------|-------------|
| Type | Property on constructor functions | Property on object instances |
| Purpose | Defines methods for instances | Accesses the actual prototype |
| Usage | `Constructor.prototype` | `instance.__proto__` (deprecated) |
| Recommended | Yes | Use `Object.getPrototypeOf()` instead |

**Examples:**

```js
function Person(name) {
  this.name = name;
}

// prototype - on constructor
Person.prototype.greet = function() {
  return `Hello, ${this.name}`;
};

const alice = new Person("Alice");

// __proto__ - on instance (deprecated, use Object.getPrototypeOf)
console.log(alice.__proto__ === Person.prototype); // true
console.log(Object.getPrototypeOf(alice) === Person.prototype); // true

// The relationship:
// alice.__proto__ === Person.prototype
// Person.prototype.constructor === Person
```

**Visual Representation:**

```
Constructor (Person)
    |
    | .prototype
    v
Person.prototype
    ^
    | [[Prototype]] (__proto__)
    |
Instance (alice)
```

---

### 5.4 Constructor Functions

**What are Constructor Functions?**

Functions used to create objects with a specific structure and shared methods.

**Example:**

```js
function Person(name, age) {
  // Instance properties
  this.name = name;
  this.age = age;
}

// Shared methods on prototype (memory efficient)
Person.prototype.greet = function() {
  return `Hello, I'm ${this.name}`;
};

Person.prototype.getBirthYear = function() {
  return new Date().getFullYear() - this.age;
};

// Create instances
const alice = new Person("Alice", 30);
const bob = new Person("Bob", 25);

alice.greet(); // "Hello, I'm Alice"
bob.greet(); // "Hello, I'm Bob"

// Methods are shared (memory efficient)
console.log(alice.greet === bob.greet); // true
```

**Why Use Prototype for Methods?**

```js
// Bad - methods duplicated for each instance
function Person(name) {
  this.name = name;
  this.greet = function() { // New function for EACH instance
    return `Hello, ${this.name}`;
  };
}

// Good - methods shared via prototype
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() { // ONE function for all instances
  return `Hello, ${this.name}`;
};
```

---

### 5.5 new Keyword Internals

**What happens when you use `new`?**

```js
function Person(name) {
  this.name = name;
}

const alice = new Person("Alice");
```

**Step-by-Step:**

1. **Creates a new empty object**: `{}`
2. **Sets the prototype**: Links `[[Prototype]]` to `Person.prototype`
3. **Binds `this`**: Executes constructor with `this` = new object
4. **Returns the object**: Returns the new object (unless constructor returns an object)

**Manual Implementation:**

```js
function myNew(Constructor, ...args) {
  // 1. Create new object
  const obj = {};
  
  // 2. Set prototype
  Object.setPrototypeOf(obj, Constructor.prototype);
  
  // 3. Execute constructor with new object as 'this'
  const result = Constructor.apply(obj, args);
  
  // 4. Return object (or result if it's an object)
  return result instanceof Object ? result : obj;
}

// Usage
const alice = myNew(Person, "Alice");
```

**Edge Cases:**

```js
// If constructor returns an object, that object is returned
function Person(name) {
  this.name = name;
  return { custom: "object" }; // This gets returned instead
}

const p = new Person("Alice");
console.log(p); // { custom: "object" }

// If constructor returns primitive, it's ignored
function Person2(name) {
  this.name = name;
  return "string"; // Ignored
}

const p2 = new Person2("Bob");
console.log(p2); // { name: "Bob" }
```

---

### 5.6 Object.create()

**Purpose:**

Create a new object with a specified prototype.

**Syntax:**

```js
const newObj = Object.create(prototypeObject);
```

**Examples:**

```js
// Create object with custom prototype
const animal = {
  eats: true,
  walk() {
    console.log("Walking");
  }
};

const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(rabbit.eats); // true (inherited)
console.log(rabbit.jumps); // true (own)

// Create object with null prototype (no inheritance)
const pureObj = Object.create(null);
pureObj.name = "Test";
console.log(pureObj.toString); // undefined (no Object.prototype)

// Create object with properties
const person = Object.create(Object.prototype, {
  name: {
    value: "Alice",
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: {
    value: 30,
    writable: false
  }
});
```

**vs Constructor Functions:**

```js
// Constructor function approach
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return `Hello, ${this.name}`;
};
const alice = new Person("Alice");

// Object.create approach
const PersonPrototype = {
  greet() {
    return `Hello, ${this.name}`;
  }
};
const bob = Object.create(PersonPrototype);
bob.name = "Bob";
```

---

### 5.7 instanceof Operator

**What it does:**

Checks if an object is an instance of a constructor by examining the prototype chain.

**Syntax:**

```js
object instanceof Constructor
```

**Examples:**

```js
function Person(name) {
  this.name = name;
}

const alice = new Person("Alice");

console.log(alice instanceof Person); // true
console.log(alice instanceof Object); // true (all objects inherit from Object)

// Arrays
const arr = [];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true

// Manual prototype chain
const animal = { eats: true };
const rabbit = Object.create(animal);
// instanceof doesn't work well with Object.create
```

**How it Works:**

```js
// Simplified implementation
function myInstanceof(obj, Constructor) {
  let proto = Object.getPrototypeOf(obj);
  
  while (proto !== null) {
    if (proto === Constructor.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  
  return false;
}
```

**Edge Cases:**

```js
// Primitives
console.log("string" instanceof String); // false
console.log(new String("string") instanceof String); // true

// null and undefined
console.log(null instanceof Object); // false
console.log(undefined instanceof Object); // false

// Custom constructors
function Custom() {}
const obj = new Custom();
Custom.prototype = {}; // Changed prototype!
console.log(obj instanceof Custom); // false (prototype chain broken)
```

---

### 5.8 ES6 Classes

**Modern Syntax for Prototypal Inheritance:**

```js
class Person {
  // Constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Methods (added to prototype)
  greet() {
    return `Hello, I'm ${this.name}`;
  }
  
  // Static methods (on class itself)
  static species() {
    return "Homo sapiens";
  }
  
  // Getters and setters
  get birthYear() {
    return new Date().getFullYear() - this.age;
  }
  
  set birthYear(year) {
    this.age = new Date().getFullYear() - year;
  }
}

const alice = new Person("Alice", 30);
alice.greet(); // "Hello, I'm Alice"
Person.species(); // "Homo sapiens"
console.log(alice.birthYear); // 1994
```

**Inheritance with extends:**

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }
  
  speak() {
    return `${this.name} barks`;
  }
  
  wagTail() {
    return `${this.name} wags tail`;
  }
}

const dog = new Dog("Rex", "Labrador");
dog.speak(); // "Rex barks"
dog.wagTail(); // "Rex wags tail"
```

**Private Fields (Modern JS):**

```js
class BankAccount {
  #balance = 0; // Private field
  
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  
  deposit(amount) {
    this.#balance += amount;
  }
  
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
// console.log(account.#balance); // SyntaxError: Private field
```

**Important: Classes are Syntactic Sugar**

```js
// This class...
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}`;
  }
}

// ...is essentially this:
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return `Hello, ${this.name}`;
};

// Both create the same prototype chain!
```

---

### 5.9 Classical vs Prototypal Inheritance

**Classical Inheritance (Java, C++):**

```
Classes are blueprints
Objects are instances of classes
Inheritance through class hierarchy
```

**Prototypal Inheritance (JavaScript):**

```
Objects inherit from objects
No classes (ES6 classes are syntactic sugar)
Inheritance through prototype chain
```

**Comparison:**

| Feature | Classical | Prototypal (JS) |
|---------|-----------|-----------------|
| Blueprint | Class | Prototype object |
| Inheritance | Class extends class | Object delegates to object |
| Instance creation | `new ClassName()` | `Object.create()` or `new` |
| Flexibility | Static hierarchy | Dynamic, can change at runtime |
| Multiple inheritance | No (single inheritance) | Yes (through mixins) |

**JavaScript's Flexibility:**

```js
// Can modify prototype at runtime
function Person(name) {
  this.name = name;
}

const alice = new Person("Alice");

// Add method to all instances dynamically
Person.prototype.greet = function() {
  return `Hello, ${this.name}`;
};

alice.greet(); // Works! Added after instance creation

// Can change object's prototype (not recommended in production)
const animal = { eats: true };
Object.setPrototypeOf(alice, animal);
console.log(alice.eats); // true
```

**Mixins (Multiple Inheritance Pattern):**

```js
const canEat = {
  eat() {
    return `${this.name} is eating`;
  }
};

const canWalk = {
  walk() {
    return `${this.name} is walking`;
  }
};

class Person {
  constructor(name) {
    this.name = name;
  }
}

// Add multiple behaviors
Object.assign(Person.prototype, canEat, canWalk);

const alice = new Person("Alice");
alice.eat(); // "Alice is eating"
alice.walk(); // "Alice is walking"
```

---## 6. Asynchronous JavaScript

### 6.1 What are Promises?

**Definition:**

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

**Why Promises?**

Before promises, we used callbacks which led to callback hell. Promises provide a cleaner way to handle async operations.

**Creating a Promise:**

```js
const promise = new Promise((resolve, reject) => {
  // Async operation
  setTimeout(() => {
    const success = true;
    
    if (success) {
      resolve("Operation successful!"); // Fulfilled
    } else {
      reject("Operation failed!"); // Rejected
    }
  }, 1000);
});

// Consuming the promise
promise
  .then(result => console.log(result)) // Handles success
  .catch(error => console.error(error)) // Handles error
  .finally(() => console.log("Done")); // Always runs
```

---

### 6.2 Promise States

A Promise can be in one of three states:

**1. Pending:**
- Initial state
- Operation not yet completed

**2. Fulfilled (Resolved):**
- Operation completed successfully
- `resolve()` was called
- `.then()` handler will execute

**3. Rejected:**
- Operation failed
- `reject()` was called
- `.catch()` handler will execute

**State Transition:**

```
Pending ──→ Fulfilled (resolve)
        └──→ Rejected (reject)

Once settled (fulfilled or rejected), a promise cannot change state.
```

**Example:**

```js
const promise = new Promise((resolve, reject) => {
  const randomNum = Math.random();
  
  if (randomNum > 0.5) {
    resolve(randomNum); // Fulfilled
  } else {
    reject("Number too small"); // Rejected
  }
});

promise
  .then(num => console.log("Success:", num))
  .catch(err => console.log("Error:", err));
```

---

### 6.3 Promise Methods (all, allSettled, race, any)

**Promise.all() - Fail Fast:**

Waits for all promises to fulfill. If ANY fails, the entire operation fails.

```js
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then(results => console.log(results)) // [1, 2, 3]
  .catch(error => console.error(error));

// If one fails:
const p4 = Promise.reject("Error");
Promise.all([p1, p2, p4])
  .then(results => console.log(results))
  .catch(error => console.error(error)); // "Error" (stops at first failure)
```

**Use Case:** When all operations MUST succeed (e.g., loading multiple required resources).

---

**Promise.allSettled() - Never Fails:**

Waits for all promises to settle (fulfill or reject). Returns status of each.

```js
const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Error");
const p3 = Promise.resolve("Another success");

Promise.allSettled([p1, p2, p3])
  .then(results => console.log(results));

// Output:
// [
//   { status: "fulfilled", value: "Success" },
//   { status: "rejected", reason: "Error" },
//   { status: "fulfilled", value: "Another success" }
// ]
```

**Use Case:** When you need to know the outcome of all operations, regardless of failures.

---

**Promise.race() - First to Finish:**

Returns the result of the first promise to settle (fulfill OR reject).

```js
const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 2000));
const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 100));

Promise.race([slow, fast])
  .then(result => console.log(result)); // "Fast"

// Works with rejections too:
const error = new Promise((_, reject) => setTimeout(() => reject("Error"), 50));
Promise.race([slow, fast, error])
  .catch(err => console.log(err)); // "Error" (first to settle)
```

**Use Case:** Timeouts, showing the fastest response from multiple sources.

---

**Promise.any() - First Success:**

Returns the first fulfilled promise. Ignores rejections unless ALL reject.

```js
const p1 = Promise.reject("Error 1");
const p2 = Promise.reject("Error 2");
const p3 = Promise.resolve("Success");

Promise.any([p1, p2, p3])
  .then(result => console.log(result)) // "Success"
  .catch(error => console.error(error));

// If all reject:
Promise.any([p1, p2])
  .catch(error => console.error(error)); // AggregateError
```

**Use Case:** When you need at least one successful response (e.g., fetching from multiple mirrors).

---

**Comparison Table:**

| Method | Waits For | Fails When | Returns | Use Case |
|--------|-----------|------------|---------|----------|
| `Promise.all` | All to settle | Any fails | Array of results | All must succeed |
| `Promise.allSettled` | All to settle | Never | Array of status objects | Need all outcomes |
| `Promise.race` | First to settle | First rejection | First result | Timeout or fastest |
| `Promise.any` | First success | All reject | First success | At least one success |

---

### 6.4 async/await

**What is async/await?**

Syntactic sugar over promises that makes async code look and behave like synchronous code.

**async Function:**

```js
// Returns a promise
async function fetchData() {
  return "Data"; // Automatically wrapped in Promise.resolve()
}

fetchData().then(data => console.log(data)); // "Data"

// Equivalent to:
function fetchData() {
  return Promise.resolve("Data");
}
```

**await Keyword:**

```js
async function getData() {
  // Pauses execution until promise resolves
  const data = await fetch('/api/data');
  const json = await data.json();
  return json;
}

// Without async/await:
function getData() {
  return fetch('/api/data')
    .then(data => data.json())
    .then(json => json);
}
```

**Key Rules:**
- `await` can only be used inside `async` functions
- `await` pauses execution until promise resolves
- If promise rejects, it throws an error

---

### 6.5 Error Handling in Async Code

**try/catch with async/await:**

```js
async function fetchUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw error; // Re-throw or handle
  }
}
```

**Multiple try/catch blocks:**

```js
async function processData() {
  let data;
  
  try {
    data = await fetchData();
  } catch (error) {
    console.error("Fetch failed:", error);
    return null;
  }
  
  try {
    const processed = await processData(data);
    return processed;
  } catch (error) {
    console.error("Processing failed:", error);
    return null;
  }
}
```

**Handling with .catch():**

```js
async function getData() {
  return await fetch('/api/data')
    .catch(error => {
      console.error(error);
      return null;
    });
}
```

---

### 6.6 Promise Chaining vs async/await

**Promise Chaining:**

```js
function getUserPosts(userId) {
  return fetch(`/api/users/${userId}`)
    .then(response => response.json())
    .then(user => fetch(`/api/posts?userId=${user.id}`))
    .then(response => response.json())
    .then(posts => {
      return posts;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}
```

**async/await (Cleaner):**

```js
async function getUserPosts(userId) {
  try {
    const userResponse = await fetch(`/api/users/${userId}`);
    const user = await userResponse.json();
    
    const postsResponse = await fetch(`/api/posts?userId=${user.id}`);
    const posts = await postsResponse.json();
    
    return posts;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
```

**When to Use Which:**

- **async/await**: Sequential operations, cleaner syntax, easier error handling
- **Promise chaining**: When you need the promise object, or for simple transformations

---

### 6.7 Handling Multiple Concurrent Requests

**Sequential (Slow):**

```js
async function getDataSequential() {
  const user = await fetch('/api/user');
  const posts = await fetch('/api/posts');
  const comments = await fetch('/api/comments');
  
  return { user, posts, comments };
}
// Takes: time(user) + time(posts) + time(comments)
```

**Concurrent (Fast):**

```js
async function getDataConcurrent() {
  // Start all requests simultaneously
  const [user, posts, comments] = await Promise.all([
    fetch('/api/user'),
    fetch('/api/posts'),
    fetch('/api/comments')
  ]);
  
  return { user, posts, comments };
}
// Takes: max(time(user), time(posts), time(comments))
```

**Concurrent with Individual Error Handling:**

```js
async function getDataSafe() {
  const results = await Promise.allSettled([
    fetch('/api/user'),
    fetch('/api/posts'),
    fetch('/api/comments')
  ]);
  
  const user = results[0].status === 'fulfilled' ? results[0].value : null;
  const posts = results[1].status === 'fulfilled' ? results[1].value : null;
  const comments = results[2].status === 'fulfilled' ? results[2].value : null;
  
  return { user, posts, comments };
}
```

**Production Pattern:**

```js
async function fetchMultipleResources() {
  try {
    const [userData, postsData, commentsData] = await Promise.all([
      fetch('/api/user').then(r => r.json()),
      fetch('/api/posts').then(r => r.json()),
      fetch('/api/comments').then(r => r.json())
    ]);
    
    return {
      user: userData,
      posts: postsData,
      comments: commentsData
    };
  } catch (error) {
    console.error('Failed to fetch resources:', error);
    throw error;
  }
}
```

---

## 7. Event Loop & Execution Context

### 7.1 Call Stack

**What is the Call Stack?**

The call stack is a mechanism for JavaScript to keep track of function calls. It operates on LIFO (Last In, First Out) principle.

**How it Works:**

```js
function first() {
  console.log("First");
  second();
  console.log("First again");
}

function second() {
  console.log("Second");
  third();
  console.log("Second again");
}

function third() {
  console.log("Third");
}

first();

// Call Stack:
// 1. first()
// 2. first() -> second()
// 3. first() -> second() -> third()
// 4. first() -> second()
// 5. first()
// 6. (empty)

// Output:
// First
// Second
// Third
// Second again
// First again
```

**Stack Overflow:**

```js
function recursiveFunction() {
  recursiveFunction(); // No base case!
}

recursiveFunction(); // RangeError: Maximum call stack size exceeded
```

---

### 7.2 Event Loop Explained

**Components:**

1. **Call Stack**: Executes code
2. **Web APIs**: Browser APIs (setTimeout, fetch, DOM events)
3. **Callback Queue (Task Queue)**: Holds callbacks from async operations
4. **Microtask Queue**: Holds promise callbacks, higher priority
5. **Event Loop**: Monitors and moves tasks from queues to stack

**How Event Loop Works:**

```
1. Execute all synchronous code (call stack)
2. Check microtask queue → execute all microtasks
3. Check callback queue → execute one macrotask
4. Repeat from step 2
```

**Example:**

```js
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");

// Output:
// 1
// 4
// 3 (microtask - promise)
// 2 (macrotask - setTimeout)
```

**Detailed Flow:**

```
Call Stack: console.log("1")
Output: "1"

Call Stack: setTimeout (schedules callback)
Callback Queue: [() => console.log("2")]

Call Stack: Promise.then (schedules microtask)
Microtask Queue: [() => console.log("3")]

Call Stack: console.log("4")
Output: "4"

Call Stack: (empty)
↓
Microtask Queue: Execute all
Output: "3"
↓
Callback Queue: Execute one
Output: "2"
```

---

### 7.3 Microtasks vs Macrotasks

**Microtasks (High Priority):**
- Promise callbacks (`.then`, `.catch`, `.finally`)
- `queueMicrotask()`
- `MutationObserver`
- `process.nextTick()` (Node.js)

**Macrotasks (Low Priority):**
- `setTimeout()`
- `setInterval()`
- `setImmediate()` (Node.js)
- I/O operations
- UI rendering

**Execution Order:**

```js
console.log("1"); // Sync

setTimeout(() => console.log("2"), 0); // Macrotask

Promise.resolve()
  .then(() => console.log("3")) // Microtask
  .then(() => console.log("4")); // Microtask

setTimeout(() => console.log("5"), 0); // Macrotask

Promise.resolve().then(() => console.log("6")); // Microtask

console.log("7"); // Sync

// Output:
// 1, 7 (sync)
// 3, 4, 6 (microtasks)
// 2, 5 (macrotasks)
```

**Key Rule:**

After each macrotask, ALL microtasks are executed before the next macrotask.

---

### 7.4 Execution Context

**What is Execution Context?**

An execution context is an environment where JavaScript code is evaluated and executed.

**Types:**

1. **Global Execution Context**
   - Created when script starts
   - Only one per program
   - Creates global object (`window` in browser, `global` in Node.js)

2. **Function Execution Context**
   - Created when function is invoked
   - New context for each function call

3. **Eval Execution Context**
   - Code inside `eval()` (avoid using)

**Phases:**

**1. Creation Phase:**
- Creates global/function object
- Sets up `this`
- Creates variable environment (hoisting)
- Creates scope chain

**2. Execution Phase:**
- Assigns values to variables
- Executes code line by line

**Example:**

```js
let name = "Global";

function outer() {
  let name = "Outer";
  
  function inner() {
    let name = "Inner";
    console.log(name); // "Inner"
  }
  
  inner();
  console.log(name); // "Outer"
}

outer();
console.log(name); // "Global"

// Execution Context Stack:
// 1. Global Context
// 2. outer() Context
// 3. inner() Context
// 4. outer() Context
// 5. Global Context
```

---

### 7.5 Scope and Scope Chain

**Scope:**

Determines the accessibility of variables, functions, and objects.

**Types:**

**1. Global Scope:**
```js
const globalVar = "I'm global";

function test() {
  console.log(globalVar); // Accessible
}
```

**2. Function Scope:**
```js
function test() {
  const functionVar = "I'm function scoped";
  console.log(functionVar); // Accessible
}

console.log(functionVar); // ReferenceError
```

**3. Block Scope (let/const):**
```js
if (true) {
  let blockVar = "I'm block scoped";
  const alsoBlock = "Me too";
  var functionScoped = "I'm function scoped";
  
  console.log(blockVar); // Accessible
}

console.log(blockVar); // ReferenceError
console.log(functionScoped); // Accessible (var is function scoped)
```

**Scope Chain:**

JavaScript looks for variables starting from the current scope and moving outward.

```js
const global = "Global";

function outer() {
  const outerVar = "Outer";
  
  function inner() {
    const innerVar = "Inner";
    
    console.log(innerVar);  // Found in inner scope
    console.log(outerVar);  // Found in outer scope
    console.log(global);    // Found in global scope
    console.log(notExists); // ReferenceError (not in chain)
  }
  
  inner();
}

outer();

// Scope Chain for inner():
// inner scope → outer scope → global scope → (not found)
```

**Lexical Scoping:**

Functions are executed using the scope chain that was in effect when they were DEFINED, not where they are CALLED.

```js
const name = "Global";

function outer() {
  const name = "Outer";
  
  return function inner() {
    console.log(name); // "Outer" (lexical scope)
  };
}

const innerFunc = outer();

const name = "After";
innerFunc(); // "Outer" (not "After")
```

---

### 7.6 this Keyword Behavior

**What is `this`?**

`this` refers to the object that is executing the current function. Its value depends on HOW the function is called.

**1. Global Context:**
```js
console.log(this); // window (browser) or global (Node.js)

function test() {
  console.log(this);
}
test(); // window (non-strict) or undefined (strict mode)
```

**2. Object Method:**
```js
const person = {
  name: "Alice",
  greet() {
    console.log(this.name); // "Alice"
  }
};

person.greet(); // this = person
```

**3. Standalone Function:**
```js
const person = {
  name: "Alice",
  greet() {
    console.log(this.name);
  }
};

const greetFunc = person.greet;
greetFunc(); // undefined (this = window/undefined)
```

**4. Arrow Functions (Lexical this):**
```js
const person = {
  name: "Alice",
  greet: () => {
    console.log(this.name); // undefined (arrow function inherits this)
  },
  regularGreet() {
    const arrow = () => console.log(this.name);
    arrow(); // "Alice" (inherits from regularGreet)
  }
};

person.greet(); // undefined
person.regularGreet(); // "Alice"
```

**5. Event Handlers:**
```js
button.addEventListener('click', function() {
  console.log(this); // button element
});

button.addEventListener('click', () => {
  console.log(this); // window/global (arrow function)
});
```

**6. Constructor Functions:**
```js
function Person(name) {
  this.name = name;
  console.log(this); // new Person instance
}

const alice = new Person("Alice");
```

**7. call, apply, bind:**
```js
function greet() {
  console.log(this.name);
}

const person = { name: "Alice" };

greet.call(person); // "Alice"
greet.apply(person); // "Alice"
const boundGreet = greet.bind(person);
boundGreet(); // "Alice"
```

**Summary Table:**

| Context | this Value |
|---------|-----------|
| Global | window/global |
| Object method | The object |
| Standalone function | window/undefined (strict) |
| Arrow function | Inherited from parent |
| Event handler | The element |
| Constructor | New instance |
| call/apply/bind | Explicit object |

---

### 7.7 Microtask Starvation

**What is it?**

When microtasks keep generating new microtasks infinitely, preventing macrotasks from ever executing.

**Example:**

```js
function recursiveMicrotask() {
  Promise.resolve().then(() => {
    console.log("Microtask");
    recursiveMicrotask(); // Creates another microtask
  });
}

recursiveMicrotask();

setTimeout(() => {
  console.log("This will never run!"); // Starved
}, 0);

// Output: "Microtask" logged infinitely
// setTimeout never executes because microtasks keep running
```

**Real-World Scenario:**

```js
// Bad: Can cause starvation
async function processQueue() {
  while (queue.length > 0) {
    await processItem(queue.shift()); // Each await creates microtasks
  }
}

// Better: Allow macrotasks to run
async function processQueue() {
  const batchSize = 10;
  
  while (queue.length > 0) {
    for (let i = 0; i < batchSize && queue.length > 0; i++) {
      await processItem(queue.shift());
    }
    
    // Allow macrotasks to run
    await new Promise(resolve => setTimeout(resolve, 0));
  }
}
```

**Prevention:**
- Limit consecutive microtask generation
- Use `setTimeout` to yield to macrotasks
- Process data in batches

---
## 8. ES6+ Features & Modern JavaScript

### 8.1 let and const

**Differences from var:**

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Hoisting | Yes (initialized undefined) | Yes (TDZ) | Yes (TDZ) |
| Redeclaration | Allowed | Not allowed | Not allowed |
| Reassignment | Allowed | Allowed | Not allowed |
| Global property | Creates window property | No | No |

**Examples covered in section 2.3**

---

### 8.2 Arrow Functions

**Examples covered in section 3.3**

---

### 8.3 Template Literals

**What are Template Literals?**

Template literals allow embedded expressions and multi-line strings using backticks (`` ` ``).

**Features:**

```js
// String interpolation
const name = "Alice";
const age = 30;
console.log(`My name is ${name} and I'm ${age} years old.`);

// Expressions
const a = 5;
const b = 10;
console.log(`Sum: ${a + b}`); // "Sum: 15"

// Multi-line strings
const message = `
  Hello,
  This is a multi-line
  string.
`;

// ES5 equivalent (messy)
const oldWay = "Hello,\n" +
  "This is a multi-line\n" +
  "string.";
```

**Tagged Templates:**

```js
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return `${result}${str}<strong>${values[i] || ''}</strong>`;
  }, '');
}

const name = "Alice";
const age = 30;
const html = highlight`Name: ${name}, Age: ${age}`;
// "Name: <strong>Alice</strong>, Age: <strong>30</strong>"
```

**Use Cases:**
- String interpolation
- Multi-line strings
- SQL/HTML generation
- Internationalization

---

### 8.4 Destructuring Assignment

**Array Destructuring:**

```js
// Basic
const [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

// Skip elements
const [first, , third] = [1, 2, 3];
console.log(first); // 1
console.log(third); // 3

// Rest operator
const [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]

// Default values
const [x = 10, y = 20] = [5];
console.log(x); // 5
console.log(y); // 20

// Swapping variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2, 1
```

**Object Destructuring:**

```js
// Basic
const { name, age } = { name: "Alice", age: 30 };
console.log(name); // "Alice"

// Rename variables
const { name: userName, age: userAge } = { name: "Bob", age: 25 };
console.log(userName); // "Bob"

// Default values
const { x = 10, y = 20 } = { x: 5 };
console.log(x); // 5
console.log(y); // 20

// Nested destructuring
const user = {
  name: "Alice",
  address: {
    city: "NYC",
    zip: "10001"
  }
};

const { address: { city, zip } } = user;
console.log(city); // "NYC"

// Function parameters
function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old`);
}

greet({ name: "Alice", age: 30 });

// Rest in objects
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
console.log(rest); // { c: 3, d: 4 }
```

---

### 8.5 Default Parameters

**Basic Usage:**

```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

greet(); // "Hello, Guest"
greet("Alice"); // "Hello, Alice"

// ES5 way
function greetOld(name) {
  name = name || "Guest"; // Problem: doesn't work for falsy values
  console.log("Hello, " + name);
}
```

**With Expressions:**

```js
function multiply(a, b = a * 2) {
  return a * b;
}

multiply(5); // 50 (5 * 10)
multiply(5, 3); // 15

// Function calls as defaults
function getDefaultName() {
  return "Guest";
}

function greet(name = getDefaultName()) {
  console.log(`Hello, ${name}`);
}
```

**Destructuring with Defaults:**

```js
function createUser({ 
  name = "Guest", 
  age = 18, 
  role = "user" 
} = {}) {
  return { name, age, role };
}

createUser(); // { name: "Guest", age: 18, role: "user" }
createUser({ name: "Alice" }); // { name: "Alice", age: 18, role: "user" }
```

---

### 8.6 Rest and Spread Operators

**Rest Operator (...):**

Collects multiple elements into an array:

```js
// Function parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3, 4); // 10

// Array destructuring
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest); // [2, 3, 4]

// Object destructuring
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }
```

**Spread Operator (...):**

Expands an array/object:

```js
// Array spreading
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Copy array
const original = [1, 2, 3];
const copy = [...original];

// Function arguments
const numbers = [1, 2, 3];
Math.max(...numbers); // 3

// Object spreading
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

// Overriding properties
const user = { name: "Alice", age: 30 };
const updated = { ...user, age: 31 }; // { name: "Alice", age: 31 }

// Adding properties
const withRole = { ...user, role: "admin" };
```

---

### 8.7 Enhanced Object Literals

**Shorthand Property Names:**

```js
const name = "Alice";
const age = 30;

// ES6
const person = { name, age };

// ES5
const personOld = { name: name, age: age };
```

**Shorthand Method Names:**

```js
const obj = {
  // ES6
  greet() {
    return "Hello";
  },
  
  // ES5
  greetOld: function() {
    return "Hello";
  }
};
```

**Computed Property Names:**

```js
const key = "name";
const obj = {
  [key]: "Alice",
  ["age"]: 30,
  [`${key}Upper`]: "ALICE"
};

console.log(obj); // { name: "Alice", age: 30, nameUpper: "ALICE" }
```

**All Together:**

```js
const name = "Alice";
const age = 30;
const prop = "role";

const user = {
  name,
  age,
  [prop]: "admin",
  greet() {
    return `Hello, ${this.name}`;
  }
};
```

---

### 8.8 ES6 Classes

**Covered in detail in section 5.8**

---

### 8.9 Modules (import/export)

**Named Exports:**

```js
// utils.js
export const PI = 3.14159;
export function add(a, b) {
  return a + b;
}
export class Calculator {
  multiply(a, b) {
    return a * b;
  }
}

// Or export all at once
const PI = 3.14159;
function add(a, b) { return a + b; }
class Calculator {}

export { PI, add, Calculator };
```

**Named Imports:**

```js
// app.js
import { PI, add, Calculator } from './utils.js';

console.log(PI); // 3.14159
add(2, 3); // 5

// Rename imports
import { add as sum } from './utils.js';

// Import all
import * as utils from './utils.js';
utils.add(2, 3);
```

**Default Exports:**

```js
// user.js
export default class User {
  constructor(name) {
    this.name = name;
  }
}

// Or
class User {}
export default User;

// Or
export default function(name) {
  return { name };
}
```

**Default Imports:**

```js
// app.js
import User from './user.js'; // No curly braces
import MyUser from './user.js'; // Can rename

// Mix default and named
import User, { PI, add } from './module.js';
```

**Re-exporting:**

```js
// index.js
export { add, subtract } from './math.js';
export { default as User } from './user.js';
export * from './utils.js';
```

---

### 8.10 Dynamic Imports

**What are Dynamic Imports?**

Load modules on demand using `import()` function (returns a Promise).

**Syntax:**

```js
import('./module.js')
  .then(module => {
    module.doSomething();
  })
  .catch(error => {
    console.error('Failed to load module:', error);
  });

// With async/await
async function loadModule() {
  try {
    const module = await import('./module.js');
    module.doSomething();
  } catch (error) {
    console.error('Failed to load module:', error);
  }
}
```

**Use Cases:**

**1. Conditional Loading:**

```js
if (isLegacyBrowser()) {
  import('./polyfills.js')
    .then(polyfills => polyfills.setup());
}
```

**2. Code Splitting (Lazy Loading):**

```js
button.addEventListener('click', async () => {
  const { Chart } = await import('./chart.js');
  new Chart(data).render();
});
```

**3. Computed Module Paths:**

```js
const locale = getUserLocale();
const messages = await import(`./i18n/${locale}.js`);
```

**4. Performance Optimization:**

```js
// Load heavy module only when needed
async function processImage(image) {
  const imageProcessor = await import('./heavy-image-lib.js');
  return imageProcessor.process(image);
}
```

**Benefits:**
- Reduces initial bundle size
- Improves page load time
- Loads code on demand
- Better user experience

---

### 8.11 Symbol Type

**What is Symbol?**

A unique and immutable primitive value, often used as object property keys.

**Creating Symbols:**

```js
const sym1 = Symbol();
const sym2 = Symbol('description');
const sym3 = Symbol('description');

console.log(sym2 === sym3); // false (each symbol is unique)

// Global symbols (shared across realms)
const globalSym1 = Symbol.for('app.id');
const globalSym2 = Symbol.for('app.id');
console.log(globalSym1 === globalSym2); // true
```

**Use Cases:**

**1. Unique Property Keys:**

```js
const id = Symbol('id');
const user = {
  name: "Alice",
  [id]: 12345 // Symbol as property key
};

console.log(user[id]); // 12345
console.log(user.id); // undefined

// Symbols are not enumerable
Object.keys(user); // ["name"]
Object.getOwnPropertySymbols(user); // [Symbol(id)]
```

**2. Preventing Property Conflicts:**

```js
// Library A
const library1 = {
  [Symbol('internal')]: 'value1'
};

// Library B
const library2 = {
  [Symbol('internal')]: 'value2'
};

// No conflict!
```

**3. Meta-Programming:**

```js
const obj = {
  [Symbol.iterator]: function*() {
    yield 1;
    yield 2;
    yield 3;
  }
};

for (const num of obj) {
  console.log(num); // 1, 2, 3
}
```

**Well-Known Symbols:**

```js
// Symbol.iterator
// Symbol.toStringTag
// Symbol.hasInstance
// Symbol.toPrimitive
// And more...

class MyClass {
  get [Symbol.toStringTag]() {
    return 'MyClass';
  }
}

const obj = new MyClass();
console.log(Object.prototype.toString.call(obj)); // "[object MyClass]"
```

---

### 8.12 Iterators and Iterables

**What is an Iterable?**

An object that implements the `@@iterator` method (Symbol.iterator).

**Built-in Iterables:**
- Arrays
- Strings
- Maps
- Sets
- TypedArrays

**Example:**

```js
const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

**Creating Custom Iterables:**

```js
const range = {
  from: 1,
  to: 5,
  
  [Symbol.iterator]() {
    let current = this.from;
    let last = this.to;
    
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (const num of range) {
  console.log(num); // 1, 2, 3, 4, 5
}

// Convert to array
const arr = [...range]; // [1, 2, 3, 4, 5]
```

**Using Generators (Easier):**

```js
const range = {
  from: 1,
  to: 5,
  
  *[Symbol.iterator]() {
    for (let i = this.from; i <= this.to; i++) {
      yield i;
    }
  }
};
```

**Async Iterators:**

```js
const asyncIterable = {
  async *[Symbol.asyncIterator]() {
    for (let i = 1; i <= 3; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      yield i;
    }
  }
};

(async () => {
  for await (const num of asyncIterable) {
    console.log(num); // 1 (after 1s), 2 (after 2s), 3 (after 3s)
  }
})();
```

---

## 9. Browser APIs & Web Storage

### 9.1 localStorage vs sessionStorage vs Cookies

**Comparison:**

| Feature | localStorage | sessionStorage | Cookies |
|---------|--------------|----------------|---------|
| Capacity | ~5-10MB | ~5-10MB | ~4KB |
| Expiration | Never (until cleared) | Tab/window close | Configurable |
| Sent with requests | No | No | Yes (every HTTP request) |
| Accessible from | Any window (same origin) | Same tab only | Client & Server |
| API | Simple (key-value) | Simple (key-value) | String parsing required |
| Scope | Origin | Tab/window | Domain & path |

**localStorage:**

```js
// Set item
localStorage.setItem('username', 'Alice');
localStorage.setItem('settings', JSON.stringify({ theme: 'dark' }));

// Get item
const username = localStorage.getItem('username');
const settings = JSON.parse(localStorage.getItem('settings'));

// Remove item
localStorage.removeItem('username');

// Clear all
localStorage.clear();

// Check if exists
if (localStorage.getItem('token')) {
  // User is logged in
}

// Get number of items
console.log(localStorage.length);

// Iterate
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  console.log(key, localStorage.getItem(key));
}
```

**sessionStorage:**

```js
// Same API as localStorage
sessionStorage.setItem('tempData', 'value');
sessionStorage.getItem('tempData');
sessionStorage.removeItem('tempData');
sessionStorage.clear();
```

**Cookies:**

```js
// Set cookie
document.cookie = "username=Alice; max-age=3600; path=/";
document.cookie = "theme=dark; expires=Fri, 31 Dec 2024 23:59:59 GMT";

// Get all cookies
console.log(document.cookie); // "username=Alice; theme=dark"

// Helper functions
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [key, value] = cookie.split('=');
    if (key === name) return value;
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = `${name}=; max-age=0; path=/`;
}
```

**When to Use:**

- **localStorage**: Persistent data (user preferences, cached data)
- **sessionStorage**: Temporary data for current session (form data, wizard state)
- **Cookies**: Authentication tokens, data needed on server

---

### 9.2 IndexedDB

**What is IndexedDB?**

A low-level API for client-side storage of significant amounts of structured data, including files/blobs.

**Key Features:**
- Large storage capacity (hundreds of MB+)
- Asynchronous (non-blocking)
- Transactional (ACID compliant)
- Supports indexes for fast searching
- Stores JavaScript objects directly

**Basic Usage:**

```js
// Open database
const request = indexedDB.open('MyDatabase', 1);

// Handle database upgrade (create stores)
request.onupgradeneeded = (event) => {
  const db = event.target.result;
  
  // Create object store
  const objectStore = db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
  
  // Create indexes
  objectStore.createIndex('email', 'email', { unique: true });
  objectStore.createIndex('age', 'age', { unique: false });
};

// Handle success
request.onsuccess = (event) => {
  const db = event.target.result;
  
  // Add data
  const transaction = db.transaction(['users'], 'readwrite');
  const objectStore = transaction.objectStore('users');
  
  objectStore.add({ name: 'Alice', email: 'alice@example.com', age: 30 });
  
  transaction.oncomplete = () => {
    console.log('Data added successfully');
  };
};

// Handle error
request.onerror = (event) => {
  console.error('Database error:', event.target.error);
};
```

**CRUD Operations:**

```js
function addUser(db, user) {
  const transaction = db.transaction(['users'], 'readwrite');
  const store = transaction.objectStore('users');
  return store.add(user);
}

function getUser(db, id) {
  const transaction = db.transaction(['users'], 'readonly');
  const store = transaction.objectStore('users');
  return store.get(id);
}

function updateUser(db, user) {
  const transaction = db.transaction(['users'], 'readwrite');
  const store = transaction.objectStore('users');
  return store.put(user);
}

function deleteUser(db, id) {
  const transaction = db.transaction(['users'], 'readwrite');
  const store = transaction.objectStore('users');
  return store.delete(id);
}

// Get all users
function getAllUsers(db) {
  const transaction = db.transaction(['users'], 'readonly');
  const store = transaction.objectStore('users');
  return store.getAll();
}
```

**Use Cases:**
- Offline-first applications
- Caching large datasets
- Storing files and blobs
- Complex queries with indexes

---

### 9.3 Web Workers

**What are Web Workers?**

Scripts that run in background threads, separate from the main execution thread, allowing parallel processing without blocking the UI.

**Basic Usage:**

```js
// main.js
const worker = new Worker('worker.js');

// Send message to worker
worker.postMessage({ type: 'calculate', data: [1, 2, 3, 4, 5] });

// Receive message from worker
worker.onmessage = (event) => {
  console.log('Result from worker:', event.data);
};

// Handle errors
worker.onerror = (error) => {
  console.error('Worker error:', error);
};

// Terminate worker
worker.terminate();
```

```js
// worker.js
self.onmessage = (event) => {
  const { type, data } = event.data;
  
  if (type === 'calculate') {
    const result = data.reduce((sum, num) => sum + num, 0);
    self.postMessage(result);
  }
};
```

**Use Cases:**
- Heavy computations
- Image/video processing
- Data parsing
- Cryptography
- Background sync

**Limitations:**
- No DOM access
- No access to certain browser APIs
- Cannot share memory with main thread directly

---

### 9.4 Service Workers

**What are Service Workers?**

Scripts that run in the background, independent of web pages, enabling features like offline functionality, push notifications, and background sync.

**Basic Registration:**

```js
// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(registration => {
      console.log('Service Worker registered:', registration);
    })
    .catch(error => {
      console.error('Registration failed:', error);
    });
}
```

**Service Worker Lifecycle:**

```js
// sw.js
const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/script.js',
  '/image.jpg'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

**Use Cases:**
- Offline functionality
- Push notifications
- Background sync
- Caching strategies
- Progressive Web Apps (PWAs)

---

### 9.5 Fetch API

**Basic Usage:**

```js
// GET request
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// With async/await
async function getUsers() {
  try {
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

**POST Request:**

```js
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Alice',
    email: 'alice@example.com'
  })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

**Request Options:**

```js
const options = {
  method: 'POST', // GET, POST, PUT, DELETE, PATCH
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  },
  body: JSON.stringify(data),
  mode: 'cors', // no-cors, cors, same-origin
  credentials: 'include', // include, same-origin, omit
  cache: 'no-cache', // default, no-cache, reload, force-cache
  redirect: 'follow', // manual, follow, error
  referrerPolicy: 'no-referrer' // no-referrer, origin, etc.
};

fetch(url, options);
```

**Response Handling:**

```js
fetch(url)
  .then(response => {
    console.log(response.ok); // true if status 200-299
    console.log(response.status); // 200
    console.log(response.statusText); // "OK"
    console.log(response.headers.get('Content-Type'));
    
    // Parse response
    return response.json(); // or .text(), .blob(), .formData(), .arrayBuffer()
  })
  .then(data => console.log(data));
```

**Error Handling:**

```js
async function fetchWithErrorHandling(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      console.error('Network error:', error);
    } else {
      console.error('Fetch error:', error);
    }
    throw error;
  }
}
```

---

## 10. Performance & Optimization

### 10.1 Memoization

**What is Memoization?**

An optimization technique that caches function results based on input arguments to avoid redundant calculations.

**Simple Implementation:**

```js
function memoize(fn) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      console.log('Returning from cache');
      return cache.get(key);
    }
    
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Usage
const fibonacci = memoize(function(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

fibonacci(40); // Fast due to memoization
```

**Better Implementation (avoiding JSON.stringify):**

```js
function memoize(fn) {
  const cache = new Map();
  
  return function(arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }
    
    const result = fn(arg);
    cache.set(arg, result);
    return result;
  };
}
```

**With Expiration:**

```js
function memoizeWithTTL(fn, ttl = 5000) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    const cached = cache.get(key);
    
    if (cached && Date.now() - cached.timestamp < ttl) {
      return cached.value;
    }
    
    const result = fn.apply(this, args);
    cache.set(key, { value: result, timestamp: Date.now() });
    return result;
  };
}
```

**Use Cases:**
- Expensive calculations
- API call results
- Complex data transformations
- Recursive algorithms

---

### 10.2 Debouncing

**What is Debouncing?**

Delays function execution until after a certain amount of time has passed since it was last called.

**Implementation:**

```js
function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Usage
const search = debounce((query) => {
  console.log('Searching for:', query);
  // API call here
}, 500);

// User types: A -> B -> C -> D (within 500ms)
// Only searches for "ABCD" after 500ms of inactivity
input.addEventListener('input', (e) => search(e.target.value));
```

**With Immediate Execution:**

```js
function debounce(func, delay, immediate = false) {
  let timeoutId;
  
  return function(...args) {
    const callNow = immediate && !timeoutId;
    
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!immediate) {
        func.apply(this, args);
      }
    }, delay);
    
    if (callNow) {
      func.apply(this, args);
    }
  };
}
```

**Use Cases:**
- Search input (wait for user to stop typing)
- Window resize events
- Auto-save functionality
- Form validation

---

### 10.3 Throttling

**What is Throttling?**

Ensures a function is called at most once in a specified time period.

**Implementation:**

```js
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

// Usage
const handleScroll = throttle(() => {
  console.log('Scroll position:', window.scrollY);
}, 1000);

window.addEventListener('scroll', handleScroll);
// Function called at most once per second
```

**With Leading and Trailing:**

```js
function throttle(func, limit, options = {}) {
  let timeout, lastRan;
  const { leading = true, trailing = true } = options;
  
  return function(...args) {
    if (!lastRan && leading) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(timeout);
      
      timeout = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          if (trailing) {
            func.apply(this, args);
          }
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
```

**Debounce vs Throttle:**

```
User Events: ||||||||||||||||||||||||

Debounce:     ..................X

Throttle:     X.....X.....X.....X
```

**Use Cases:**
- Scroll events
- Mouse move tracking
- Button clicks (prevent spam)
- API rate limiting

---

### 10.4 Lazy Loading

**Image Lazy Loading:**

```js
// Native lazy loading
<img src="image.jpg" loading="lazy" alt="Description">

// JavaScript implementation
const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      imageObserver.unobserve(img);
    }
  });
});

images.forEach(img => imageObserver.observe(img));
```

**Component Lazy Loading (React):**

```js
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

**Module Lazy Loading:**

```js
// Load module only when needed
button.addEventListener('click', async () => {
  const module = await import('./heavy-module.js');
  module.doSomething();
});
```

---

### 10.5 Code Splitting

**What is Code Splitting?**

Breaking your application into smaller chunks that can be loaded on demand.

**Dynamic Imports:**

```js
// Instead of:
import HeavyLibrary from 'heavy-library';

// Use:
button.addEventListener('click', async () => {
  const { default: HeavyLibrary } = await import('heavy-library');
  new HeavyLibrary().init();
});
```

**Route-based Splitting:**

```js
// React Router example
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}
```

**Vendor Splitting:**

Separate vendor code from application code for better caching.

**Benefits:**
- Faster initial load time
- Better caching
- Improved performance
- Smaller bundle sizes

---

## 11. Advanced Concepts

### 11.1 Map vs Object

**Comparison:**

| Feature | Object | Map |
|---------|--------|-----|
| Key types | String, Symbol | Any type (objects, functions, primitives) |
| Key order | Not guaranteed (modern: insertion order for strings) | Maintains insertion order |
| Size | Manual (`Object.keys().length`) | Built-in `map.size` |
| Performance | Slower for frequent add/remove | Optimized for frequent add/remove |
| Iteration | `for...in`, `Object.keys()` | `for...of`, `forEach()` |
| Prototype | Has prototype chain | No prototype chain |
| Serialization | JSON.stringify works | Doesn't work directly |

**Examples:**

```js
// Object
const obj = {};
obj['name'] = 'Alice';
obj[1] = 'one'; // converted to string "1"

// Map
const map = new Map();
map.set('name', 'Alice');
map.set(1, 'one'); // number key
map.set({}, 'object key'); // object as key
map.set(() => {}, 'function key'); // function as key

console.log(map.size); // 4

// Iteration
map.forEach((value, key) => {
  console.log(key, value);
});

for (const [key, value] of map) {
  console.log(key, value);
}
```

**When to Use:**

- **Object**: Simple data structures, JSON compatibility, known string keys
- **Map**: Dynamic keys, frequent add/remove, non-string keys, need size property

---

### 11.2 Set Data Structure

**What is Set?**

A collection of unique values (no duplicates).

**Basic Operations:**

```js
const set = new Set();

// Add values
set.add(1);
set.add(2);
set.add(2); // Ignored (duplicate)
set.add('hello');
set.add({ a: 1 });

console.log(set.size); // 4

// Check existence
set.has(1); // true
set.has(3); // false

// Delete
set.delete(1);

// Clear all
set.clear();

// From array
const set2 = new Set([1, 2, 2, 3, 3, 4]); // Set {1, 2, 3, 4}
```

**Common Use Cases:**

**1. Remove Duplicates:**

```js
const numbers = [1, 2, 2, 3, 3, 4, 5, 5];
const unique = [...new Set(numbers)]; // [1, 2, 3, 4, 5]
```

**2. Union, Intersection, Difference:**

```js
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// Union
const union = new Set([...setA, ...setB]); // {1, 2, 3, 4, 5, 6}

// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x))); // {3, 4}

// Difference (A - B)
const difference = new Set([...setA].filter(x => !setB.has(x))); // {1, 2}
```

**3. Membership Testing:**

```js
const allowedUsers = new Set(['alice', 'bob', 'charlie']);

if (allowedUsers.has(username)) {
  // Allow access
}
```

**Iteration:**

```js
const set = new Set([1, 2, 3]);

// for...of
for (const value of set) {
  console.log(value);
}

// forEach
set.forEach(value => {
  console.log(value);
});

// Convert to array
const arr = Array.from(set);
const arr2 = [...set];
```

---

### 11.3 WeakMap & WeakSet

**WeakMap:**

**Key Characteristics:**
- Keys MUST be objects (not primitives)
- Keys are weakly referenced (garbage collected when no other references exist)
- Not iterable
- No `.size` property
- No `.clear()` method

**Usage:**

```js
const weakMap = new WeakMap();

let obj = { name: 'Alice' };
weakMap.set(obj, 'some metadata');

console.log(weakMap.get(obj)); // "some metadata"

obj = null; // Object can now be garbage collected
// weakMap entry is automatically removed
```

**Use Cases:**

**1. Private Data:**

```js
const privateData = new WeakMap();

class Person {
  constructor(name, ssn) {
    this.name = name;
    privateData.set(this, { ssn }); // SSN is private
  }
  
  getSSN() {
    return privateData.get(this).ssn;
  }
}

const person = new Person('Alice', '123-45-6789');
console.log(person.name); // "Alice"
console.log(person.ssn); // undefined (private)
console.log(person.getSSN()); // "123-45-6789"
```

**2. Caching/Memoization:**

```js
const cache = new WeakMap();

function processData(obj) {
  if (cache.has(obj)) {
    return cache.get(obj);
  }
  
  const result = /* expensive operation */;
  cache.set(obj, result);
  return result;
}
// Cache automatically cleans up when objects are garbage collected
```

**WeakSet:**

**Key Characteristics:**
- Can only store objects
- Objects are weakly referenced
- Not iterable
- No `.size` property

**Usage:**

```js
const weakSet = new WeakSet();

let obj1 = { id: 1 };
let obj2 = { id: 2 };

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true

obj1 = null; // Can be garbage collected
```

**Use Case - Marking Objects:**

```js
const processedObjects = new WeakSet();

function processObject(obj) {
  if (processedObjects.has(obj)) {
    console.log('Already processed');
    return;
  }
  
  // Process object
  console.log('Processing...');
  processedObjects.add(obj);
}
```

---

### 11.4 Proxy and Reflect

**Proxy:**

Allows you to intercept and customize operations on objects.

**Basic Syntax:**

```js
const proxy = new Proxy(target, handler);
```

**Common Traps:**

```js
const user = {
  name: 'Alice',
  age: 30
};

const handler = {
  // Get trap
  get(target, prop) {
    console.log(`Reading ${prop}`);
    return target[prop];
  },
  
  // Set trap
  set(target, prop, value) {
    console.log(`Setting ${prop} to ${value}`);
    
    if (prop === 'age' && typeof value !== 'number') {
      throw new TypeError('Age must be a number');
    }
    
    target[prop] = value;
    return true; // Indicates success
  },
  
  // Has trap (for 'in' operator)
  has(target, prop) {
    console.log(`Checking ${prop}`);
    return prop in target;
  },
  
  // DeleteProperty trap
  deleteProperty(target, prop) {
    console.log(`Deleting ${prop}`);
    delete target[prop];
    return true;
  }
};

const proxy = new Proxy(user, handler);

proxy.name; // "Reading name", returns "Alice"
proxy.age = 31; // "Setting age to 31"
'name' in proxy; // "Checking name", returns true
delete proxy.age; // "Deleting age"
```

**Use Cases:**

**1. Validation:**

```js
const validator = {
  set(target, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value) || value < 0 || value > 150) {
        throw new RangeError('Invalid age');
      }
    }
    target[prop] = value;
    return true;
  }
};

const person = new Proxy({}, validator);
person.age = 30; // OK
person.age = -5; // RangeError
```

**2. Default Values:**

```js
const withDefaults = (target, defaults) => {
  return new Proxy(target, {
    get(target, prop) {
      return prop in target ? target[prop] : defaults[prop];
    }
  });
};

const settings = withDefaults({}, { theme: 'light', lang: 'en' });
console.log(settings.theme); // "light"
console.log(settings.custom); // undefined
```

**3. Observable Objects:**

```js
function createObservable(target, callback) {
  return new Proxy(target, {
    set(target, prop, value) {
      const oldValue = target[prop];
      target[prop] = value;
      callback(prop, oldValue, value);
      return true;
    }
  });
}

const user = createObservable({}, (prop, oldVal, newVal) => {
  console.log(`${prop} changed from ${oldVal} to ${newVal}`);
});

user.name = 'Alice'; // "name changed from undefined to Alice"
```

**Reflect:**

Provides methods for interceptable JavaScript operations (same as Proxy traps).

```js
const obj = { name: 'Alice' };

// Instead of direct operations
obj.name; // Alice
obj.age = 30;
delete obj.age;

// Use Reflect
Reflect.get(obj, 'name'); // Alice
Reflect.set(obj, 'age', 30);
Reflect.deleteProperty(obj, 'age');

// Useful in Proxy handlers
const handler = {
  get(target, prop) {
    console.log(`Getting ${prop}`);
    return Reflect.get(target, prop); // Delegate to default behavior
  }
};
```

---

### 11.5 Event Delegation

**What is Event Delegation?**

Instead of attaching event listeners to multiple child elements, attach a single listener to a parent element and use event bubbling.

**Without Delegation (Inefficient):**

```js
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    console.log('Button clicked:', e.target.textContent);
  });
});

// Problem: Many event listeners, doesn't work for dynamically added buttons
```

**With Delegation (Efficient):**

```js
document.getElementById('container').addEventListener('click', (e) => {
  if (e.target.matches('.button')) {
    console.log('Button clicked:', e.target.textContent);
  }
});

// Benefits:
// - One event listener
// - Works for dynamically added elements
// - Better performance
```

**Advanced Example:**

```js
document.getElementById('todo-list').addEventListener('click', (e) => {
  // Delete button
  if (e.target.matches('.delete-btn')) {
    const todoItem = e.target.closest('.todo-item');
    todoItem.remove();
  }
  
  // Checkbox
  if (e.target.matches('.todo-checkbox')) {
    const todoItem = e.target.closest('.todo-item');
    todoItem.classList.toggle('completed');
  }
  
  // Edit button
  if (e.target.matches('.edit-btn')) {
    const todoItem = e.target.closest('.todo-item');
    editTodo(todoItem);
  }
});
```

**Benefits:**
- Fewer event listeners (better memory usage)
- Works with dynamically added elements
- Simpler code management

---

### 11.6 Memory Leaks

**Common Causes:**

**1. Global Variables:**

```js
// Bad
function createUser() {
  user = { name: 'Alice' }; // Oops, global variable
}

// Good
function createUser() {
  const user = { name: 'Alice' };
  return user;
}
```

**2. Forgotten Timers:**

```js
// Bad
setInterval(() => {
  const data = fetchData(); // Keeps running forever
  processData(data);
}, 1000);

// Good
const intervalId = setInterval(() => {
  const data = fetchData();
  processData(data);
}, 1000);

// Clear when done
function cleanup() {
  clearInterval(intervalId);
}
```

**3. Event Listeners:**

```js
// Bad
function attachListener() {
  const button = document.getElementById('button');
  button.addEventListener('click', handler);
  // Listener never removed
}

// Good
function attachListener() {
  const button = document.getElementById('button');
  button.addEventListener('click', handler);
  
  // Remove when done
  return () => button.removeEventListener('click', handler);
}

const removeListener = attachListener();
// Later...
removeListener();
```

**4. Closures Holding References:**

```js
// Bad
function createHandler() {
  const largeData = new Array(1000000).fill('data');
  
  return function() {
    console.log('Handler called');
    // largeData is kept in memory even if not used
  };
}

// Good
function createHandler() {
  // Don't capture what you don't need
  return function() {
    console.log('Handler called');
  };
}
```

**5. Detached DOM Nodes:**

```js
// Bad
const button = document.getElementById('button');
const parent = button.parentElement;
parent.removeChild(button);
// button still referenced, can't be garbage collected

// Good
const button = document.getElementById('button');
button.remove();
button = null; // Release reference
```

**Detection:**

- Chrome DevTools Memory Profiler
- Heap snapshots
- Performance monitoring

---

### 11.7 Garbage Collection

**How JavaScript GC Works:**

**Mark-and-Sweep Algorithm:**

1. **Mark Phase**: Start from root objects, mark all reachable objects
2. **Sweep Phase**: Remove unmarked (unreachable) objects

**Example:**

```js
let obj1 = { data: 'Object 1' };
let obj2 = { data: 'Object 2', ref: obj1 };
let obj3 = { data: 'Object 3', ref: obj2 };

// All objects are reachable from obj3

obj3 = null; // obj3 can be collected
// obj2 and obj1 are still reachable from obj2

obj2 = null; // obj2 can be collected
// obj1 is still reachable

obj1 = null; // obj1 can now be collected
```

**Generational GC:**

- **Young Generation**: Newly created objects, frequently collected
- **Old Generation**: Long-lived objects, less frequently collected

**Reference Counting (old approach, has issues):**

```js
// Circular reference problem
function createCycle() {
  const obj1 = {};
  const obj2 = {};
  
  obj1.ref = obj2;
  obj2.ref = obj1;
  
  // In reference counting, these would never be collected
  // Modern GC (mark-and-sweep) handles this correctly
}
```

**Optimization Tips:**

```js
// Set to null when done
let largeArray = new Array(1000000);
// Use array...
largeArray = null; // Help GC

// Use block scope
{
  const temp = expensiveOperation();
  // Use temp...
} // temp can be collected here

// WeakMap/WeakSet for caching
const cache = new WeakMap(); // Allows GC
```

---

### 11.8 Double Tilde Operator (~~)

**What is ~~?**

A bitwise NOT operator applied twice, used as a fast way to convert to integer and floor the number.

**How it Works:**

```js
~~4.9; // 4
~~(-4.9); // -4
~~'5'; // 5
~~'hello'; // 0
~~true; // 1
~~null; // 0

// Equivalent to:
Math.trunc(4.9); // 4 (modern alternative)
parseInt(4.9); // 4
```

**Why it Works:**

```js
// First ~: inverts bits and converts to 32-bit integer
// Second ~: inverts back
~4.9; // -5 (converted to int 4, then inverted)
~~4.9; // 4 (inverted back)
```

**Not Recommended Today:**

```js
// Instead use:
Math.floor(4.9); // 4
Math.trunc(4.9); // 4 (removes decimal part)
parseInt(4.9); // 4

// Clearer and more maintainable
```

**Limitations:**

- Only works with 32-bit numbers
- Confusing for other developers
- No performance benefit in modern engines

---

### 11.9 console.table()

**What is it?**

Displays tabular data as a table in the console.

**Usage:**

```js
// Array of objects
const users = [
  { name: 'Alice', age: 30, role: 'Admin' },
  { name: 'Bob', age: 25, role: 'User' },
  { name: 'Charlie', age: 35, role: 'Moderator' }
];

console.table(users);

// Output:
// ┌─────────┬──────────┬─────┬────────────┐
// │ (index) │   name   │ age │    role    │
// ├─────────┼──────────┼─────┼────────────┤
// │    0    │ 'Alice'  │ 30  │  'Admin'   │
// │    1    │  'Bob'   │ 25  │   'User'   │
// │    2    │ 'Charlie'│ 35  │'Moderator' │
// └─────────┴──────────┴─────┴────────────┘
```

**Select Columns:**

```js
console.table(users, ['name', 'age']);
// Shows only name and age columns
```

**Object Data:**

```js
const person = {
  name: 'Alice',
  age: 30,
  email: 'alice@example.com',
  address: {
    city: 'NYC',
    zip: '10001'
  }
};

console.table(person);
```

**Nested Arrays:**

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.table(matrix);
```

**Benefits:**
- Better visualization
- Easier to read complex data
- Great for debugging

---

### 11.10 Collation

**What is Collation?**

A set of rules for comparing and sorting text in databases and programming.

**What it Defines:**

1. **Alphabetical Order**: How characters are sorted
2. **Case Sensitivity**: Whether 'A' equals 'a'
3. **Accent Sensitivity**: Whether 'e' equals 'é'
4. **Language-Specific Rules**: Different languages sort differently

**JavaScript Internationalization:**

```js
// Case-insensitive sorting
const names = ['Alice', 'bob', 'Charlie'];

names.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
// ['Alice', 'bob', 'Charlie']

// Case-sensitive sorting
names.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'case' }));
// ['Alice', 'Charlie', 'bob']
```

**Options:**

```js
const options = {
  sensitivity: 'base',     // 'base', 'accent', 'case', 'variant'
  numeric: true,           // Numeric sorting
  ignorePunctuation: true, // Ignore punctuation
  caseFirst: 'upper'       // 'upper', 'lower', 'false'
};

'10'.localeCompare('2', 'en', { numeric: true }); // 1 (10 > 2)
'10'.localeCompare('2', 'en', { numeric: false }); // -1 ('10' < '2' alphabetically)
```

**Database Collation:**

In SQL databases like MySQL:
```sql
-- Case-insensitive
utf8_general_ci

-- Case-sensitive
utf8_bin
```

**Use Cases:**
- Sorting user names
- Search functionality
- Database queries
- Internationalized applications

---

### 11.11 Deno Runtime

**What is Deno?**

A modern, secure runtime for JavaScript and TypeScript built on V8, Rust, and Tokio.

**Key Features:**

1. **Secure by Default:**
   - No file, network, or environment access without explicit permission
   - Permissions required via flags

```bash
deno run --allow-net --allow-read script.ts
```

2. **TypeScript Built-in:**
   - No configuration needed
   - Direct TypeScript execution

```typescript
// script.ts
const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greet("Deno"));
```

3. **ES Modules:**
   - Uses URL imports (no node_modules)
   - Cached dependencies

```typescript
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

serve((req) => new Response("Hello World"));
```

4. **Standard Library:**
   - Audited standard modules
   - No external dependencies needed

5. **Built-in Tooling:**
   - Formatter: `deno fmt`
   - Linter: `deno lint`
   - Test runner: `deno test`
   - Bundler: `deno bundle`
   - Documentation: `deno doc`

**Deno vs Node.js:**

| Feature | Node.js | Deno |
|---------|---------|------|
| Security | Open by default | Secure by default |
| TypeScript | Requires setup | Built-in |
| Package Manager | npm/yarn | URL imports |
| Modules | CommonJS/ESM | ESM only |
| Compatibility | Mature ecosystem | Growing |

**Example Server:**

```typescript
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

const handler = (request: Request): Response => {
  const { pathname } = new URL(request.url);
  
  if (pathname === "/") {
    return new Response("Home Page");
  }
  
  return new Response("Not Found", { status: 404 });
};

serve(handler, { port: 8000 });
```

**When to Use Deno:**
- New projects prioritizing security
- TypeScript-first development
- Simplified dependency management
- Modern JavaScript features

---

**End of Guide**

This comprehensive JavaScript interview guide covers fundamental to advanced concepts. Use it as a reference for interviews, learning, or refreshing your JavaScript knowledge.

**Happy Coding! 🚀**
