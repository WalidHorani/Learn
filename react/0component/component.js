/*========================================
components
==========================================*/
//commponent is bulding blook of react app encapsulate (HTML, css, js)
//you can define component in tow way 1-function commponent 2-class commponent we cover function componnet
//commp root serve as the entry point for applications its created automaticly when you set up new react porject
//some react app have multiple root commp

//we use export default to mark the main comp in the file and export the comp as module to any file want to reuse  it*/
//comp name must Start with capital latter*/
export default function App(){
    // comp return JSX
    return(
        <>
            <p>we use export default to mark the main comp in the file and export the comp as module to any file want to reuse  it</p>
            <p>comp name must Start with capital latter</p>
            <p>comp return JSX</p>
            {/*nest child component in parent component*/}
            <ChildComponent />
            {
                /*
                    you cant define comp insaid JSX
                    function CompName(){return(<></>); }
                */
            }
            <p>you cant define comp insaid JSX</p>
        </>
    );
}
//define Child comp 
function ChildComponent(){
    return (
        <div>
        	nest child component in parent compone
        </div>
    );
}
/*========================================
importing and exporting commponent
==========================================*/
