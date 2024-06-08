<?php
	class Node {
	    public $value;
	    public $next;
	    public function __construct($value) {
	        $this->value = $value;
	        $this->next = null;
	    }
	}
	class LinkedStack {
	    private $top;
	    private $size;
	    public function __construct() {
	        $this->top = null;
	        $this->size = 0;
	    }
	    public function push($value) {
	        $newNode = new Node($value);
	        if ($this->top === null) {
	            $this->top = $newNode;
	        } else {
	            $newNode->next = $this->top;
	            $this->top = $newNode;
	        }
	        $this->size++;
	    }
	    public function pop() {
	        if ($this->isEmpty()) {
	            throw new UnderflowException("Stack is empty");
	        }
	        $value = $this->top->value;
	        $this->top = $this->top->next;
	        $this->size--;
	        return $value;
	    }
	    public function getTop() {
	        if ($this->isEmpty()) {
	            throw new UnderflowException("Stack is empty");
	        }
	        return $this->top->value;
	    }
	    public function isEmpty() {
	        return $this->top === null;
	    }
	    public function getSize() {
	        return $this->size;
	    }
	}

// Example usage
$newStack = new LinkedStack();
$newStack->push(5);
$newStack->push(6);
$newStack->push(7);
echo $newStack->pop() . PHP_EOL; // Outputs 7
echo $newStack->getTop() . PHP_EOL; // Outputs 6
echo $newStack->isEmpty() ? 'true' : 'false'; // Outputs false
?>