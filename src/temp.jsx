import { useState } from "react";

const Temp = () => {
  const [data, setData] = useState('');
  const [ans, setAns] = useState('');

  const handleChange = (event) => {
    setData(event.target.value);
  }

  const check = () => {
    let n = parseInt(data);
    let rev = (n * 9 / 5) + 32;
    setAns(rev);
  }

  return (
    <>
      <input type="number" value={data} onChange={handleChange} />
      <button onClick={check}>Click me</button>
      <p>{ans}</p>
    </>
  );
};

export default Temp;