<?php
	class List1{
		/*
		|---------------------------------------------
		|	property 
		|---------------------------------------------
		|
		*/
			private $size ;
			private $maxSize ;
			private $list ;


		/*
		|---------------------------------------------
		|	constructor
		|---------------------------------------------
		|
		*/
			public function __construct($maxSize){
				$this->size = 0 ;
				$this->maxSize = $maxSize ;
				$this->list = array_fill(0, $this->maxSize, null) ;  
			}


		/*
		|---------------------------------------------
		|	get method
		|---------------------------------------------
		|
		*/
			public function getSize(){
				return $this->size ;
			}
			public function getMaxSize(){
				return $this->maxSize ;
			}
			public function getList(){
				return $this->list ;
			}
			public function getElementAt($index){
				if($index >= 0 || $index <= $this->getMaxSize()-1 ){
					return $this->getList()[$index] ;
				}
				return null ;
			}
			public function find($element){
				$index = 0 ;
				$isFounded = false ;
				while($index <= $this->getSize()-1 ){
					if( $this->getElementAt($index) === $element ){
						$isFounded = true ;
						break ;
					}
					$index++;
				}
				if( $isFounded ){
					return $index;
				}else{
					return -1 ;
				} 
			}


		/*
		|---------------------------------------------
		|	boolian check method
		|---------------------------------------------
		|
		*/
			public function isEmpty(){
				return $this->getSize() === 0 ;
			}
			public function isFull(){
				return $this->getMaxSize() === $this->getSize() ;
			}


		/*
		|---------------------------------------------
		|	Updateing property 
		|---------------------------------------------
		|
		*/
			public function insertAt($index,$value){
				if($index < 0 || $index > $this->getMaxSize()-1){
					echo 'index out of range you cant insert' ;
					echo "<br/>";
				}elseif($this->isFull()){
					echo 'the list is full You Cant Insert' ;
					echo "<br/>";
				}elseif($this->getElementAt($index) === null){
					$this->list[$index] = $value ;
					$this->size++ ;
				}else{
					$counter = $this->getMaxSize() - 1 ;
					for( $counter; $counter > $index; $counter-- ){
						$this->list[ $counter ] = $this->list[$counter - 1] ;
					}
					$this->list[$index] = $value ;
					$this->size++ ;
				}
			}
			public function deleteAt($index){
				if($index < 0 || $index > $this->getMaxSize()-1){
					echo 'index out of range you cant delete' ;
					echo "<br/>";
				}elseif(	$this->isEmpty() || $this->getElementAt($index) === null ){
					echo 'the list is Empty Or this index is Empty You Cant Delete' ;
					echo "<br/>";
				}elseif($this->getElementAt($index) !== null){
					$counter = $this->getMaxSize() - 1 ;
					echo 'yes';
					for( $index; $index < $counter; $index++){
						$this->list[$index] = $this->list[$index+1];
					}
					$this->list[$index] = null ;
					$this->size-- ;
				}
			}
			public function updateAt( $index, $value ){
				if($index < 0 || $index > $this->getMaxSize()-1){
					echo 'index out of range you cant update' ;
					echo "<br/>";
				}elseif( $this->getElementAt($index) !== null){
					$this->list[$index] = $value ;
				}else{
					echo 'there is no element at this index to update it' ;
					echo "<br/>";
				}
			}
			

		/*
		|---------------------------------------------
		|	Debuging method
		|---------------------------------------------
		|
		*/
			public function logicDebuging(){
				print_r($this->getList());
				echo "<br />";
				print_r('the size of list is : '. $this->getSize() );
				echo "<br />";
				print_r('the max size of list is : '. $this->getMaxSize() );
				echo "<br />";
				print_r('=========================================================================================');
				echo "<br />";
				echo "<br />";
				echo "<br />";
			}

	}

	$newList = new List1(5) ;
	$newList->deleteAt(1);
	$newList->logicDebuging();
	$newList->insertAt(0,1);
	$newList->deleteAt(3);
	$newList->logicDebuging();
	$newList->insertAt(1,2);
	$newList->insertAt(2,3);
	$newList->insertAt(3,4);
	$newList->insertAt(4,5);
	$newList->deleteAt(2);
	$newList->logicDebuging();
	$newList->deleteAt(-1);
	$newList->deleteAt(7);
	$newList->logicDebuging();
	$newList->updateAt(4,100);
	$newList->updateAt(7,200);
	$newList->updateAt(3,300);
	$newList->logicDebuging();
	echo $newList->getElementAt(3);
	echo "<br/>";
	echo $newList->find(300);
?>