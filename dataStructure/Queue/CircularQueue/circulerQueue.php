<?php
	class sizeError extends Exception {
		public function errorMessage() {
	        // Error message
	        $errorMsg = 'Error on line '.$this->getLine().' in '.$this->getFile().': <b>'.$this->getMessage().'</b> Empty Size';
	        return $errorMsg;
	    }
	}
	
	class circulerQueue{
		private $front ;
		private $rare ;
		private $maxSize ;
		private $queue ;
		private $size ;
		public function __construct( $maxSize=null ){
			try{
				if( $maxSize===null ){
					throw new sizeError ('the size is empty') ;
				}
				$this->front = 0;
				$this->rare = $maxSize - 1;
				$this->maxSize = $maxSize ;
				$this->queue = array_fill(0, $this->maxSize, null);
				$this->size = 0 ;
			}catch( sizeError  $e ){
				echo $e->errorMessage() ;
			}
		}
		public function enQueue($value){
			if($this->isFull()){
				echo 'the queue is full' ;
			}else{
				$this->rare = ($this->rare + 1) % ($this->getMaxSize()) ;
				$this->queue[ $this->rare ] = $value ;
				$this->size++ ; 
			}
		}
		public function deQueue(){
			if( $this->isEmpty() ){
				echo 'the queue is empty' ;
			}else{
				$this->queue[$this->front] = null;
				$this->front = ($this->front + 1) % ($this->getMaxSize()) ;
				$this->size-- ;
			}
		}
		public function getFront(){
			if( $this->isEmpty() ){
				return null ;
			}else{
				return $this->queue[$this->front] ;
			}
		}
		public function getRare(){
			if( $this->isEmpty() ){
				return null ;
			}else{
				return $this->queue[$this->rare] ;
			}
		}
		public function getQueue(){
			return $this->queue;
		}
		public function getMaxSize(){
			return $this->maxSize;
		}
		public function getSize(){
			return $this->size ;
		}
		public function isEmpty(){
			return ($this->getSize() === 0);
		}
		public function isFull(){
			return ( $this->getSize() === $this->getMaxSize() );	
		}
		public function clear(){
			$this->front = 0;
			$this->rare = $this->getMaxSize() - 1 ;
			$this->queue = array_fill(0, $this->maxSize, null); ;
			$this->size = 0 ;
		}
		public function getState(){
			print_r($this->getQueue());
			print_r( '<br/>' );
			print_r('max Size is : '.$this->getMaxSize());
			print_r( '<br/>' );
			print_r('Size is : '.$this->getSize());
			print_r( '<br/>' );
			print_r('front is : '.$this->getFront());
			print_r( '<br/>' );
			print_r('rare is : '.$this->getRare());
			print_r( '<br/>' );
			print_r('=============================================================================');
			print_r('=============================================================================');
			print_r('=============================================================================');
			print_r( '<br/>' );
		}
	}

	$newCirculerQueue = new circulerQueue(5) ;
	print_r($newCirculerQueue->deQueue());
	print_r( '<br/>' );
	$newCirculerQueue->enQueue(1);
	$newCirculerQueue->enQueue(2);
	$newCirculerQueue->enQueue(3);
	$newCirculerQueue->enQueue(4);
	$newCirculerQueue->enQueue(5);
	$newCirculerQueue->getState();
	$newCirculerQueue->deQueue();
	$newCirculerQueue->deQueue();
	$newCirculerQueue->getState();
	$newCirculerQueue->enQueue(6);
	$newCirculerQueue->enQueue(7);
	$newCirculerQueue->getState();
	$newCirculerQueue->clear();
	$newCirculerQueue->getState();
?>