let name = "Pradeep";
console.log(`Hello ${name}`);

let islesser = 4>1;
console.log(islesser);

let string = "This is a string";
console.log(string);
let badstring = string;
console.log(badstring);

let embeded = "And this is Pradeep";
console.log(`hello there, this is to see how well embedded script works ${embeded}`);

const name1 = "Pradeep";
const greetings = `Hello ${name1}`;
console.log(greetings);

const marks = 86;
const total = 100;
const output = `My name is ${name1} and my CGPA is ${
    (marks/total)*5
} `
console.log(output);

let StringLength = "Applebananamangoorange";
let CountLength = StringLength.length;
let char = StringLength.charAt(4);
let char2 = StringLength.at(5);
console.log(CountLength);
console.log(char);
console.log(char2);

let text1 = "Hello";
let text2 = "Pradeep";
let text3 = text1.concat(" this is ", text2);
console.log(text3);

let SliceString = "Apple Banana mango";
let SlicedString = SliceString.slice(0, 12);
let SlicedString2 = SliceString.substring(0, 12);
let uppercasestring = SliceString.toUpperCase();
console.log(SlicedString);
console.log(SlicedString2);
console.log(uppercasestring);