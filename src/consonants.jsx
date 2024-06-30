import { useState } from "react";
const Consonants=()=>{
    const[val,setvalue]=useState('')
    const[ans,setans]=useState('')
    const handlechange=(event)=>{
        setvalue(event.target.value)
    }

    const cons=()=>{
        let vowel="aeiou"
        let check=val
        let count=0
        for(let i=0 ;i<check.length;i++){
            for (let j=0;j<vowel.length;j++){
                if(check[i]==vowel[j]){
                    count=count+1
                    break
                }
            }
        }
        let l=check.length
        let v=l-count
        setans(v)
    }

    
    return(
        <>
        <input type="text" onClick={handlechange}></input>
        <button onClick={cons}>click me</button>
   <p>{ans}</p>
        </>
    )
}
export default Consonants