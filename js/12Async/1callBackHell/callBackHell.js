/*==================================================================
CallBack Hell
===================================================================*/
//callBack Function : is function that pass as parameter to another function 
//CallBack hill : look to illestration
function callBackFunction(par){
	//do somThing
}
function functionName(callBackFunction){
	callBackFunction(par);
	if (true){
		let vra1 = callBackFunction(par) ;
		if(true){
			let vra2 = callBackFunction(par) ;
			if(true){
				let vra2 = callBackFunction(par) ;
			}else{
				//do someThing	
			}
		}else{
			//do someThing
		}

	}else{
		//do someThing
	}
}

// to solve this proplem without promis
function callBackFunctionStep1(par){
	if(true){
		callBackFunctionStep2(par)		
	}else{
		//do somThing
	}
}
function callBackFunctionStep2(par){
	if(true){
		callBackFunctionStep3(par)		
	}else{
		//do somThing
	}
}
function callBackFunctionStep3(par){
	//do somThing
}
function functionName(callBackFunction1){
	callBackFunctionStep1(par);
}