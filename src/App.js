import React, {useEffect, useState} from 'react';
import './App.css';
import Card from './components/Card';
import {CardColumns, CardDeck} from 'reactstrap';
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
        <div className="head">
          <h2 className="title">The Shoppies Movie Awards</h2>     
          <input type="text" placeholder="Search..." 
            onChange={event => setInput(event.target.value)}
          />
          <button onClick={handleClick}>Search</button>
        </div>
      </header>
      <div className="list-nominate">
        <h3>Nominees</h3>
      </div>
      {
        !data.Search ? <div className="original"></div> :
        <div className="content">
        <CardColumns>
        {data.Search &&
          data.Search.map((val, key) => {
            return (
              <div className="movie">
                <Card movie={val}/>
              </div>
            );
          })
        }
        </CardColumns>
      </div>
      }   
    </div>
  )
}

export default App;
