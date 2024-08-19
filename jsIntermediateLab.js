// IMPORTANT: This is a js file for lab 2 (intermediate lab of module 3)
// The way it's structured is that I have pasted the questions number wise and after each question I have the
// answer to that question right under it
// FOR SOME QUESTIONS WITH MANY PARTS (SUB-QUESTIONS) , I HAVE GIVEN THE ANSWERS FOR EACH PART
//

// QUESTION 1. Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.
console.log("========= QUESTION 1 =========");
// THE FUNCTION BELOW DOESN'T CAPITALISE THE WORDS THAT HAVE LESS THAN 2 CHARACTERS, SINCE WE DON'T CAPITALISE THEM
let ucFirstLetters = (input) => {
  inputArray = input.split(" ");

  inputArray = inputArray.map((element) => {
    if (element.length > 2) {
      return element.charAt(0).toUpperCase() + element.slice(1);
    } else {
      return element;
    }
  });

  return inputArray.join(" ");
};

let testInput1 = "the quick brown fox";
let testInput2 = "javascript is fun";
let testInput3 = "coding is a valuable skill"; // logs: Coding is a Valuable Skill --- NOT: Coding Is A Valuable Skill

console.log(ucFirstLetters(testInput1));
console.log(ucFirstLetters(testInput2));
console.log(ucFirstLetters(testInput3));

// QUESTION 2. Create a function truncate(str, max) that truncates a given string of text if its total
// length is greater than the max length. It should return either the truncated text, with an
// ellipsis (…) added to the end if it was too long, or the original text otherwise.
// b) Write another variant of the truncate function that uses a conditional operator.
console.log("========= QUESTION 2 =========");
let truncate = (string, lengthAllowed) =>
  string.length > lengthAllowed
    ? string.slice(0, lengthAllowed) + "..."
    : string;

console.log(truncate("This text will be truncated if it is too long", 25));
console.log(truncate("This won't be truncated", 25));

// QUESTION 3. Use the following animals array for the below tasks. Test each one by printing the result to
// the console. Review the following link for tips:
// https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Global_Objects/Array
// a) Add 2 new values to the end
// b) Add 2 new values to the beginning
// c) Sort the values alphabetically
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.
console.log("========= QUESTION 3 =========");

let animals = ["Tiger", "Giraffe"];
console.log("Original Array: ", animals);

// a) Add 2 new values to the end
console.log("-------- Q3, Part A-------");

animals.push("Lion");
animals.push("Deer");
console.log("Two animals at the end: ", animals);

// b) Add 2 new values to the beginning
console.log("-------- Q3, Part B-------");

animals.unshift("Cat");
animals.unshift("Dog");
console.log("Two animals in the beginning: ", animals);
// c) Sort the values alphabetically
console.log("-------- Q3, Part C-------");
animals.sort((a, b) => a.localeCompare(b));

console.log("Sorted: ", animals);

// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
let replaceMiddleAnimal = (arr, newValue) => {
  let middle = Math.round((arr.length - 1) / 2);
  arr[middle] = newValue;
};
console.log("-------- Q3, Part D-------");
console.log("Not replaced middle animal: ");
console.log(animals);
replaceMiddleAnimal(animals, "Monkey");
console.log("Replaced middle animal: ");
console.log(animals);

// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.
console.log("-------- Q3, Part E-------");

let findMatchingAnimals = (arr, beginsWith) => {
  let arrayOfMatchedElements = [];

  arr.forEach((value, index, array) => {
    if (value.toLowerCase().startsWith(beginsWith.toLowerCase())) {
      arrayOfMatchedElements.push(value);
    }
  });

  return arrayOfMatchedElements;
};

console.log(findMatchingAnimals(animals, "D"));

// QUESTION 4: Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'
// .
// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.
console.log("========= QUESTION 4 =========");
// NOTE: I WILL COMMENT OUT THE DIFFERENT TYPES OF THE CAMEL CASE FUNCTION AS WE'RE ASKED TO
// WE ARE ASKED TO USE THE DIFFERENT KINDS OF FOR LOOPS FOR THE SAME FUNCTION.
let camelCase = (inputString) => {
  let splitted = inputString.split("-");

  // UNCOMMENT THE DESIRED FOR LOOP

  //   HERE, I HAVE USED A SIMPLE FOR LOOP AND I HAVE USED A SIMPLE IF ELSE CONDITIONAL
  //   for (let i = 1; i < splitted.length; i++) {
  //     splitted[i] = splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1);
  //   }

  //   HERE, I HAVE USED A FOR EACH LOOP AND ALSO A TERNARY OPERATOR
  splitted.forEach((element, index) => {
    splitted[index] =
      index === 0
        ? element
        : element.charAt(0).toUpperCase() + element.slice(1);
  });

  //   HERE, I HAVE USED A MAP AND ALSO A TERNARY OPERATOR
  // splitted = splitted.map((element, index) => {
  //   return index === 0
  //     ? element
  //     : element.charAt(0).toUpperCase() + element.slice(1);
  // });

  //   HERE, I HAVE USED A FOR IN LOOP;
  //   ALSO I HAVE USED A TERNARY OPERATOR
  //   for (const index in splitted) {
  //     splitted[index] =
  //       index === 0
  //         ? (splitted[index] = splitted[index])
  //         : splitted[index].charAt(0).toUpperCase() + splitted[index].slice(1);
  //   }

  return splitted.join("");
};

