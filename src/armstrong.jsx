import { useState } from "react";

const Armstrong=()=>{
  const[value,setvalue]=useState('')
  const[ans,setans]=useState('')

  const handlechange=(event)=>{
   setvalue(event.target.value)
  }
  const check=()=>{
   let n=153;
   let comp=n;
   let ans=0;
   let l=n.toString().length;
   while (n>0){
      let rem=n%10;
      ans=ans+Math.pow(rem,l)
      n=Math.floor(n/10)
   }
   if (ans===comp){
      setans("armstrong")
   }
   else{
      setans("not armstrong")
   }
   setans(rev)
} 
  return(
    <>
   <input type="number" onChange={handlechange}></input>
   <button onClick={check}>click me</button>
   <p>{ans}</p>
    </>
   );

};

export default Armstrong