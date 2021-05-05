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
    return (
        <Card>
            <CardImg top src={movieInfo.Poster} alt="Card image cap"/>
            <CardBody>
            <CardTitle tag="h5">{movieInfo.Title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{movieInfo.Year}</CardSubtitle>
            <Button onClick={handleClick}>{props.buttonText}</Button>
            </CardBody>
        </Card>
    );
}

export default CardComp;