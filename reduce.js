// map, forEach, filter, find, reduce
const numberss = [1, 2, 3, 4, 5];
// .reduce (accumulatorFunction, initial value)
// accumulatorFunction use two parameters 
// const total = numbers.reduce( (previous, current) => previous + current , 0);
const total = numberss.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current
}, 0);
console.log(total);