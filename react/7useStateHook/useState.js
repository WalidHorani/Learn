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

//
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

//
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

/****************************************************************************************
State Structured
*****************************************************************************************/
/*
    1- Group state variable in one state varible if :
        1- Update many state variable at same time
        2- you dont know how many state variable you need (example the user can add input filed andd witie on it)
        3- all state varible that have boolean value and related in each other
            1- update at same time 
            2- state variable will never be true at same time
            3- state variable will never be false at same time
            4- state variable will never be same value at same time
    2- state value ( bool or any other data type )
        1- any state value that not seen by user in your app make it boolean type
    3-dont use new state varible if you can calculate them from props or other state value
*/
//update the x postion and y postion at same time so we but it in single state varible object
import {useState} from "react";
export default function App(){
    mouseCordinate = { x:0,y:0};
    let [ mousePosition, setMousePosition] =useState(mouseCordinate); 
    style = {
        backgroundColor:"red",
        width:"20px",
        height:"20px",
        borderRadius:"50%",
        position: 'absolute',
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        top:"0",
        left:"0",
    };
    function handlePointerMove(e){
        let newMousePostion = {...mousePosition} ;
        newMousePostion.x=e.clientX;
        newMousePostion.y=e.clientY;
        setMousePosition(newMousePostion);
    }
    return (
        <div 
            style={{position:"relative",width: '100vw',height: '100vh',}}
            onPointerMove={handlePointerMove}
        >
            <div style={style} ></div>
        </div>
    );
} 
//all state varible that have boolean value and related in each other
import {useState} from "react";
export default function App(){
    let [ text, setText ] = useState("");
    let [appState, setAppState] = useState("isNotTyping");
   
    let isTyping = (appState  === "isNotTyping" || appState  === "isTyping") ;
    let isButtonActive = appState  === "isTyping" ;
    let isSending = appState  === "isSending" ; 
    let isResponceRecived = appState  === "isResponseRecived" ; 
    
    function handleChangeTextAreaMsg(e){
        setText(e.target.value)
        setAppState("isTyping");
    }
    function handleClickSend(){
        setAppState("isSending");
        setTimeout(()=> {setAppState("isResponseRecived")},5000)
    }
    return (
        <div>
            {isTyping&&(
                    <>
                        <h1>walid horanid</h1>
                        <p>send masseg to me</p>
                        <textarea value={text} onChange={handleChangeTextAreaMsg}/><br/>
                         <button
                            disabled={!isButtonActive} 
                            onClick={handleClickSend}
                        >
                            Send
                        </button>
                    </>
                )
            }
            {isSending && 
                <p>Sending........</p>
            }
            {isResponceRecived && <h2>thanks Your mesge recived</h2>}
        </div>
    );
}

//
/****************************************************************************************
sharing State between component
*****************************************************************************************/
/*
    lifting state up : if you have two or more component that have update to gather then you need to share state bettwen them
    you can share state betwen component buy make a state in first common parent and then send the state and state updte function
    to all commponent that update to gather depending on this state as props then any component update the state this will reflected on all component
    that depending on this state in rendirng 
*/ 
//
import {useState} from "react";
export default function App(){
    let [ activePersonState, setActivePerson ] = useState("Walid") ;    
    
    let isButtonWalidActive = activePersonState !== "Walid" ; 
    let isButtonAhmedActive = activePersonState !== "Ahmed" ;  
    let isButtonAbdActive = activePersonState !== "Abd" ;  

    return (
        <div 
            style={{
                borderWidth:"5px 0px",
                borderStyle:"solid",
                borderColor:"black",
            }}>
            <h1>Person Deteled</h1>
            <Person 
                name="Walid"
                isActiveButton = {isButtonWalidActive}
                updatePersonState={setActivePerson}
            >
                    my Name is walid im 30 Year old
            </Person>
            <Person 
                name="Ahmed"
                isActiveButton = {isButtonAhmedActive}
                updatePersonState={setActivePerson}
            >
                    my Name is ahmed im 29 Year old
            </Person>
            <Person 
                name="Abd"
                isActiveButton = {isButtonAbdActive}
                updatePersonState={setActivePerson}
            >
                    my Name is abd im 23 Year old
            </Person>
        </div>
    );
}
//person commponent
function Person({name,children,isActiveButton,updatePersonState}){
    function handleClickShowPerson(){
        updatePersonState(name);
    }
    return (
        <div style={{border:"2px solid black",margin:"3px"}}>
            <h3>{name}</h3>
            {!isActiveButton && <p>{children}</p>}
            { isActiveButton &&
                (
                        <button onClick={handleClickShowPerson} >
                            Show
                        </button>
                )}
        </div>
    );
}

