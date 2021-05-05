import React, {useEffect, useState} from 'react';
import './App.css';
import Card from './components/Card';
import {CardColumns, CardDeck} from 'reactstrap';
function App() {
  const [input, setInput] = useState('');
  const [nominate, setNominate] = useState([]);
  const [data, setData] = useState([]);
  const handleClick = () => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=820dd71f&s=${input}&type=movie`)
    .then(response =>
      response.json())
    .then((result) => {
      setData(result)
    })
  }

  const childCallback = (value) => {
    
    console.log(nominate)
    let len = nominate.length + 1;
    if (len < 6) {
      nominate.push(value);
      setNominate([...nominate]);
      nominate.length = len;
    }
    console.log(nominate)
    console.log(nominate.length)
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
        {nominate.length > 0 &&
          nominate.map(element => {
            return (
              <div>
                <p>{element}</p>
                <button className="delete" onClick={this.remove()}>delete</button>
              </div>
            );
          })
        }
      </div>
      {
        !data.Search ? <div className="original"></div> :
        <div className="content">
        <CardColumns>
        {data.Search &&
          data.Search.map((val, key) => {
            return (
              <div className="movie">
                <Card movie={val} passToParent={childCallback}/>
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
