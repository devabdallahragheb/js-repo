#  JavaScript Interview 
# JavaScript Objects – Interview Questions & Answers

---

# 🔥 18. What is prototype chain?

If property not found → JS looks in prototype → then next prototype → until null.

---

# 🔥 19. What is object immutability?

Prevent changes using:

- Object.freeze()
- Object.seal()

---

# 🔥 20. Why objects are important in JS?

Because everything in JS is built on objects:

- Arrays
- Functions
- Promises
- DOM elements

---

# 🔥 21. What is JSON vs Object?

| JSON          | Object             |
| ------------- | ------------------ |
| String format | JS structure       |
| No functions  | Can have functions |

---

# 🔥 22. What is JSON.stringify?

Convert object → string

```js
JSON.stringify(obj);
```

---

# 🔥 23. What is JSON.parse?

Convert string → object

```js
JSON.parse(str);
```

---

# 🔥 24. What is object reference issue?

```js
const a = { x: 1 };
const b = a;
```

Both point to same memory.

---

# 🔥 25. What is dynamic keys in object?

```js
const key = "name";
const obj = {
  [key]: "Ali"
};
```

---

# 🔥 26. What is computed property?

```js
{ ["a" + "b"]: 123 }
```

---

# 🔥 27. How to merge objects?

```js
const c = { ...a, ...b };
```

---

# 🔥 28. What is Object.assign?

```js
Object.assign({}, a, b);
```

---

# 🔥 29. What is optional chaining?

```js
obj?.address?.city
```

---

# 🔥 30. What is nullish coalescing?

```js
const name = obj.name ?? "default";
```

---

# 🚀 31. Why JSON.stringify is risky in memoization?

- Key collisions
- Order issues
- Performance cost

---

# 🚀 32. Why objects are not ideal cache keys?

Because keys are:

- Only strings/symbols
- Not safe for deep structures

---

# 🎯 Final Summary

# 🔷 Prototype – Interview Questions & Answers

---

# 🧠 33. What is a prototype in JavaScript?

**Answer:**
Every JavaScript object has an internal property called `[[Prototype]]` (accessible via `__proto__` or `Object.getPrototypeOf`) that it uses to inherit properties and methods.

```js
const obj = {};
console.log(obj.__proto__); // Object.prototype
```

---

# 🧠 34. What is the prototype chain?

**Answer:**
When accessing a property, JavaScript looks:
1. On the object itself
2. On its prototype
3. On the prototype’s prototype
4. Continues until `null`

```js
const arr = [];
// arr → Array.prototype → Object.prototype → null
```

---

# 🧠 35. How to get/set prototype?

```js
Object.getPrototypeOf(obj);
Object.setPrototypeOf(obj, newProto);
```

---

# 🧠 36. What is `__proto__`?

**Answer:**
A getter/setter to access an object’s internal prototype (not recommended for production use).

```js
obj.__proto__;
```

---

# 🧠 37. What is `prototype` vs `__proto__`?

| prototype | __proto__ |
|----------|----------|
| Property of constructor functions | Property of all objects |
| Used to define methods | Used to access prototype |

---

# 🧠 38. How does inheritance work using prototypes?

```js
const animal = {
  speak() {
    return "sound";
  }
};

const dog = Object.create(animal);
dog.bark = () => "woof";

console.log(dog.speak()); // inherited
```

---

# 🧠 39. What is constructor function prototype?

```js
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return "Hello " + this.name;
};

const p = new Person("Ali");
p.greet();
```

---

# 🧠 40. What happens when using `new`?

**Answer:**
1. Creates a new object
2. Sets prototype (`__proto__`) to constructor’s `prototype`
3. Binds `this`
4. Returns object

---

# 🧠 41. What is `Object.create()`?

**Answer:**
Creates a new object with a specified prototype.

```js
const parent = { a: 1 };
const child = Object.create(parent);
```

---

# 🧠 42. What is `hasOwnProperty`?

**Answer:**
Checks if property exists on object itself (not prototype).

```js
obj.hasOwnProperty("key");
```

---

# 🧠 43. Difference between own property and prototype property?

| Own Property | Prototype Property |
|-------------|-------------------|
| Defined directly on object | Inherited from prototype |

---

# 🧠 44. What is method sharing using prototype?

**Answer:**
Methods defined on prototype are shared across all instances (memory efficient).

---

# 🧠 45. What is prototypal inheritance?

**Answer:**
Objects inherit directly from other objects.

---

# 🧠 46. How to check prototype chain?

```js
console.log(obj instanceof Constructor);
```

---

# 🧠 47. What is `instanceof`?

