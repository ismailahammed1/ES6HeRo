/*1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ]. Now convert this array into an even array (array with even numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map() method. Hints: add one to any odd number and it will become an even number.*/
const numbers = [2, 3, 5, 7, 9];
const makeEvenNumber = numbers.map(num => num + 1);
console.log(makeEvenNumber);
/*02. You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now return/get all the elements which are divisible by 10 using array.filter() method.*/
const filterDivisible = [33, 50, 79, 78, 90, 101, 30];
const divisibleVelue = filterDivisible.filter(x => x % 10 === 0)
console.log(divisibleVelue);

/*3) Now do the same task of question 2. But do this using array.find()
 method. Then compare the output of question 2 & question 3.*/
const findEvenNumber = numbers.find(x => x % 2 === 0);
console.log(findEvenNumber);

/*
1) Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?
20 + 15 + 22 = 57 . The output will be 57
What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.
*/
const people = [
    { name: 'Ismail', age: 26 },
    { name: 'Asraf', age: 24 },
    { name: 'Jalaj', age: 25 },
]
const peopleAge = people.map(x => x.age)
console.log(peopleAge);

const rePeople = people.reduce((pre, next) => pre + next.age, 0)
console.log(rePeople);
/*1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.*/
const addElementReduce = [1, 9, 17, 22];
const reduceElement = addElementReduce.reduce((pre, next) => pre + next, 0);
console.log(reduceElement);
/*Practice Problem: Access Object values*/
const student = {
    name: 'Ismail',
    age: 26,
}
const agePrint = student.age;
console.log(agePrint);

let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '34.5, 37.8',
            city: 'Gainabdha',
            country: 'Bangaldesh'
        }
    ]
};
const cityPrint = data.location[0].city;
console.log(cityPrint);

const objectsPrint = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
}
// const emails = objectsPrint.email;
// const addres = objectsPrint.address;
// const addresCity = objectsPrint.address.city;
// const addreslat = objectsPrint.address.geo.lat;
// const addreslcompany = objectsPrint.company.name;
// console.log(emails);
// console.log(addres);
// console.log(addresCity);
// console.log(addreslcompany);
// /*Common Interview questions ON THIS MODULE

// 1. What’s the difference between map, foreach, filter?
// 2. What’s the difference between filter and find?
// 3. What is the difference between for..of and for..in?
// 4. How do you empty an array?
// 5. Difference between class and object.
// 6. What is a Prototype chain? Or how does inheritance work in JavaScript?
// 7. What does destructing do in es6?
// 8. Is optional chaining is same as ternary operator?
// 9. What do you mean by dot notation and bracket notation? When should you use dot notation or
// bracket notation?*/
const friends = ["Moushumi", "Misha", "Manna", "mimi", "mahiya"];
const newFriends = friends.find(friends => friends.length == 5)
console.log(newFriends);