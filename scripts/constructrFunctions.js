function Users (name, age,isWorking){  
    this.name=name,
    this.age=age,
    this.isWorking=isWorking;
    function sayHello(){
        console.log("hello" + this.name);

    }
    sayHello();
}   
 
const user_1= new Users("Max", 45, true);
const user_2= new Users("Anna", 55, true);
console.log(user_1);
console.log(user_2);