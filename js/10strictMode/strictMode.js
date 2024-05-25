/*=============================================================
.caller && .callee in strict mode vs slopy mode
/*=============================================================*/
//.caller is function property that return the function who invok the current function
//.callee is arguments property it is refer to the currently executing function itself within its own body
// in strict mode the .caller and .callee throw an Error
//in slopy mode .caller and .callee do not throw Eror
function slopyMode(x){
  console.log(slopyMode.caller);
  //null
  console.log(arguments.callee);
  // function slopyMode(x)
}
slopyMode(1);
function strictMode(x){
  "use strict";
  console.log(strictMode.caller); 
  //Error
  console.log(arguments.callee);
  //Erorr
}
strictMode(1);
/*=============================================================
use reserved word as variable name in strict mode vs slopy mode
/*=============================================================*/
// use reserved word as variable name iin sloopy mode not throw Erroe
// use reserved word as variable name iin strict mode throw Erroe
function slopyMode(){
  let let = 1 ;
  //not throw Error
}
slopyMode();
function strictMode(){
  "use strict";
  let let = 1 ;
  //throw Error
}
strictMode();
/*=============================================================
.call && .apply in strict mode vs slopy mode
/*=============================================================*/
//call && apply are methods used to invoke a function with a specific context (this) and arguments
function slopyMode(arg){
  console.log(this);
  //this refer to global object not null when using call or apply
}
slopyMode.call(null,42); // Global object
slopyMode.apply(null,[42]); // Global object
function strictMode(arg){
  "use strict";
  console.log(this);
  // this refer to what we send examp in call we send null
  // this refer to what we send examp in apply we send undefind  
}
strictMode.call(null,42); // null
strictMode.apply(undefined,[42]); // undefined