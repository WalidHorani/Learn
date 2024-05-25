/*========================================
jsx with curly brace
==========================================*/
export default function App(){
    let classForHeading = "someValue" ;
    let name = "im js exp betwen html tag" ;
    let stylee={color:"green"};
    let person={name:"im object property or object methos"};
    // comp return is JSX
    return(
        <>
            {/*using string as value for jsx attribute make it static value*/}
            <h1 className="cls">static jsx attribute</h1>
            {/*using {any js exp} as value for jsx attribute make it dynmamic value*/}
            <h1 className={classForHeading}>dynamic jsx attribute</h1>
            {
                /*
                    you can put { any js exp } in tow palace
                        1- as jsx attribute value
                        2- betwen HTML tags
                */
            }
            <h1>{name}</h1>
            {/*add static style to html element*/}
            <p style={{ color: "red", fontSize: "40px" }}>static style</p>
        	{/*add dynamic style to html element*/}
        	<p style={{color:stylee.color}}>dynamic style</p>
            {/*object put it {{obj}}*/}
            {/*object method or object property put it in single {}*/}
            <p>{person.name}</p>
        </>
    );
}