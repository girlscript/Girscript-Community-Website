import React from 'react';
import "./Upcomingeve.css";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from "../../images/event1.jpeg";
import image2 from "../../images/event2.jpeg";
import image3 from "../../images/event3.jpg";

const Upcomingevents = () => {
    return(
        
            <Container>
            <Row>
                <Col>
                    <Card   id = 'upcomingeve' style={{ width: '18rem' }}  >
                    <Card.Img variant="top" src= {image1}/>
                    <Card.Body>
                    <Card.Title>Speed Designing with Canva</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card   id = 'upcomingeve' style={{ width: '18rem' }}  >
                    <Card.Img variant="top" src= {image2}/>
                    <Card.Body>
                    <Card.Title>Grtting Started with Github</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card   id = 'upcomingeve' style={{ width: '18rem' }}  >
                    <Card.Img variant="top" src= {image3}/>
                    <Card.Body>
                    <Card.Title>Getting Started with Graphs in java</Card.Title>
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

export default Upcomingevents;