const ws = new WeakSet();

let obj = { id: 1 };

ws.add(obj);

console.log(ws.has(obj)); // true

obj = null; // eligible for garbage collection