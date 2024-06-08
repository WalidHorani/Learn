<?php
	class stack{
		private $stack ;
		private $top;
		public function __construct(){
			$this->stack = [] ;
			$this->top = -1 ; 
		}
		public function push($value){
			$this->top++ ;
			$this->stack[$this->top] = $value ;
		}
		public function pop(){
			if( $this->isEmpty() ){
				return null;
			}else{
				$element = $this->getTop() ;
				unset( $this->stack[$this->top] );
				$this->top-- ;
				return $element ;
			}
		}
		public function size(){
			return ($this->top + 1) ;
		}
		public function isEmpty(){
			return ( $this->size() === 0 ) ;
		}  
		public function getStack(){
			return $this->stack ;
		}
		public function getTop(){
			if( $this->isEmpty() ){
				return null;
			}else{
				return $this->stack[$this->top] ;
			}
		}
	}
	$newStack = new stack();
	$newStack->push(1);
	$newStack->push(2);
	print_r($newStack->getStack());
	print_r($newStack->getTop());
	print_r($newStack->size());
	print_r($newStack->isEmpty());
	$newStack->push(3);
	$newStack->pop();
	print_r($newStack->getStack());
	print_r($newStack->getTop());
	print_r($newStack->size());
	print_r($newStack->isEmpty());
	$newStack->pop();
	$newStack->pop();
	print_r($newStack->getStack());
	print_r($newStack->getTop());
	print_r($newStack->size());
	print_r($newStack->isEmpty());
?>