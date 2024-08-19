// IMPORTANT: WHEN RUNNING THE CODE, KINDLY UNCOMMENT EACH QUESTION AND EACH PART SEPARATELY TO AVOID REDECLARATION ERRORS. THANKS :)
// THE STRUCTURE OF THE CODE:
// QUESTION - ANSWERS
// IN SOME QUESTIONS:
// QUESTION - ANSWERS - PART A, B, C ...
// MOREOVER, TO MAKE THE CODE MORE READABLE, I HAVE GIVEN A ONE LINE INSTRUCTION FOR EVERY QUESTION OF WHAT TO UNCOMMENT TO SEE THE EXACT RESULT.

// Question 1. makeCounter below is a decorator function which creates and returns a function that
// increments a counter.
// a) Create a second counter counter2 using the makeCounter function and test to see if
// it remains independent to counter1
// b) Modify makeCounter so that it takes an argument startFrom specifying where the
// counter starts from (instead of always starting from 0)
// c) Modify makeCounter to take another argument incrementBy, which specifies how
// much each call to counter() should increase the counter value by.
// INSTRCUTION: UNCOMMENT -- the multiline comment -- OF THE CODE TO SEE THE ANSWER TO QUESTION 1
/* 
console.log("==================== Question 1 ====================");

function makeCounter(startFrom, incrementBy) {
  let currentCount = startFrom || 0;
  return function () {
    currentCount += incrementBy || 1;
    // console.log(currentCount);
    return currentCount;
  };
}
let counter1 = makeCounter(10, 2);
console.log(counter1());
console.log(counter1());

let counter2 = makeCounter();

console.log(counter2());
console.log(counter2());
console.log(counter1());
*/

// Question 2. The following delayMsg function is intended to be used to delay printing a message until
// some time has passed.
// a) What order will the four tests below print in? Why?
// It'll print in this order:
// 1: #4: Not delayed at all
// 2: #3: Delayed by 0ms
// 3: #2: Delayed by 20ms
// 4: #1: Delayed by 100ms

// This is because of the amount of delay given to the setTimeout() function

// b) Rewrite delayMsg as an arrow function
let delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};
// c) Add a fifth test which uses a large delay time (greater than 10 seconds)
// d) Use clearTimeout to prevent the fifth test from printing at all.

// INSTRCUTION: UNCOMMENT -- the multiline comment -- OF THE CODE BELOW TO SEE THE ANSWERS TO QUESTION 2:

/* 
console.log("==================== Question 2 ====================");

setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");
let timeoutFifth = setTimeout(delayMsg, 10000, "#1: Delayed by 10,000ms");
clearTimeout(timeoutFifth);
*/

// Question 3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
// similar requests until there's a brief pause, then only executing the most recent of those
// requests. See https://www.techtarget.com/whatis/definition/debouncing
// It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
// requests being initiated if a user clicks repeatedly on a button.

// Using the following code to test and start with:
// a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
// suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
// pause, the most recent call to func should be executed and any others ignored.
// b) Extend the debounce decorator function to take a second argument ms, which defines the
// length of the period of inactivity instead of hardcoding to 1000ms
// c) Extend debounce to allow the original debounced function printMe to take an argument
// msg which is included in the console.log statement.
// 1000ms of no calls
// setTimeout(printMe, 100);
// setTimeout(printMe, 200);
// setTimeout(printMe, 300);

// "I have done all the steps together for this question since they were related to same function.  :)"
// INSTRCUTION: UNCOMMENT -- the multiline comment -- OF THE CODE BELOW TO SEE THE ANSWERS TO QUESTION 3:

/*
console.log("==================== Question 3 ====================");

const debounce = (fn, duration) => {
  let timeoutId = null;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
      timeoutId = null;
    }, duration);
  };
};

function printMe(msg) {
  console.log(msg);
}
debouncedPrintMe = debounce(printMe, 5000); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after
debouncedPrintMe("HEllOOOOO");
debouncedPrintMe("HIIIII");
debouncedPrintMe("HEHEHHE");

*/

