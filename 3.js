class Rabbit {
    constructor(name) {
      this.name = name;
    }
  }
  
  let rabbit = new Rabbit("Rab");
  
  // метод hasOwnProperty от Object.prototype
  alert( rabbit.hasOwnProperty('name') ); // true