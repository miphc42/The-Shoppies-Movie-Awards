import React, {useState, useEffect} from 'react';
import './Card.css'
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';

const CardComp = (props) => {
    const [disable, setDisable] = useState(false);
    const movieInfo = props.movie;
    // const [buttonText, setButtonText] = useState('Nominate');
    console.log(props.deleteState);
    console.log(props.buttonText)

    useEffect(() => {
        if (props.deleteState && disable) {
            setDisable(false);
        } else if (!props.deleteState) {
            setDisable(true);
        }
    });
    

    const handleClick = () => {
        var state = false;
        props.nominate.forEach(element => {
            if (element.Title === movieInfo.Title && element.imdbID === movieInfo.imdbID) {
                state = true;
            }
        })
        if (!state) { 
            if (props.nominate.length === 5) {
                alert("5 nominees are already selected!")
            } else {
                setDisable(true);
                props.passToParent(movieInfo);
            }
        }
    }
    let link = movieInfo.Poster !== 'N/A' ? movieInfo.Poster : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png'
    return (
        <Card id="card">
            <CardImg id="img" top src={link} alt="Card image cap"/>
            <CardBody>
            <CardTitle id="title" tag="h5">{movieInfo.Title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{movieInfo.Year}</CardSubtitle>
            <Button disabled={disable} id="nominateButton" onClick={handleClick}>{props.buttonText}</Button>
            </CardBody>
        </Card>
    );
}

export default CardComp;