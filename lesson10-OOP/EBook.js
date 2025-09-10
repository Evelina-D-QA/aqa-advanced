import { Book } from "./Book.js";

export class EBook extends Book {
  constructor(name, author, year, fileFormat) {
    super(name, author, year);
    this._fileFormat = fileFormat;
  }

  set fileFormat(newFileFormat) {
    if (newFileFormat === "") {
      console.log(`The field file format cannot be empty.`);
    } else {
      this._fileFormat = newFileFormat;
    }
  }
  get fileFormat() {
    return this._fileFormat;
  }

  printInfo() {
    console.log(
      `This book ${this.name} was written by the author ${this.author} in ${this.year} year, file format is ${this.fileFormat}`,
    );
  }

  static newEBook(book, fileFormat) {
    return new EBook(book.name, book.author, book.year, fileFormat);
  }
}
