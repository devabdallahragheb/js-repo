function outer(){
    let count=0;
    return function(){
        count++;
        return count
    }
}
const count=outer();
console.log(count())//1
console.log(count())//2
console.log(count())//3
console.log(count())//4