import React, {useEffect, useState} from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [input, setInput] = useState('');
  const [movie, setMovie] = useState('');
  const [data, setData] = useState([]);
  const handleClick = () => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=820dd71f&s=${input}&type=movie`)
    .then(response =>
      response.json())
    .then((result) => {
      setData(result)
    })
  }

  console.log(data.Search);
  return (
    <div className="App">
      <header>
        <h2>The Shoppies Movie Awards</h2>
      </header>
      <input type="text" placeholder="Search..." 
        onChange={event => setInput(event.target.value)}
      />
      <button onClick={handleClick}>Search</button>
      {data.Search &&
        data.Search.map((val, key) => {
          return (
            <div className="movie" key={key}>
              <p>{val.Title}</p>
              <Card />
            </div>
          );
        })
      }
    </div>
  )
}

export default App;
