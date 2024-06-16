/*
|-----------------------------------------------------
|	TypeCasting
|-----------------------------------------------------
|	-	what is the typecasting ?
|			process of changing data from one type to another.
|	-	what is the Types of Conversion ?
|			1-	Implicit Conversion (Automatic):
|					The JavaScript engine automatically converts data types during operations.
| 						Example: "foo" + 1 becomes 'foo1'
|			2-	Explicit Conversion (Manual):
|					You use functions like Number() or String() to explicitly convert data types.
|	       				Example  Number("0x11")  becomes  17.
|	-	how to convert to number datatype ?
|			Number(value);
|	-	how to convert to boolean datatype ?
|			Boolean(value);
|	-	how to convert to string datatype ?
|			String(value);
|	-	how to convert to integer datatype ?
|			parseInt(value);
|	-	how to convert to float datatype ?
|			parseFloat(value);
|	-	how to convert to binary, octal, hexadecimal ?
|			(value).toString()	;
|			(value).toString(2)	; //
|			(value).toString(8)	; //
|			(value).toString(6)	; //
*/


/*
|--------------------------------------------------------------------------------------------
|some example
|--------------------------------------------------------------------------------------------
*/
	console.log( Number( 0 ) ) ; // 0
	console.log( Number( 1 ) ) ; // 1
	console.log( Number( -1 ) ) ; // -1 
	console.log( Number( 1 ) ) ; // 1
	console.log( Number( 1.123 ) ) ; // 1.123
	console.log( Number( -1.123 ) ) ; // -1.123
	console.log( Number( '30' ) ) ; // 30 
	console.log( Number( 'string' ) ) ; // NaN 
	console.log( Number( true ) ) ; // 1 
	console.log( Number( false ) ) ; // 0 
	console.log( Number( [1,2,3] ) ) ; // NaN 
	console.log( Number( {'1':1} ) ) ; // NaN 
	console.log( Number( -1 + '30' ) ) ; // -130 
	console.log( Number( -1 + 30 ) ) ; // 29
	console.log( Number(new Date()) ) ; // 1404568027739
	console.log( Boolean( 0 ) ) ; // false
	console.log( Boolean( 1 ) ) ; // true
	console.log( Boolean( -1 ) ) ; // true 
	console.log( Boolean( 1 ) ) ; // true
	console.log( Boolean( 1.123 ) ) ; // true
	console.log( Boolean( -1.123 ) ) ; // true
	console.log( Boolean( '30' ) ) ; // true 
	console.log( Boolean( 'string' ) ) ; // true
	console.log( Boolean( true ) ) ; // true
	console.log( Boolean( false ) ) ; // false
	console.log( Boolean( [1,2,3] ) ) ; // true 
	console.log( Boolean( {'1':1} ) ) ; // true 
	console.log( Boolean( -1 + '30' ) ) ; // true 
	console.log( Boolean( -1 + 30 ) ) ; // true
	console.log( parseInt( 0 ) ) ; // 0
	console.log( parseInt( 1 ) ) ; // 1
	console.log( parseInt( -1 ) ) ; // -1 
	console.log( parseInt( 1 ) ) ; // 1
	console.log( parseInt( 1.123 ) ) ; // 1
	console.log( parseInt( -1.123 ) ) ; // -1
	console.log( parseInt( '30' ) ) ; // 30 
	console.log( parseInt( 'string' ) ) ; // NaN
	console.log( parseInt( true ) ) ; // NaN
	console.log( parseInt( false ) ) ; // NaN
	console.log( parseInt( [1,2,3] ) ) ; // 1
	console.log( parseInt( ['1','2','3'] ) ) ; // 1 
	console.log( parseInt( ['str','str','str'] ) ) ; // NaN
	console.log( parseInt( {1:1} ) ) ; // NaN 
	console.log( parseInt( {'1':'1'} ) ) ; // NaN 
	console.log( parseInt( {'str':'str'} ) ) ; // NaN 
	console.log( parseInt( -1 + '30' ) ) ; // -130 
	console.log( parseInt( -1 + 30 ) ) ; // 29
	console.log( parseFloat( 0 ) ) ; // 0
	console.log( parseFloat( 1 ) ) ; // 1
	console.log( parseFloat( -1 ) ) ; // -1 
	console.log( parseFloat( 1 ) ) ; // 1
	console.log( parseFloat( 1.123 ) ) ; // 1.123
	console.log( parseFloat( -1.123 ) ) ; // -1.123
	console.log( parseFloat( '30' ) ) ; // 30 
	console.log( parseFloat( 'string' ) ) ; // NaN
	console.log( parseFloat( true ) ) ; // NaN
	console.log( parseFloat( false ) ) ; // NaN
	console.log( parseFloat( [1,2,3] ) ) ; // 1
	console.log( parseFloat( ['1','2','3'] ) ) ; // 1 
	console.log( parseFloat( ['str','str','str'] ) ) ; // NaN
	console.log( parseFloat( {1:1} ) ) ; // NaN 
	console.log( parseFloat( {'1':'1'} ) ) ; // NaN 
	console.log( parseFloat( {'str':'str'} ) ) ; // NaN 
	console.log( parseFloat( -1 + '30' ) ) ; // -130 
	console.log( parseFloat( -1 + 30 ) ) ; // 29
	console.log( String( 0 ) ) ; // '0'
	console.log( String( 1 ) ) ; // '1'
	console.log( String( -1 ) ) ; // '-1 '
	console.log( String( 1 ) ) ; // '1'
	console.log( String( 1.123 ) ) ; // '1.123'
	console.log( String( -1.123 ) ) ; // '-1.123'
	console.log( String( '30' ) ) ; // '30' 
	console.log( String( 'string' ) ) ; // 'string'
	console.log( String( true ) ) ; // 'true'
	console.log( String( false ) ) ; // 'false'
	console.log( String( [1,2,3] ) ) ; // '1,2,3'
	console.log( String( ['1','2','3'] ) ) ; // '1,2,3' 
	console.log( String( ['str','str','str'] ) ) ; // 'str,str,str'
	console.log( String( {1:1} ) ) ; // '[object Object]' 
	console.log( String( {'1':'1'} ) ) ; // '[object Object] '
	console.log( String( {'str':'str'} ) ) ; // '[object Object]' 
	console.log( String( -1 + '30' ) ) ; // '-130' 
	console.log( String( -1 + 30 ) ) ; // '29'
	console.log(String(Date())) ; // "Thu Jul 17 2014 15:38:19 GMT+0200”
	console.log( (0).toString() ) ; // '0'
	console.log( (1).toString() ) ; // '1'
	console.log( (-1).toString( ) ) ; // '-1 '
	console.log( (1).toString() ) ; // '1'
	console.log( (1.123).toString() ) ; // '1.123'
	console.log( (-1.123).toString() ) ; // '-1.123'
	console.log( '30'.toString() ) ; // '30' 
	console.log('string'.toString() ) ; // 'string'
	console.log( true.toString() ) ; // 'true'
	console.log( false.toString() ) ; // 'false'
	console.log( [1,2,3].toString() ) ; // '1,2,3'
	console.log( ['1','2','3'].toString() ) ; // '1,2,3' 
	console.log( ['str','str','str'].toString() ) ; // 'str,str,str'
	console.log( {1:1}.toString() ) ; // '[object Object]' 
	console.log( {'1':'1'}.toString() ) ; // '[object Object] '
	console.log( {'str':'str'}.toString() ) ; // '[object Object]' 
	console.log( (-1 + '30').toString() ) ; // '-130' 
	console.log( (-1 + 30).toString() ) ; // '29'
	console.log( (30).toString(2) ) ; // '11110'
	console.log( (30).toString(8) ) ; // '36'
	console.log(Date().toString() ) ; // "Thu Jul 17 2014 15:38:19 GMT+0200”

	console.log(3 * "3"); //9
	console.log(1 + "2" + 1); //121
	console.log(true + true); //2
	console.log(10 - true); //9
	const foo = {
	  valueOf: () => 2
	}
	console.log(3 + foo); // 5
	console.log(4 * foo); // 8
	const bar = {
	  toString: () => " promise is a boy :)"
	}
	console.log(1 + bar); // "1 promise is a boy :)"
	console.log(4 * []); // 0
	console.log(4 * [2]); // 8
	console.log(4 + [2]); // "42"
	console.log(4 + [1, 2]); // "41,2"
	console.log(4 * [1, 2]); // NaN