// Question 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
// sequence is the sum of the previous 2.
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// a) Write a function printFibonacci() using setInterval that outputs a number in
// the Fibonacci sequence every second.
// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
// calls to do the same thing
// c) Extend one of the above functions to accept a limit argument, which tells it how many
// numbers to print before stopping.

// INSTRCUTION: UNCOMMENT -- the multiline comment -- OF THE CODE BELOW TO SEE THE ANSWERS TO QUESTION 4:

/* 
console.log("==================== Question 4 ====================");
console.log("==================== Question 4 Part A ====================");
let printFibonacciIntervalNoLimit = () => {
  let num1 = 0;
  let num2 = 1;

  let intervalId = setInterval(() => {
    console.log(num1);
    let next = num1 + num2;
    num1 = num2;
    num2 = next;
  }, 1000);
};

printFibonacciIntervalNoLimit();
*/

/*
console.log("==================== Question 4 ====================");
console.log("==================== Question 4 Part B ====================");
let num1 = 0,
  num2 = 1;
let printFibonacciSetTimeout = () => {
  console.log(num1);

  let next = num1 + num2;
  num1 = num2;
  num2 = next;

  setTimeout(printFibonacciSetTimeout, 1000);
};

printFibonacciSetTimeout();

*/

/* 
console.log("==================== Question 4 ====================");
console.log("==================== Question 4 Part C ====================");

let printFibonacciIntervalWithLimit = (limit) => {
  let num1 = 0;
  let num2 = 1;
  let count = 0;

  let intervalId = setInterval(() => {
    console.log(num1);
    let next = num1 + num2;
    num1 = num2;
    num2 = next;
    count++;

    if (count === limit) {
      clearInterval(intervalId);
    }
  }, 1000);
};

printFibonacciIntervalWithLimit(10);
*/

// Question 5. The following car object has several properties and a method which uses them to print a
// description. When calling the function normally this works as expected, but using it from
// within setTimeout fails. Why?
// ANSWER: WHEN YOU CALL IT IN THE setTimeout() FUNCTION IT FAILS BECAUSE THE this KEYWORD REFERS TO THE CAR OBJECT,
// WHEN YOU CALL IT THIS WAY (car.description();) this keyword REFERS TO THE CAR OBJECT BUT WHEN YOU CALL IT INSIDE THE
// setTimeout() FUNCTION THE this CONTEXT IS LOST BECAUSE THEN THE description FUCNTION IS CALLED AS AN STANDALONE FUNCTION NOT
// AS A METHOD OF THE CAR OBJECT.

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
// car.description(); //works

// INSTRCUTION: UNCOMMENT -- the multiline comment -- OF THE CODE BELOW TO SEE THE ANSWERS TO QUESTION 5:

/*

// a) Fix the setTimeout call by wrapping the call to car.description() inside a function
console.log("==================== Question 5 ====================");
console.log("------------ Question 5 Part A ------------");

let carDiscriptionWrapper = () => {
  car.description();
};

setTimeout(() => {
  carDiscriptionWrapper();
}, 2000);

*/

/*

console.log("==================== Question 5 ====================");
console.log("------------ Question 5 Part B ------------");
// b) Change the year for the car by creating a clone of the original and overriding it

let car2 = car;
car2.year = 2000;
car.description();
car2.description();

*/

/*
c) Does the delayed description() call use the original values or the new values from
b)? Why?
ANSWER: THE DELAYED DESCRIPTION() CALL USES THE NEW VALUES BECAUSE OBJECTS ARE REFERENCE TYPES.
        Meaning that any value you store either in the clone or original object points to
        the same object. TO FIX THIS THE EASIEST WAY IS TO USE THE SPREAD OPERATOR (...)
*/

/*

// d) Use bind to fix the description method so that it can be called from within
// setTimeout without a wrapper function

console.log("==================== Question 5 ====================");
console.log("------------ Question 5 Part D ------------");

setTimeout(car.description.bind(car), 200);

*/

/*

// e) Change another property of the car by creating a clone and overriding it, and test that
// setTimeout still uses the bound value from d) 
// ANSWER: YES, IT STILL USES THE BOUND VALUE

console.log("==================== Question 5 ====================");
console.log("------------ Question 5 Part D ------------");

let car3 = car;
car3.model = "911 Turbo";

setTimeout(car.description.bind(car), 200);

*/

