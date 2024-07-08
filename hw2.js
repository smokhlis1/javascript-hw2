// Exercise #1

/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [
        {
            oberwise: "Chocolate",
            dunkin: "Vanilla",
            culvers: "All of them",
            mcDonalds: "Sham-rock-shake",
            cupids_candies: "Chocolate Malt"
        }
    ]
};

function displayFavoriteDishes(person) {
    for (let key in person) {
        let value = person[key];
        if (Array.isArray(value)) {
            if (typeof value[0] === 'string') { // to avoid shakes being logged
                console.log(`${key}: ${value.join(", ")}`);
            } else if (typeof value[0] === 'object' && value[0] !== null) {
                console.log(`${key}:`);
                for (let item of value) {
                    for (let shakeKey in item) {
                        console.log(`  - ${shakeKey}: ${item[shakeKey]}`);
                    }
                }
            }
        } else {
            console.log(`${key}: ${value}`);
        }
    }
}

displayFavoriteDishes(person3);


// Example #2 from the homework
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };


    this.addAge = (years) => {
        this.age += years;
    };
}

let person1 = new Person('Jefferson', 10);
let person2 = new Person('Steelflex', 25);

person1.printInfo(); 
person2.printInfo(); 

person1.addAge(9);

person1.printInfo();
person2.printInfo(); 

// Example #1 I did on codewars in python

function digitize(n) {
    let resultArray = [];
  
    while (n > 0) {
      resultArray.push(n % 10);
      n = Math.floor(n / 10);
    }
  
    return resultArray.length ? resultArray : [0];
  }
  // Example #1 I did on codewars in python

  // Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    let resultArray = [];
  
    while (n > 0) {
      resultArray.push(n % 10);
      n = Math.floor(n / 10);
    }
  
    return resultArray.length ? resultArray : [0];
  }
  
  // Examples
  console.log(digitize(12345));
  console.log(digitize(0));

    // Example I haven't done yet until now in JS
    function getCount(str) {

        let count = 0; // init counter to 0
        const vowels = ['a', 'e', 'i', 'o', 'u']; // set-up the vowels array

        str = str.toLowerCase();

        for (let char of str) {
            if (vowels.includes(char)) {
                count++;
            }
        }
        return count;
    }
    let counter = "The number of vowels is: "
    console.log(counter + getCount("Hello World!")); // Expected output = 3

// Exercise #3 from hw
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/



function checkStringLength(input) {
    return new Promise((resolve, reject) => {
        if (typeof input !== 'string') {
            reject('Input must be a string');
        } else if (input.length > 10) {
            resolve('Big word');
        } else {
            resolve('Small Number');
        }
    });
}

checkStringLength("Hello World!") // example of a string longer than 10
    .then((message) => {
        console.log(message); // this will run when the string length is > 10
    })
    .catch((error) => {
        console.log(error); // this will run if the input is not a string
    }
);

checkStringLength("Hi") // example of a string shorter than or equal to 10
    .then((message) => {
        console.log(message); 
    })
    .catch((error) => {
        console.log(error);
    }
);

checkStringLength(123)
    .then((message) => {
        console.log(message);        
    })
    .catch((error) => {
        console.log(error);
    }
);


