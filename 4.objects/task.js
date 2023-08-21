function Student(name, gender, age) {
    //п.1
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName; //п.2
}

Student.prototype.addMarks = function (...marks) {
//п.3
    if(this.hasOwnProperty('marks') === true) {
        this.marks.push(...marks);
    } 
    if(this.excluded === true) {
        return ; //добавление невозможно
    }
}

Student.prototype.getAverage = function () {
  //п.4
  if(this.marks.length === 0) {
    return 0;
} else {
    return (this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length);
}
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
