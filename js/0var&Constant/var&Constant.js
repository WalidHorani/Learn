/*
|-----------------------------------------------------
|	Var And Constant
|-----------------------------------------------------
|	1-	who to define variable  ?
|			let varName ;
|			var varName ;
|	2-	who to define variable and initlazi it ?
|			let varName = value ;
|			var varName = value ;
|	3-	who to define constant and initlazi it ?
|			const CONSTANTNAME = value ;
|	4-	can we re-define variable ?
|			yes if we using var keyword
|				var var_myName = "Chris";
|				var var_myName = "Bob"; // Bob 
|			no if we using let keyword 
|				let let_myName = "Chris";
|				let let_myName = "Bob"; //Error
|	5-	can we re-define constatnt ? 
|			no it will result error
|				const con_myName = "Chris";
|				const con_myName = "Bob"; // Error
|	6-	can we define constant without intilaiz it ?
|			No 
|				const CONSTANT1 ;
|				CONSTANT1 = 1 ;//Error
|	7-	can we update the variable ?
|			yes
|				var var_myName = "Chris";
|				var_myName = "Bob"; // Bob
|				let let_myName = "Chris";
|				let_myName = "Bob"; //Bob
|	8-	can we update the constant ?
|			1- 	primative
|					no this will result error
|						const cons_myName = "Chris";
|						cons_myName = "Bob"; //Error
|			2-	none-premative
|					Acutiuly it not update the value it is edit part of the value 
|						const MY_ARRAY = ["HTML", "CSS"];
|						MY_ARRAY.push("JAVASCRIPT");//["HTML", "CSS", "JAVASCRIPT"]
|	9-	can variable and constant and functon have same name ?
|			no except the varible that define with var keyword and function can have same name
|				const x = 1;
|				var x = 3;// Error
|				const y = 2 ;
|				let y = 3 ;// Error
|				const z = 1;
|				function z(){} //Error
|				let z = 1;
|				function z(){} // Error
|				let z = 1;
|				var z = 1; // Error
|				var z = 1; function z(){} // No Error
|	10-	how treat the varible that define with var keyword insaid function or method ?
|			local scope varible
|	12-	how treat the varible that define with var keyword insaid blook ?
|			global scope varible
|	13-	how treat the varible that define with var keyword insaid global object or global scope ?
|			global scope varible
|	14-	how treat the varible that define with let keyword insaid function or method ?
|			local scope varible
|	15-	how treat the varible that define with let keyword insaid blook ?
|			local scope varible
|	16-	how treat the varible that define with let keyword insaid global object or global scope ?
|			global scope varible
|	17-	what is the js that support hoisting ?
|			1-	var
|			2-	function
|			3-	import
|	18-	what is the global scope variable ?
|			varible you can acsses it from any scope
|	19-	what is the local scope variable ?
|			varible you only can acsses it from the scope where defined
|	20-	what is the hoisting ?
|			hoisting : move function defintion or variable defintion or importing statment to the top of the code automatcly before run
*/