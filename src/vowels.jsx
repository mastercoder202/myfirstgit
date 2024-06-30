import { useState } from "react";
const Vowels=()=>{
    const[value,setvalue]=useState('')
    const[ans,setans]=useState('')
    const handlechange=(event)=>{
        setvalue(event.target.value)

    }
    const vow=()=>{
        let vowel="aeiou"
        let check=value
        let count=0
        for(let i=0 ;i<check.length;i++){
            for (let j=0;j<vowel.length;j++){
                if(check[i]==vowel[j]){
                    count=count+1
                    break
                }
            }
        }
        setans(count)

    }
    return(
        <>
           <input type="text" onChange={handlechange}></input>
   <button onClick={vow}>click me</button>
   <p>{ans}</p>
        </>
    )
}
export default Vowels