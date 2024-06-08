/****************************************************************************************
context
*****************************************************************************************/
//in some sutuation passing data from parent to children as proup is not convenant context 
//imagain this senario you need to pass data throw many child component to reach the desired component this is not approperaite using props 
//context allowe parent component to share date with inter tree below wthout using props the sub componanr can directly acsses 
//this data
import {createContext} from "react";
let LevelContext = createContext(0);
import {useContext} from "react";
export default function App(){
    return(
       <div>
            <Section >
                <Heding>Title</Heding>
                <Section >
                    <Heding>Heding</Heding>
                    <Heding>Heding</Heding>
                    <Heding>Heding</Heding>
                     <Section >
                         <Heding>subHeding</Heding>
                        <Heding>subHeding</Heding>
                        <Heding>subHeding</Heding>
                     </Section>
                </Section>
            </Section>          
       </div>
    );
}
//
function Section({children}){
    let level = useContext(LevelContext);
    return(
        <>
            <LevelContext.Provider value = { level + 2 } >
                <section>
                    {children}
                </section>
            </LevelContext.Provider>
        </>
    );
}
//
function Heding({children}){
    let level = useContext(LevelContext)
    switch(level){
        case 1 :{
            return(<h1>{children}</h1>);
            break;
        }
        case 2 :{
            return(<h2>{children}</h2>);
            break;
        }
        case 3 :{
            return(<h3>{children}</h3>);
            break;
        }
        case 4 :{
            return(<h4>{children}</h4>);
            break;
        }
        case 5 :{
            return(<h5>{children}</h5>);
            break;
        }
        case 6 :{
            return(<h6>{children}</h6>);
            break;
        }
            default:{
                throw Error();
                break;
            }
    }
}
//
/***************************************************************************
Context With Reduser
****************************************************************************/
import React, { useReducer, useContext, createContext } from 'react';
let CounterContext = createContext(0);
let DispatchContext = createContext(null); 
export default function App(){
    let [counter, dispatch] = useReducer(reducerFunction,0);
    //let counter1 = useContext(CounterContext);
    //let dispatch1 = useContext(DespatchContext);
    function handleClickAddOne(){
        dispatch({
            type:"Add",
        });
    }
    return(
     <div>
         Counter :  {counter}<br/>
         <CounterContext.Provider value = {counter}>
             <DispatchContext.Provider value={handleClickAddOne}>
                <Comp >Add One</Comp>
             </DispatchContext.Provider>
         </CounterContext.Provider>
    </div>      
    );
}
function Comp({children}){
    let counter = useContext(CounterContext);
    let dispatch = useContext(DispatchContext );
    return(
        <>
             <button onClick={dispatch}>{children}</button>
        </>
    );
}
function reducerFunction(state,action){
    switch(action.type){
        case "Add":{
            return(
                state + 1
            );
        }
        default:{
            throw Error();
        }
    }
}