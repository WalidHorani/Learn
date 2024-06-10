<?php
	class Node{
		public $value ;
		public $next ;
		public function __construct($value){
			$this->value = $value ;
			$this->next = null ;
		}
	}
	class linkedQueue{
		public function __construct(){
			$this->size = 0 ;
			$this->rare = null ;
			$this->front = null ;
		}
		public function getSize(){
			return $this->size ;
		}
		public function isEmpty(){
			return ($this->getSize()===0) ;
		}
		public function enQueue($value){
			$node = new Node($value);
			if($this->isEmpty()){
				$this->rare = $node ;
				$this->front = $node ;
			}else{
				$this->rare->next = $node ;
				$this->rare = $node ;
			}
			$this->size++;
		}
		public function deQueue(){
			if($this->isEmpty()){
				echo 'the linked qeue is empty' ;
				print_r('<br/>');
			}else{
				$pointer = $this->front->next ;
				$this->front = $pointer ;
			}
			$this->size--;
		} 
		public function getFront(){
			if($this->isEmpty()){
				echo 'the queue is empty';
				print_r('<br/>');
			}else{
				return $this->front->value ;
			}
		}
		public function getRare(){
			if($this->isEmpty()){
				echo 'the queue is empty';
				print_r('<br/>');
			}else{
				return $this->rare->value ;
			}
		}
		public function getQueue(){
			if($this->isEmpty()){
				echo 'the queue is empty';
				print_r('<br/>');
			}else{
				return $this->front ;
			}	
		}
		public function clear(){
			$this->size = 0 ;
			$this->rare = null ;
			$this->front = null ;
		}
		public function getState(){
			print_r($this->getQueue());
			print_r('<br/>');
			print_r('Front is : '.$this->getFront());
			print_r('<br/>');
			print_r('Rare is : '.$this->getRare());
			print_r('<br/>');
			print_r('size is : '.$this->getSize());
			print_r('<br/>');
			print_r('=================================================================');
			print_r('=================================================================');
			print_r('<br/>');
		}
	}

	$newLinkedQueue = new linkedQueue() ;
	$newLinkedQueue->getState();
	$newLinkedQueue->clear();
	$newLinkedQueue->getState();
	$newLinkedQueue->enQueue(1);
	$newLinkedQueue->getState();
	$newLinkedQueue->enQueue(2);
	$newLinkedQueue->getState();
	$newLinkedQueue->enQueue(3);
	$newLinkedQueue->getState();
	$newLinkedQueue->enQueue(4);
	$newLinkedQueue->getState();
	$newLinkedQueue->enQueue(5);
	$newLinkedQueue->getState();
	$newLinkedQueue->deQueue();
	$newLinkedQueue->getState();
	$newLinkedQueue->deQueue();
	$newLinkedQueue->getState();
	$newLinkedQueue->clear();
	$newLinkedQueue->getState();
	// class Node{
	// 	public $value ;
	// 	public $next ;
	// 	public function __construct($value){
	// 		$this->value = $value ;
	// 		$this->next = null ;
	// 	}
	// }
	// class linkedQueue{
	// 	public function __construct(){
	// 		$this->size = 0 ;
	// 		$this->rare = null ;
	// 		$this->front = null ;
	// 	}
	// 	public function getSize(){
	// 		return $this->size ;
	// 	}
	// 	public function isEmpty(){
	// 		return ($this->getSize()===0) ;
	// 	}
	// 	public function enQueue($value){
	// 		$node = new Node($value);
	// 		if($this->isEmpty()){
	// 			$this->rare = $node ;
	// 			$this->front = $node ;
	// 		}else{
	// 			$pointer = $this->rare ;
	// 			$this->rare = $node ;
	// 			$this->rare->next = $pointer ;
	// 		}
	// 		$this->size++;
	// 	}
	// 	public function deQueue(){
	// 		if($this->isEmpty()){
	// 			echo 'the linked qeue is empty' ;
	// 			print_r('<br/>');
	// 		}else{
	// 			$pointer = $this->rare ;
	// 			for($i=1;$i<=$this->getSize()-2;$i++){
	// 				$pointer = $pointer->next ;
	// 			}
	// 			$this->front = $pointer ;
	// 			$this->front->next = null ;
	// 		}
	// 		$this->size--;
	// 	} 
	// 	public function getFront(){
	// 		if($this->isEmpty()){
	// 			echo 'the queue is empty';
	// 			print_r('<br/>');
	// 		}else{
	// 			return $this->front->value ;
	// 		}
	// 	}
	// 	public function getRare(){
	// 		if($this->isEmpty()){
	// 			echo 'the queue is empty';
	// 			print_r('<br/>');
	// 		}else{
	// 			return $this->rare->value ;
	// 		}
	// 	}
	// 	public function getQueue(){
	// 		if($this->isEmpty()){
	// 			echo 'the queue is empty';
	// 			print_r('<br/>');
	// 		}else{
	// 			return $this->rare ;
	// 		}	
	// 	}
	// 	public function clear(){
	// 		$this->size = 0 ;
	// 		$this->rare = null ;
	// 		$this->front = null ;
	// 	}
	// 	public function getState(){
	// 		print_r($this->getQueue());
	// 		print_r('<br/>');
	// 		print_r('Front is : '.$this->getFront());
	// 		print_r('<br/>');
	// 		print_r('Rare is : '.$this->getRare());
	// 		print_r('<br/>');
	// 		print_r('size is : '.$this->getSize());
	// 		print_r('<br/>');
	// 		print_r('=================================================================');
	// 		print_r('=================================================================');
	// 		print_r('<br/>');
	// 	}
	// }

	// $newLinkedQueue = new linkedQueue() ;
	// $newLinkedQueue->getState();
	// $newLinkedQueue->clear();
	// $newLinkedQueue->getState();
	// $newLinkedQueue->enQueue(1);
	// $newLinkedQueue->getState();
	// $newLinkedQueue->enQueue(2);
	// $newLinkedQueue->getState();
	// $newLinkedQueue->enQueue(3);
	// $newLinkedQueue->getState();
	// $newLinkedQueue->enQueue(4);
	// $newLinkedQueue->getState();
	// $newLinkedQueue->enQueue(5);
	// $newLinkedQueue->getState();
	// $newLinkedQueue->deQueue();
	// $newLinkedQueue->getState();
	// $newLinkedQueue->clear();
	// $newLinkedQueue->getState();
?>