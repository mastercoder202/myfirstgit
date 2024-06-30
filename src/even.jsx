import { useState } from "react";

const Even = () => {
  const [value, setValue] = useState('');
  const [ans, setAns] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const check = () => {
    let n = parseInt(value);
    if (n % 2 === 0) {
      setAns("even");
    } else {
      setAns("odd");
    }
  };

  return (
    <>
      <input type="number" onChange={handleChange} value={value}></input>
      <button onClick={check}>click me</button>
      <p>{ans}</p>
    </>
  );
};

export default Even;