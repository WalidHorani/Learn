/*
|--------------------------------------------------------
|   Strict Mode Vs Sloopy Mood
|--------------------------------------------------------
|   1-  what is strict mode ?
|         optional setting that enforces stricter rules compared to the default sloppy mode
|   2-  where the location of strict mode statment and applay on what respecting to the location ?
|          1- first line of the whole script
|                 applay on whole script
|                     'use strict' ;
|                      //code 
|          2- first line insaid function body
|                 applay on whole function
|                     function functionName(){
|                         'use strict'; 
|                          //code 
|                     }
|   3-  are strict Mode that locate insaide function applay on nested function ?
|          no
|             function fun1(){
|               'use strict';
|               function fun2(){
|                 a = 5 ;
|                 console.log(a);
|               }
|               fun2();
|             }
|             fun1();
|   4-  are strict mode work on function if the function have complex parameter ?
|          no
|             function fun1(b=1){
|               'use strict';
|               console.log(b);
|             }
|             fun1(5);
|   5-  on what js apply strict mode automaticly ?
|         1-  class => whole code insaide class are by default in strict mode
|         2-  module => whole module code are by default in strict mode   
*/

/*
|--------------------------------------------------------
|   variable and Strict Mode
|--------------------------------------------------------
|   1-  can you assign value to varible before define it ?
|           strict => error
|               function fun2(){
|                 'use strict';
|                 a = 5 ; //error
|               }
|           slopy => assign the value without error
|   2-  can you assigning a value to a non-writable variable ?
|           1-  strict => no and will throw Error
|                 'use strict';
|                 var NaN = 42; // error
|           2-  sloopy => No and will not result Error
|                 var NaN = 42; 
|                 console.log(NaN); // NaN
|   3-  can you delete a configurable global property ?
|           1-  strict => no and will throw Error
|                   'use strict';
|                   var x=5;
|                   delete globalThis.x; // error
|           2-  sloopy => no and will not throw error
|                   var x=5;
|                   delete globalThis.x;
|                   console.log(x); //5
|   4-  can you set a property directly on a primitive value ?
|         1-  strict => no and will throw error
|                 'use strict';
|                 var num = 42;
|                 num.prop = 'Hello'; // error
|         2-  sloopy => no and will not throw error
|                 var num = 42;
|                 num.prop = 'Hello'; 
|                 console.log(num.prop);//undefined 
*/


/*
|--------------------------------------------------------
|   constant and Strict Mode
|--------------------------------------------------------
|   1- can you update constant value ?
|         in both case strict and sloopy will result error
*/


/*
|--------------------------------------------------------
|   Object and Strict Mode
|--------------------------------------------------------
|   1-  can you assign value to property that non-writable property 
|           1-  strict =>  will case error
|                   'use strict';
|                   var objStrict = {};
|                   Object.defineProperty(objStrict, 'x', { value: 10, writable: false }); // Define a non-writable property 'x'
|                   objStrict.x = 20; 
|                   // Attempt to assign a new value to 'x' (throws an error)
|           2-  sloopy => will not case error and will not assign the value
|                   var obj = {};
|                   Object.defineProperty(obj, 'x', { value: 10, writable: false }); 
|                   obj.x = 20; // Attempt to assign a new value to 'x' (fails silently)
|                   console.log(obj.x); // Output: 10 (value remains unchanged)
|   2-  can you add New properties or method on non-extensible objects ?
|           1-  strict => no will result error
|                   'use strict';
|                   const obj = {};
|                   Object.preventExtensions(obj); // Make the object non-extensible
|                   obj.newProperty = 'value'; // error
|           2-  sloopy => no and will not throw error
|                   const obj = {};
|                   Object.preventExtensions(obj); // Make the object non-extensible
|                   obj.newProperty = 'value'; 
|                   console.log(obj.newProperty); // undefined
|   3-  can you delete non-configurable properties ?
|           1- strict => no and will throw error
|                 'use strct';
|                 var obj = {};
|                 Object.defineProperty(obj, 'readOnly', {
|                 value: 10,
|                   configurable: false // This property cannot be deleted
|                 });
|                 delete obj.readOnly; // Throws a TypeError in strict mode
|           2- sloopy => no and will not throw error
|                 var obj = {};
|                 Object.defineProperty(obj, 'readOnly', {
|                 value: 10,
|                   configurable: false // This property cannot be deleted
|                 });
|                 delete obj.readOnly; //false
*/


