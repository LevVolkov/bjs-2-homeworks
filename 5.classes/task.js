class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
	this.name = name;
	this.releaseDate = releaseDate;
	this.pagesCount = pagesCount;
	this.state = 100;
	this.type = null;
	}

	get state() {
		return this._state;
	}

	set state(value) {
		if (value < 0) {
			this._state = 0;
		} else if (value > 100) {
			this._state = 100;
		} else {
			this._state = value;
		}
	}

	fix() {
	this.state = this.state * 1.5;
	return this.state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(...args) {
		super(...args);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author,...args) {
		super(...args);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(...args) {
		super(...args);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(...args) {
		super(...args);
		this.type = "fantastic";
	}
}
	

class DetectiveBook extends Book {
	constructor(...args) {
		super(...args);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}

	}

	findBookBy(type, value) {
		const item = this.books.find((book) => book[type] === value);
		if (!item) {
			return null;
		}

		return item;
	}

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				return this.books.splice(i, 1)[0];
			}
		}

		return null;
	}
}