import React, {useEffect, useState} from 'react';
import './App.css';
import Card from './components/Card';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {CardColumns} from 'reactstrap';

function App() {

  // hooks
  const [input, setInput] = useState('');
  const [nominate, setNominate] = useState([]);
  const [data, setData] = useState([]);
  
  // fetches the json data of the omdb api movie
  const handleClick = (e) => {
    if (e.key === 'Enter') {
      fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=820dd71f&s=${input}&type=movie`)
      .then(response =>
        response.json())
      .then((result) => {
        console.log(nominate);
        setData(result)
      })
    }
  }

  // handles the callback from the card child
  const childCallback = (value) => {
    let len = nominate.length + 1;
    if (len <= 5) {
      nominate.push(value);
      setNominate([...nominate]);
      nominate.length = len;
    }
  }

  return (
    <div className="App">
        <div className="head">
          <h2 className="title">The Shoppies Movie Awards</h2>   
        </div>
        <div className="input">
          <i id="search-icon" class="fas fa-search"></i>
          <input type="text" 
            placeholder="Search..." 
            onKeyDown={handleClick}
            onChange={event => setInput(event.target.value)}
          />
        </div>
      <div className="body">
        <div className="list-nominate">
          {nominate.length > 0 &&
            nominate.map((val, key) => {
              return (
                <div className="nominee" id={key}>
                  <p className="nominee-title">{val.Title} </p>
                  <p className="nominee-year">{val.Year}</p>
                  <button className="delete" onClick={() => {
                      let index = nominate.indexOf(val);
                      nominate.splice(index, 1);
                      setNominate([...nominate]);
                  }}><i class="fas fa-trash-alt"></i></button>
                </div>
              );
            })
          }
        </div>
        {
          !data.Search ? <div className="original"></div> :
          <div className="content">
          {data.Search &&
            data.Search.map((val, key) => {
              var state = false;
              nominate.forEach(element => {
                if (element.Title === val.Title && element.imdbID === val.imdbID) {
                   state = true;
                }
              })
              let buttonText = state ? 'Nominated!' : 'Nominate';
              return (
                <div className="movie" key={key}>
                  <Card movie={val} 
                        nominate={nominate} 
                        passToParent={childCallback}
                        buttonText={buttonText}
                    />
                </div>
              );
            })
          }
        </div>
        }  
      </div> 
    </div>
  )
}

export default App;
