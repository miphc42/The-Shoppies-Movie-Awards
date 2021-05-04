import React, {useEffect, useState} from 'react';
import './App.css';


function App() {
  const [input, setInput] = useState('');
  const [movie, setMovie] = useState('');
  const [data, setData] = useState([]);
  useEffect(() => {
      fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=820dd71f&s=${input}&type=movie`)
      .then(response =>
        response.json())
      .then((result) => {
        setData(result)
      })
  }, [movie])

  console.log(data.Search);
  return (
    <div className="App">
      <input type="text" placeholder="Search..." 
        onChange={event => setInput(event.target.value)}
      />
      <button onClick={() => setMovie(input)}>Search</button>
      {data.Search &&
        data.Search.map((val, key) => {
          return (
            <div className="movie" key={key}>
              <p>{val.Title}</p>
            </div>
          );
        })
      }
    </div>
  )
}

export default App;
