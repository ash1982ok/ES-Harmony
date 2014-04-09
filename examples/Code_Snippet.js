/* Const Example */

const PI=3.14;
console.log(PI);

PI = 5;

console.log(PI);


/* ES 5 Class Example */
var Language = function(arguments) {
  this.name = arguments.name;
  this.founder = arguments.founder;
  this.year = arguments.year;
};

Language.prototype.summary = function() {
  return this.name + " was created by " + this.founder + " in " + this.year;
};

var langObj = new Language({"name":"js","founder":"ashok","year":"1994"});
console.log("hello");
langObj.summary();


//**********************************************************************
//******************** INHERITANCE ES5 ************************
//**********************************************************************
// define the Person Class
function Person() {}

Person.prototype.walk = function(){
  console.log('I am walking!');
};
Person.prototype.sayHello = function(){
  console.log('hello');
};

// define the Student class
function Student() {
  // Call the parent constructor
  Person.call(this);
};

// inherit Person
Student.prototype = new Person();

// correct the constructor pointer because it points to Person
Student.prototype.constructor = Student;
 
// replace the sayHello method
Student.prototype.sayHello = function(){
  console.log('hi, I am a student');
};

// add sayGoodBye method
Student.prototype.sayGoodBye = function(){
  console.log('goodBye');
};

var student1 = new Student();
student1.sayHello();
student1.walk();
student1.sayGoodBye();

// check inheritance
console.log(student1 instanceof Person); // true 
console.log(student1 instanceof Student); // true


//**********************************************************************
//******************** INHERITANCE ES6 ************************
//**********************************************************************





//**********************************************************************
//******************** REFERENCES ************************
//**********************************************************************

https://speakerdeck.com/dherman/es6-deep-dive
https://www.youtube.com/watch?v=u4IdoBU1uKE