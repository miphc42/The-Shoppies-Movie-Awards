import React, {useState} from 'react';
import './Card.css'
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';

const CardComp = (props) => {
    const movieInfo = props.movie;
    const [buttonText, setButtonText] = useState(true);
    const handleClick = () => {
        if (buttonText) {
            setButtonText(false);
            props.passToParent(movieInfo.Title);
            
        }
    }
    return (
        <Card>
            <CardImg top width="100%" src={movieInfo.Poster} alt="Card image cap"/>
            <CardBody>
            <CardTitle tag="h5">{movieInfo.Title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{movieInfo.Year}</CardSubtitle>
            <Button onClick={handleClick}>Nominate</Button>
            </CardBody>
        </Card>
    );
}

export default CardComp;