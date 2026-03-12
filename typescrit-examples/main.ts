import Book from "./Book";

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");

const email: string = "gabriel@gmail.com";
let email2: string;
email2 = "email@domain.com"

function init(port: number): void {
    console.log("App initialized");
    console.log(`Listening on port ${port}`);
}

init(3000);

type Entity = {
    id: number
};

type Person = { 
    name: string, 
    age?: number 
};

type PersonEntity = Person & Entity;

const people: Person[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie"}
];
const people2: { name: string, age?: number }[] = [
    { name: "Morgan", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie"}
];
const people3: PersonEntity[] = [
    { id: 1, name: "Morgan", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie"}
];

console.log(book1);
console.log(book2);
console.log(email);
console.log(email2);
console.log(people);
console.log(people2);
console.log(people3);



interface EntityTwo {
    id: number
};

interface PersonTwo extends EntityTwo { 
    name: string, 
    age?: number 
};

const people4: PersonTwo[] = [
    { id: 1, name: "Morgan", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie"}
];

console.log(people4);

interface PersonThree {
    id: number;
}
 interface PersonThree {
    name: string;
    age?: number;
}

const people5: PersonThree[] = [
    { id: 1, name: "Morgan", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie"}
]; // TypeScript merges the two interface declarations, its not optional to use the first one for one object and the second one for another, both declarations are merged into a single interface

console.log(people5);

let point: [number, number] = [10, 20];
console.log(point); // tuple with two numbers, representing a point in 2D space

function go (step: number, callback: (param: string) => void): void {
    let i = 0;
    while (i < step) {
        callback(`Step ${i + 1}`);
        i++;
    }
}

go(10, function(param: string) {
    console.log(param);
});