console.log(camelCase("margin-left"));
console.log(camelCase("background-image"));
console.log(camelCase("display"));
console.log(camelCase("color"));
console.log(camelCase("background-color"));
console.log(camelCase("font-size"));

console.log("========= QUESTION 5 =========");
// QUESTION 5. Decimal number operations in JavaScript can lead to unexpected results, as in the
// following:
// let twentyCents = 0.2;
// let tenCents = 0.1;
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004
// We can sometimes avoid this using the toFixed function to force the number of decimal
// places as below, but it’s not always useful:
// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);
// console.log(+(fixedTwenty) + (+fixedTen)); //why is this not working?

// a) Explain why the above code returns the wrong answer
// ANSWER: BECAUSE THE .TOFIXED() FUNCTION RETURNS A STRING

// b) Create a function currencyAddition(float1, float2) which safely adds the two
// decimal numbers float1 and float2 and returns the correct float result.
console.log("-------- Q5, Part B-------");

let currencyAddition = (float1, float2) => {
  return +(float1 + float2).toFixed(2);
};

console.log(currencyAddition(0.2, 0.1));
// c) Create a function currencyOperation(float1, float2, operation) which
// safely performs the given operation (either +, -, / or *) on the two numbers and returns
// the correct float result. https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Statements/switch may be useful.
console.log("-------- Q5, Part C-------");
let currencyOperation = (float1, float2, operation, numDecimals) => {
  let result;
  numDecimals = numDecimals > 10 ? 10 : numDecimals <= 0 ? 1 : numDecimals;

  switch (operation) {
    case "+":
      result = float1 + float2;
      return Number(result.toFixed(numDecimals));
      break;
    case "-":
      result = float1 - float2;
      return Number(result.toFixed(numDecimals));
      break;
    case "/":
      result = float1 / float2;
      return Number(result.toFixed(numDecimals));
      break;
    case "*":
      result = float1 * float2;
      return Number(result.toFixed(numDecimals));
      break;

    default:
      return "Invalid Operation!!!";
      break;
  }
};

console.log(currencyOperation(0.2, 0.1, "-", 5));
// d) (Extension) Extend the above function to include a fourth argument numDecimals
// which allows the operation to support different amounts of decimal places from 1 to 10.
console.log("-------- Q5, Hint-------");

// HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
// different values as well as the below:
console.log(0.3 == currencyAddition(0.1, 0.2)); // true
console.log(0.3 == currencyOperation(0.1, 0.2, "+", 2)); // true

console.log("========= QUESTION 6 =========");
// 6. Create a function unique(duplicatesArray) which takes an array parameter that may
// include duplicates. Your function should return an array containing only the unique values
// from duplicatesArray.
// Test with the following arrays and create another one of your own.

const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];

const unique = (duplicatesArray) => {
  let uniqueArray = [];
  let alreadySeen = {};

  duplicatesArray.forEach((element) => {
    if (!alreadySeen[element]) {
      if (!uniqueArray.includes(element)) {
        uniqueArray.push(element);
      }
    } else {
      alreadySeen[element] = true;
    }
  });
  return uniqueArray;
};
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]

console.log("========= QUESTION 7 =========");
// 7. Use the following array of book objects to practice the array functions for map, find and
// filter. Test each of your answers to the below tasks.
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

// a) Write a function getBookTitle(bookId) that uses the find function to return the
// title of the book object with the matching id.
console.log("-------- Q7, PART A-------");

let getBookTitle = (array, bookId) => {
  let book = array.find((item) => item.id === bookId);
  return book ? book["title"] : undefined;
};

console.log(getBookTitle(books, 2));

console.log("-------- Q7, PART B-------");
// b) Write a function getOldBooks() that uses the filter function to return all book
// objects written before 1950.
let getOldBooks = (array, year) => {
  return array.filter((value) => {
    return value["year"] <= year;
  });
};

console.log(getOldBooks(books, 1950));

// c) Write a function addGenre() that uses the map function to add a new genre property
// to all of the above books, with the value ‘classic’.
console.log("-------- Q7, PART C-------");

let addGenre = (array, genre) => {
  return array.map((value) => {
    value["genre"] = genre;
    return value;
  });
};

