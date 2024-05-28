/******************************************************
props
******************************************************/
// props used to share data between parent component and child component
// from parent to child

export default function App(){
    function functionSentToComp(num){
        return num * 5 ;
    }
    return(
        <div>
            {/*send singile value as prop*/}
            <Comp1 singuleValueProps={"Im a single value props"}/>
            {/*send singile object as prop*/}
            <Comp2 singleObjectProps = {{name:"im a single object",msg:"props"}} />
            {/*sending multy props*/}
            <Comp3  msgProps={"the props consist of single value and object each one in seprate props im the value part"} objectProps= {{name:"im the object part ",msg:"props"}} />
            {/*sending component as props*/}
            <Comp4>
                <Comp1 singuleValueProps={"Im component send to otheer component"}/>
            </Comp4>
            {/*sending function as props*/}
            <Comp5 valueForFunction="5" functionSentToComp={functionSentToComp}/>
        </div>
    );
}
//resive singel value
function Comp1({singuleValueProps}){
  return (
    <>
      <p>{singuleValueProps}</p>
    </>
  );
}
//resive singel object
function Comp2({singleObjectProps}){
    {/*destructuring probs object*/}
    let {name,msg} = singleObjectProps ;
    return (
        <>
            {/*use the props*/}
            <p>{name} {msg}</p>
        </>
    );
}
//resive multy props (object and sigile value) each one in seperate props
function Comp3( { msgProps, objectProps } ){
    {/*destructuring probs object*/}
    let {name,msg} = objectProps ;
    return(
        <>
            {/*use the props*/}
            <p>{msgProps} {name} {msg}</p>
        </>
    );
}
resive component as props
function Comp4({children}){
    return(
        <>
             {/*use the props*/}
            {children}
        </>
    );
}
//resive function as props
function Comp5({valueForFunction,functionSentToComp}){
    return(
        <>
            {/*use the props*/}
            <p>{functionSentToComp(5)}</p>
        </>
    );
}