function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.subject = ''; // Предмет студента
    this.marks = [];   // Массив оценок студента
  }
  
  // Метод для установки предмета студента
  Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
  };
  
  // Метод для добавления нескольких оценок студенту
  Student.prototype.addMarks = function(...marksToAdd) {
    if (this.marks) {
      this.marks.push(...marksToAdd);
    } else {
      console.error('Student is excluded');
    }
  };
  
  // Метод для получения среднего балла студента
  Student.prototype.getAverage = function() {
    if (this.marks && this.marks.length > 0) {
      return this.marks.reduce((sum, value) => sum + value, 0) / this.marks.length;
    } else {
      return 0;
    }
  };
  
  // Метод для исключения студента из учебного процесса
  Student.prototype.exclude = function(reason) {
    this.subject = undefined;
    this.marks = undefined;
    this.excluded = reason;
  };
  
  // Пример использования
  let student1 = new Student("Василиса", "женский", 19);
  student1.setSubject("Algebra");
  console.log(student1.getAverage()); // 0
  student1.addMarks(4, 5, 4, 5);
  console.log(student1.getAverage()); // 4.5
  console.log(student1);
  
  let student2 = new Student("Артём", "мужской", 25);
  student2.setSubject("Geometry");
  student2.exclude('плохая учёба');
  console.log(student2);