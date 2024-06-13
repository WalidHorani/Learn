<?php
/*
|----------------------------------------------------------------------
|	controller
|----------------------------------------------------------------------
|	1-	what is controller ?
|			controller is class that have method this class handle user interaction or request when user request spacific URL using method insaide
|	2-	how to make controller ?
|			php artisan make:controller ControllerName
|	3-	how to recive route parameter in  controller method ?
|			insaid controller make your method and recive the route Parameter
|				public function methodName(string $routeParameter){}
|	4-	what is the resource Controller ?
|			it is controller that handle CRUD => [create read update delete] record in laravel model whene we using resource Controller it defined
|			nessery method for CRUD Action automaticly
|	5-	how to make resource Controller ? 
|			php artisan make:controller ControllerName --resource
|	6-	what is the pagenation ?
|			return spasific number of recodred
|	7-	how to make pagination ?
|			model....->->paginate(numberOfRecord); 
|	8-	how to redirect to URI ?
|			redirect('URI');
|	9-	how to redirect to route ?
|			redirect()->route('routeName');
|	10-	how to redirect to route with all data that send with reuest ?
|			return redirect()->route('routeName')->withInput( $request->except('password') );
|	11-	how to redirect to route with messge ?
|			.....
|	12-	how to redirect back ?
|			return redirect()->back();
|	13-	how to make validation ?
|			$messages= ['inputFieldName.required'=>'msg','inputFieldName.max'=>'msg'] ;
|			$validated = $request->validate([
|        		'inputFieldName' => ['required', 'regex:pattern', 'max:255', 'numeric', 'string', 'email', 'unique:table,column'],
|    		],$messages);
|	14-query bulder	
|			update record => create(['colomnName'=>value]);
|			insert record => insert([colomnName => $value,],[colomnName => $value,],)
|			define the colomn you want to return => select('colomnName','colomnName')
|			check if colomn value meet condtion => where([ ['colomnName','operator',$value], ])
|			check if any of where statment meet condtion => orWhere([ ['colomnName','operator',$value], ])
|			check if colomn value not meet condtion => whereNot([ ['colomnName','operator',$value], ])
|			check if any of where statment not meet condtion => orWhereNot([ ['colomnName','operator',$value], ])
|			check if any of colomn value meet condtion => whereAny([ ['colomnName','colomnName'],'operator', $value ])
|			check if all of colomn value meet condtion => whereAll([ ['colomnName','colomnName'],'operator', $value ])
|			check if colomn value in range => whereBetween([ ['colomnName',[$value-$value] ], ])
|			check if colomn value not in range => whereNotBetween([ ['colomnName',[$value-$value] ], ])
|			check if any of whereBetween statment meet condtion => orWhereBetween([ ['colomnName',[$value-$value] ], ])
|			check if any of whereBetween statment not meet condtion => orWherNoteBetween([ ['colomnName',[$value-$value] ], ])
|			check if colomn value in option => whereIn([ ['colomnName',[$value, $value] ], ])
|			check if colomn value not in option => whereNotIn([ ['colomnName',[$value, $value] ], ])
|			check if colomn value is null => whereNull('colomnName')
|			check if colomn value is not null => whereNotNull('colomnName') 
|			check if any of whereNull statment meet condtion => orWhereNull('colomnName')  
|			check if any of whereNull statment not meet condtion => orWhereNotNull('colomnName')  
|			check if record created at date => whereDate('created_at', '2016-12-31')
|			check if record created at month => whereMonth('created_at', '12')
|			check if record created at day => whereDay('created_at', '31')
|			check if record created at year => whereYear(''created_at', '2016'')
|			check if record created at time => whereTime(''created_at', '=', '11:20:45'')
|			update colomn or record  => update(['colomnName'=>val]) || update($request->all())
|			delete record => delete()
|			delete of all record in table => truncate ststament => truncate()
|			define sort record => orderBy('colomnName','desc')
|			group by rule  => groupBy()
|			define if repeted allowed when return result => distinct()
|           define location of the start Return Record From Record Number     => offset(startReturnRecordFromRecordNumber)
|           define number Of Record Returen     => limit(numberOfRecordReturen)
|			return all record from model => get()
|			return first record from model => first()
|			return lastest record from model => latest()
|			return recourd based on primary key value => find(valueInPrimaryKeyColomn)
|			return number of record => count()
|			return max value in colomn => max('colomnName')
|			return min value in colomn => min('colomnName')
|			return avg value in colomn => avg('colomnName')
|			return sum value in colomn => sum('colomnName')
*/

