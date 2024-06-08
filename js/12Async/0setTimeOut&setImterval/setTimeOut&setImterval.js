/*
|-------------------------------------------------------------
|	setTimeout 
|-------------------------------------------------------------
|	1-	what is the setTimeout ?
|			is aysnc function that invoke callback function after time you spasified
|	2-	what setTimeout take ?
|			1-	callback function name
|			2-	Timeout
|			3-	parameter that will pass to callback function
|	3-	what return setTimeout ?
|			uniqe id to use it in clearing 
|	3-	how to make setTimeout ?
|			function function_name(par1,par2,par3){
|			  	console.log((par1+par2+par3));
|			}
|			function function_name2(name){console.log(name);}
|			myTimeout2 = setTimeout(function_name2, 6000,"walid");
|			myTimeout1 = setTimeout(function_name, 5000, 1, 2, 3); 
|			console.log('hi');
|			clearTimeout(myTimeout1); 
|			hi
|			6
|			walid
|	Note we must clear setTimeout after finshing
*/


/*
|-------------------------------------------------------------
|	setInterval 
|-------------------------------------------------------------
|	1-	what is the setInterval ?
|			is aysnc function that invoke callback function after time you spasified and will repeted execution until you cleard 
|	2-	what setTimeout take ?
|			1-	callback function name
|			2-	time Interval
|			3-	parameter that will pass to callback function
|	3-	what return setTimeout ?
|			uniqe id to use it in clearing 
|	3-	how to make setInterval ?
|			function function_name(par1,par2,par3){
|			  	console.log((par1+par2+par3));
|			}
|			function function_name2(name){console.log(name);}
|			myTimeout2 = setInterval(function_name2, 6000,"walid");
|			myTimeout1 = setInterval(function_name, 5000, 1, 2, 3); 
|			console.log('hi');
|			clearInterval(myTimeout1); 
|			hi
|			6
|			walid
|	Note we must clear setInterval after finshing
*/