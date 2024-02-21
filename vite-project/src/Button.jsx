/*function Button() {
    const handleClick = ()=> {
        console.log("button was clickd")
   }
   const handleClick2 = (name)=>{
    console.log(`${name} stop clicking me`)
        
   }
 return(
    <>
    <button onClick={()=>handleClick2("Bro")}> click me</button>
    </>
    )}
export default Button;*/

/*function Button() {
   
    let count = 0;
    const handleClick = (name)=>{
        if(count <2){
            count++;
            console.log(`${name} you clicked me`)
        }else{
            console.log(`${name} stop clicking me`)

        }
    }

    return(
        <>
        <button onClick={()=>handleClick ("Rahmath") }> clickme</button>
    </>
 );
}*/
function Button() {
    const handleClick = (e)=> e.target.textContent ="Ouch Rahmathulla!";
    
    return(
        <>
        <button onDoubleClick={(e)=>handleClick(e)}>Click Bro</button>
        </>
    )
}
export default Button;