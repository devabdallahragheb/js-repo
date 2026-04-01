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