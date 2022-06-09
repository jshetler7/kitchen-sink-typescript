let me: string = "Jared";
let states: number = 50;
let math: number = 5 + 4;

function sayHello() {
    let msg: string = "Hello World!";
    console.log(msg);
};
sayHello();

let names: string[] = ["Charles", "Abby", "James", "John"];
let ages: number[] = [21, 27, 18, 17];

interface IPerson {
    name: string,
    age: number,
    isAdult: boolean;
};


const charles: IPerson = {
        name: "Charles",
        age: 21,
        isAdult: true
    };

const abby: IPerson = {
        name: "Abby",
        age: 27,
        isAdult: true
    };

const james: IPerson = {
        name: "James",
        age: 18,
        isAdult: false
    };

const john: IPerson = {
        name: "John",
        age: 17,
        isAdult: false
    };

const people: IPerson[] = [charles, abby, james, john];

function checkAge(item: IPerson[]) {
    item.forEach(person => {
        if (person.isAdult === false) {
            console.log(`Sorry, ${person.name}, you aren't old enough to view this page.`)
        };
    });
};

checkAge(people);

let veggies: string[] = ['Celery', 'Cucumbers', 'Potatoes', 'Corn'];

function veggieTime() {
    veggies.forEach(gross => {
        console.log(gross);
    });
};

veggieTime();

interface IPet {
    name: string,
    breed: string;
};

let pet: IPet = {
    name: 'Koda',
    breed: 'Shih Tzu'
};
console.log(`${pet.name} is a  ${pet.breed}.`);

const brandon: IPerson = {
    name: "Brandon",
    age: 24,
    isAdult: true
}; 
const austin: IPerson = {
    name: "Austin",
    age: 23,
    isAdult: true
}; 
const jacob: IPerson = {
    name: "Jacob",
    age: 18,
    isAdult: false
}; 
const jackson: IPerson = {
    name: "Jackson",
    age: 18,
    isAdult: false
};
const kaleb: IPerson = {
    name: "Kaleb",
    age: 22,
    isAdult: true
};
const friends: IPerson[] = [brandon, austin, jacob, jackson, kaleb];
checkAge(friends);

function getLength(word: string) {
    return word.length
};
let x: number = getLength('Hello World');
console.log(x);

if (x % 2 == 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!');
};