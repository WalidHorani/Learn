/****************************************************************************************
state intro
*****************************************************************************************/
//component re-rindering trigerd only if update state variable using the function that defined when defined the state variable
//mount : render the component first time
//re-mount :re-render the component
//unmount : the component not render
/*
	how state work
	component mount
		intializing the state varible and the function that will update it and th default value for state variable
			this step make internal array insaid react that have array conssist of state variable value and function to update it
			[ [ stateVaribleValue, functionResponsibleForUpdateTheStateVariable ] ]
		create instance from component and rendering it 
		when the user triger event
	re-mount
		the tregerd event will run and executie all code insaide it except the code that update the state varible 
		it leave him to last when all code finsh the state varible update will start run
		if the update state function repetd more than one insade the same event handler then one of tow case will happen
			1- if the update function replace the value => then function will use state value from preveus snapshot befor rendirng 
				in first statment then in secand statment if it replace it will use state value from preveus snapshot befor rendirng 
				not updating value 
			2- if the update function update the value => then function will use state value from preveus snapshot for first statmet
				then in the secand statmet if its update it will use updated value and so on ....
		when finshing update state varible re-rendering start
		it will run the component code from first line but it will use the updated value of state varible in rendering

*/
//hook in react : are function that start with "use" provide access to react feathures like state
/*
	condtion must meet for using hook
		1- must be in top level of component (not insaid loop or if statment or function)
*/
//every instance of commponent have private state varible not connecting to each other
export default function App(){
	//define state and update function and initilizing value for state variable
    let [count,setCount]=useState(0);
    //event handler that update the state variable
    function handleClickUpdateCount(){
        newCountValue=count+1;
        setCount(newCountValue);
    }
    //EH update state and alert the update state befor the alert how will run befor
    function handleClick2(){
        let newCountValue = count + 1 ;
        setCount(newCountValue);
        alert("im run first am alert");
    }
    //EH update state and sitTimeout the update state befor the sitTimeout how will run befor
    function handleClick3(){
        let newCountValue = count + 1 ;
        setCount(newCountValue);
        setTimeout(()=>{alert("this depend on timeoute but the corect sequance is start the sittime out the  update the state")},2000);
    }
    //how do you think the count will be incresid when using multable update statment in same event handler will use to method so look to code
	function handleClick4(){
	    let newCountValue = count + 3 ;
	    newCountValue = count + 3 ;
	    setCount(newCountValue);
	    setCount(newCountValue);
	    setCount(n=>n+3);
	    setCount(n =>n+3); 
    }
    return (
        <div>
        	{/*elemnt with event handler that update state*/}
            <div>
                Count : 
                {count}
                <button 
                    onClick={handleClickUpdateCount}
                >
                    when Click me i will update state count 
                </button>
            </div>
            //EH update state and alert the update state befor the alert how will run befor
            <div>
                Count : {count}
                <br />
                event handler have both alert and state update the state update function befor alert
                <br />
               <button 
                   onClick={handleClick2}
                >
                    how will run firs alert or rinder
                </button> 
            </div>
            //EH update state and sitTimeout the update state befor the sitTimeout how will run befor
            <div>
                Count : {count}
                <br />
                event handler have both settimeout with alert and state update the state update function befor sittimeout
                <br />
               <button 
                   onClick={handleClick3}
                >
                    how will run firs sittiemout with alert or rinder
                </button> 
            </div>
            //how do you think the count will be incresid when using multable update statment in same event handler will use to method so look to code
            <div>
                Count : {count}
                <br />
                the differance betwen update and replace in update function
                <br />
               <button 
                   onClick={handleClick4}
                >
                    how do you think the count will be incresid when using multable update statment in same event handler will use to method so look to code
                </button> 
            </div>
        </div>
    );
}

/****************************************************************************************
updating object in state
*****************************************************************************************/
/*
	if state is none premiative data type then it should not be edited directly using update function because in this whay we will not pure 
	look to illestration 
		if we do this then we are not pure because we mutated the original object => obj and this not allowed
		let obj = {pro1:1,pro2:2}
		let [anyThing, setAnyThing ] = useState(obj);
		obj.pro1 = 3 ;
		obj.pro2 = 4 ;
		setAnyThing(obj);
		there is many way to update none premative data type this one of them 
		let obj = {pro1:1,pro2:2}
		let [anyThing, setAnyThing ] = useState(obj);
		let obj2 ={};
		obj2.pro1 = 3;
		obj2.pro2 = 4;
		setAnyThing(obj2);
*/
import {useState} from "react";
export default function App(){
    let obj1={pro1:0,pro2:0,pro3:{name:"walid",age:70}};
    let [ wholeObject, setObject ] = useState(obj1);
    //function update whole objet state
    function handleOnClickUpdateWholeObject(){
        let newObject = {...wholeObject};
        newObject.pro1 = newObject.pro1 + 1 ;
        newObject.pro2 = newObject.pro2 + 1 ;
        setObject(newObject);
    }
    //function update spasific value insaid objet state
    function handleOnClickUpdateValueInsaidObject(){
        let newObject = {...wholeObject} ;
        newObject.pro2 =  newObject.pro2 +1 ;
        setObject(newObject);
    }
    //function update spacific value insaid nested object
    function handleOnClickUpdateNestedObject(){
        let newObject1 = {...wholeObject.pro3} ;
        newObject1.age =  30 ;
        let newObject2 = {...wholeObject} ;
        newObject2.pro3 = newObject1 ;
        setObject(newObject2);
    }
    return (
        <div>
        	{/*update whole objet state*/}
        	<div>
	            <h1>Counter1 : {wholeObject.pro1} </h1>
	            <h1>Counter2 : {wholeObject.pro2} </h1>
	            when click me i will update the tow counter<br/>
	            the counter value save in object<br/> 
	            will update whole object<br/>
	            <button 
	                onClick={handleOnClickUpdateWholeObject}
	            >
	                click
	            </button>
            </div>
            {/*update spasific value insaid objet state*/}
            <div>
            	<h1>Counter1 : {wholeObject.pro1} </h1>
	            <h1>Counter2 : {wholeObject.pro2} </h1>
	            when click me i will update the secand counter<br/>
	            the counter values save in object<br/> 
	            will update spasific value insaid object<br/>
	            <button 
	                onClick={handleOnClickUpdateValueInsaidObject}
	            >
	                click
	            </button>
            </div>
            {/*update spacific value insaid nested object*/}
            <div>
            	<h1>my name is {wholeObject.pro3.name}</h1>
	            <h1>and my age is {wholeObject.pro3.age}</h1>
	            when click me i will update the the age of walid<br/>
	            what actualy happen look to illistration below<br/> 
	            state varible object = {"{"}<br/>
	                pro1 : value<br/>
	                pro1 :value<br/>
	                pro3: {"{"}name:"walid",age:70{"}"}<br/>
	            {"}"}<br/>
	            we will update only the age which is spasific value <br/>
	            insaid object insaid object state<br/>
	            <button 
	                onClick={handleOnClickUpdateNestedObject}
	            >
	                click
	            </button>
            </div>
        </div>
    );
}

