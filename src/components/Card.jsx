import React, {useState} from 'react';
import './Card.css'
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';

const CardComp = (props) => {
    const movieInfo = props.movie;
    const [buttonText, setButtonText] = useState('Nominate');
    console.log(movieInfo);
    const handleClick = () => {
        if (buttonText === 'Nominate') {
            console.log('aaaa')
        }
    }
    return (
        <Card>
            <CardImg top width="100%" src={movieInfo.Poster} alt="Card image cap"/>
            <CardBody>
            <CardTitle tag="h5">{movieInfo.Title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{movieInfo.Year}</CardSubtitle>
            <Button onClick={handleClick}>{buttonText}</Button>
            </CardBody>
        </Card>
    );
}

export default CardComp;