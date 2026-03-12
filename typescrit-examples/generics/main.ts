class Repository<T> {

    constructor(public list: T[]) {
    }

    add(item: T): void {
        this.list.push(item);
    }
}

class Person {
    constructor(readonly name: string, readonly age: number) {
    }
}

class Book {
    constructor(public title: string, public author: string, public year?: number) {
    }
}

const peopleRepo = new Repository<Person>([]);
peopleRepo.add(new Person("Alice", 30));
peopleRepo.add(new Person("Bob", 25));
peopleRepo.add(new Person("Charlie", 35));

const bookRepo = new Repository<Book>([]);
bookRepo.add(new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925));
bookRepo.add(new Book("To Kill a Mockingbird", "Harper Lee", 1960));
bookRepo.add(new Book("1984", "George Orwell", 1949));

const bookAndPeopleRepo = new Repository<Person | Book>([]);
bookAndPeopleRepo.add(new Person("Alice", 30));
bookAndPeopleRepo.add(new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925));

console.log(peopleRepo.list);
console.log(bookRepo.list);
console.log(bookAndPeopleRepo.list);