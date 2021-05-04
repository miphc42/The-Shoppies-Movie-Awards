import React from 'react';
import './Card.css'
const Card = (props) => {
    const movieInfo = props.movie;
    console.log(movieInfo);
    return (
        <div className="card">
            <img src={movieInfo.Poster} alt="Avatar" styles={"width:100%"}/>
            <div className="container">
                <h4><b>{movieInfo.Title}</b></h4>
                <p>{movieInfo.Year}</p>
            </div>
        </div>
    );
}

export default Card;