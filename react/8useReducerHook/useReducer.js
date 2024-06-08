/****************************************************************************************
Reducer
*****************************************************************************************/
//Reducer : is a way to handle state it consolidate all the state update logic outside your commponent in a single function called reducer function
// action object : plane js object that describe state update 
/*
	1- use Resducer from Your component
		import {useReducer} from "react"  
		let [ state, dispatch ] = useReducer(reducerFunction,inti);

	1- move from seting state to dispatching action object
		replace content of EH with dispatch({Action Object})
			function EH(e){
	`			dispatch(
					{

						type:"discribe state update",
						//add all parameter in EH function signture as property 
						event:e
					}
				);`
			}
	2- write reducer function : move state update logic outsaid of commponent into seprate function
		 reducer function take :  
		 	1- current state 
		 	2- dispatching action object
		 	insaide reducer function use switch statment
		 		functon reduserFunctionName(state,Action){
					switch(Action.type){
						case "condtion":{
							return(newValueOfState);
							break;
						}
						default:{
							throw Error("msg");
						}
					}
		 		}
		 reducer function return :
		 	1- new state => state
		 	2- dispatching function => Action 
*/
import {useReducer} from "react";
export default function App(){
    let toDoList = [
        "weak Up",
        "drink coffie",
        "have a cegrate",
    ] ;
    let [toDoListReduser, dispatch2] = useReducer( taskReducer2,toDoList) ;
    let [textReduser, dispatch1] = useReducer( taskReducer1,"") ;
    
    function converListToElementList(el,ind){
        return (
                <li key={ind}>
                    {el}
                    <button onClick={()=>{handleClickDeleteItem(ind)}}>Delete</button>
                </li>
        );
    }
    
    let elementList = toDoListReduser.map(converListToElementList);
    
    function handleClickSaveNewTaskText(e){
        dispatch1({
            type:"save task text",
            event:e,
        });
    }
    function handleClickAddTask(){
        dispatch2({
            type:"add task",
            text:textReduser,
        });
    }
    function handleClickDeleteItem(ind){
        dispatch2({
            type:"delete item",
            index:ind
        });
    }
    return(
       <>
           <h1>to do list</h1>
           <input
               onChange={handleClickSaveNewTaskText}
               placeholder="Add task"/>
           <button onClick={handleClickAddTask}>Add</button><br/>
           <ul>
               {elementList}
           </ul>
       </>
    );
}
function taskReducer1(state, action){
    switch(action.type){
        case "save task text" :{
            return(action.event.target.value);
            break ;
        }
        default:{
            throw Error("error");
            break ;
        }
    }
}
function taskReducer2(state, action){
    switch(action.type){
        case "add task" :{
            return(
                [...state,action.text]
            );
            break ;
        }
        case "delete item" :{
             function deleteItem(elm,ind2){
                return (action.index !== ind2 ); 
            }
            let newArray=state.filter(deleteItem);
            return(newArray);
            break ;
        }
        default:{
            throw Error("error");
            break ;
        }
    }
}
