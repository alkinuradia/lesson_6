//Створити телефонну книгу
//створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

// class Abonent {
//     // Синтаксис оголошення методу класу
//     constructor(name, telephone) {
//       // Ініціалізація властивостей екземпляра
//       this.name = name;
//       this.telephone = telephone;
//     }
//   }
  
//   const maria = new Abonent("Maria", "+380509682613");
//   console.log(maria); // { name: 'Maria', telephone: '+380509682613' }
  
//   const poly = new Abonent("Poly", "+380635264788");
//   console.log(poly); // { name: 'Poly', telephone: '+380635264788' }

//   const ivan = new Abonent("Ivan", "+380674558988");
//   console.log(ivan); //{name: 'Ivan', telephone: '+380674558988'}

// class Abonent {
//   constructor(props) {
//     this.name = props.name;
//     this.tel = props.tel;
//   }

//   name = "";
//   tel = "";

//   set name(newName) {
//     this.name = newName;
//   }

//   set tel(newTel) {
//     this.tel = newTel;
//   }
//   getAbonent() {
//     return ` ${this.name} + ${this.tel}`;
//   }
// }

// const Kris = new Abonent({
//   name: "Kristina",
//   tel: "+380509682613",
// });

// const Dasha = new Abonent({
//   name: "Dasha",
//   tel: "+3863515111561",
// });

// const Ivan = new Abonent({
//   name: "Ivan",
//   tel: "+3806851515151",
// });

// console.log(Ivan);


// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

function Calculator() {
  this.read = function() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0)
  }
  this.sum = function() {
    return this.a + this.b;
  }
  this.mul = function() {
    return this.a * this.b;
  }
};


let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );