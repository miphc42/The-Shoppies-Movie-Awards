import React, {useEffect, useState} from 'react';
import './App.css';
import Card from './components/Card';
import {CardColumns} from 'reactstrap';

function App() {

  const [input, setInput] = useState('');
  const [nominate, setNominate] = useState([]);
  const [buttonText, setButtonText] = useState('');
  const [data, setData] = useState([]);
  
  useEffect(() => {
    setButtonText('Nominate');
  }, [])
  // fetches the json data of the omdb api movie
  const handleClick = () => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=820dd71f&s=${input}&type=movie`)
    .then(response =>
      response.json())
    .then((result) => {
      setData(result)
    })
  }

  // handles the callback from the card child
  const childCallback = (value) => {
    let len = nominate.length + 1;
    if (len < 6) {
      nominate.push(value);
      setNominate([...nominate]);
      nominate.length = len;
    }
  }

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
          nominate.map((val, key) => {
            return (
              <div className="nominee" id={key}>
                <p>{val}</p>
                <button className="delete" onClick={() => {
                    nominate.pop(val);
                    setNominate([...nominate]);
                }}>delete</button>
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
            let buttonText = nominate.includes(val.Title) ? 'Nominated!' : 'Nominate';
            return (
              <div className="movie">
                <Card movie={val} 
                      nominate={nominate} 
                      passToParent={childCallback}
                      buttonText={buttonText}
                  />
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
