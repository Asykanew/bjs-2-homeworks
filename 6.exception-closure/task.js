function parseCount(value) {
    if(isNaN(Number.parseFloat(value))) {
       throw new Error('Невалидное значение');
    } else {
        return Number.parseFloat(value);
    }
}

function validateCount(value) {
   try {
   return parseCount(value);
   } 
   catch(error) {
    return error;
  }
}

class Triangle {
    constructor(firstSide, secondSide, thirdSide) {
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
    }
    if(((firstSide + secondSide) < thirdSide) 
    || ((firstSide + thirdSide) < secondSide) 
|| ((secondSide + thirdSide) < firstSide)) {
   throw new Error('Треугольник с такими сторонами не существует');
}

get perimeter() {
    let p = (firstSide + secondSide + thirdSide);
    return p;
}
get area() {
    let s= Math.sqrt(0.5 * p * (0.5 * p - firstSide) * (0.5 * p - secondSide) * (0.5 * p - thirdSide)).toFixed(3);
    return s;
}
}

function getTriangle(firstSide, secondSide, thirdSide) {
    try {
        return new Triangle(firstSide, secondSide, thirdSide);
    }
    catch(error) {
        return let eTriangle {
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            }
            get area() {
                return 'Ошибка! Треугольник не существует';
            }

        }
    }
}