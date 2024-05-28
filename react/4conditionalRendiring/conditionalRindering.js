export default function App(){
    //if else statment cant be insaid jsx
    //conditional rendring using if else statment
    if(true){
        return (
            <>
               <Comp1 bool={true} msg="conditional rendring using if else statment"/>
           </>
       );
    }
}
function Comp1({bool, msg}){
    return(
        <>
            <p>{msg}</p>
            {/*condetionly ternary operator rendering*/}
            {bool?<p>condetionly ternary operator rendering</p>:<p></p>}
            {/*logical operator rendering*/}
            {bool && <p>logical operator rendering</p>} 
        </>
    );
}
