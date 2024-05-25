<?php
/*============================================================
information you need to undeerstand
=============================================================*/
//Route methos => get, post, put, patch, delete, options 
	//any method : define route that respond to any route method
	//match method : define route that respond to multiple route method
//DI : create instance from existance class and inject it in class need it for some do some operation

/*============================================================
Basic Routing
=============================================================*/
//Basic Route Syntax
	Route::get('URI',function(){});
	Route::get('URI',[ControllerName:class,'methodName']);

/*============================================================
redirect Route
=============================================================*/
//Reiderct Route : when request arrive to uri1 we redirect it to uri2
	Route::redirect('URI1','URI2',302);
		//URI1 => redirect From URI1
		//URI2 => redirect to URI2
		//302 => defult status code return you can change it 

/*============================================================
View Route
=============================================================*/
//View Route : when request arrive to uri we redirect it to view
	Route::view('URI','bladeTempletName',['varName'=>'value']);

/*============================================================
Listing Your Route
=============================================================*/
//Listing Your Route : display all Your Route in app
	php artisan route:list

/*============================================================
Routing Coustomization 
=============================================================*/
//Routing Coustomization : make a new file that have our route defntion we do this in app/Providers/RouteServiceProvider.php
	->withRouting(
	    web: __DIR__.'/../routes/web.php',
	    commands: __DIR__.'/../routes/console.php',
	    health: '/up',
	    then: function () {
	        Route::middleware('middlewareName')
	            ->prefix('prefix')
	            ->name('webhooks.')
	            ->group(base_path('routes/newFileName.php'));
	    },
	)

/*============================================================
Reqierd Route Parameter
=============================================================*/
//Reqierd Route Parameter : paraeter in URI must have it /user/1
	//more than one Reqierd Route Parameter in same Route  
	//Reqierd Route Parameter && DI : get instance of model related to spasific Route Prameter  
	Route::git('/user/{id}',function(string $id){});

/*============================================================
Optional Route Parameter
=============================================================*/
//Optional Route Parameter : paraeter in URI may be have it and may be not => /user/1 || /user
	Route::get('/user/{id?}',function(?string $id=null){});

/*============================================================
RegExp constraint on Route
=============================================================*/
//RegExp constraint on Route : when definde route with RegExp we Apply Cheack RegExp pattren to Route Pararmeter
	//RegExp helper method : bult-in method that allow queqly add patren constraint
	//Global constrant : let you apply pattren constrant on route parameter without any intervention (interaction) from the programer
		Route::get('user/{id}/post/{post}',function(string $id,string $post){})->where(['id'=>'RegExp','post'=>'RegExp']);

/*============================================================
Named Route
=============================================================*/
//Named Route : let you give your route name
	//generating URL from route name : let you use your route name to generate the crossponding url to it even if it have route pararmeter
	//inpecting the current route : let you determain if the current request was routed to a given named route
		Route::get('URI',function(){})->name('routeName');

/*============================================================
Route Groups
=============================================================*/
//Route Groups : let you share attribute betwen large number of route
	Route::middleware(['middlewareName','middlewareName'])->group(function(){/*route defintion here*/}); 
	Route::(controllerName::class)->group(function(){/*route defintion here*/});
	Route::domain('{account}.example.com')->group(function(){/*route defintion here*/});
	Route::prefix('admin')->group(function(){/*route defintion here*/});
	Route::name('admin.')->group(function(){/*route defintion here*/});
?>