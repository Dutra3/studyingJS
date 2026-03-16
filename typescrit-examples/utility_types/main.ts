interface Todo {
    priority: number;
    description: string;
    done: boolean;
}

interface Book {
    title: string;
    author: string;
    price: number;
}

const todo: Todo = {
    priority: 1,
    description: "Learn TypeScript",
    done: false
};

console.log(todo);

const todo2: Partial<Todo> = {
    description: "Learn TypeScript Utility Types"
}

console.log(todo2);

const book: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10.99
};

function updateBook(updatedProperties: Partial<Book>) {
    return {
        ...book,
        ...updatedProperties
    };
}

function updateBookPrice(updatedProperties: Pick<Book, "price">) {
    return {
        ...book,
        ...updatedProperties
    };
}

function updateBookTitle(updatedProperties: Pick<Book, "title">) {
    return {
        ...book,
        ...updatedProperties
    };
}

function updateBookTitleOmitted(updatedProperties: Omit<Book, "title">) {
    return {
        ...book,
        ...updatedProperties
    };
}

const test = {
    name: "Test",
    age: 30,
    city: "New York"
} as const;

console.log(test);