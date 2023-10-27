//Q1
let obj= {};
console.log(obj);

//Q2
let person={
name:  "Piran",
age :23,
introduceYou:function()
{
  console.log("hello,my name is"+" "+this.name)            //this is keyword in JS
}
 };
person.introduceYou();

//Q3


let oba={
  greetStudent:function(student){
console.log(
  `Hello ${student.name} Welcome to the Coding School`);
  }
};

oba.greetStudent({name:"sure"})




//Q4

let Player={
no1:"kohli",
no2:"smith",
no3:"warner"
}

console.log(Player.no2);
console.log(Player["no1"]);

//Q5
person.email = "john@exaple.com"
console.log(person);


//Q6
delete person.age;
console.log(person);

//Q7

var Cricketer={
  name:"piran",
  country:"Srilanka",
  isPlayer: true,

}
// console.log("name" in Cricketer);

//hasOwn property
console.log(Cricketer.hasOwnProperty("name"));


//Q8     spread operator

let student={name3:"Piranavan",
               age:25       
              };

let course={   courseName: "Math",
              courseCode: "MATH101"};

              const studentCourse = {
                ...student,
                ...course,
              };
            
              console.log(studentCourse);

//Q9

var object={
  name:"piran",
  age:"23"
}
const propertyToCheck = "address";

if (person.hasOwnProperty(propertyToCheck)) {
  console.log(`${propertyToCheck} is there: ${person[propertyToCheck]}`);
} else {
  console.log(`${propertyToCheck} not found`);
}



// Q10
const book = {
    title: "The Great world",
    author: "Lokesh",
    year: 1969,
  };
  
  const bookJSON = JSON.stringify(book);
  
  console.log(bookJSON);


  //Q11
  



  const students = [
    {
      name: "Piran",
      age: 23,
      gpa: 3.5,
    },
    {
      name: "kaiber",
      age: 25,
      gpa: 3.2,
    },
    {
      name: "surenya",
      age: 22,
      gpa: 3.8,
    },
  ];
  