// Question 6. Use the Function prototype to add a new delay(ms) function to all functions, which can
// be used to delay the call to that function by ms milliseconds.
// a) Use the example multiply function below to test it with, as above, and assume that all
// delayed functions will take two parameters
// b) Use apply to improve your solution so that delayed functions can take any number of
// parameters
// c) Modify multiply to take 4 parameters and multiply all of them, and test that your
// delay prototype function still works.

// "I have done all the steps together for this question since they were related to same function.  :)"
// INSTRCUTION: UNCOMMENT -- the multiline comment -- OF THE CODE BELOW TO SEE THE ANSWERS TO QUESTION 6:

/* 
console.log("==================== Question 6 ====================");

function multiply(a, b, c, d) {
  let nums = [];
  nums.push(...arguments);
  let filtered = nums.filter((value) => value !== undefined);
  let result;

  result =
    filtered.length > 1
      ? filtered.reduce((acc, currentValue, index) => {
          return acc * currentValue;
        })
      : "No value/Single value passed";

  return filtered.length === 0
    ? console.log("No numbers entered!")
    : filtered.length === 1
    ? console.log(`Result = ${filtered[0]}`)
    : console.log(`Result = ${result}`);
}

Function.prototype.delay = function (ms) {
  let func = this;

  return (...args) => {
    setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
};

multiply.delay(500)(5, 5);
multiply.delay(1000)(5, 5, 5);
multiply.delay(2000)(5, 5, 5, 5);

*/

// Question 7. In JavaScript, the toString method is used to convert an object to a string representation.
// By default, when an object is converted to a String, it returns a string that looks something
// like [object Object].
// However, we can define our own toString methods for custom objects to provide a more
// meaningful string representation.
// a) Define a custom toString method for the Person object that will format and print
// their details

// INSTRCUTION: UNCOMMENT -- the multiline comment -- OF THE CODE BELOW TO SEE THE ANSWERS TO QUESTION 7:

/*

console.log("==================== Question 7 ====================");

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.toString = function () {
  return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
};
// b) Test your method by creating 2 different people using the below constructor function
// and printing them
const person1 = new Person("James Brown", 73, "male");
console.log("person1: " + person1.toString()); 

const person2 = new Person("Francis Sanchez", 19, "female");
console.log("person2: " + person2.toString()); 
// c) Create a new constructor function Student that uses call to inherit from Person and
// add an extra property cohort
function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);
  this.cohort = cohort;
}

// d) Add a custom toString for Student objects that formats and prints their details. Test
// with 2 students.
Student.prototype.toString = function () {
  return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Cohort: ${this.cohort}`;
};

student1 = new Student("Alex", 40, "male", "Cyber Security Full Time");
console.log("Student 1: " + student1.toString());

student2 = new Student("Lucy", 24, "female", "Software Eng. Part Time");
console.log("Student 2: " + student2.toString());

*/

// Question 8. The following DigitalClock class uses an interval to print the time every second once
// started, until stopped.

class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }

  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);

    return [hours, mins];
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock("my clock:");
// myClock.start();

// INSTRCUTION: UNCOMMENT -- the multiline comment -- OF THE CODE BELOW TO SEE THE ANSWERS TO QUESTION 8:

/*
console.log("==================== Question 8 Part A ====================");

// a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
// parameter precision – the number of ms between 'ticks'. This precision parameter
// should default to 1 second if not supplied.
class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

const myPrecisionClock = new PrecisionClock("my precision clock:");

myPrecisionClock.start();

*/

/*

console.log("==================== Question 8 Part A ====================");

// b) Create a new class AlarmClock that inherits from DigitalClock and adds the
// parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
// should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
// default to 07:00 if not supplied.
class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "07:00") {
    super(prefix);
    this.wakeupTime = wakeupTime;
  }

  start() {
    let hoursAndMins;
    let wakeup = this.wakeupTime.split(":");
    let wakeHours = parseInt(wakeup[0]);
    let wakeMins = parseInt(wakeup[1]);

    this.timer = setInterval(() => {
      hoursAndMins = this.display();
      if (
        parseInt(hoursAndMins[0]) === parseInt(wakeHours) &&
        parseInt(hoursAndMins[1]) === parseInt(wakeMins)
      ) {
        console.log("Wake Up!");
        this.stop();
      }
    }, 1000);
  }
}

// const myAlarmClock = new AlarmClock("my alarm clock:");
// myAlarmClock.start();

*/

