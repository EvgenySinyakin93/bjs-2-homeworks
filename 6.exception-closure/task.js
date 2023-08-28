//Задача 1

//п.1

function parseCount(stroka) {
  if (Number.isNaN(Number.parseFloat(stroka))) {
    throw new Error("Невалидное значение");
  } else {
    return parseFloat(stroka);
  }
}

//п.2
function validateCount(stroka) {
  try {
    return parseCount(stroka);
  } catch (error) {
    return error;
  }
}


//Задача 2

//п.1
class Triangle{
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;

        if((a > b +c) || (b > a + c) || (c > a + b)){
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter(){
        return this.a + this.b + this.c;
    }

    get area(){
        const p = 0.5 * this.perimeter;
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
  }
    //п.3
    function getTriangle(a, b, c){
        try {
            return new Triangle(a, b, c);
        } catch (error) {
            return {
                get perimeter(){
                    return "Ошибка! Треугольник не существует";
                },
                get area(){
                    return "Ошибка! Треугольник не существует";
                }
            }
        }
    }
