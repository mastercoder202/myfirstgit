import { useState } from "react";

const Palindrome=()=>{
  const[value,setvalue]=useState('')
  const[ans,setans]=useState('')

  const handlechange=(event)=>{
   setvalue(event.target.value)
  }
  const check=()=>{

   let n=parseInt(value)
   let num=n
   let rev=0
   while(n>0){
    let rem=n%10
    rev=rev*10+rem
    n=Math.floor(n/10)
   }
   if (num===rev){
      setans("palindrome")
   }
   else{
      setans("not a palindrome")
   }
   
} 
  return(
    <>
   <input type="number" onChange={handlechange}></input>
   <button onClick={check}>click me</button>
   <p>{ans}</p>
    </>
   );

};


export default Palindrome;