// Question 9. We can delay execution of a function using setTimeout, where we need to provide both
// the callback function and the delay after which it should execute.
// a) Create a promise-based alternative randomDelay() that delays execution for a
// random amount of time (between 1 and 20 seconds) and returns a promise we can use
// via .then(), as in the starter code below

// INSTRCUTION: UNCOMMENT -- the multiline comment -- OF THE CODE BELOW TO SEE THE ANSWERS TO QUESTION 9:

/*
console.log("==================== Question 9 Part A ====================");

function randomDelay() {
  let randomAmountOfTime = Math.ceil(Math.random() * 20);

  return new Promise((resolve, reject) => {
    setTimeout(resolve, randomAmountOfTime * 1000);
  });
}

randomDelay().then(() => console.log("There appears to have been a delay."))
.catch((err) => {
  console.log("Rejected")
});

*/

/*

// b) If the random delay is even, consider this a successful delay and resolve the promise,
// and if the random number is odd, consider this a failure and reject it
function randomDelayB() {
  let randomNumber = Math.floor(Math.random() * 20);

  return new Promise((resolve, reject) => {
    setTimeout(
      randomNumber % 2 === 0
        ? resolve
        : reject(new Error("Invalid random number"), randomNumber * 1000)
    );
  });
}

randomDelayB()
  .then(() => {
    console.log("Resolved!");
  })
  .catch((err) => {
    console.log("Rejected");
  });

*/

/*

// c) Update the testing code to catch rejected promises and print a different message

function randomDelayC() {
  let randomNumber = Math.floor(Math.random() * 2);

  return new Promise((resolve, reject) => {
    setTimeout(
      randomNumber % 2 === 0 ? resolve : reject,
      randomNumber * 1000,
      randomNumber
    );
  });
}

randomDelayC()
  .then((time) => {
    console.log(`Resolved in ${time}`);
  })
  .catch((time) => {
    console.log(`Rejected in ${time}`);
  });

// d) Try to update the then and catch messages to include the random delay value
// ANSWER: THIS ONE IS ALREADY DONE IN PART C

*/

// 10. Fetch is a browser-based function to send a request and receive a response from a server,
// which uses promises to handle the asynchronous response.
// The below fetchURLData uses fetch to check the response for a successful status
// code, and returns a promise containing the JSON sent by the remote server if successful
// or an error if it failed. (To run this code in a node.js environment, follow the instructions in
// the comments before the function.)
// b) Test both functions with valid and invalid URLs
// ANSWER FOR OPTIOIN B: BOTH VALID AND INVALID CHECK ARE DONE BELOW

/*
function fetchURLData(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}

// valid url
fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

// invalid url
fetchURLData("https://jsonplaceholder.typicode.com/to/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

*/

/*
 
// a) Write a new version of this function using async/await
let fetchURLDataAsync = async (url) => {
  let response = await fetch(url);
  if (response.status === 200) {
    let data = await response.json();
    console.log(data);
    } else {
      throw new Error(`Request failed with status ${response.status}`);
  }
  };
  
  // valid url
  fetchURLDataAsync("https://jsonplaceholder.typicode.com/todos/1");
  // invalid url
  fetchURLDataAsync("https://jsonplaceholder.typicode.com/to/1");

  */

// c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
// using Promise.all to combine the results.
/*
const asyncfetchDataFromListURL = async (urls) => {
  return Promise.all(
    urls.map(async (url) => {
      let response = await fetch(url);
      return await response.json();
    })
  );
};

const logData = async () => {
  try {
    let data = await asyncfetchDataFromListURL([
      "https://jsonplaceholder.typicode.com/todos/1",
      "https://jsonplaceholder.typicode.com/todos/1",
    ]);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

logData();

*/
