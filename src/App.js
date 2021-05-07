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
        setData(result);
      })
    }
  }

  // handles the callback from the card child
  const childCallback = (value) => {
    let len = nominate.length;
    if (len < 5) {
      nominate.push(value);
      setNominate([...nominate]);
      nominate.length = len;
    }
  }

  return (
    <div className="App">
        <div className="head">
          <h2 className="title">The Shoppies</h2>   
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
      <div className="list-header">
          <h5 className="nominee-header">Nominations</h5>
          <div className="list-nominate">
            {nominate.length > 0 ?
              nominate.map((val, key) => {
                return (
                  <div className="nominee" id={key}>
                    <p className="nominee-title">{val.Title} </p>
                    {/* <p className="nominee-year">{val.Year}</p> */}
                    <div className="delete"> <div
                    onClick={() => {
                        let index = nominate.indexOf(val);
                        nominate.splice(index, 1);
                        setNominate([...nominate]);
                    }}><i class="fas fa-trash fa-lg"></i></div> </div>
                  </div>
                );
              }) : <div className="original-nomineee">
                <h6>Click nominate to add to list!</h6>
              </div>
            }
          </div>  
        </div>
        {
          !data.Search ? <div className="original">
            <h5 className="original-text">Search up your favorite movie to get started!</h5>
          </div> :
            <div className="content">
            {data.Search &&
              data.Search.map((val, key) => {
                var state = false;
                var deleteState = true;
                console.log(nominate)
                nominate.forEach(element => {
                  if (element.Title === val.Title && element.imdbID === val.imdbID) {
                    state = true;
                    deleteState = false;
                  }
                })
                let buttonText = state ? 'Nominated!' : 'Nominate';
                return (
                  <div className="movie" key={key}>
                    <Card movie={val} 
                          nominate={nominate} 
                          passToParent={childCallback}
                          buttonText={buttonText}
                          deleteState={deleteState}
                      />
                  </div>
                );
              })
            }
          </div>
        
        }
      </div> 
      <footer id="footer">
            <h5 className="foot-text">Built by Philip Choi for the Shopify UX & Web Developer Intern Challenge</h5>
        </footer>
    </div>
  )
}

export default App;