/*
|--------------------------------------------------------
|   function and Strict Mode
|--------------------------------------------------------
|   1-  can you Duplicate parameter names in function signuter ?
|           1-  strict => no and will throw error 
|                   'use strict';
|                   function strictMode(param1, param2, param1) {
|                     console.log(param1); // error
|                   }
|                   strictMode(1, 2, 3);
|           2-  sloopy => yes and will not throw error
|                   function strictMode(param1, param2, param1) {
|                     console.log(param1); // 3
|                   }
|                   strictMode(1, 2, 3);
|   2- can you call function from blook that not defind on it ?
|         1-  strict => no and will throw error
|                 'use strict';
|                 if (true) {
|                       function myFunction() {
|                           console.log("Hello!");
|                       }
|                 }
|                 myFunction(); // Error: myFunction is not defined 
|         2-  sloopy => yes
|                 if (true) {
|                       function myFunction() {
|                           console.log("Hello!");
|                       }
|                 }
|                 myFunction(); // Hello!
*/


/*
|--------------------------------------------------------
|   arrgment object and Strict Mode
|--------------------------------------------------------
|   1-  can you update value of argament object or update value of parameter ?
|           1-  strict => update allowed (but not working proporly alwyes) but not reflected on each other 
|               function testStrict(b,c,d) {
|                 'use strict';
|                 arguments[0].toUpperCase();
|                 console.log(arguments[0]); //world
|                 console.log(b);//world 
|                 arguments[1] = 10 ;
|                 console.log(arguments[1]); //10
|                 console.log(c);//3
|                 d=20;
|                 console.log(arguments[2]); //4
|                 console.log(d);//20
|               }
|               var b = "world";
|               testStrict(b,3,4);
|           2-  slopy => update allowed (but not working proporly alwyes) and reflected on each other
|               function testSloppy(a,c,d) {
|                 arguments[0].toUpperCase();
|                 console.log(arguments[0]); //world
|                 console.log(a);//world 
|                 arguments[1] = 10 ;
|                 console.log(arguments[1]); //10
|                 console.log(c);//10
|                 d=20;
|                 console.log(arguments[2]); //20
|                 console.log(d);//20
|               }
|               var a = "world";
|               testSloppy(a,3,4);
|   2-  can assign value to arrgment object
|           1-  strict => no 
|                   function test() {
|                         'use strict';
|                         arguments = [1, 2, 3]; // error
|                   }
|                   test(); 
|           2-  sloopy =>  yes
|                   function test() {
|                          arguments = [1, 2, 3]; 
|                          console.log(arguments[2]); // 3
|                    }
|                    test();
*/

/*
|--------------------------------------------------------
|   evel() and Strict Mode
|--------------------------------------------------------
|   1-  are evel effect on outer scope where it define ?
|         1- strict =>  no
|               function strictEvalExample() {
|                   'use strict';
|                   var x = 10;
|                   eval('var x = 20;');
|                   eval('var y = 20;');
|                   console.log(x); 
|                   // (eval does not affect the outer scope in strict mode) console.log(y)// Throws a ReferenceError: y is not defined
|               }
|               strictEvalExample(); // 10
|         2- sloopy => yes
|               function nonStrictEvalExample() {
|                   var x = 10;
|                   eval('var x = 20;');
|                   eval('var y = 30;');
|                   console.log(x); // 20 (the value of x inside the eval scope)
|                   console.log(y); // 30
|               }
|               nonStrictEvalExample();//20 30
|   2-  can you use evel as variable name ?
|           1-  strict => no 
|                   "use strict";
|                   // Trying to assign a value to eval
|                   var eval = 10; // error
|           2-  sloopy => yes
|                    var eval = 10;
*/