/*
|----------------------------------------------------------------------
|	how to make controller 
|----------------------------------------------------------------------
|
*/

	php artisan make:controller ControllerName


/*
|----------------------------------------------------------------------
|	how to recive route parameter in  controller method
|----------------------------------------------------------------------
|
*/

	public function methodName(string $routeParameter){}


/*
|----------------------------------------------------------------------
|	how to make resource Controller
|----------------------------------------------------------------------
|
*/

	php artisan make:controller ControllerName --resource

/*
|----------------------------------------------------------------------
|	how to make pagination
|----------------------------------------------------------------------
|
*/

	ModelName....->paginate(numberOfRecord); 


/*
|----------------------------------------------------------------------
|	how to redirect to URI
|----------------------------------------------------------------------
|
*/

	redirect('URI');


/*
|----------------------------------------------------------------------
|	how to redirect to route
|----------------------------------------------------------------------
|
*/

	redirect()->route('routeName');


/*
|----------------------------------------------------------------------
|	how to redirect to route with all data that send with reuest
|----------------------------------------------------------------------
|
*/
	//$request->except('colomnName'), $request->only('colomnName'),	$request->all()
	return redirect()->route('routeName')->withInput( $request->except('password') );


/*
|----------------------------------------------------------------------
|	how to redirect to route with messge
|----------------------------------------------------------------------
|
*/


/*
|----------------------------------------------------------------------
|	how to redirect back
|----------------------------------------------------------------------
|
*/

	return redirect()->back();


/*
|----------------------------------------------------------------------
|	how to make validation
|----------------------------------------------------------------------
|
*/
	$messages= ['inputFieldName.required'=>'msg','inputFieldName.max'=>'msg'] ;
	$validated = $request->validate([
					'inputFieldName' => ['required', 'regex:pattern', 'max:255', 'numeric', 'string', 'email', 'unique:table,column'],
				],$messages);


/*
|----------------------------------------------------------------------
|	create record
|----------------------------------------------------------------------
|
*/

	ModelName::create(['colomnName'=>value]);


/*
|----------------------------------------------------------------------
|	insert record
|----------------------------------------------------------------------
|
*/

	ModelName::insert(['colomnName' => $value,],['colomnName' => $value,],);


/*
|----------------------------------------------------------------------
|	define the colomn you want to return
|----------------------------------------------------------------------
|
*/

	ModelName::select('colomnName','colomnName')->get();


/*
|----------------------------------------------------------------------
|	check if colomn value meet condtion
|----------------------------------------------------------------------
|
*/

	ModelName::where([ ['colomnName','operator',$value], ])->get();


/*
|----------------------------------------------------------------------
|	check if colomn value not meet condtion
|----------------------------------------------------------------------
|
*/

	ModelName::whereNot([ ['colomnName','operator',$value], ])->get();


/*
|----------------------------------------------------------------------
|	check if any of where statment meet condtion
|----------------------------------------------------------------------
|
*/

	ModelName::where.....->orWhere([ ['colomnName','operator',$value], ])->get();


/*
|----------------------------------------------------------------------
|	check if any of where statment not meet condtion
|----------------------------------------------------------------------
|
*/

	ModelName::whereNot.....->orWhereNot([ ['colomnName','operator',$value], ])->get();


/*
|----------------------------------------------------------------------
|	check if any of colomn value meet condtion
|----------------------------------------------------------------------
|
*/

	ModelName::whereAny([ ['colomnName','colomnName'],'operator', $value ])->get();


/*
|----------------------------------------------------------------------
|	check if all of colomn value meet condtion
|----------------------------------------------------------------------
|
*/

	ModelName::whereAll([ ['colomnName','colomnName'],'operator', $value ])->get();


/*
|----------------------------------------------------------------------
|	check if colomn value in range
|----------------------------------------------------------------------
|
*/

	ModelName::whereBetween([ ['colomnName',[$value-$value] ], ])->get();


/*
|----------------------------------------------------------------------
|	check if colomn value not in range
|----------------------------------------------------------------------
|
*/

	ModelName::whereNotBetween([ ['colomnName',[$value-$value] ], ])->get();


/*
|----------------------------------------------------------------------
|	check if colomn value in option
|----------------------------------------------------------------------
|	
*/

	ModelName::whereIn([ ['colomnName',[$value, $value] ], ])->get();


