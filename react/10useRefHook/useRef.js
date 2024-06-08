/**************************************************************************
Referance 
***************************************************************************/
/*
in React, every update is split in two phases:
    During render, React calls your components to figure out what should be on the screen.
    During commit, React applies changes to the DOM.
*/
//React sets ref.current during the commit. Before updating the DOM
//After updating the DOM, React immediately sets them to the corresponding DOM nodes
//React not track referance value meaning you can both read and write to it
//react commponent remmber referance value bettwen render but updating referance value not triger rendering 
// if the data need in rendirng then use state
//if the data not need in rendirng only need in EH use Referance 
/*
	when to use referance 
	    1- Storing IDs for setTimeout && setInterval
	    2- Storing and manipulating DOM elements
	    3- Storing other objects that aren’t necessary to calculate the JSX.
*/
/*
	useRef()
		take :
			1- init value
		return : object have property name (current) that holde the referance value
			1-	{current:value}

	Add Referance to component
		1- import { useRef } from 'react';
		2- const ref = useRef(0);
	
	Acsses referance :
		ref.current 
*/
import { useRef } from 'react';
import { useState } from 'react';
export default function App(){
    let [ startTimeState, setStartTimeState ] = useState(0.00);
    let [ timeNowState, setTimeNowState ] = useState(0.00);
    let intervalId = useRef(null);
    let timePassed = (timeNowState - startTimeState)/1000  ;
    function handleClickStartWatch(){
        clearInterval(intervalId.current);
        setStartTimeState(Date.now());
        setTimeNowState(Date.now());
        intervalId.current=setInterval(
            () => {
                setTimeNowState(Date.now());
            }
            ,10);
    }
    function handleClickStopWatch(){
        clearInterval(intervalId.current);
    }
    return (
        <div>
            <h1>Time Passed :</h1>{timePassed}<br/>
            <button onClick={handleClickStartWatch}>Start</button>
            <button onClick={handleClickStopWatch}>Stop</button>
        </div>
    );
}

//
/**************************************************************************
manubliting the DOM with referance
***************************************************************************/
//Usually, you will use refs for non-destructive actions like focusing, scrolling, or measuring DOM elements.
//managing focus, scroll position, or calling browser APIs
/*
	Acssess Dom Node using Referance
		1-	import { useRef } from 'react';
		2-	const myRef = useRef(null);
		3-	<div ref={myRef}>

	React will put a reference to this node into myRef.current. 
	You can then access this DOM node from your event handlers and use the built-in browser APIs defined on it.
	example(myRef.current.scrollIntoView();)
	
	if you need to referance DOM Elements that user may be insert look to this senario 
	user can add input feilds and when user do it we want focase on last input fields
	to do this we have proplem we dont now how input field the user will add so we will use this teqniq
	we will save all input field refernace in referance variable using function that set the id and ref dom as paire using Map Object
		1- 	let refList = useRef(null) ;
		2- 	<input 	key={id}
					ref ={(ref)=>{setRef(ref,id)}}
			/>
		3- 	function setRef(ref, id){
				if(!refList.current){
					refList.current = new Map() ;
				}
				if(ref){
            		refList.current.set(id, ref);
        		}else{
            		refList.current.delete(id);
        		}
			}
		4-	refList.current.get(id).focus();

	Accessing another component’s DOM nodes
	this code will make Error 
		function Comp1(){
			let myRef = useRef(null) ; 
			return <Comp2 ref={myRef} />
		}
	Because React dose not let a commponent acsess the dom node of other component not even for its own children
	When you use a ref with a custom component, the ref does not automatically point to the DOM node. 
	Instead, it points to the instance of the component.
	To control what the ref points to, you use forwardRef and useImperativeHandle.
		1-	import { forwardRef, useRef } from 'react';
		2-	function Comp1(){
				let myRef = useRef(null) ; //creates a ref in the parent component.
				return <Comp2 ref={myRef} /> // Passing the Ref to the Child Component
			}
		3-	let Comp2 = forwardRef((props, ref) => { // forwardRef allows Comp2 to accept a ref from its parent.
  				return <div ref={ref}></div>;
			});
	This lets the parent component call focus() but this also lets the parent component do something else—for example, change its CSS styles
	you may want to restrict the exposed functionality. You can do that with useImperativeHandle
		1- 	let Comp2 = forwardRef((props, ref) => {
			  	let realInputRef = useRef(null); // create a ref for the actual input element
			  	useImperativeHandle(ref, () => ({ // customizes what the parent ref points to 
			    	// customRef.current in the parent component will have this custom object with the focus method.
			    	focus() {
			      		realInputRef.current.focus();
			    	},
			  	}));
			  	return <input {...props} ref={realInputRef} />;
			});
	
*/
import { useRef } from 'react';
import { useState } from 'react';
export default function App(){
    let inputList = [
        {id:0},
        {id:1},
        {id:2}
    ] ;
    let [ inputListState, setInputListState ] = useState(inputList);
    let [ lastIdState, setLastIdState ] = useState(2);
    let listReferance = useRef(null) ;
    function setRefrance(ref, elmId ){
        if( !listReferance.current  ){
            listReferance.current = new Map() ;
        }
        if(ref){
            listReferance.current.set(elmId, ref);
        }else{
            listReferance.current.delete(elmId);
        }
    }
    function convertListToElement(elm){
        return (
            <>
                <label>label {elm.id} : </label>
                <input 
                    key={elm.id} 
                    ref={ (ref) => setRefrance( ref, elm.id ) }
                />
                <br/>
            </>
        ) ;
    }
    //
    let inputElementList = inputListState.map(convertListToElement);
    function handleClickAddInputField(){
        let newElement = {id:lastIdState + 1}  ;
        let newList = [ ...inputListState, newElement ] ;
        setInputListState(newList);
        setLastIdState( lastIdState + 1 ) ;
        let reff = listReferance.current.get(lastIdState);
        reff.focus();
    }
    return (
        <div>
            <ul>
                {inputElementList}
            </ul>
            <button onClick={handleClickAddInputField}>Add New Input Fields</button>
        </div>
    );
}