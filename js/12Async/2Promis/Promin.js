/*====================================================
Promis
=====================================================*/
//Promis : object that represnt the sucsses or falier of a given operation
/*
	Promis return Object with tow property
		1- state => represnt the object state
		2- value => return by the callback function attached to Promise
*/ 
//we attached Action to promis to execute it depending on Promis state resolved or rejectd
/*
	the resolve callback function is exexuted  when asyn operation finshed sucssefuly and the state of promis will be 
	fullfiled and the resolved callback function return any thing you want 
*/
/*
	the reject callback function is exexuted  when asyn operation faced error and the state of promis will be 
	rejected and the reject callback function return .....................................................................................
*/
/*
	Promis state 
		1- pinding => the asyn operation still runing
		2-setelled => the asyn operation finshed
			1- fullfiled => operation finshed sucssefuly
			2- rejected => operation finshed facced error
*/
// you can tracking internal state for promis using PromiseState............................................................
/*
	we use then() to attched callback function (Action) insaid it with promise object 
	the callback functoin (Action) execute depending on state of promis
	then() tacke 2 callback function
		1- onResolved => execute when Promis state is resolved
		2- onRejected => execute when Promis state is rejectd
	then() => return new Promise
*/
/*
	1- Promise.all().then()
		1- take array of Promise
		2- return :
			1- if all promise resolved => will return array of Pramises resolved multabil promise
			2- if any of Promise rejected => will return only rejected promise single promise
	2- Promise.allSettled().then()
		1- take array of Promise
		2- return Array of Promise (all resolved and rejected in one array)
	3- Promise.race().then()
		1- take array of Promise
		2- return the first Promise finshed (resolved or rejected no metter the matter is how only finshed)
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
