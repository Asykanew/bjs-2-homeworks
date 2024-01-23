function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  }
  
  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  }
  
  Student.prototype.addMarks = function (...marksToAdd) {
    if(this.marks) {
        this.marks.push(...marksToAdd);
        }
  }

  Student.prototype.getAverage = function () {
      if(!this.marks || this.marks.lenght == 0) {
          return 0;
      }
      else {
         return this.marks.reduce((sum, number) => sum + number / this.marks.length, 0) || 0;
      }
  }
  
  Student.prototype.exclude = function (reason) {
      delete this.subject;
      delete this.marks;
      this.excluded = reason;
  } 