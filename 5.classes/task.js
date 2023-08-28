//Задача 1
//п.1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  //п.2
  fix() {
    return (this.state *= 1.5);
  }
  //п.3
  set state(number) {
    this._state = number;
    if (number < 0) {
      this._state = 0;
    } else if (number > 100) {
      this._state = 100;
    } else {
      this._state = this.state;
    }
  }
  //п.4
  get state() {
    return this._state;
  }
}

const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state);

//п.5
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

//п.6
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

//п.7
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

//Задача 2

//п.1
class Library extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(releaseDate, pagesCount);
    this.name = name;
    this.books = [];
  }
  //п.2
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  //п.3
  findBookBy(type, value) {
    const findResult = this.books.find((item) => item[type] === value);
    return findResult || null;
  }

  //п.4
  giveBookByName(bookName) {
    const book = this.findBookBy("name", bookName);
    if (!book) return null;
    this.books = this.books.filter((item) => item.name !== bookName);
    return book;
  }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

//Задача 3

//п.1
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }
  //п.2
  addMark(mark, subject) {
    //*
    if (2 > mark || mark > 5) {
      return 0;
    }
    //*
    if (!this.marks[subject]) {
      this.marks[subject] = [];
      this.marks[subject].push(mark);
      //*
    } else {
      this.marks[subject].push(mark);
    }
  }

  //п.3
  getAverageBySubject(subject) {
    this.marks[subject] = [];
    if (!this.marks[subject]) {
      return 0;
    } else {
      return (
        this.marks[subject].reduce((acc, item) => acc + item, 0) /
        this.marks[subject].length
      );
    }
  }
  //п.4
  getAverage(subject) {
    let sum = 0;
    let keysWithItems = Object.keys(this.marks);
    this.getAverageBySubject[subject].reduce((acc, item) => acc + item, 0) /
      this.marks[subject].length;
    sum += this.getAverageBySubject;
    return sum / this.getAverageBySubject.length;
  }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
student.getAverageBySubject("физика"); // Средний балл по предмету физика 4.5
student.getAverageBySubject("биология"); // Вернёт 0, так как по такому предмету нет никаких оценок.
student.getAverage(); // Средний балл по всем предметам 4.75
