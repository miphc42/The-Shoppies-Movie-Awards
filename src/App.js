import React, {useEffect, useState} from 'react';
import json_data from './MOCK_DATA.json';
import './App.css';


function App() {
  const [input, setInput] = useState('');
  useEffect(() => {


  }, [])
  return (
    <div className="App">
      <input type="text" placeholder="Search..." 
        onChange={event => setInput(event.target.value)}
      />
      <button onClick={() => {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=820dd71f&s=${input}&type=movie`)
        .then(response =>
          response.json())
        .then((result) => {
          console.log(result)
        })
      }}>Click me</button>
    </div>
  )
}

export default App;
