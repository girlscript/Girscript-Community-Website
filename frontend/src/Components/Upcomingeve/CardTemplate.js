import React from "react";
import Card from 'react-bootstrap/Card';
 const CardTemplate = ({title, description, image_used}) => {
   
    return(
                <Card   id = 'upcomingeve' style={{ width: '18rem' }}  >
                    <Card.Img variant="top" src= {image_used}/>
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    </Card.Body>
                </Card>
    )
}
export default CardTemplate