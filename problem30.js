// 1) Write an arrow function that will take 3 parameters, will multiply
// the parameters and will return the result.
const multiply = (a, b, c) => a * b * c;
console.log(multiply(2, 5, 6));
// 2) Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biryani.
const Ismail = `I am a Web Devloper.
I love to code.
I love to eat Biriyani.`
console.log(Ismail);
// Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a defaultparameter. Add these two parameters and return the result.
const hellojs = (num1, num2 = 'ismail') => `${num1}  ${num2}`;
console.log(hellojs('Hello Devloper I am'));
//Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result
// const friend = (friends) => {
//     let newFriends = [];
//     for (let i = 0; i < friends.length; i++) {
//         const element = friends[i];
//         if (element.length % 2 === 0) {
//             newFriends.push(element)
//         }
//     }
//     return newFriends;
// }
// const friends = ['sakib', 'Hasab', 'riad', 'Asraf', 'Nafiur']
// const friend1 = friend(friends);
// console.log(friend1);

const friendName = ['Sakib', 'nafiur', 'Asraf', 'Jalal']
const evenFriend = (friendName) => {
    const evenFriendArray = [];
    for (const friendarray of friendName) {
        if (friendarray.length % 2 == 0) {
            evenFriendArray.push(friendarray)
        }
    }
    return evenFriendArray;
}
console.log(evenFriend(friendName));
// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
const arrayList = [5, 2, 6, 2, 6];
const arraySqrt = () => {
    let sum = [];
    for (const num of arrayList) {
        sum = sum + (num * num);
        console.log(sum);
    }
    const avgarray = sum / arrayList.length;
    return avgarray;
}
console.log(arraySqrt(arrayList));
// Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the
// result
const combineArray1 = [15, 12, 16, 12, 16];
const combineArray2 = [11, 22, 66, 22, 66];
const combaineTwoArravalue = (combineArray1, combineArray2) => {
    let newCombineArray = [...combineArray1, ...combineArray2];
    console.log(newCombineArray);
    const maxNumber = Math.max(...newCombineArray)
    return maxNumber;

}
const combineArrayResult = combaineTwoArravalue(combineArray1, combineArray2);
console.log(combineArrayResult);
//--------------Common DOM Related interview questions
// 1. what is Dom?
// The document object represents the whole html document.
// When html document is loaded in the browser, it becomes a document object. It is the root element that represents the html document. It has properties and methods. By the help of document object, we can add dynamic content to our web page.

// 2. What are the different ways to get an element from DOM?
        // users can access HTML elements in five different ways in JavaScript.
        // Get HTML element by Id
        // Get HTML element by className
        // Get HTML element by Name
        // Get HTML element by tagName
        // Get HTML element by CSS Selector

/*3. What’s the difference between an Event Handler and an Event Listener?
 A handler and a listener are one in the same - just synonyms for the function that will handle an event. "Handler" is probably the more accepted term, and is certainly more semantically correct to me. The term "listener" is derived from /the code used to add an event to an element:
element.addEventListener('click', function() {  do stuff here }, false);
/*You could, however, get really nitpicky and break the two down into separate meanings. If you're so inclined, "handler" could be the term for the function that is going to handle an event when you add a "listener", thus one can have several "listeners" that utilize a single "handler". Consider:
// handler is synonymous with function 
function someFunction(e) {
    if (typeof e == 'undefined')
     alert('called as a function');
    else
     alert('called as a handler');
  }
  // use someFunction as a handler for a 
  // click event on element1 -- add a "listener"
  element.addEventListener('click', someFunction, false);
  // use an anonymous function as a handler for a 
  // click event on element1 -- add another "listener"
  element.addEventListener('click', function () { alert('anonymoose'); }, false);
  // use someFunction as a handler for a 
  // click event on element2 -- add a "listener"
  element2.addEventListener('click', someFunction, false);
  // call someFunction right now
  someFunction();*/

/*4. What does “event bubbling” mean in JavaScript?
Event bubbling is a method of event propagation in the HTML DOM API when an event is in an element inside another element, and both elements have registered a handle to that event. It is a process that starts with the element that triggered the event and then bubbles up to the containing elements in the hierarchy.
/*
//  5. Can you explain the different types of events available in JavaScript?
click	    onclick	         When mouse click on an element
mouseover	onmouseover	     When the cursor of the mouse comes over the element
mouseout	onmouseout	     When the cursor of the mouse leaves an element
mousedown	onmousedown	     When the mouse button is pressed over the element
mouseup	    onmouseup	     When the mouse button is released over the element
mousemove	onmousemove	     When the mouse movement takes place.
// 6. What’s the difference between event.preventDefault() and event.stopPropagation() ?
stopPropagation prevents further propagation of the current event in the capturing and bubbling phases.
preventDefault prevents the default action the browser makes on that event.


//---------------Common ES6 interview questions

// 1. What is ES6? Have you ever used anything from ES6?
ES6 or ECMAScript 2015 is the 6th version of the ECMAScript programming language. ECMAScript is the standardization of Javascript which was released in 2015, and subsequently renamed as ECMAScript 2015.
There are a number of possible reasons:

You are coding for a particular lowest common denominator platform and it’s stuck at ES6 or even ES5+ (such as some older browsers) and you aren’t going to use a transpiler (for whatever reason)
You rely on a large number of external modules that are not yet certified for some of the latest environments so you can’t move as quickly as the platform (modules not certified for node.js 6 or 8, for example).
You develop in a large corporate setting that changes the coding standards and the environment and tools very slowly so are generally always a few revs behind.
You are busy coding and not staying abreast of all the latest changes and your project is too far along to introduce that level of changes - you’ll revisit after you release and start on the next version.
You’re not yet interested in adopting a transpiler into your build process (there is something wonderful about just edit and run with no mandatory build step) so you’re coding to only what your environment supports directly and perhaps staying away from the leading/bleeding edge.
Your debugging tools have not yet caught up to transpiled code or ES7/ES8 features so you’re waiting for that to happen.
It’s a confusing world with rapid change. ES6, ES7 and ES8 do not come all at once. Instead, you get dribs and drabs of features from one release to the next. Heck, while V8 is already adding lots of ES7 features, it has not yet finished implementing every single ES6 feature. So, it’s a bit difficult to know which specific feature is implemented in which specific environment without daily research.
When a spec is finalized means absolutely nothing to the typical Javascript developer. That’s just when everyone has agreed what the future should look like and tools vendors can get to work doing a final implementation. What developers are waiting for is when their target platforms all support the new features.

// 2. Explain the difference between var, let and const.
var: Variables declared with var are in the function scope.
let:Variables declared as let are in the block scope
const:Variables declared as const are in the block scope.

// 3. What is the arrow function, and how to create it?
Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions. For example, This function // function expression let x = function(x, y) { return x * y; } can be written as

// 4. Give an example of an Arrow function in ES6? List down its advantages.
var show = (a, b=200) => { console. log(a + " " + b); } show(100);

// 5. Discuss spread operator in ES6 with an example.
// 6. What do you understand about default parameters?
// 7. What are template literals in ES6?
/* 8. Tell us the difference between arrow and regular function.*/