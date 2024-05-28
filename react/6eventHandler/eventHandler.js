/***************************************************************
event handeler
***************************************************************/
//Event Handeler : function that handel user interaction like click 
//how to name Event handler => handelEventNameDiscribWhatDo
//Event handler can acsess the props to use it 
/*you can define event handler
	1- outsaid jsx as reuler function
	2- insaid jsx as arrow function
*/
// propegate bubble event  : when event occurs on child element its tregerd first then the parnt event will trgerd automaticly and so on 
//event.stopPropagation() : will stop propagtion
//onClickCapture event : even if the child use event.stopPropagation() and we click the child the parint will tregerd event handler 
// then child trigerd event hndler
//event handler not need to be pure
// some element event have default behaveor like submit that reload the page
//to prevent the defualt behaver use event.preventDefaulte();
/*
some event and related functionality
	onClick
	onSubmit
	onPointerMove
		event.clientX
		event.clientY
	onChange
		event.target.value
		event.target.checked
*/ 
export default function App(){
    //event handler outsaid jsx
    function handleonClickPassAsProps(e){
        alert("pass event handler (outsaid jsx) as props");
    }
    return (
        <div>
            {/*send props to componat to use it in event handler*/}
        	<Comp1  msgProps="event handler can acsess probs"/>
            {/*event handler insaid jsx, pass event handler (insaid jsx) as props to child component*/}
            <Comp2 onClick={(e) => alert("pass event handler (insaid jsx) as props to child component")} msg="pass event handler (insaid jsx) as props to child component" />
            {/*pass event handler (outsaid jsx) as props to child component*/}
            <Comp2 onClick={handleonClickPassAsProps} msg="pass event handler (outsaid jsx) as props to child component"/>
        	{/*Componant discribe event propegation bublue and how to pervent it and how Captcher it*/}
            <Comp3 />
        </div>
    );
}
function Comp1({msgProps}){
	//define event handler outsaid jsx
	function handleClickAlert1(e){
		alert("defined event handler outsaid jsx");
	}
    //event handler acsess props
    function handleClickAcsessProps(e){
        alert(msgProps);
    }
	return (
		<>
			<button onClick={handleClickAlert1} >define event handler outsaid jsx</button>
			{/*defined event handler insaid jsx*/}
			<button onClick={ (e) => alert("defined event handler insaid jsx") } >defined event handler insaid jsx</button>
    		{/*event handler can acsess props*/}
             <button onClick={handleClickAcsessProps}>event handler can acsess props</button>            
        </>
	);
}

function Comp2({onClick,msg}){
    //recevid event haandler from parent component as props => onClick
    return(
        <>
            {/*use event haandler that pass from parent component as props*/}
            <button onClick={onClick}>{msg}</button>
        </>
    );
}

function Comp3(){
    return (
        <>
        	{/*parent elemnt have event handler*/}
            <div onClick={(e) => alert("event handler from parent")}>
            	{/*child element have event handler and dont stop propegation*/}
                <button 
                    onClick={
                    	(e)=>{
                    		alert("event handler on child will treger event handler on parent")
                        }
                    }
                >
                    event handler on child will treger event handler on parent
                </button>
            	{/*child element have event handler and stop propegation*/}
                <button 
                    onClick={
                    	(e)=>{
                    		e.stopPropagation();
                            alert("event handler on child will not treger event handler on parent");
                        }
                    }
                >
                    event handler on child will not treger event handler on parent
                </button>

            </div>
        	{/*parent elemnt have event handler Capture*/}
            <div 
                onClickCapture={
                    (e)=>{
                        alert("event handler on parent tregered even child stop properations");
                    }
                }
            >
            	{/*child element have event handler and stop propegation*/}
                <button 
                    onClick={
                        (e)=>{
                            e.stopPropagation();
                            alert("event handler on child use stop propgation but the parent will tregerd event handler first then the child tregerd event handler");
                        }
                    }
                >
                    event handler on child use stop propgation but the parent will tregerd event handler then the child trigerd event handler
                </button> 
            </div>
        </>
    );
}