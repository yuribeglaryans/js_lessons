/*var object = { 
    name: "Yuri",
    age: 20,
    gender: "male",
    isWorking: true,     
}*/
console.log(object.name);       var user = {
    name: {
      firtName: "Anna",
      lastName: "Adamyan",
    },
    age: 14,
    gender: "female",
    isWorking: false,
    hobbies: ["Dancing", "singing", "cooking"],
  };
  
  //console.log(user.name.lastName);
  //delete user.age;
  //console.log(user);
  
  var obj = new Object();
  obj.content = "Do Homwork";
  obj.time = "12:00";
  //console.log(obj);
  
  var car = new Object(),
    type = "Nisan",
    year = "2015";
  
  // car[type] = "carType";
  // car[year] = "carYear";
  car["carType"] = type;
  car["carYear"] = year;
  console.log(car);