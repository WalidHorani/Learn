/*
|--------------------------------------------------
|	async && await KeyWord
|--------------------------------------------------
|	1- 	what is the thenable object ?
|			thenable object : is object that have then method insaid it 
|				class className{
|					constructor(){}
|					then(resolve,reject){}	
|				}
|				new className(); // thenable object 
|	2-	where you can put async ?
|			you can put async kewyord befor function 
|				async function functionName(){}
|	3-	what return Promise.resolve(value) && Promise.resolve(value) ?
|			1- 	if the value passed is any value except promise
|					return promise and the value property of promise is the value passed
|						Promise.resolve(1); // {state:fulfilled,value:1}
|			2-	if the value passed is promise
|					return [promise] and the [property value of promise] = the value of the promise passed	
|						p = new Promis(function(resolve,reject){resolve(1)}); // {state:fulfilled,value:1}
|						Promise.resolve(p) ; // {state:fulfilled,value:1}
|						Promise.resolve(p) === p // true 
|	4-	what is the return of async function ?
|			async function return new Promise object
|				1-	if return statment return value
|						return new Promise and the value property of promise is the value returend by the function
|							let f = async function (){
|								return 1 ;
|							}; // promise {state:fullfiled,value:1}
|				2-	if return statment return promise
|						p = new Promis(function(resolve,reject){resolve(1)}); // {state:fulfilled,value:1}
|						let f = async function (){
|								return p ;
|						}; 
|						asyncReturn= f(p); //new  promise {state:fullfiled,value:1}
|						p === asyncReturn // false
|	5-	can you use then() with async function ?
|			yes i can use then() with it
|				f = async function functionName(){
|					return resolvedValue ; // return promise
|					return Promise.resolve(value); //return  promise
|					return Promise.reject(value); // return promise
|					throw new Error(); // return promise	
|				}
|				f().then();
|	6-	where you can put await keyword ?
|			1-	you can put is insaid async function befor
|					1- async operation 
|					2-	promise
|					3-	thenable object
|			 			async function functionName(){
|							await asyncronceOperation
|							await promise
|							await thenableObject	
|						}	
|	7-	what do await keyword ?
|			make async code run as sync code chaining the async operation to look like sync opertaions
|	8-	what await keyword return ?
|			await return promise value not the promise object
*/
