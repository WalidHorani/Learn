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
|	6-	how to git all data from db using model ?
|			.....
|	7-	what is the pagenation ?
|			return spasific number of recodred
|	8-	how to make pagination ?
|			.....
|	9-	how to create new record using model ?
|			.....
|	11-	how to redirect to URI ?
|			redirect('URI');
|	10-	how to redirect to route ?
|			redirect()->route('routeName');
|	11-	how to redirect to route with all data that send with reuest ?
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
|			
|	14-	how to update record using model ?
|			.....
|	15-	
*/
?>