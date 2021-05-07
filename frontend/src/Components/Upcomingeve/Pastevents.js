import React from 'react';
import "./Upcomingeve.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import * as psteve from "../../Test_data/UpcomingEve";

const Pastevents = () => {
    return(
        
            <Container>
            <Row>
                {psteve.cards2}

            </Row>
            </Container>
                
       
    )
}

export default Pastevents;