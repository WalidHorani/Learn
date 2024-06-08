/*
|-------------------------------------------------------------
|	CallBack Hell 
|-------------------------------------------------------------
|	1-	what is the call callBack Function ?
|			is function that pass as parameter to another function
|	2-	what is the CallBack Hell ?
|			look to illestration
|				firstFunction(function(result1) {
|				   secondFunction(result1, function(result2) {
|				        thirdFunction(result2, function(result3) {
|				            fourthFunction(result3, function(result4) {
|				                // And so on...
|				            });
|				        });
|				    });
|				});
|
|	3-	how to solve CallBack Hell without promise ?
|			// to solve this proplem without promis
|			function callBackFunctionStep1(par){
|				if(true){
|					callBackFunctionStep2(par)		
|				}else{
|					//do somThing
|				}
|			}
|			function callBackFunctionStep2(par){
|				if(true){
|					callBackFunctionStep3(par)		
|				}else{
|					//do somThing
|				}
|			}
|			function callBackFunctionStep3(par){
|				//do somThing
|			}
|			function functionName(callBackFunction1){
|				callBackFunctionStep1(par);
|			}
*/
