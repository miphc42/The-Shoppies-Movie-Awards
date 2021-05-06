import React, {useState} from 'react';
import './Card.css'
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';

const CardComp = (props) => {
    const movieInfo = props.movie;
    // const [buttonText, setButtonText] = useState('Nominate');
    const handleClick = () => {
        if (!props.nominate.includes(movieInfo)) {
            if (props.nominate.length === 5) {
                alert("5 nominees are already selected!")
            } else {
                props.passToParent(movieInfo);
            }
        }
    }
    let link = movieInfo.Poster !== 'N/A' ? movieInfo.Poster : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png'
    console.log(movieInfo.Poster);
    console.log(movieInfo.Title)
    // if (movieInfo.Title.length > 42) {
    //     document.getElementById("title").style.fontSize = '2vh';
    // }
    return (
        <Card id="card">
            <CardImg id="img" top src={link} alt="Card image cap"/>
            <CardBody>
            <CardTitle id="title" tag="h5">{movieInfo.Title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{movieInfo.Year}</CardSubtitle>
            <Button id="nominateButton" onClick={handleClick}>{props.buttonText}</Button>
            </CardBody>
        </Card>
    );
}

export default CardComp;