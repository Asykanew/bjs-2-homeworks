class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

fix() {
    this.state *= 1.5; 
}


set statusState(number) {
if(number < 0) {
    this.state = 0;
}
if(number > 100) {
    this.state = 100;
} else {
    this.state = number;
}
}

get statusState() {
    return this.state;
}
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate,pagesCount);
        this.state = 100;
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate,pagesCount);
        this.state = 100;
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "novel";
        this.author = author;
       
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "fantastic";
        this.author = author;
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "detective";
        this.author = author;
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(this.state > 30) {
            this.books.push(book);
        }
    }   

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value);

    }
    
    giveBookByName(bookName) {
        let findBook = this.books.find(book => book.name === bookName);
        if(!findBook) {
            return null;
        }
        return this.books.splice(this.books.indexOf(findBook), 1)[0];
    }
}

