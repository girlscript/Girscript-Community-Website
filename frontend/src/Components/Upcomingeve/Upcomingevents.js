import React from 'react';
import "./Upcomingeve.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import cards1 from "../../Test_data/UpcomingEve";
const Upcomingevents = () => {
    return(
        
            <Container>
            <Row>
            {cards1} 
            </Row>
            </Container>
                
       
    )
}

export default Upcomingevents;