import { useEffect, useState } from 'react';
import './App.css';

function App() {

  // Set up useState
  const [ data, setData ] = useState(null);

  // Import backend URL
  const url = 'http://localhost:3030/test'

  // Fetch data from backend
  // At some point after GA, you now have to declare and call the useEffect function
  // from within the useEffect call itself like this. 
  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const response_data = await response.json();
      setData(response_data)
    }
    getData()}, []);

  function MyButton() {
    const [count, setCount] = useState(0)

    function handleClick() {
      setCount(count + 1)
    }

    return(
      <>
        <button onClick={handleClick}>
          Click Me Idiot
        </button>
        <h4>{count}</h4>
      </>
    )
  }

  function loaded() {
    return(
      <>
        <h1>{data.data}</h1>
        <ul>
          {data.array.map(array_item => {
            return(
              <li>
                {array_item.title}
              </li>
            )
          })}
        </ul>
        <MyButton />
      </>
    )
  }

  function loading() {
    return(
      <h1>LOADING...</h1>
    )
  }
    
  return (
    <>
      {data ? loaded() : loading()}
    </>
  );
}

export default App;
