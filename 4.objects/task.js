function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  }
  
  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  }
  
  Student.prototype.addMarks = function (...marks) {
    Student.hasOwnProperty('marks')? marks.push(...marks): console.log('Нет оценок');
  }
  
  Student.prototype.getAverage = function () {
      if(!Student.hasOwnProperty('marks') || marks.lenght == 0) {
          return 0;
      }
      else {
          marks.reduce((acc, item, index, arr) => {
              acc += item;
              if(index === arr.lenght - 1) {
                  return acc / arr.lenght;
              }
              return acc;
          }, 0);
      }
  }
  
  Student.prototype.exclude = function (reason) {
      delete Student.subject;
      delete Student.marks;
      this.excluded = reason;
    
  }
  
