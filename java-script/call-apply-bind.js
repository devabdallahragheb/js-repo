function test(arg, testValue) {
    console.log(arg + ". ", testValue);
}

 test.call(null, "first", "direct value");
test.apply(null, ["second", "from array"]);
const bindtest = test.bind(null, "third");
bindtest("from bind");
 