/*
|----------------------------------------------------------------------
|	check if colomn value not in option
|----------------------------------------------------------------------
|	
*/

	ModelName::whereNotIn([ ['colomnName',[$value, $value] ], ])->get();


/*
|----------------------------------------------------------------------
|	check if colomn value is null
|----------------------------------------------------------------------
|	
*/

	ModelName::whereNull('colomnName')->get();


/*
|----------------------------------------------------------------------
|	check if colomn value is not null
|----------------------------------------------------------------------
|	
*/

	ModelName::whereNotNull('colomnName')->get(); 


/*
|----------------------------------------------------------------------
|	check if colomn value not in range
|----------------------------------------------------------------------
|	orWhereBetween, orWherNoteBetween, 
|	orWhereIn, orWhereNotIn, 
|	orWhereNull, orWhereNotNull 
*/


/*
|----------------------------------------------------------------------
|	check if record created at date
|----------------------------------------------------------------------
|	
*/

	ModelName::whereDate('created_at', '2016-12-31')->get();


/*
|----------------------------------------------------------------------
|	check if record created at month
|----------------------------------------------------------------------
|	
*/

	ModelName::whereMonth('created_at', '12')->get();


/*
|----------------------------------------------------------------------
|	check if record created at day
|----------------------------------------------------------------------
|	
*/

	ModelName::whereDay('created_at', '31')->get();


/*
|----------------------------------------------------------------------
|	check if record created at year
|----------------------------------------------------------------------
|	
*/

	ModelName::whereYear('created_at', '2016')->get();


/*
|----------------------------------------------------------------------
|	check if record created at time
|----------------------------------------------------------------------
|	
*/

	ModelName::whereTime('created_at', '=', '11:20:45')->get()


/*
|----------------------------------------------------------------------
|	update colomn or record
|----------------------------------------------------------------------
|	
*/

	ModelName::find.....->update(['colomnName'=>val]) || ModelName::where.....->update($request->all())


/*
|----------------------------------------------------------------------
|	delete record
|----------------------------------------------------------------------
|	
*/

	ModelName::find.....->delete();


/*
|----------------------------------------------------------------------
|	delete of all record in table
|----------------------------------------------------------------------
|	
*/

	ModelName::truncate()


/*
|----------------------------------------------------------------------
|	define sort records
|----------------------------------------------------------------------
|	
*/

	ModelName::orderBy('colomnName','desc')->get();


/*
|----------------------------------------------------------------------
|	group by rule
|----------------------------------------------------------------------
|	
*/

	groupBy()...........................


/*
|----------------------------------------------------------------------
|	define if repeted allowed when return result
|----------------------------------------------------------------------
|	
*/

	ModelName::distinct()->get();


/*
|----------------------------------------------------------------------
|	define location of the start Return Record From Record Number
|----------------------------------------------------------------------
|	
*/

	ModelName::offset(startReturnRecordFromRecordNumber)->limit.....->get();


/*
|----------------------------------------------------------------------
|	define number Of Record Returen
|----------------------------------------------------------------------
|	
*/

	ModelName::offset.....->limit(numberOfRecordReturen)->get();


/*
|----------------------------------------------------------------------
|	return all record from model
|----------------------------------------------------------------------
|	
*/

	ModelName::get();


/*
|----------------------------------------------------------------------
|	return first record from model
|----------------------------------------------------------------------
|	
*/

	ModelName::first();


/*
|----------------------------------------------------------------------
|	return lastest record from model
|----------------------------------------------------------------------
|	
*/

	ModelName::latest();


/*
|----------------------------------------------------------------------
|	return recourd based on primary key value
|----------------------------------------------------------------------
|	
*/

	ModelName::find(valueInPrimaryKeyColomn);


/*
|----------------------------------------------------------------------
|	return number of record
|----------------------------------------------------------------------
|	
*/

	ModelName::count();


/*
|----------------------------------------------------------------------
|	return max value in colomn
|----------------------------------------------------------------------
|	
*/

	ModelName::max('colomnName');


/*
|----------------------------------------------------------------------
|	return min value in colomn
|----------------------------------------------------------------------
|	
*/

	ModelName::min('colomnName');


/*
|----------------------------------------------------------------------
|	return avg value in colomn
|----------------------------------------------------------------------
|	
*/

	ModelName::avg('colomnName');


/*
|----------------------------------------------------------------------
|	return sum value in colomn
|----------------------------------------------------------------------
|	
*/

	ModelName::sum('colomnName');

?>