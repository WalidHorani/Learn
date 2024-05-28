/*=============================================================
Borrowing function
/*=============================================================*/
//Borrowing function lets you use method from one object on another object
//Borrowing function achieved witn this method 1-call() 2-apply() 3-bind()
//call && apply are methods used to immeditly invoke a function with a specific context (this) and arguments
//bind create new function with specific context (this) and arguments
let obj1 = {
  name:"walid",
  getName:function(){
    console.log(this);
  }
} ;
let obj2 = {} ;
obj1.getName(); // obj1
obj1.getName.call(obj2); //obj2
obj1.getName.apply(obj2); //obj2
let func = obj1.getName.bind(obj2);
func(); //obj2

/*=============================================================
this keyword determind at runtime
/*=============================================================*/
//this keyword is determind at runtime (when function is called)
//this refer to object that called the function not the object that have the function insaide body
let obj1 = {
  name:"walid",
  getName:function(){
    console.log(this);
  }
} ;
let obj2 = {} ;
obj1.getName(); // obj1
obj2.getName = obj1.getName;
obj2.getName(); //obj2

/*=============================================================
this keyword && new keyword binding
/*=============================================================*/
//this keyword is determind at runtime (when function is called)
//so when you call constractor function with new key word => new functionCounstrctorName()
//js create object internally and assign this value to it
function createObject(){
	this.name = "walid" ;
}
obj = new createObject() ;
console.log(obj) ; //obj

/*=============================================================
this keyword and Arrow function
/*=============================================================*/
//arrow function inhert this key word value from where they are defined not from object that called him
function outer(){
  let inner = () => {
    return this;
  };
  console.log(inner());
}
let obj1 = {
  value:1,
  outer:outer
};
let obj2 = {
  value:2,
} ;
outer(); //global object
obj1.outer(); //obj1
outer.call(obj2); //obj2

/*=============================================================
this keyword and Arrow function with bining method
/*=============================================================*/
// binding method not work with arrow function
let myFun = () => {
  console.log(this);
};
let obj1 = {
  value:1,
  myFun:myFun,
  inner:()=>{
    console.log(this);
  },
};
let obj2 = {
  value:2,
} ;
myFun(); //global object
obj1.myFun(); //global object
obj1.inner(); //global object
myFun.call(obj2); //global object


/*=============================================================
this keyword insaid callback function
/*=============================================================*/
//this insaid callback undefined there is some excaption where this have specific context

/*=============================================================
this keyword and super.method()
/*=============================================================*/
//when creating object from class that extends parent class and useing super.method 
//the value of this insaid parent class method refer to child object
class Parent{
  constructor(name){
    this.name=name;
    console.log(this);
  }
  greet(){
    console.log(this);
  }
}
class Child extends Parent{
  constructor(name,age){
    super(name);
    this.age=age;
    console.log(this);
  }
  greet(){
    super.greet();
    console.log(this);
  }
}
let child=new Child("walid",31);
child.greet();

/*=============================================================
this insaid class have tow context
/*=============================================================*/
//if object he deling with property or method then this refer to it
//if class deling with static property or static method then this refer to class
class Person{
  instanceField = this ;
  static staticField = this ;
  constructor(name,age){
    this.name = name ;
    this.age = age ;
    console.log(this);
  }
  introduce(){
    console.log(this);
  }
  static introduce2(){
    console.log(this);
  }
}
let person1 = new Person('walid',31);
person1.introduce(); //person1
console.log(person1.instanceField); //person1
Person.introduce2(); //class Person
console.log(Person.staticField); //class Person

/*=============================================================
this insaid callback function attached to eventlestiner
/*=============================================================*/
/*When a function is attached as an event listener to a DOM element, this inside the function refers to the element that triggered the event.*/
<button id="myButton">Click me</button>
// Get the button element
let button = document.getElementById('myButton');
function handleClick() {
  	console.log(`Button text: ${this.textContent}`);
}
button.addEventListener('click', handleClick);

/*=============================================================
this insaid callback function that attached to setTimeoute Or setInterval
/*=============================================================*/
//this refer to global object exept if we using the method binding
//note just bind method worked (call && apply ) => not work proporly
let obj = {
  	name: 'Alice',
  	greet: function() {
  		console.log(this);
  	}
};
obj.greet(); // obj
setTimeout(obj.greet, 3000); //global object 
setTimeout(obj.greet.call(obj), 4000);// error
muFun = obj.greet.bind(obj) ;
setTimeout(muFun, 3000); //obj