//
/****************************************************************************************
preseving state and resting state
*****************************************************************************************/
//state are saved insaid react not insaid componant as internal array
//react attach state with compnant using postion of commponent in render tree
//render tree is tree structur consasit of node each nood represnt component insaid each componant (Children, Prps, state, .....)
/*
    preserving state : if any of thes condation not meet the state will be reset to initial value
        1- component re-render in same postion in render tree
        2- componant have the same key when re-rendring
        3- commponant not mounting

    Note1:
        here Comp1 is render at same postion so it will be preserve state all if satatment consider one blook
        function CompApp(){
            let [ isState, setIsState ] = useState();
            if(isState){
                return(
                    <Comp1 name="walid"/>
                );
            }else{
                 return(
                    <Comp1 name="ahmed"/>
                );
            }
        }

    Note2:
        we dont define component insaide componenet because this look bellow
        commponent Comm1 will reset state every time CommpApp re-render 
        function CommpApp(){
            function Commp1(){
                let [anyState, setAnyState() ] = useState(0);
                return (jsx);
            }
            return(
                <>
                    <Commp1 />
                </>
            );
        }

    Note3: 
        here Comp1 is render at same postion so it will be preserve state ternery operator consider one blook
        here even ternery operator consider one blook Comp2 is render at diff postion so it will be reset state
        function CompApp(){
            let [ isState, setIsState ] = useState();
            return (
                <>
                    {isState ? <Comp1 name="walid"/>: <Comp1 name="ahmed"/>}
                    {isState ? <Comp2 name="walid"/>: <div><Comp2 name="ahmed"/></div>}
                </>
            );
        }

    Note4:
        in logical condatinal operator will acte every one as seperate instance and Reserve place in render tree for each componant
        even if not rendering it will Reserve place for it so every time the state chaing it will be rened a new component Mounting
        and reset the state for the component that UnMount 
        function CompApp(){
            let [ isState, setIsState ] = useState();
            return (
                <>
                    {isState && <Comp1 name="walid" />}
                    {!isState && <Comp1 name="walid" />}
                </>
            );
        }  
*/
import {useState} from "react";
export default function App(){
    let [ isRenderAtDiffPostion, setIsRenderAtDiffPostion ] = useState(false);
    let [ isMount, setIsMount ] = useState(true);
    let [key, setKey] = useState(1);
    let [key2, setKey2] = useState(1);
    function handleClickRerinderCounter2AtDeffPostion(){
         let newIsRenderAtDiffPostion = !isRenderAtDiffPostion ;
        setIsRenderAtDiffPostion(newIsRenderAtDiffPostion);
    }
    function handleCheckedMountUnMount(e){
        setIsMount(e.target.checked);
    }
    function handleChangeKey(e){
        setKey(e.target.value);
    }
    function handleClickAddKey(){
        /*if(key !== key2){
            setKey2(key);
        }*/
        setKey2(key);
    }
    return (
        <div > 
            {isMount && <Counter  name="Counter1"/>}
            {
                isRenderAtDiffPostion?
                (
                    <div>
                        <p>render counter 2 at defferant postion</p>
                        <Counter name="Counter2"/>
                    </div>
                ):
                (
                    <Counter name="Counter2"/>
                )
            }
            <Counter  key={key2} name="Counter3"/>
            <lable>Add Counter 1 by Click on Add one</lable><br /> 
            <lable>Add Counter 2 by Click on Add one</lable><br /> 
            <label>Re-Render Counter 2 at differant postion will reset the state of it</label><br/>
            <button onClick={handleClickRerinderCounter2AtDeffPostion}>Click</button><br/>
            <label>{isMount?"UnMount":"Mont"} Counter 1 will reste the state of it</label><br/>
            <input 
                type= "checkbox" 
                checked={isMount}
                onChange={handleCheckedMountUnMount} />
            <br/>
            <label>Counter 3 have key=1 when re-rendering it with </label><br/>
            <label>differant key it will reset the stata</label><br/>
            <label>try add one without change key</label><br/>
            <label>now in input field chnge the key to any number</label><br/>
            <label>then click Change key button</label><br/>
            <input onChange={handleChangeKey}/>
            <button onClick={handleClickAddKey}>Change Key</button><br/>
        </div>
    );
}
function Counter({name,key}){
    let [ counterState, setCounterState ] = useState(0) ;
    function handleClickAddOne(){
        setCounterState(counterState+1);
    }
    return (
        <div 
            key={key}
            style={{border:"2px solid black",margin:"3px",width:"25vw",textAlign: "center"}}
        >
            <h1>{name}</h1>
            {counterState}<br />
            <button onClick={handleClickAddOne}>Add One</button>
        </div>
    );
}