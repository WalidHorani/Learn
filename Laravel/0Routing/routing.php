<?php
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
|			is the html document that will be return to user 
|	5-	what is controller ?
|			controller is class that have method this class handle user interaction or request when user request spacific URL using method insaide
|	6-	how to make routing with closure
|			Route::httpMethod('URI',function(){//return somthing});
|	7-	how to make route with view
|			Route::view('URI','bladeName');
|	8-	how to make route with controller
|			Route::httpMethod('URI',[controllerName::class,'methodName']);
|	9-	how to make name for route ?
|			Route::.....->name('modelName.methodName');
|	10-	what do route groupe ?
|			Route groups allow you to share route attributes, such as middleware, across a large number of routes without needing to define those | 		  attributes on each individual route
|	11-	how to make route Groupe ?
|			Route::middleware(['middlewareName', 'middlewareName'])->group(function(){ Route::..... });
|			Route::withoutMiddleware(['middlewareName', 'middlewareName'])->group(function(){ Route::..... });
|			Route:controller(ControllerName::class)->group(function(){ Route::HttpMethod('URI','methodName') });
|			Route:domain('{account}.example.com')->group(function(){ Route::..... });
|			Route:prefix('prefix')->group(function(){ Route::..... });
|			Route:name('admin.')->group(function(){ Route::.....->name(modelName.methodName) });
|	12-	what is the middleware and what doinig ?
|			is class that validate request befor reached to controller
|	13-	how to assign middleware to route ?
|			Route::....->middleware([MiddlewareName::class, MiddlewareName::class]);
|	14-	how to Excluding Middleware ?
|			Route::....->withoutMiddleware([MiddlewareName::class, MiddlewareName::class]);
|	15-	what is route parameter ?
|			is varible insaide URI it change not fixed we use it when we want to capture segmant of URI  
|	16-	how to make required route parameter and optinal parameter with DI ?
|			1-	using closure
|					Route::HttpMethod('URI/{routeParameter}/{routeParameter?}',fnuction(Request $request, string $routeParameter, ?string         | 					$routeParameter = 'defaultValue' ){});
|			2- 	using controller
|					use ControllerPath/ControllerName ;
|					Route::HttpMethod('URI/{routeParameter}//{routeParameter?}',[controllerName::class,'methodName']);
|	17-	how to validate routeParameter using RegExp ?
|			Route::.....->where(['routeParameter' => 'RegExp', 'routeParameter' => 'RegExp']);
|	18-	how to list all route in your app ?
|			php artisan route:list
|	19-	what is the resource route ?
|			is route that generate automaticly all nessery URI (CRUD Action for model) and http method that related too then name it
|			Verb 		URI 					methodName 		Route Name
|			GET 		/photos 				index 			photos.index
|			GET 		/photos/create 			create 			photos.create
|			POST 		/photos 				store 			photos.store
|			GET 		/photos/{photo} 		show 			photos.show
|			GET 		/photos/{photo}/edit 	edit 			photos.edit
|			PUT/PATCH 	/photos/{photo} 		update 			photos.update
|			DELETE 		/photos/{photo} 		destroy 		photos.destroy 
|	20-	how to make resource route ?
|			Route::resources([
|    			'models' => ControllerName::class,
|    			'models' => ControllerName::class,
|			]);
|	21-	how to redirect user to spasific route if the resource route model not fond ?
|			Route::resources......->missing(function (Request $request) {return Redirect::route('modelName.methodName');});
|	22-	how to make resource route with spacfic action ?
|			Route::resources....->only(['methodName', 'methodName']);
|	23-	how to make resource route except spacfic action ?
|			Route::resources....->except(['methodName', 'methodName']);
|	24-	what is route model bindeing ?
|			bind route parameter with model
|			if the routeParamete have the same name of the model then Laravel will automatically inject the model instance in controller or       |			  closure
|	25-	how to make  model bindeing with id colomn ? 
|			1- 
|				use App\Models\User;
|				Route::get('/users/{user}', function (User $user) {});
|			2-	
|				use App\Http\Controllers\UserController;
|				use App\Models\User;
|				// Route definition...
|				Route::get('/users/{user}', [UserController::class, 'show']);
|				// Controller method definition...
|				public function show(User $user){}
|	26-	how to make  model bindeing with colomn  other than id ?
|			1- 
|				use App\Models\User;
|				Route::get('/users/{user:colomnName}', function (User $user) {});
|			2-	
|				use App\Http\Controllers\UserController;
|				use App\Models\User;
|				// Route definition...
|				Route::get('/users/{user:colomnName}', [UserController::class, 'show']);
|				// Controller method definition...
|				public function show(User $user){}
|	28-	Note :
|			1-	Groupe	
|			2-	middleware include & excloude
|			3-	name 
|			4-	validate routeParameter
|
*/

/*
|----------------------------------------------------------------------
|	how to make routing with closure
|----------------------------------------------------------------------
*/

	Route::get('URI',fnction(){});

/*
|----------------------------------------------------------------------
|	how to make route with view
|----------------------------------------------------------------------
*/

	Route::view('URI','bladeName');

/*
|----------------------------------------------------------------------
|	how to make route with controller
|----------------------------------------------------------------------
*/
	use controllerPath\ControllerName
	Route::get('URI',[ControllerName::class,'controllerMethod']);

/*
|----------------------------------------------------------------------
|	how to make name for route
|----------------------------------------------------------------------
*/

	Route::.....->name('modelName.methodName');

/*
|----------------------------------------------------------------------
|	how to make route Groupe
|----------------------------------------------------------------------
*/
	Route::middleware(['middlewareName', 'middlewareName'])->group(function(){ Route::..... });
	Route::withoutMiddleware(['middlewareName', 'middlewareName'])->group(function(){ Route::..... });
	Route:controller(ControllerName::class)->group(function(){ Route::HttpMethod('URI','methodName') });
	Route:domain('{account}.example.com')->group(function(){ Route::..... });
	Route:prefix('prefix')->group(function(){ Route::..... });
	Route:name('admin.')->group(function(){ Route::.....->name(modelName.methodName) });

/*
|----------------------------------------------------------------------
|	how to assign middleware to route
|----------------------------------------------------------------------
*/

	Route::....->middleware([MiddlewareName::class, MiddlewareName::class]);

/*
|----------------------------------------------------------------------
|	how to Excluding Middleware
|----------------------------------------------------------------------
*/

	Route::....->withoutMiddleware([MiddlewareName::class, MiddlewareName::class]);

/*
|----------------------------------------------------------------------
|	how to make required route parameter and optinal parameter with DI 
|----------------------------------------------------------------------
*/
	Route::HttpMethod('URI/{routeParameter}/{routeParameter?}',fnuction(Request $request, string $routeParameter, ?string 
	$routeParameter = 'defaultValue' ){});
	
	use ControllerPath/ControllerName ;
	Route::HttpMethod('URI/{routeParameter}//{routeParameter?}',[controllerName::class,'methodName']);

/*
|----------------------------------------------------------------------
|	how to validate routeParameter using RegExp
|----------------------------------------------------------------------
*/

	Route::.....->where(['routeParameter' => 'RegExp', 'routeParameter' => 'RegExp']);

/*
|----------------------------------------------------------------------
|	how to list all route in your app
|----------------------------------------------------------------------
*/

	php artisan route:list

/*
|----------------------------------------------------------------------
|	how to make resource route
|----------------------------------------------------------------------
*/
	Route::resources([
  		'modelName' => ControllerName::class,
  		'modelName' => ControllerName::class,
	]);

/*
|----------------------------------------------------------------------
|	how to redirect user to spasific route if the resource route model not fond
|----------------------------------------------------------------------
*/

	Route::resources......->missing(function (Request $request) {return Redirect::route('modelName.methodName');});

/*
|----------------------------------------------------------------------
|	how to make resource route with spacfic action
|----------------------------------------------------------------------
*/

	Route::resources....->only(['methodName', 'methodName']);

/*
|----------------------------------------------------------------------
|	how to make resource route except spacfic action
|----------------------------------------------------------------------
*/

	Route::resources....->except(['methodName', 'methodName']);

/*
|----------------------------------------------------------------------
|	how to make  model bindeing with id colomn
|----------------------------------------------------------------------
*/
	use App\Models\User;
	Route::get('/users/{user}', function (User $user) {});

/*
|----------------------------------------------------------------------
|	how to make  model bindeing with colomn  other than id
|----------------------------------------------------------------------
*/
	use App\Models\User;
	Route::get('/users/{user:colomnName}', function (User $user) {});
?>