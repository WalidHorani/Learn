/*
|---------------------------------------------------------------
|   Promis
|---------------------------------------------------------------
|   1-  what is the promis ?
|          object that represnt the sucsses or falier of a given operation
|   2-  what Promis return ?
|           object that have 
|               1- state property => represnt the object state
|               2- value property => return by the callback function attached to Promise 
|   3-  when the resolve callback function is exexuted ? 
|           when asyn operation finshed sucssefuly and the state of promis will be fullfiled 
|   4-  what the resolve callback function return ?
|           return any dataType you want 
|   5-  when the reject callback function is exexuted ? 
|           asyn operation faced error and the state of promis will be rejected
|   6-  what the reject callback function return ?
|           ................................................................................
|   7-  list all promis state and its mening ?
|           Promis state 
|               1-  pinding => the asyn operation still runing
|               2-  setelled => the asyn operation finshed
|                       1- fullfiled => operation finshed sucssefuly
|                       2- rejected => operation finshed facced error
|   8-  why we use then() ;
|           to attched callback function (Action) insaid it with promise object 
|   9- depending on what the callback functoin (Action) insade then() executed ?    
|           the callback functoin (Action) execute depending on state of promis
|   10- what then() take ?
|           2 callback function
|                 1-  onResolved => execute when Promis state is resolved 
|                 2-  onRejected => execute when Promis state is rejectd
|   11- what the then() method return ?
|           return new Promise
|   12- how you can tracking internal state for promis using PromiseState ?
|           ...........................................................................
|   13- what the Promise.all().then() take ?
|           array of Promise  
|   14- what the Promise.all().then() return ? 
|           1-  array of Pramises resolved multabil promise => if all promise resolved
|           2-  rejected promise single promise => if any of Promise rejected
|   15- what the Promise.allSettled().then() take ?
|           array of Promise  
|   16- what the Promise.allSettled().then() return ? 
|           return Array of Promise (all resolved and rejected in one array) 
|   17- what the Promise.race().then() take ?  
|           array of Promise
|   18- what the Promise.race().then() return ?
|           return the first Promise finshed (resolved or rejected no metter the matter is how only finshed)  
*/

/*
|---------------------------------------------------------------
|   General syntax resolved Promis without chaining
|---------------------------------------------------------------
*/
    let promiseObject = new Promise(function(resolve,reject){
      //assume we do some operation and save the result in variable
      //now we check if the varible meet the condtion using if statment
      if(true){
        resolve("resolved Promis") ;
      }else{
        reject("rejected Promise") ;
      }
    });
    console.log(promiseObject);//Promise { <state>: "fulfilled", <value>: "resolved Promis" }
    promiseObject.then(
      function onResolved(par){
        console.log(par);//resolved Promis
      },
      function onRejected(par){
        console.log(par);
      }
    );

/*
|---------------------------------------------------------------
|   General syntax reject Promis with chaining
|---------------------------------------------------------------
*/
    let promiseObject2 = new Promise(function(resolve,reject){
      //assume we do some operation and save the result in variable
      //now we check if the varible meet the condtion using if statment
      if(false){
        resolve("resolved Promis") ;
      }else{
        reject("rejected Promise") ;
        //you can use throw insted of reject() it will be the same 
      }
    })
    .then(
      function onResolved(par){
        console.log(par);
      },
      function onRejected(par){
        console.log(par);//rejected Promise
      }
    );

/*
|---------------------------------------------------------------
|   General syntax reject Promis with chaining with catch finaly
|---------------------------------------------------------------
*/
    let promiseObject3 = new Promise(function(resolve,reject){
      //assume we do some operation and save the result in variable
      //now we check if the varible meet the condtion using if statment
      if(false){
        resolve("resolved Promis") ;
      }else{
        reject("rejected Promise") ;
        //you can use throw value insted of reject() it will be the same 
      }
    })
    .then(
      function onResolved(par){
        console.log(par);
      },
      //if the callback function that handel rejected state exists in then() then he will handel rejected state
      function onRejected(par){
        console.log(par);
      }
    )
    //if the callback function that handel rejected state not exists in then() then catch will handel rejected state
    .catch(
    	function onRejected(par){
        console.log(par);
      }
    )
    //this blook will run ever time becuse it is not deppending on Promise state
    .finally(
    	function (){
        console.log('i will run every time im not depending on promise state');
      }
    );
