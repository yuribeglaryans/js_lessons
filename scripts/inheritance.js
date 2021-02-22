// Create Animal class - parent
class Animal {
    constructor(type, numOfLegs, sound) {
      this.type = type;
      this.numOfLegs = numOfLegs;
      this.sound = sound;
    }
    speak() {
      return this.sound;
    }
  }
  ​
  // Creat child class Dog inher. from Animal
  class Dog extends Animal {
    constructor(type, numOfLegs, sound, canBring) {
      super(type, numOfLegs, sound);
      this.canBring = canBring;
    }
  }
  ​
  // Creat child class Dog inher. from Animal
  class Cat extends Animal {
    constructor(type, numOfLegs, sound, canClimbTree) {
      super(type, numOfLegs, sound);
      this.canClimbTree = canClimbTree;
    }
  }
  ​
  const bobik = new Dog("domestic", 4, "Huf", true);
  const piso = new Cat("doestic", 4, "Maw", true);
  console.log(bobik.speak());
  console.log(piso.speak());