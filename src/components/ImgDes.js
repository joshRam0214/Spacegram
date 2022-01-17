import React from 'react';
import '../styles/App.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BiDetail } from 'react-icons/bi';

function ImageDescription(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.image.data[0].title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={props.image.links[0].href} alt={props.image.data[0].title} className='modalImgCard' />
                <p>
                    <b>Photographer: </b>{props.image.data[0].photographer }
                    <br></br>
                    <b>Date Created: </b>{props.image.data[0].date_created.substring(0,10)}
                    <br></br>
                    <b>Description: </b>{props.image.data[0].description}
                </p>
            </Modal.Body>
        </Modal>
    );
}

export default function ImgDes(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button className="btn btn-primary btn-lg" title="More Info" onClick={() => setModalShow(true)}>
                <BiDetail />
            </Button>

            <ImageDescription
                show={modalShow}
                image={props.imageInfo}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
