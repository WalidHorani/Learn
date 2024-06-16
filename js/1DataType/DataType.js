/*
|-----------------------------------------------------
|	Data Type
|-----------------------------------------------------
|	1-	what is the datatype ?
|			1-	primitive
|					1-	Number
|					2-	BigInt
|					3-	String
|					4-	Boolean
|					5-	Null
|					6-	Undefined
|					7-	Symbol
|			2-	none premative
|					1-	Object
|					2-	Array
|	2-	what is the primitive data type ?
|			data type where be immutable (cannot be alterd)
|			let a = 5 ;
|			a = 10
|			variable 	address 	value
|			a 			0xff1		5
|			a 			0xff2		10
|	3-	what is the none primitive data type ?
|			data type where be mutable (can be alterd)
|			let a = [1,2,3] ;
|			a[2] = 4 ; 
|			variable 	address 	value
|			a 			0xff1		[1,2,3]
|			a 			0xff1		[1,4,3]
|	4-	what is the BigInt ?
|			numeric data type that can represent integers in the arbitrary precision format
|	5-	what is the Boolean ?
|			logical data type that can have only the values true or false
|	6-	what is the Null ?
|			represents a reference that points, to a nonexistent or invalid object or address
|	7-	what is the Number ?
|			numeric data type in the double-precision 64-bit floating point format
|	8-	what is the String  ?
|			sequence of characters used to represent text
|	9-	what is the Undefined  ?
|			primitive value automatically assigned to variables that have just been declared, 
|			or to formal arguments for which there are no actual arguments
|	10-	what is the Symbol  ?
|			built-in object  that create uniqe value
|	11-	what actualy happend when using method on primative data type ?
|			temporarily converts the primitive value to a temporary global object The method is applied to this temporary global object.
|			The result is returned, and the temporary global object is discarded.
|	12-	what is the Global Symbol Registry ?
|			mechanism that JavaScript engines use to store and manage symbols
|			you cannot directly access this registry in your code
|	13-	how to create symbol ?
|			it take symbolKey as String 
|			it return uniqe value you cant see it 
|				let sym = Symbol('symbolKey') ;
|	14-	if we create to symbol have the same symbolKey are this tow symbol eual each other ? 
|			No 
|				const sym2 = Symbol("foo");
|				const sym3 = Symbol("foo");
|				sym3 === sym2 // false
|	15-	what Symbol.for() do ? waht take ? what return ?
|			it take symbolKey as string
|			if the symbol exists in Global Symbol Registry else it create it the return it
|				let sym = Symbol.for('symbolKey')
|	16-	how to get the symbole key for symbol ? what the method take ? and what return ?
|			it take symbol 
|			it return symbolKey
|				const sym = Symbol.for('foo');
|				const key = Symbol.keyFor(sym);
|				console.log(key); // foo
|	17-	can you concatenat the symbol with string or convert symbol to string or print the value of symbol ?
|			no
|	18-	if you itrate over object porperty and on  the object property is symbol what happened ?
|			will not see the  property symbol not inclued in result
|				const obj = {
|				a:1,
|					'b':2,
|					[Symbol('c')]:3,
|					[Symbol('d')]:4,
|				}
|				for ( const i in obj ){
|					console.log( i ) ;// a, b,
|				}
|	19-	if you have symbol as property Name insaid object then convert this object to json string what happend when print the json string
|			the symbol that existe as property Name insaid object not apper in json strinig
*/

