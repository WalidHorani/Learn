/*=============================================================
setTimeout intr
/*=============================================================*/
//setTimmeout : is aysnc function that invoke callback function after time you spasified
//setTimmeout take callback function name and Timeout and the parameter that will pass to callback function
//we must  clear the setTimeoute after finshin from it 
function function_name(par1,par2,par3){
  	console.log((par1+par2+par3));
}
function function_name2(name){console.log(name);}
myTimeout2 = setTimeout(function_name2, 6000,"walid");
myTimeout1 = setTimeout(function_name, 5000, 1, 2, 3); 
console.log('hi');
//clearTimeout(myTimeout1); 
/*hi*/
/*6*/
/*walid*/
/*=============================================================
setInterval intr
/*=============================================================*/
//setInterval : is aysnc function that invoke callback function after time you spasified and will repeted execution until you cleard 
//setTimmeout take callback function name and Timeout and the parameter that will pass to callback function
//we must  clear the setTimeoute after finshin from it 
function function_name(par1,par2,par3){
  	console.log((par1+par2+par3));
}
function function_name2(name){console.log(name);}
myTimeout2 = setInterval(function_name2, 6000,"walid");
myTimeout1 = setInterval(function_name, 5000, 1, 2, 3); 
console.log('hi');
//clearInterval(myTimeout1); 
/*hi*/
/*6*/
/*walid*/