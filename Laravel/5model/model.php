<?php
/*
|----------------------------------------------------------------------
|	model
|----------------------------------------------------------------------
|	1-	what is the model ?
|			is class that represnt table in database the modele responseple for CRUD Action in daatabase table
|	2-	how to make model ?
|			php artisan make:model ModelName
|	3-	how to connect model with table in db ?
|			protected $table = 'tableName';
|	4-	what is the $fillable property do in model ?
|			it prevent controller from Create and update Action on colomn that not in fillable Array ...................................
|	5- 	how to make $fillable property insaide model ?				
|			protected $fillable = ['colomnName', ];
|	6-	how to make one to one relation betwen tow model ?
|			//childe model
|			use App/model/ParentModelName ;
|			public function getParentModelNameRecord(){
|				return $this->belongesTo('ParentModelName','forginKeyInChildModel','primaryKeyInParentModel');
|			}
|			//parent mode
|			use App/model/ChildModelName ;
|			public function getChildModelNameRecord(){
|				return $this->hasOne('ChildModelName','forginKeyInChildModel','primaryKeyInParentModel');
|			}
|	7-	how to make one to Many relation betwen tow model ?
|			//childe model
|			use App/model/ParentModelName ;
|			public function getParentModelNameRecord(){
|				return $this->belongesTo('ParentModelName','forginKeyInChildModel','primaryKeyInParentModel');
|			}
|			//parent mode
|			use App/model/ChildModelName ;
|			public function getChildModelNameRecords(){
|				return $this->hasMany('ChildModelName','forginKeyInChildModel','primaryKeyInParentModel');
|			}
|	8-	how to make many to Many relation betwen tow model ?
|			//user model
|			use App/model/ParentModelName ;
|			public function getRouleRecords(){
|				return $this->belongsToMany('Roule','interMediateTable','userIdForgenKeyInInterMediateTable',
|					'rouleIdForgenKeyInInterMediateTable'
| 				);
|			}
|			//roule mode
|			use App/model/ChildModelName ;
|			public function getUserRecords(){
|				return $this->belongsToMany('User','interMediateTable','userIdForgenKeyInInterMediateTable',
|					'rouleIdForgenKeyInInterMediateTable' 
|				);
|			}  				
*/

/*
|----------------------------------------------------------------------
|	who to make model
|----------------------------------------------------------------------
*/

	php artisan make:model ModelName


/*
|----------------------------------------------------------------------
|	how to connect the mode with table
|----------------------------------------------------------------------
*/

	protected $table = 'tableName';


/*
|----------------------------------------------------------------------
|	how to make $fillable property insaide model
|----------------------------------------------------------------------
*/

	protected $fillable = ['colomnName', ];

/*
|----------------------------------------------------------------------
|	One to One => user has one profile && profile belonges to user  
|----------------------------------------------------------------------
*/	
	//childe model
	use App/model/ParentModelName ;
	public function getParentModelNameRecord(){
		return $this->belongesTo('ParentModelName','forginKeyInChildModel','primaryKeyInParentModel');
	}
	//parent mode
	use App/model/ChildModelName ;
	public function getChildModelNameRecord(){
		return $this->hasOne('ChildModelName','forginKeyInChildModel','primaryKeyInParentModel');
	}

/*
|----------------------------------------------------------------------
|	One to many => user has many post && post belonges to user  
|----------------------------------------------------------------------
*/	
	//childe model
	use App/model/ParentModelName ;
	public function getParentModelNameRecord(){
		return $this->belongesTo('ParentModelName','forginKeyInChildModel','primaryKeyInParentModel');
	}
	//parent mode
	use App/model/ChildModelName ;
	public function getChildModelNameRecords(){
		return $this->hasMany('ChildModelName','forginKeyInChildModel','primaryKeyInParentModel');
	}


/*
|------------------------------------------------------------------------------
|	One to many => user belonges to many roule && roule belonges to many user  
|------------------------------------------------------------------------------
*/	
	//user model
	use App/model/ParentModelName ;
	public function getRouleRecords(){
		return $this->belongsToMany('Roule','interMediateTable','userIdForgenKeyInInterMediateTable', 'rouleIdForgenKeyInInterMediateTable' );
	}
	//roule mode
	use App/model/ChildModelName ;
	public function getUserRecords(){
		return $this->belongsToMany('User','interMediateTable','userIdForgenKeyInInterMediateTable', 'rouleIdForgenKeyInInterMediateTable' );
	}
?>