/*
|-----------------------------------------------------
|	Object
|-----------------------------------------------------
|	1- 	how to create object in 4 way ?
|			1-	
|				//global object is the proto for the object
|				let obj = {
|					propertyName : valaue,
|					methodName:function(){//do somthing},
|					methodName:()=>{//do somthing},
|					methodName(){//do somthing},
|				} ;
|			2-	
|				//the prototype for counstructor function is the proto for the object
|				function Object1(parameter){
|					this.propertyName = value;
|					this.methodName = function(){//do somthing};
|					this.methodName = ()=>{//do somthing};
|				}
|				let objectName = Object1(parameter) ;
|			3-	
|				//obj1 is proto for obj2
|				let obj1 = {} ;
|				let obj2 = Object.create(obj1);	
|			4-	
|				//the prototype for class is the proto for the object
|				class className{
|					constructor(parameter){
|						this.propertyName = parameter ;
|					}
|					methodName(){}
|				}
|				let obj = new className() ;
|	2-	how to get the property value from object ?
|			1-	objectName.propertyName ;
|			2-	objectName[propertyName] ;
|	3-	how to assign value to object property ? 
|			1-	objectName.propertyName = value ;
|			2-	objectName[propertyName] = value ;
|			3- 
|				Object.defineProperties(objectName,{
|					propertyName:{
|						value : value,
|						writable: booleanValue ,
|						enumerable : booleanValue,
|						configurable: booleanValue		
|					},
|				});
|	4-	how to delete none inherated property ?
|			delete objectName.propertName
|	5-	how to get the list of none inherated propertys ?
|			1-	Object.getOwnPropertyNames(objectName) ;
|			2-	Object.keys(objectName) ;
|	6-	how to iterate over none inherted propertyName ?
|			1- 	Object.getOwnPropertyNames(objectName).forEach(function(element){});
|			2- 	Object.keys(objectName).forEach(function(element){});
|	7-	how to iterate over none inherted and inhearted propertyName ?
|			for (let property in objectName){}
|	8- 	how to invoke method insaide object ?
|			objectName.methodName() ;
|	9-	how to assign method in object ? 
|			1-	objectName.methodName = function(para){} ;
|			2-	objectName.methodName = (para)=>{} ;
|			3- 
|				Object.defineProperties(objectName,{
|					methodName:{
|						value : function(para){},
|						writable: booleanValue ,
|						enumerable : booleanValue,
|						configurable: booleanValue		
|					},
|				});
|			4- 
|				Object.defineProperties(objectName,{
|					methodName:{
|						value : (para)=>{},
|						writable: booleanValue ,
|						enumerable : booleanValue,
|						configurable: booleanValue		
|					},
|				});
|	10-	what is the prototype and proto ?
|			prototype and proto represnt its a property that holde another object
|			prototype is for => counstructor
|			proto is for => object 
|			prototype for counstructor === proto for object 
|			object inheart from proto => the proto represnt the prototype of counstructor
|	11-	what is the prototype chain ?
|			when you try to get property or invock method not existe in the object the object search in proto 
|			if find it it return it else return undefined 
|	12-	how to check if object have spacific none inhearted property ?
|			objectName.hasOwnProperty('propertyName');
|			Object.hasOwn(objectName,'propertName');
|			Object.hasOwn(objectName,'methodName');
|	13- if we change the proto for the object or prototype for ciunstructour what happend ?
|			this will update all object that have this proto and this may be break the inheartance 
|				exam1
|					function Box(value) {
|					this.value = value;
|					}
|					Box.prototype.getValue = function () {
|					return this.value;
|					};
|					const boxes = [new Box(1), new Box(2), new Box(3)];
|					obj = new Box( 4 ) ;
|					console.log( obj ) ; // Box { value: 4 }
|					console.log( obj.getValue() ) ; // 4
|					Box.prototype.getValue = function () {
|						return this.value + 1 ;
|					};
|					Box.prototype.value2 = 'hi' ;
|					console.log( obj ) ; // Box { value: 4 }
|					console.log( obj.getValue() ) ; // 5
|				exam2
|					function Box(value) {
|					this.value = value;
|					}
|					Box.prototype.getValue = function () {
|					return this.value;
|					};
|					const boxes = [new Box(1), new Box(2), new Box(3)];
|					obj = new Box( 4 ) ;
|					console.log( obj ) ; // Box { value: 4 }
|					console.log( obj.getValue() ) ; // 4
|					Box.prototype={
|					constructor: Box,
|					getValue:function(){
|					return this.value + 1 ;
|					}
|					};
|					console.log( obj ) ; //{ value: 4 }
|					console.log( obj.getValue() ) ; // 4
|					obj2 = new Box( 5 ) ; 
|					console.log( obj2 ) ; // Box { value: 5 }
|					console.log( obj2.getValue() ) ; // 6
|	14-	what is the return of ?
|			objectName.__proto__ ; //
|			class.__proto__ ; //
|			counstruuctorFunction.__proto__ ; //
|			objectName.__prototype__ ; //
|			class.__prototype__; //
|			counstruuctorFunction.__prototype__; //
|			
|			//__proto__.propertyName, __proto__.methodName, __prototype__.propertyName, __prototype__.methodName
|			
|			Object.getPrototype(objectName); //
|			Object.getPrototype(className); //
|			Object.getPrototype(counstruuctorFunction); //
|			
|			Object.assign(objectName.prototype,value); //
|			Object.assign(className.prototype,value); //
|			Object.assign(counstruuctorFunction.prototype,value); //
|			Object.set(objectName.prototype,value); //
|			Object.set(className.prototype,value); //
|			Object.set(counstruuctorFunction.prototype,value); //
*/