import React, {useState, useEffect} from 'react';
import './Card.css'
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Modal, ModalHeader, ModalBody, ModalFooter
  } from 'reactstrap';

const CardComp = (props) => {
    const [disable, setDisable] = useState(false);

    const [modalText, setModalText] = useState('');
    
    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);
    const movieInfo = props.movie;


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
                setModal(true);
                setModalText('Already selected maximum amount!');
            } else {
                if (props.nominate.length === 4) {
                    setModal(true);
                    setModalText('5 nominees are selected!');
                }
                setDisable(true);
                props.passToParent(movieInfo);
            }
        }
    }

    let link = movieInfo.Poster !== 'N/A' ? movieInfo.Poster : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png';
    
    return (
        <>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Attention!</ModalHeader>
                <ModalBody> {modalText} </ModalBody>
                <ModalFooter>
                <Button color="secondary" onClick={toggle}>OK</Button>
                </ModalFooter>
            </Modal>
            <Card id="card">
                <CardImg id="img" top src={link} alt="Card image cap"/>
                <CardBody>
                <CardTitle id="title" tag="h5">{movieInfo.Title}</CardTitle>
                <CardSubtitle id="year" tag="h6">{movieInfo.Year}</CardSubtitle>
                <Button 
                    disabled={disable} 
                    id="nominateButton" 
                    onClick={handleClick}>
                    {props.buttonText}
                </Button>
                </CardBody>
            </Card>
        </>
    );
}

export default CardComp;