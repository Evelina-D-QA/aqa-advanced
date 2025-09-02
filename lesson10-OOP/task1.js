import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const book1 = new Book('Fourth Wing', 'Rebecca Yarros', 2023);
const book2 = new Book('Funny Story', 'Emily Henry', 2024);
const book3 = new Book('Harry Potter', 'J.K. Rowling', 1997);

const book4 = new EBook('Dune', 'Frank Herbert', 1960, 'epub');
const book5 = new EBook('The Lost Bookshop', 'Evie Woods', 2023, 'fb2');

book1.name = 'New Fourth Wing';
book2.author = 'New Emily Henry';
book3.year = 2026;


book1.printInfo();
book2.printInfo();
book3.printInfo();

book4.printInfo();
book5.printInfo();

const booksArray = [book1, book2, book3, book4, book5];

const ebook = EBook.newEBook(book1, 'pdf');
console.log(ebook);

console.log(Book.oldestBook(booksArray));