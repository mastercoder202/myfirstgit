import { useState } from "react";

const Prime=()=>
{
  const[value,setvalue]=useState('')
  const[ans,setans]=useState('')

  const handlechange=(event)=>{
   setvalue(event.target.value)
}
const check=()=>{
    let n=parseInt(value)
    let ans=true

    for(let i=2;i<n;i++){
        ans=false
        break
    }
if (n=true){
    setans("composite")
}
else{
    setans("prime")
}
}
 return(
    <>
    <input type="number" onClick={handlechange}></input>
    <button onClick={check}>click me</button>
   <p>{ans}</p>
    </>
 )
};

export default Prime;