/*
|-------------------------------------------
| Effect intro
|-------------------------------------------
| 	Effect : is side effects caused by rendering itself not Because particular event
|  
| 	Sending a message in the chat is an event because it is directly caused by the user clicking a specific button
| 	setting up a server connection is an Effect because it should happen no matter which interaction caused the component to appear
| 
| 	Effects exexute at the end of a commit after the screen updates is finshed
|
|	Effects run after every render .
| 		update the state varible insaid the Effect will case infint loop
|		You don’t need Effects to handle user events
|
|  	But Most Effects should only re-run when needed rather than after every render
|		consedir this senario were you are using chat Massge app when the app Mount and finshing update screen
|		connecting to server invoked as effect after render finshed but when user type any char the app will re-render
|		case the Effect run againg after finshed updating secreen and connect to server again and this is rong 
|		you don’t want to reconnect to the chat server on every keystroke   
|	
|	Array of dependencies : can tell React to skip unnecessarily re-running the Effect by specifying an array of dependencies
|		1-	if the dependencies array is empty This tells React to only run Effect code when the component “mounts” 
|		2-	React will only skip re-running the Effect if all of the dependencies 
|			you specify have exactly the same values as they had during the previous render
|
|	Clean Up Function : 
|		magine the ChatRoom component The user starts their journey on the ChatRoom page The component mounts and calls connection.connect()
|		then the user navigates to another screen the ChatRoom component unmounts. Finally, the user clicks Back and ChatRoom mounts again
|		this would set up a second connection—but the first connection was never destroyed
|		to solve this behaver we use clean up function that closed conection
|		when react call Clean Up Function
|			1-	React will call your cleanup function each time before the Effect runs again
|			2-	React will call your cleanup function one final time when the component unmounts
|
| 	Write Effect :
| 		1- 	import { useEffect } from 'react'; // declare an Effect
| 		2-	function Comp(){
|				useEffect(effectFunction // call the Effect at the top level of your component
|				, [] ); // Specify the Effect dependencies  
|				function effectFunction(){
|					return () => {} ; // clean up function 	
|				}		
|				return (jsx);
|			}
|
|	some logic need to run once in entire lifesicl off app this code must put outsad of componant and Effect because it will run only onece 
*/
//
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
export default function App(){ 
    let [isAnotherPage, setIsAnotherPage] = useState(false);
    function handleClickChangePage(){
        setIsAnotherPage( !isAnotherPage );
    }
    return (
        <div>
            {isAnotherPage?<h1>another page</h1>:<Comp1 />}
            <button onClick={handleClickChangePage}>
                {isAnotherPage?"back to your page":"Go to Another Page"}
            </button>
        </div>
    );
}
//
function Comp1(){
    let [counter, setCounter]=useState(0) ;
    let [reconnectNumber,setReconnectNumber] = useState(0);
    useEffect(effectFunction,[reconnectNumber]);
    function effectFunction(reconnectNumber){
        let createConnection = {
        connect(){console.log("conecting")},
        disconnect(){console.log("disconnecting")}
        } ;
        createConnection.connect();
        return(
            () => {
                createConnection.disconnect();
            }
        );
    }
    function handleClickAddOne(){
        setCounter( counter + 1) ;
    }
    function handleClickReconnect(){
        setReconnectNumber( reconnectNumber + 1 ) ;
    }
    return (
        <>
            <h1>Look To Your Console</h1>
            <p>Add One To Counter</p>
            Counter : {counter} <br/>
            <button onClick ={handleClickAddOne}>Add One</button>
            <button onClick={handleClickReconnect}>Re-Connect</button>
        </>
    );
}

//
/*
|-------------------------------------------
| useEffectEvent
|-------------------------------------------
|
*/
// isDarkThem props which can change, is included in the dependencies of the effect.
//Problem: Including theme in the dependencies causes the effect to re-run and the chat to reconnect whenever the theme changes, 
//which is undesirable.
//The solution is to use useEffectEvent to separate the non-reactive logic (showing the notification) from the reactive effect.
//App
import { useState, useEffect, useRef } from 'react';
import { ChatRome } from './chat.js';
import { showNotification } from './notifications.js';
export default function App() {
    let [roomId, setRoomId] = useState(null);
    let [ isDarkThem, setisDarkThem ] = useState(false);
    function handleSelectRoomId(e){
        setRoomId(e.target.value) ;
    }
    function handleChangeCheck(e){
        setisDarkThem(e.target.checked);
    }
  return (
    <div>
        <select 
            value={roomId}
            onChange={handleSelectRoomId}
        >
            <option value="genral">genral</option>
            <option value="music">music</option>
            <option value="sport">sport</option>
        </select><br/>
        <input 
            type="checkbox" 
            checked={isDarkThem}
            onChange={handleChangeCheck}
        />
        <label>
            Use Dark Them
        </label>
        <ChatRome 
            roomId = {roomId}
            isDarkThem = {isDarkThem}
        />
    </div>
  );
}
//chat
import { useState, useEffect, useRef} from 'react';
export function ChatRome({roomId,isDarkThem}){
    useEffect(useEffectFunction,[roomId,isDarkThem]);
    let fColor = isDarkThem?"red":"black" ;
    function useEffectFunction(){
        let connection = {
            connect(){console.log("connection stablished");},
            disconnect(){console.log("connection Closed");}
        };
        connection.connect();
        return (() => {
            connection.disconnect();
        });
    }
    return(
        <>
            <h1>Welcom To Rome {roomId} </h1>
            <p style={{color:fColor}}>Connected!</p>
        </>
    );
}
