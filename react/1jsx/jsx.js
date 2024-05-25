/*========================================
jsx
==========================================*/
//jsx : syntax extension for javascrpt 
//jsx is important because 
	//1-write html like markup in comp
	//2- mergging logic and markup together
//jsx have roule to write 
	//1- all html tag insaid jsx must warped by single parent or fragmint <div></div> || <></>
	//2- jsx attributes name must convention with variable name in js and react

export default function App(){
    // comp return is JSX
    return(
        <>
            {/*all html tag insaid jsx must warped by single parent or fragmint <div></div> || <></>*/}
            <h1>all html tag insaid jsx must warped by single parent or fragmint</h1>
            <Profile />
        </>
    );
}
//profile comp
function Profile(){
    let name = "mergging logic and markup together" ;
    return (
        <div>
            {
                /*
                    write html like markup in comp
                    mergging logic and markup together
                */
            }
            <h1 >{name}</h1>
            {
                /*
                    jsx attributes name must convention with variable name in js and react
                    class must tern to className 
                    use camelCase when nameing jsx Attributes
                    - must delete and use camelCase
                */
            }
            <p className="cls">name must convention with variable name in js and react</p>
        </div>
    ) ;
}