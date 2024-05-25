/*=============================================================
Borrowing function
/*=============================================================*/
//Borrowing function lets you use method from one object on another object
//Borrowing function achieved witn this method 1-call() 2-apply() 3-bind()
//call && apply are methods used to invoke a function with a specific context (this) and arguments
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
