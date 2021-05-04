import React from 'react';
import './Card.css'
class Card extends React.Component {
    render() {
        return (
            <div class="card">
                <img src="" alt="Avatar" styles={"width:100%"}/>
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>
        );
    }
}

export default Card;