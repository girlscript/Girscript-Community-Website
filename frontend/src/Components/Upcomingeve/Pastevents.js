import React from 'react';
import "./Upcomingeve.css";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image4 from "../../images/event4.jpg";
import image5 from "../../images/event5.jpg";

const Pastevents = () => {
    return(
        
            <Container>
            <Row>
                <Col>
                    <Card   id = 'upcomingeve' style={{ width: '18rem' }}  >
                    <Card.Img variant="top" src= {image4}/>
                    <Card.Body>
                    <Card.Title>Web Desvlopment</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card   id = 'upcomingeve' style={{ width: '18rem' }}  >
                    <Card.Img variant="top" src= {image5}/>
                    <Card.Body>
                    <Card.Title>Hacktober Fest</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>

            </Row>
            </Container>
                
       
    )
}

export default Pastevents;