/*মাষ্ট শিখবে ES৬, একটা জাভাস্ক্রিপ্ট এর ফাইল খুলে নিচের জিনিসগুলা প্রাকটিস করে ফেলো।  */

/*১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।
*/
// let names = "Hi Ismail";
// names = 'Ismail '; // re assign possible
// let names = 'Mofiz' // re define not possible
//const helloJs='Hi Ismail do you love coding'
// helloJs = 'Ismail do you know that re assign not possible'; // re assign not possible
// const helloJs = 'Ismail all so re define not possible' // re define not possible

/*২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। */
const firstName = 'Ismail';
const lastName = 'Ahammed';
const addstring = `Hi I am ${firstName} ${lastName} what's up?`
console.log(addstring);

/*৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। */
const parameteArrow = (num) => num / 5;
const sumNUm = parameteArrow(500)
console.log(sumNUm);

/*৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো */
const twoPremeter = (num1, num2) => (num1 + 2) * (num2 + 2)
const result = twoPremeter(2, 4)
console.log(result);
/*৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। */
const threePremeter = (num1, num2, num3) => (num1 * num2 * num3)
const pass = threePremeter(2, 4, 5)
console.log(pass);


/*৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। */
const twofuncPerameter = (num1, num2) => {
    const n1 = num1 + 2;
    const n2 = num2 + 2;
    const result = n1 + n2;
    return result;
}
const twofuncResult = twofuncPerameter(2, 4)
console.log(twofuncResult);




/*৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো। 

৪.৫. জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি? 

 .

/*৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। */
const numbers = [2, 3, 5, 7, 9];
const makeEvenNumber = numbers.map(num => num * 5);
console.log(makeEvenNumber);
/*৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো */
const findoddnumber = numbers.filter(num => num % 2 === 1)
console.log(findoddnumber);
/*৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। */
const findTaka = [2000, 3000, 5000, 7000, 9000];
const taka = findTaka.find(num => num === 5000);
console.log(taka);

/*৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 
The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.
Syntax
var new_array = arr.map(function callback(element, index, array) {
    // Return value for new_array
}[, thisArg]

Filter
The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.
Syntax
var new_array = arr.filter(function callback(element, index, array) {
    // Return true or false
}[, thisArg])

Reduce
The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.

Syntax
arr.reduce(callback[, initialValue])
*/
/*৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। */
const edibles = ["food", "fruits"];

let [positionOne] = edibles;
console.log(positionOne);


/*৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। */
let threeArrayDestructuring = [2, 5, 6, 8, 12, 9, 54]
let [one, two, three] = threeArrayDestructuring
console.log(three);
/*১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭।*/
const threeFunc = (x, y, z = 7) => x + y + z;
const threeREsult = threeFunc(5, 6)
console.log(threeREsult);
/*[অপশনাল]

১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )*/

const employeeInfo = {
    employeeName: "John Doe",
    employeeId: 27,

    address: {
        locality: {
            address1: "1600 pebble road",
            address2: "Nearby XYZ Bank",
        },
        permanent: [
            address1 = "Mirpur 12, Dhaka",
            address2 = "Saghata, Gaibandha",

        ],
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    }
}

/*১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। */
const chining = employeeInfo.address?.locali?.address1;
console.log(chining);