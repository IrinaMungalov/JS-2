class Animal {

    constructor(name) {
      this.name = name
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name) {
      super(name) // конструктор дочернего класса должен вызывать super()
      this.created = Date.now()
    }
  }
  
  let rabbit = new Rabbit("Белый кролик")

  alert(rabbit.name)