/****************************************************************************************
updating Array in state
*****************************************************************************************/
//map(callbackFunction) => loop on list and create new list then save edited elemnt in it 
//slice(startIndex,lastIdex) => create new list have the slice of elemnt slice => [ startOndex .... lastIndex-1 ] => using in insert 
//filter(callbackFunction) => create new list and save the elemnt when condtion meet => using in delete elemnt  
//arrName.reverce() 
//find(callbackFunction) => return the first element that meet the condition 
import {useState} from "react";
export default function App(){
    let arr = [1,2,3] ;
    let arr2 = [1,2,3,5,6,7,8,9];
    let person = [
        {id:1,name:"walid",age:31},
        {id:2,name:"ahmed",age:30},
        {id:3,name:"abd",age:22},
        {id:4,name:"mohamed",age:10},
    ] ;
    let [ myArr, setMyArray ] = useState(arr);
    let [ myArrInsert, setMyArrayInser ] = useState(arr2);
    let [ personList, setPerson ] = useState(person);
    //callBack function from map() to set elment list
    function renderList1(elm,ind){
        return <li key={ind}>{elm}</li>
    }
    //set elment list
    let myListElement = myArr.map(renderList1) ;
    //
    function renderListOfObject(elm){
        return <li key={elm.id}>my name is {elm.name} and my age is {elm.age}</li>
    }
    //set elment list
    let elementListOfObject = personList.map(renderListOfObject);
    //function update whole list
    function handleClickUpdateWholeArray(){
        let newArray = [4,5,6] ;
        setMyArray(newArray);
    }
    //function add element to first and last of array
    function handleClickAddToFirstAndLast(){
        let newArray = [0,...myArr,4] ;
        setMyArray(newArray);
    }
    let myListElementToInsert = myArrInsert.map(renderList1) ;
    //function to insert at index 
    function handleClickInsertAtIndex(){
        let newArray1 = myArrInsert.slice(0,3) ;
        let newArray2 = myArrInsert.slice(3,8) ;
        let newArray3 = [ ...newArray1, 4, ...newArray2 ] ;
        setMyArrayInser(newArray3);
    }
    //delete object elemnt from list
    function handleClickDeleteElement(){
        function checkIfElementMeetCondition(elm){
            return elm.id !== 3 ;
        }
        let newArray = personList.filter(checkIfElementMeetCondition);
        setPerson(newArray);
    }
    //function update property object where the object is elemnt in list
    function handleClickUpdateObjectProInList(){
        function EditeElement(elm){
            if(elm.age === 30){
                let newObject = {...elm}
                newObject.age = 10 ;
                return newObject ;
            }else{
                return elm ;
            }
        }
        let newArray = personList.map(EditeElement);
        setPerson(newArray);
    }
    return (
        <div>
        	{/*update whole list*/}
            <div>
                Im a list consest of [1,2,3]<br/>
                we want update whole list to [4,5,6] when click <br/>
                <ul>
                    {myListElement}
                </ul>
                <button 
                    onClick={handleClickUpdateWholeArray}
                >
                    click
                </button>
            </div>
        	{/*add element to first and last of array*/}
        	<div>
                Im a list consest of [1,2,3]<br/>
                we want add element to  becom [0,1,2,3,4] when click <br/>
                <ul>
                    {myListElement}
                </ul>
                <button 
                    onClick={handleClickAddToFirstAndLast}
                >
                    click
                </button>
            </div>
        	{/*insert at index */}
        	<div>
                Im a list consest of [1,2,3,5,6,7,8,9]<br/>
                we want insert element at index 3 to becom [1,2,3,4,5,6,7,8,9] when click <br/>
                <ul>
                    {myListElementToInsert}
                </ul>
                <button 
                    onClick={handleClickInsertAtIndex}
                >
                    click
                </button>
            </div>
            {/*delete element from list when condtion meet*/}
            <div>
                Im a list consest of 4 object <br/>
                we want delete elemnt at index 2  when click <br/>
                <ul>
                    {elementListOfObject}
                </ul>
                <button 
                    onClick={handleClickDeleteElement}
                >
                    click
                </button>
            </div>
        	{/*update property object where the object is elemnt in list*/}
            <div>
                Im a list consest of object <br/>
                we want update  object age property for ahmed object<br/> 
                element to 10 when click <br/>
                <ul>
                    {elementListOfObject}
                </ul>
                <button 
                    onClick={handleClickUpdateObjectProInList}
                >
                    click
                </button>
            </div>
        </div>
    );
}