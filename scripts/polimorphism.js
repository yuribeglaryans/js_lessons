// Create Animal class - parent
class Animal {
    speak() {
      return "sound";
    }
  }
  ​
  // Creat child class Dog inher. from Animal
  class Dog extends Animal {
    speak() {
      return "huf huf";
    }
  }
  ​
  // Creat child class Dog inher. from Animal
  class Cat extends Animal {
    
  }
  ​
  const bobik = new Dog();
  const piso = new Cat();
  console.log(bobik.speak());
  console.log(piso.speak());

  class Person{
    sayNum(num){
      return `This is number ${num} & ${num2}`
    }
  }
  const person1=new Person()
   console.log(person1.sayNum(25));
   const Max=new Boy();
   console.log(Max.sayNum(25,45));