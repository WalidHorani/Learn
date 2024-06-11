/*
|----------------------------------------------------------------------
|	Routeing
|----------------------------------------------------------------------
|	1- 	what is http method and why use them ?
|			1-	get 	: 	use it  for get document or data
|			2-	post 	: 	use it when you send data and insert new data in db 
|			3-	put 	: 	use it when you send data and update it in db 
|			3-	delete	:	use it when you you want delete data from db
|	2-	what is the URI ?
|			URI is the url that user request it
|	3-	what is the closure ?
|			anonimous function do somthing then return somthing or view 
|				function(){//do somthing then return somthing}
|	4-	whta is the blade in laravel ?
|			............................................................................................
|	5-	what is controller ?
|			controller is class that have method this class handle user interaction or request when user request spacific URL using method insaide
|	6-	how to make routing with closure
|			Route::httpMethod('URI',function(){//return somthing});
|	7-	how to make route with view
|			Route::view('URI','bladeName');
|	8-	how to make route with controller
|			Route::httpMethod('URI',[controllerName::class,'methodName']);
*/

/*
|----------------------------------------------------------------------
|	how to make routing with closure
|----------------------------------------------------------------------
*/
	//web.php
	Route::get('routeClosure',fnction(){
		return 'Hi from Route With closure' ;
	});

/*
|----------------------------------------------------------------------
|	how to make route with view
|----------------------------------------------------------------------
*/
	//routeViewBlade.blade.php 
	.........................................................................................................
		<h1>Hi from Route With view</h1>
	//web.php
	Route::view('routeView','routeViewBlade');

/*
|----------------------------------------------------------------------
|	how to make route with controller
|----------------------------------------------------------------------
*/
	//routeControllerBlade.blade.php
		...................................................................................................... 
		<h1>Hi from Route With controller</h1>
	//routeControllerName.php
		1-	php artisan make:controller routeControllerName
		2-	insaide your controller make method that return view
				public function routeControllerMethod(){
					return view('routeControllerBlade');
				}
	//web.php
	Route::get('routeController',[routeControllerName::class,'routeControllerMethod']);
