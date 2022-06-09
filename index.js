var me = "Jared";
var states = 50;
var math = 5 + 4;
function sayHello() {
    var msg = "Hello World!";
    console.log(msg);
}
;
sayHello();
var names = ["Charles", "Abby", "James", "John"];
var ages = [21, 27, 18, 17];
;
var charles = {
    name: "Charles",
    age: 21,
    isAdult: true
};
var abby = {
    name: "Abby",
    age: 27,
    isAdult: true
};
var james = {
    name: "James",
    age: 18,
    isAdult: false
};
var john = {
    name: "John",
    age: 17,
    isAdult: false
};
var people = [charles, abby, james, john];
function checkAge(item) {
    item.forEach(function (person) {
        if (person.isAdult === false) {
            console.log("Sorry, ".concat(person.name, ", you aren't old enough to view this page."));
        }
        ;
    });
}
;
checkAge(people);
var veggies = ['Celery', 'Cucumbers', 'Potatoes', 'Corn'];
function veggieTime() {
    veggies.forEach(function (gross) {
        console.log(gross);
    });
}
;
veggieTime();
;
var pet = {
    name: 'Koda',
    breed: 'Shih Tzu'
};
console.log("".concat(pet.name, " is a  ").concat(pet.breed, "."));
var brandon = {
    name: "Brandon",
    age: 24,
    isAdult: true
};
var austin = {
    name: "Austin",
    age: 23,
    isAdult: true
};
var jacob = {
    name: "Jacob",
    age: 18,
    isAdult: false
};
var jackson = {
    name: "Jackson",
    age: 18,
    isAdult: false
};
var kaleb = {
    name: "Kaleb",
    age: 22,
    isAdult: true
};
var friends = [brandon, austin, jacob, jackson, kaleb];
checkAge(friends);
function getLength(word) {
    return word.length;
}
;
var x = getLength('Hello World');
console.log(x);
if (x % 2 == 0) {
    console.log('The world is nice and even!');
}
else {
    console.log('The world is an odd place!');
}
;