**Answer:**
Checks if prototype exists in object’s prototype chain.

```js
p instanceof Person;
```

---

# 🧠 48. What is `isPrototypeOf`?

```js
Person.prototype.isPrototypeOf(p);
```

---

# 🧠 49. What is `Object.prototype`?

**Answer:**
Top-level prototype for all objects.

---

# 🧠 50. Can you modify built-in prototypes?

```js
Array.prototype.myMethod = function () {};
```

⚠️ Not recommended (can break apps)

---

# 🧠 51. What is ES6 class vs prototype?

**Answer:**
Classes are syntactic sugar over prototype.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hello";
  }
}
```

---

# 🎯 Prototype Final Summary


# 🔷 call vs apply vs bind – Interview Questions & Answers

---

# 🧠 52. What are call, apply, and bind?

**Answer:**
They are methods used to control the value of `this` in JavaScript functions.

---

# 🧠 53. What is call()?

**Answer:**
Invokes a function immediately and passes arguments individually.

```js
func.call(thisArg, arg1, arg2);
```

---

# 🧠 54. What is apply()?

**Answer:**
Invokes a function immediately and passes arguments as an array.

```js
func.apply(thisArg, [arg1, arg2]);
```

---

# 🧠 55. What is bind()?

**Answer:**
Returns a new function with bound `this`, does NOT execute immediately.

```js
const newFn = func.bind(thisArg);
```

---

# 🧠 56. Example (call vs apply vs bind)

```js
const employee = { name: "Ali" };

function greet(msg) {
  console.log(msg + " " + this.name);
}

greet.call(employee, "Hello");
greet.apply(employee, ["Hello"]);

const bound = greet.bind(employee);
bound("Hello");
```

---

# 🧠 57. Key Differences

| Method | Invoke Immediately | Arguments | Return |
|--------|------------------|----------|--------|
| call | ✅ | Comma-separated | Result |
| apply | ✅ | Array | Result |
| bind | ❌ | Optional preset | New function |

---

# 🧠 58. When to use each?

- Use **call** → when arguments are known
- Use **apply** → when arguments are in array
- Use **bind** → when you need reusable function later

---

# 🧠 59. Trick Question (Important)

```js
const obj = { x: 10 };

function test() {
  return this.x;
}

const fn = test.bind(obj);
console.log(fn());
```

👉 Output: `10`

---

# 🧠 60. Can bind be chained?

```js
fn.bind(obj1).bind(obj2);
```

👉 Only first bind works ❗

---

# 🧠 61. call vs apply performance?

- call → slightly faster
- apply → useful for dynamic arrays

---

# 🧠 62. Real-world use cases

- Borrow methods
- Fix `this` in callbacks
- Partial function application

---

# 🎯 Final Summary (call/apply/bind)
# 🔷 Object vs Map vs Set – Interview Questions & Answers

---

# 🧠 63. What are Object, Map, and Set?

**Answer:**
They are data structures in JavaScript used to store collections of data.

- Object → key-value pairs
- Map → key-value pairs (any key type)
- Set → unique values only

---

# 🧠 64. What is an Object?

- Keys are strings or symbols
- Used for structured data

```js
const obj = { name: "Ali" };
```

---

# 🧠 65. What is a Map?

- Keys can be ANY type (object, function, etc.)
- Maintains insertion order

```js
const map = new Map();
map.set("name", "Ali");
```

---

# 🧠 66. What is a Set?

- Stores unique values
- No duplicate entries

```js
const set = new Set([1, 2, 2, 3]);
console.log(set); // {1,2,3}
```

---

# 🧠 67. Object vs Map

| Feature | Object | Map |
|--------|--------|-----|
| Key type | String/Symbol | Any type |
| Order | Not guaranteed (older JS) | Maintains order |
| Performance | Slower for frequent ops | Faster for large data |
| Size | Manual | map.size |

---

# 🧠 68. Map vs Set

| Feature | Map | Set |
|--------|-----|-----|
| Stores | Key-value | Values only |
| Unique | Keys unique | Values unique |

---

# 🧠 69. When to use Object vs Map?

- Use Object → simple data structures
- Use Map → dynamic keys, frequent add/remove

---

# 🧠 70. When to use Set?

- Remove duplicates
- Membership check

```js
set.has(2);
```

---

# 🧠 71. Common operations

### Object
```js
obj.key = value;
delete obj.key;
```

### Map
```js
map.set(key, value);
map.get(key);
map.has(key);
map.delete(key);
```

### Set
```js
set.add(value);
set.has(value);
set.delete(value);
```

---

# 🧠 72. WeakMap & WeakSet (Advanced)

- Keys must be objects
- Weak references (GC friendly)

```js
const wm = new WeakMap();
```

---

# 🎯 Final Summary (Object vs Map vs Set)
What is the Temporal Dead Zone
The Temporal Dead Zone (TDZ) refers to the period between the start of a block and the point where a variable declared with let or const is initialized. During this time, the variable exists in scope but cannot be accessed, and attempting to do so results in a ReferenceError.

This behavior is part of JavaScript's ES6 (ECMAScript 2015) specification and applies only to variables declared with let and const, not var. Variables declared with var are hoisted and initialized with undefined, so accessing them before the declaration does not throw an error, though it can lead to unexpected results.

Memoization is an optimization technique where a function **stores (caches) the result of previous computations** and returns the cached result when the same inputs occur again.

👉 It improves performance by avoiding repeated calculations.

What is Hoisting
Hoisting is JavaScript's default behavior where variable and function declarations are moved to the top of their scope before code execution. This means you can access certain variables and functions even before they are defined in the code.
# Closures in JavaScript

## What is a Closure?

A closure is created when a function is defined inside another function and accesses variables from its outer function’s scope, even after the outer function has finished execution.

Closures are used for:
- Data encapsulation (private variables)
- Maintaining state
- Functional patterns like currying and function factories

# IndexedDB & Web Storage in JavaScript

---

## What is IndexedDB?

IndexedDB is a **low-level client-side database** used to store large amounts of structured data in the browser.

👉 It supports:
- Key-value storage
- Complex data types (objects, files, blobs)
- Indexes for fast searching

---

## Key Features of IndexedDB

- Large storage capacity (more than localStorage)
- Asynchronous (non-blocking)
- Supports transactions
- Works like a NoSQL database in the browser

---

## Use Cases

- Offline apps
- Large data caching
- File storage (images, videos, blobs)
- Complex structured data

---

## What is Web Storage?

Web Storage is a browser API used to store **key-value data** locally in the user's browser in a simpler way than cookies.

It provides two types of storage:

---

## 1. Local Storage

- Stores data with **no expiration**
- Data persists even after browser restart

```js
localStorage.setItem("user", "Ali");
localStorage.getItem("user");
What are the differences between cookie, local storage and session storage
Below are some of the differences between cookie, local storage and session storage,