console.log(addGenre(books, "Classic"));

// d) (Extension) Write a function getTitles(authorInitial) that uses map and
// filter together to return an array of book titles for books written by authors whose
// names start with authorInitial.
console.log("-------- Q7, PART D-------");

let getTitles = (array, authorInitial) => {
  let matchedAuthorInitial = array.filter((value) => {
    let names = value.author.split(" ");
    let initials = [];
    names.forEach((value) => {
      initials.push(value.charAt(0).toUpperCase());
    });

    // console.log(initials.join(""));
    return initials.join("") === authorInitial;
  });

  let titles = matchedAuthorInitial.map((value) => {
    return value.title;
  });

  //   console.log(titles);
  return titles;
};

console.log(getTitles(books, "FSF"));
// e) (Extension) Write a function latestBook() that uses find and forEach to get the
// book with the most recent publication date.
console.log("-------- Q7, PART E-------");

let latestBook = (array) => {
  let publishYear = [];

  array.forEach((value) => {
    let year = value.year ? value.year : null;
    publishYear.push(year);
  });

  return array.find((value) => {
    return value.year === Math.max(...publishYear);
  });
};

console.log(latestBook(books));

// 8. The following code creates a new Map object for storing names beginning with A, B, or C
// with their phone numbers.
console.log("========= QUESTION 8 =========");

let phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
let phoneBookDEF = new Map();

// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
phoneBookDEF = new Map(phoneBookABC.entries());
phoneBookDEF.set("Daniel", "0987654321");
phoneBookDEF.set("Ellen", "0123456789");
phoneBookDEF.set("Frances", "01234598765");

// c) Update the phone number for Caroline
phoneBookABC.set("Caroline", "1234");
// d) Write a function printPhoneBook(contacts) that prints the names and phone
// numbers in the given Map
console.log("-------- Q8, PART D-------");

let printPhoneBook = (contactsMap) => {
  contactsMap.forEach((key, value) => {
    console.log(`${key} : ${value}`);
  });
};

printPhoneBook(phoneBookABC);
// e) Combine the contents of the two individual Maps into a single phoneBook Map
console.log("-------- Q8, PART E-------");
let mergedPhoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
// f) Print out the full list of names in the combined phone book
printPhoneBook(mergedPhoneBook);
// console.log(mergedPhoneBook.keys());

// 9. Given the below salaries object, perform the following tasks.
console.log("========= QUESTION 9 =========");
let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};
// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
console.log("-------- Q9, PART A-------");

let sum = (obj) => {
  let sum = null;
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      sum += parseInt(obj[key]);
    }
  }

  return sum;
};

console.log("Sum:", sum(salaries));
// b) Write a function topEarner(salaries) that calculates and returns the name of the person
// earning the highest salary
console.log("-------- Q9, PART B-------");

let topEarner = (obj) => {
  let amounts = [];
  for (const key in obj) {
    amounts.push(parseInt(obj[key]));
  }
  return amounts.length > 0 ? Math.max(...amounts) : "No salaries found";
};

console.log(topEarner(salaries));

// 10. The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:
console.log("========= QUESTION 10 =========");

const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

let totalMinutes = minutes + hours * 60;
let totalSeconds = totalMinutes * 60;

// console.log(`${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);
// a) Print the total number of minutes that have passed so far today
console.log("-------- Q10, PART A-------");

console.log(totalMinutes + " Minutes have passed so far today");

// b) Print the total number of seconds that have passed so far today
console.log("-------- Q10, PART B-------");
console.log(totalSeconds + " Seconds have passed so far today");

// c) Calculate and print your age as: 'I am x years, y months and z days old'
console.log("-------- Q10, PART C-------");

const bYear = 2004;
const bMonth = 10;
const bDay = 8;

const age = today.getFullYear() - bYear;
const monthDiff = today.getMonth() - bMonth;
const dayDiff = today.getDate() - bDay;

let years = age;
let months = monthDiff;
let days = dayDiff;

if (dayDiff < 0) {
  months--;
  days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
}

if (monthDiff < 0) {
  years--;
  months += 12;
}

console.log(`I am ${years} years, ${months} months and ${days} days old`);

// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
// of days in between the two given dates.
console.log("-------- Q10, PART D-------");

let date1 = {
  year: 2024,
  month: 7,
  day: 30,
};

let date2 = {
  year: 2020,
  month: 7,
  day: 30,
};

let daysInBetween = (date1, date2) => {
  let yearDiff = date1.year - date2.year;
  let monthDiff = date1.month - date2.month;
  let dayDiff = date1.day - date2.day;

  let totalYearDays = yearDiff * 365;
  let totalMonthsDays = monthDiff * 30;

  return totalYearDays + totalMonthsDays + dayDiff;
};

console.log(daysInBetween(date1, date2));
