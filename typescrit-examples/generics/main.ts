import { Repository } from "./Repository";
import { Person } from "./Person";
import { Book } from "./Book";

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