Feature	Cookie	Local storage	Session storage
Accessed on client or server side	Both server-side & client-side. The set-cookie HTTP response header is used by server inorder to send it to user.	client-side only	client-side only
Expiry	Manually configured using Expires option	Forever until deleted	until tab is closed
SSL support	Supported	Not supported	Not supported
Maximum data size	4KB	5 MB	5MB
Accessible from	Any window	Any window	Same tab
Sent with requests	Yes	No	No


# Promises in JavaScript

## What is a Promise?

A Promise is an object that represents the **result of an asynchronous operation**.

It can be in one of three states:
- Pending
- Fulfilled (Resolved)
- Rejected

---

## Basic Example

```js
const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Done");
  } else {
    reject("Error");
  }
});

promise
  .then(res => console.log(res))
  .catch(err => console.log(err));
Types of Promises (States)
1. Pending
Initial state
Operation not completed yet
2. Fulfilled (Resolved)
Operation completed successfully
3. Rejected
Operation failed
Promise Methods
1. Promise.all()

Runs multiple promises in parallel.

👉 Fails if any one fails

Promise.all([p1, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log(err));

✔ Use when all promises must succeed

2. Promise.allSettled()

Waits for all promises to finish (success or failure).

Promise.allSettled([p1, p2, p3])
  .then(res => console.log(res));

✔ Returns status of each promise
✔ Never fails

3. Promise.race()

Returns the result of the first settled promise (resolve or reject).

Promise.race([p1, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log(err));

✔ First finished wins

4. Promise.any()

Returns the first successful (resolved) promise.

Promise.any([p1, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log(err));

✔ Ignores failures
✔ Fails only if all reject

Comparison Table
Method	Waits for	Fails when	Returns
Promise.all	All	Any fail	Array of results
Promise.allSettled	All	Never	Status of all
Promise.race	First	First done	First result
Promise.any	First success	All fail	First success


What is a callback function
A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action. Let's take a simple example of how to use callback function
Why do we need callbacks
The callbacks are needed because javascript is an event driven language. That means instead of waiting for a response, javascript will keep executing while listening for other events. Let's take an example with the first function invoking an API call(simulated by setTimeout) and the next function which logs the message.
What is a callback hell
Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. The callback hell looks like below,

# JavaScript Strict Mode

## What is Strict Mode?

Strict mode is a feature in JavaScript that enables a **more secure and restricted version** of JavaScript.

It helps you:
- Catch errors early
- Prevent unsafe actions
- Write cleaner code

---

## How to Enable Strict Mode

### 1. At the top of a file
```js
"use strict";

