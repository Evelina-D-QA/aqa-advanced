export class Book {
    
    constructor(name, author, year) {
        this._name = name;
        this._author = author;
        this._year = year;
    }
    
    set name(newName) {
        if (newName === ' ') {
            console.log(`The field name cannot be empty.`)
        } else {
            this._name = newName
        }
    }
    get name() {
        return this._name
    }

    set author(newAuthor) {
        if (typeof newAuthor === "number") {
            console.log(`The author field cannot be a number`)
        } else {
            this._author = newAuthor
        }
    }
    get author() {
        return this._author
    }

    set year (newYear) {
        if (newYear > 2025) {
            console.log(`Wrong year`)
        } else {
            this._year = newYear
        }
    }
    get year() {
        return this._year
    }

    printInfo() {
        console.log(`This book ${this.name} was written by the author ${this.author} in ${this.year} year`);
    }

    static oldestBook(booksArray) {
        return [...booksArray].sort((a, b) => a.year - b.year)[0];
    }
}