/*
|--------------------------------------------------------
|   get accessor and Strict Mode
|--------------------------------------------------------
|   1-  can you assign value to get accessor
|           1-  strict => error
|                   'use strict';
|                   const obj = {
|                       get readOnlyProperty() {
|                         return 42;
|                       }
|                   };
|                   obj.readOnlyProperty = 100; 
|                   // Attempt to assign a new value to a getter-only property (fails with TypeError)
|           2-  sloopy => no will not assign but also will not make error 
|                   const obj = {
|                   get readOnlyProperty() {
|                     return 42;
|                     }
|                   };
|                   obj.readOnlyProperty = 100; 
|                   console.log(obj.readOnlyProperty); // 42
*/


/*
|--------------------------------------------------------
|   octal literals and Strict Mode
|--------------------------------------------------------
|   1-  how to using octal literals in strict mode ?
|           'use strict';
|           var forbiddenOctal = 0o644; 
|           console.log(forbiddenOctal);//420
|           var forbiddenOctal = 0644; // SyntaxError: Octal literals are not allowed in strict mode.
|           var forbiddenOctalEscape = "\064"; // SyntaxError: Octal escape sequences are not allowed in strict mode. 
|   2-  how to using octal literals in sloopy mode ?
|           var forbiddenOctal = 0644; 
|           console.log(forbiddenOctal);//420
*/


/*
|--------------------------------------------------------
|   .caller() && .callee() in strict mode vs slopy mode
|--------------------------------------------------------
|   1-  what is the caller ?
|           caller : is function property that return the function who invok the current function
|               function slopyMode(x){
|                 console.log(slopyMode.caller); //null
|               }
|               slopyMode(1);
|   2-  what is the calle ?
|           callee : is arguments property it is refer to the currently executing function itself within its own body
|               function slopyMode(x){
|                 console.log(arguments.callee); // function slopyMode(x)
|               }
|               slopyMode(1);
|   3-  are caller and callee property work in strict mode ?
|           no it will throw Error
|               function strictMode(x){
|                 "use strict";
|                 console.log(strictMode.caller); //Error
|                 console.log(arguments.callee); //Erorr
|               }
|               strictMode(1); 
*/


/*
|-----------------------------------------------------------------------
|   use reserved word as variable name in strict mode vs slopy mode
|-----------------------------------------------------------------------
|   1-  can you use reserved word as variable name ? 
|           1-  strict => no and will throw error
|                   function strictMode(){
|                     "use strict";
|                     let let = 1 ;//throw Error
|                   }
|                   strictMode();
|           2-  sloopy => yes and will not throw error
|                   function slopyMode(){
|                     let let = 1 ;
|                   }
|                   slopyMode();
*/


/*
|-----------------------------------------------------------------------
|   .call && .apply in strict mode vs slopy mode
|-----------------------------------------------------------------------
|   1-  what is the .call and .apply ?
|           call and apply are method used to invoke a function with a specific context (this) and arguments
|   2-  this keyword refer to what when using call and apply in strict mode and sloopy mode ?
|           1-  strict => this refer to what we send
|                   function strictMode(arg){
|                     "use strict";
|                     console.log(this);
|                     // this refer to what we send examp in call we send null
|                     // this refer to what we send examp in apply we send undefind  
|                   }
|                   strictMode.call(null,42); // null
|                   strictMode.apply(undefined,[42]); // undefined
|           2-  sloopy => this refer to global object not null when using call or apply
|                   function slopyMode(arg){
|                     console.log(this);
|                   }
|                   slopyMode.call(null,42); // Global object
|                   slopyMode.apply(null,[42]); // Global object
*/
