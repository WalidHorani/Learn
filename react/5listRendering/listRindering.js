 export default function App(){
    //map callback function convert list to html element
    function convertArrayElementToHtmlElement(elm,index){
        return <li key={index}>{elm}</li>
    }
    let arr=[1,2,3,4,5];
    //loop on array using map method and save the result in var
    let htmlElementList1 = arr.map(convertArrayElementToHtmlElement) ;
    let htmlElementList2 = arr.map( (elm,index) => <li key={index}>{elm}</li> ) ;
    return (
        <>
            {/*loop using map method on list from out side jsx using named function*/}
            <ul>
                {htmlElementList1}
            </ul>
            {/*loop using map method on list from out side jsx using arrow function*/}
            <ul>
                {htmlElementList2}
            </ul>
        </>
    );  
}