x = 10; // ❌ Error (x is not defined)
2. Inside a function
function test() {
  "use strict";
  y = 20; // ❌ Error
}
What Strict Mode Changes
1. Prevents Undeclared Variables
"use strict";
x = 5; // ❌ ReferenceError
2. No Duplicate Parameter Names
"use strict";
function sum(a, a) { // ❌ Error
  return a + a;
}
3. Prevents Deleting Variables
"use strict";
let x = 10;
delete x; // ❌ Error
4. this is Undefined in Functions
"use strict";
function test() {
  console.log(this); // undefined (not window)
}
test();
5. Prevents Octal Syntax
"use strict";
let x = 012; // ❌ Error
Why Use Strict Mode?

✔ Safer code
✔ Better debugging
✔ Prevents silent errors
✔ Makes JavaScript more predictable


What is the difference between null and undefined
Below are the main differences between null and undefined,

Null	Undefined
It is an assignment value which indicates that variable points to no object.	It is not an assignment value where a variable has been declared but has not yet been assigned a value.
Type of null is object	Type of undefined is undefined
The null value is a primitive value that represents the null, empty, or non-existent reference.	The undefined value is a primitive value used when a variable has not been assigned a value.
Indicates the absence of a value for a variable	Indicates absence of variable itself
Converted to zero (0) while performing primitive operations	Converted to NaN while performing primitive operations

# What is `eval()` in JavaScript?

## Definition

`eval()` is a JavaScript function that **executes a string as JavaScript code**.

```js
console.log(eval("1 + 2")); // 3

Here, the string "1 + 2" is evaluated as actual code.

What eval() can do

It can execute:

Expressions
Variables
Statements
Multiple lines of code
Example 1: Expression
eval("10 + 5"); // 15
Example 2: Variables
let x = 10;
eval("x + 5"); // 15
Example 3: Multiple statements
eval(`
  let a = 5;
  let b = 10;
  a + b;
`); // 15
Why eval() is dangerous ❌

Using eval() is not recommended because:

1. Security risk

It can execute malicious code:

eval("alert('hacked')");
2. Performance issue
Slower execution
Prevents JavaScript engine optimizations
3. Hard to debug
Code becomes unpredictable
Difficult to maintain
Safer Alternatives

Instead of eval(), use:

1. Direct expressions
let result = 1 + 2;
2. JSON.parse (for JSON strings)
JSON.parse('{"name":"Ali"}');
3. Function constructor (rare use)
const fn = new Function("a", "b", "return a + b");
fn(2, 3); // 5
What is V8 JavaScript engine
V8 is an open source high-performance JavaScript engine used by the Google Chrome browser, written in C++. It is also being used in the node.js project. It implements ECMAScript and WebAssembly, and runs on Windows 7 or later, macOS 10.12+, and Linux systems that use x64, IA-32, ARM, or MIPS processors. Note: It can run standalone, or can be embedded into any C++ application.

List down some of the features of ES6
Below are the list of some new features of ES6,

Support for constants or immutable variables
Block-scope support for variables, constants and functions
Arrow functions
Default parameters
Rest and Spread Parameters
Template Literals
Multi-line Strings
Destructuring Assignment
Enhanced Object Literals
Promises
Classes
Modules

What are template literals
Template literals or template strings are string literals allowing embedded expressions. These are enclosed by the back-tick (`) character instead of double or single quotes. In ES6, this feature enables using dynamic expressions as below,

var greeting = `Welcome to JS World, Mr. ${firstName} ${lastName}.`;
In ES5, you need break string like below,

var greeting = 'Welcome to JS World, Mr. ' + firstName + ' ' + lastName.`

What are dynamic imports
The dynamic imports using import() function syntax allows us to load modules on demand by using promises or the async/await syntax. Currently this feature is in stage4 proposal. The main advantage of dynamic imports is reduction of our bundle's sizes, the size/payload response of our requests and overall improvements in the user experience. The syntax of dynamic imports would be as below,

import("./Module").then((Module) => Module.method());
⬆ Back to Top

What are the use cases for dynamic imports
Below are some of the use cases of using dynamic imports over static imports,

Import a module on-demand or conditionally. For example, if you want to load a polyfill on legacy browser

if (isLegacyBrowser()) {
    import(···)
    .then(···);
}
Compute the module specifier at runtime. For example, you can use it for internationalization.

import(`messages_${getLocale()}.js`).then(···);
Import a module from within a regular script instead a module.

What is Collation?

Collation is a set of rules that determine how text is compared and sorted in databases or programming languages.

It defines:

Alphabetical order
Case sensitivity (A vs a)
Accent sensitivity (é vs e)
Language-specific sorting rules
Simple Example

If you sort:

Apple
banana
Cherry

Depending on collation, results may differ:

Case-insensitive collation:
Apple
banana
Cherry
Case-sensitive collation:
Apple
Cherry
banana
Collation in Databases (MySQL / SQL Server)

Collation controls how string comparison works in queries like:

SELECT * FROM users
WHERE name = 'ali';
Example:
utf8_general_ci → case-insensitive
utf8_bin → case-sensitive
Types of Collation Behavior
1. Case Sensitivity
A = a (case-insensitive)
A ≠ a (case-sensitive)
2. Accent Sensitivity
e = é (accent-insensitive)
e ≠ é (accent-sensitive)
3. Language Rules

Different languages sort differently:

English: A → Z
German/French: special characters treated differently
Example in MySQL
CREATE TABLE users (
  name VARCHAR(50) COLLATE utf8_general_ci
);
Why Collation is Important?

✔ Accurate searching
✔ Proper sorting in UI
✔ Language correctness
✔ Consistent database behavior

Key Point

👉 Collation = rules for comparing and sorting text (case, accents, language)

What paradigm is Javascript

JavaScript is a multi-paradigm programming language.

That means it supports more than one programming style (paradigm).

1. Procedural (Imperative) Programming

You write step-by-step instructions.

let a = 5;
let b = 10;
let sum = a + b;
console.log(sum);
2. Object-Oriented Programming (OOP)

JavaScript supports objects, classes, and inheritance.

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

const u = new User("Ali");
u.greet();

✔ Supports:

Encapsulation
Inheritance (prototype-based)
Polymorphism
3. Functional Programming

JavaScript treats functions as first-class citizens.

const add = (a, b) => a + b;

const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

✔ Supports:

Higher-order functions
Pure functions
Immutability (to some extent)
4. Event-Driven Programming

Very important in browsers and Node.js.

button.addEventListener("click", () => {
  console.log("Clicked!");
});
5. Asynchronous Programming

JavaScript is heavily async-based.

setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

Also includes:

Promises
async/await
Key Idea

👉 JavaScript is multi-paradigm:

Procedural
Object-Oriented
Functional
Event-Driven
Asynchronous

What is the purpose of double tilde operator
Double Tilde (~~) Operator in JavaScript

The double tilde operator (~~) is a shortcut used to convert a number to an integer by removing its decimal part.

It works like a faster alternative to:

Math.trunc()
How it works

The tilde (~) is a bitwise NOT operator.

So:

~x = bitwise NOT of x
~~x = NOT of NOT x → effectively converts to integer
Example
console.log(~~4.9);  // 4
console.log(~~4.1);  // 4
console.log(~~-4.9); // -4

👉 It removes the decimal part (truncates toward zero)

Equivalent Methods
1. Math.trunc (recommended)
Math.trunc(4.9); // 4
2. parseInt (string-based)
parseInt(4.9); // 4
3. Double tilde
~~4.9; // 4
Important Behavior
Works like truncation (not floor)
~~-4.9; // -4  (NOT -5)
Math.floor(-4.9); // -5
Why developers used it?

✔ Very fast bitwise operation
✔ Short syntax
✔ Common in older JS codebases

Limitations / Problems

❌ Only works with 32-bit integers
❌ Not readable for beginners
❌ Can behave unexpectedly with large numbers

Example:

~~(2**31 + 1); // unexpected overflow behavior
Key Takeaway

👉 ~~x = quick way to convert a number to an integer (truncate decimal part)

But modern best practice is:
✔ Math.trunc(x) (clean + readable)

What is the difference between a parameter and an argument
Parameter is the variable name of a function definition whereas an argument represents the value given to a function when it is invoked. Let's explain this with a simple function

function myFunction(parameter1, parameter2, parameter3) {
  console.log(arguments[0]); // "argument1"
  console.log(arguments[1]); // "argument2"
  console.log(arguments[2]); // "argument3"
}
myFunction("argument1", "argument2", "argument3");

What is the purpose of some method in arrays
The some() method is used to test whether at least one element in the array passes the test implemented by the provided function. The method returns a boolean value. Let's take an example to test for any odd elements,

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var odd = (element) => element % 2 !== 0;

console.log(array.some(odd)); // true (the odd element exists)

Shallow Copy vs Deep Copy in JavaScript

When you copy an object in JavaScript, you either copy:

only the first level (shallow copy)
or everything including nested objects (deep copy)
1. Shallow Copy

A shallow copy copies only the top-level properties.

👉 Nested objects are still shared (referenced).

Example
const user = {
  name: "Ali",
  address: {
    city: "Dubai"
  }
};

const copy = { ...user };

copy.name = "Ahmed";
copy.address.city = "Cairo";

console.log(user.address.city); // Cairo ❗ changed in original
Why?

Because address is an object → both original and copy point to the same reference.

Ways to create shallow copy
Spread operator {...obj}
Object.assign()
const copy = Object.assign({}, user);
2. Deep Copy

A deep copy creates a completely independent copy, including nested objects.

👉 No shared references at all.

Example
const user = {
  name: "Ali",
  address: {
    city: "Dubai"
  }
};

const copy = JSON.parse(JSON.stringify(user));

copy.address.city = "Cairo";

console.log(user.address.city); // Dubai ✅ unchanged
Modern way (best practice)
const copy = structuredClone(user);

✔ Handles nested objects properly
✔ Supports more data types than JSON method

Key Differences
Feature	Shallow Copy	Deep Copy
Copies level	First level only	All levels
Nested objects	Shared references	Fully independent
Safety	Risk of mutation bugs	Safe
Performance	Faster	Slower
Simple Analogy
Shallow copy → photocopy of a book cover only
Deep copy → photocopy of the entire book page by page
When to use?
Use shallow copy when:

✔ Data is flat (no nested objects)
✔ Performance is important

Use deep copy when:

✔ Nested objects exist
✔ You need full independence

How do you create specific number of copies of a string
The repeat() method is used to construct and return a new string which contains the specified number of copies of the string on which it was called, concatenated together. Remember that this method has been added to the ECMAScript 2015 specification. Let's take an example of Hello string to repeat it 4 times,

"Hello".repeat(4); // 'HelloHelloHelloHello'

How do you display data in a tabular format using console object
The console.table() is used to display data in the console in a tabular format to visualize complex arrays or objects.

ere’s a clear and interview-friendly explanation 👇

What is a Microtask in JavaScript?

A microtask is a high-priority asynchronous task that runs:

👉 after the current synchronous code finishes
👉 before the next event loop (macrotask)

Simple Event Loop Order
Execute sync code (call stack)
Run microtasks queue
Run macrotasks queue (like setTimeout, setInterval)
Example
console.log("Start");

setTimeout(() => {
  console.log("Macrotask");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask");
});

console.log("End");
Output:
Start
End
Microtask
Macrotask
Why Microtasks Run First?

Because JavaScript engine clears the microtask queue completely before moving to macrotasks.

Sources of Microtasks
1. Promises
Promise.resolve().then(() => {
  console.log("Promise microtask");
});
2. queueMicrotask()
queueMicrotask(() => {
  console.log("queueMicrotask");
});
3. async/await
async function test() {
  await null;
  console.log("after await (microtask)");
}
test();
4. MutationObserver (Browser only)

Used to detect DOM changes.

What is queueMicrotask?

queueMicrotask() schedules a function to run:

✔ After current code finishes
✔ Before rendering
✔ Before macrotasks

Example
console.log("Start");

queueMicrotask(() => {
  console.log("Inside microtask");
});

console.log("End");
Output:
Start
End
Inside microtask
Microtask vs Macrotask
Type	Examples	Priority
Microtask	Promise, queueMicrotask	High
Macrotask	setTimeout, setInterval	Low
What is Event Loop?

The event loop is the mechanism that:
👉 executes code
👉 handles async tasks
👉 manages microtasks and macrotasks

Browser vs Node.js Event Loop
Browser Event Loop

Handles:

UI events (click, input)
rendering
HTTP requests
Node.js Event Loop

Handles:

file system operations
network requests
timers
Key Interview Points

✔ Microtasks have higher priority than macrotasks
✔ Promises go to microtask queue
✔ Microtask queue is fully drained before next macrotask
✔ queueMicrotask gives manual control

One-line Summary

👉 Microtask = high priority async task executed right after sync code and before macrotasks.
What is Deno?

Deno is a modern runtime for JavaScript and TypeScript, created by Ryan Dahl (the same creator of Node.js).

👉 It is designed to fix many limitations of Node.js and provide a secure, modern, and simpler runtime.

Simple Definition

👉 Deno = secure runtime for JavaScript + TypeScript + Web APIs

Key Features of Deno
1. Built-in TypeScript Support

No setup needed.

console.log("Hello from Deno");

✔ No tsconfig, no compilation step

2. Secure by Default 🔒

Deno does NOT allow file, network, or environment access unless you explicitly enable it.

Example:

deno run app.ts

❌ No file access allowed by default

To allow file access:

deno run --allow-read app.ts
3. No node_modules ❌

Deno uses URL-based imports instead of npm.

import { serve } from "https://deno.land/std/http/server.ts";

✔ No package.json
✔ No node_modules

4. Built-in Standard APIs

Deno includes:

fetch API
WebSocket
timers
streams

Just like browsers.

5. Single Executable

Deno is shipped as a single binary.

6. Permission-Based Security Model

You must explicitly allow:

file system (--allow-read)
network (--allow-net)
environment variables (--allow-env)
Example HTTP Server
import { serve } from "https://deno.land/std/http/server.ts";

serve(() => new Response("Hello Deno"));

Run:

deno run --allow-net server.ts
Deno vs Node.js
Feature	Deno	Node.js
Creator	Ryan Dahl	Ryan Dahl (earlier)
TypeScript	Built-in	Needs setup
Security	Secure by default	No default security
Modules	URL imports	npm + node_modules
Config file	Optional	package.json
API style	Web standard APIs	Node-specific APIs
Why Deno was created?

Node.js had issues like:

security problems (full system access)
messy dependency system (node_modules)
outdated module design (CommonJS)

Deno fixes these.

When to use Deno?

✔ Modern backend APIs
✔ Secure applications
✔ TypeScript-first projects
✔ Lightweight services

Key Takeaway

👉 Deno is a secure, modern runtime for JavaScript/TypeScript with built-in TypeScript, no node_modules, and strict permissions.
What is currying in JavaScript?
Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.

Example of a curried function:

function add (a) {
  return function(b){
    return a + b;
  }
}

add(3)(4) 
For Example, if we have a function f(a,b), then the function after currying, will be transformed to f(a)(b).

By using the currying technique, we do not change the functionality of a function, we just change the way it is invoked.

Let’s see currying in action:

function multiply(a,b){
  return a*b;
}

function currying(fn){
  return function(a){
    return function(b){
      return fn(a,b);
    }
  }
}

var curriedMultiply = currying(multiply);

multiply(4, 3); // Returns 12

curriedMultiply(4)(3); // Also returns 12
As one can see in the code above, we have transformed the function multiply(a,b) to a function curriedMultiply , which takes in one parameter at a time.

What are arrow functions?
Arrow functions were introduced in the ES6 version of javascript. They provide us with a new and shorter syntax for declaring functions. Arrow functions can only be used as a function expression.

Let’s compare the normal function declaration and the arrow function declaration in detail:

// Traditional Function Expression
var add = function(a,b){
  return a + b;
}

// Arrow Function Expression
var arrowAdd = (a,b) => a + b;
Arrow functions are declared without the function keyword. If there is only one returning expression then we don’t need to use the return keyword as well in an arrow function as shown in the example above. Also, for functions having just one line of code, curly braces { } can be omitted.

// Traditional function expression
var multiplyBy2 = function(num){
  return num * 2;
}
// Arrow function expression
var arrowMultiplyBy2 = num => num * 2;
If the function takes in only one argument, then the parenthesis () around the parameter can be omitted as shown in the code above. 

var obj1 = {
  valueOfThis: function(){
    return this;
  }
}
var obj2 = {
  valueOfThis: ()=>{
    return this;
  }
}

obj1.valueOfThis(); // Will return the object obj1
obj2.valueOfThis(); // Will return window/global object
The biggest difference between the traditional function expression and the arrow function is the handling of this keyword. By general definition, this keyword always refers to the object that is calling the function. As you can see in the code above, obj1.valueOfThis() returns obj1 since this keyword refers to the object calling the function.

In the arrow functions, there is no binding of this keyword. This keyword inside an arrow function does not refer to the object calling it. It rather inherits its value from the parent scope which is the window object in this case. Therefore, in the code above, obj2.valueOfThis() returns the window object.

Generator Functions in JavaScript

A generator function is a special type of function that can pause execution and resume later.

👉 Unlike normal functions (which run once and finish), generators can return multiple values over time.

How to define a generator

You use function* (asterisk):

function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
How it works

A generator returns an iterator object.

const gen = myGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
What is yield?

👉 yield = pause the function and return a value

Function pauses at yield
Resumes when .next() is called
Example: Step-by-step execution
function* demo() {
  console.log("Start");
  yield 1;

  console.log("Middle");
  yield 2;

  console.log("End");
  yield 3;
}

const g = demo();

g.next(); // Start → {1}
g.next(); // Middle → {2}
g.next(); // End → {3}
Key Features
1. Lazy execution

Code runs only when .next() is called.

2. Can pause and resume

Normal functions cannot pause.

3. Can return multiple values

Unlike functions that return only once.

Infinite generator example
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
Real-world use cases

✔ Custom iterators
✔ Lazy loading data
✔ Pagination (API data)
✔ Streams
✔ State machines

Example: Pagination idea
function* pages() {
  yield "Page 1 data";
  yield "Page 2 data";
  yield "Page 3 data";
}

const p = pages();

console.log(p.next().value);
console.log(p.next().value);
Generator vs Normal Function
Feature	Function	Generator
Execution	Runs once	Pauses/resumes
Return	Single value	Multiple values
Control	Automatic	Manual (next)
Simple analogy
Function → machine that runs and finishes
Generator → machine with a pause button (▶️ ⏸ ▶️)
Key takeaway

👉 Generator functions allow you to pause execution and produce multiple values over time using yield.

WeakSet in JavaScript

A WeakSet is a special type of collection that stores only objects and holds them in a weak reference.

👉 This means JavaScript garbage collector can automatically remove items if there are no other references.

Simple Definition

👉 WeakSet = a collection of objects only, where references are weak (not preventing garbage collection)

Key Features of WeakSet
1. Only objects allowed
const ws = new WeakSet();

ws.add({ name: "Ali" }); // ✅ valid
ws.add(10);              // ❌ Error (not allowed)
2. No primitive values

❌ No numbers
❌ No strings
❌ No booleans

Only:
✔ Objects
✔ Arrays
✔ Functions

3. Weak references

If an object is no longer used anywhere else → it is automatically removed

let user = { name: "Ali" };

const ws = new WeakSet();
ws.add(user);

user = null; // object becomes eligible for garbage collection

👉 WeakSet will not keep it alive

4. No iteration

You CANNOT loop over WeakSet:

ws.forEach(); // ❌ Error
ws.size;      // ❌ undefined

👉 Because items can disappear anytime (garbage collection)

Methods of WeakSet
1. add()
ws.add(obj);
2. has()
ws.has(obj); // true or false
3. delete()
ws.delete(obj);
Example
const ws = new WeakSet();

let obj = { id: 1 };

ws.add(obj);

console.log(ws.has(obj)); // true

obj = null; // eligible for garbage collection
WeakSet vs Set
Feature	Set	WeakSet
Values	Any type	Only objects
Garbage collection	No	Yes (weak refs)
Iteration	Yes	No
Size property	Yes	No
Use Cases
1. Tracking objects privately
const visited = new WeakSet();

function process(obj) {
  if (visited.has(obj)) return;

  visited.add(obj);
  console.log("Processing...");
}
2. Memory-safe caching

Used when you don’t want to prevent garbage collection.

3. DOM element tracking
const seenElements = new WeakSet();

element.addEventListener("click", () => {
  seenElements.add(element);
});
Why WeakSet is useful?

✔ Prevents memory leaks
✔ Automatic cleanup
✔ Good for temporary object tracking

Limitations

❌ Cannot iterate
❌ No size property
❌ Only objects allowed

Simple analogy
Set → notebook where you manually manage entries
WeakSet → sticky notes that disappear when not needed anymore
Key takeaway

👉 WeakSet stores objects with weak references, meaning JavaScript can automatically remove them when they are no longer in use.

Explain WeakMap in javascript.
In javascript, Map is used to store key-value pairs. The key-value pairs can be of both primitive and non-primitive types. WeakMap is similar to Map with key differences:

The keys and values in weakmap should always be an object.
If there are no references to the object, the object will be garbage collected.
const map1 = new Map();
map1.set('Value', 1);

const map2 = new WeakMap();
map2.set('Value', 2.3); // Throws an error

let obj = {name:"Vivek"};
const map3 = new WeakMap();
map3.set(obj, {age:23});
3. Difference between prototypal and classical inheritance
Programers build objects, which are representations of real-time entities, in traditional OO programming. Classes and objects are the two sorts of abstractions. A class is a generalization of an object, whereas an object is an abstraction of an actual thing. A Vehicle, for example, is a specialization of a Car. As a result, automobiles (class) are descended from vehicles (object).

Classical inheritance differs from prototypal inheritance in that classical inheritance is confined to classes that inherit from those remaining classes, but prototypal inheritance allows any object to be cloned via an object linking method. Despite going into too many specifics, a prototype essentially serves as a template for those other objects, whether they extend the parent object or not.
ß
7. What is garbage collection in V8 (mark-and-sweep)?
V8 uses garbage collection to free unused memory. It marks all reachable objects starting from roots like globals. Objects not marked are considered unused. These objects are then removed from memory. This process runs automatically in the background.

