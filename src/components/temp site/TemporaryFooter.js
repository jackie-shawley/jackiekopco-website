import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Contact from '../Contact';


export default function TemporaryFooter() {
    return(
        <Container>
            <div>    
                <Row style={{ paddingTop: 30, paddingBottom: 30 }}>
                    <hr style={{ width: '75% '}} />
                    <Col md='4'  style={{ alignItems: 'right' }}>
                        <h4 className='temp-h4'><a href='mailto:jackiekopcomusic@gmail.com' className='temp-info-link'>jackiekopcomusic@gmail.com</a></h4>
                    </Col>
                    <Col md='4' style={{ alignItems: 'center' }}>
                        <h4 className='temp-h4'><a href='tel:+1-814-418-7154' className='temp-info-link'>814.418.7154</a></h4>
                    </Col>
                    <Col md='4' style={{ alignItems: 'left' }}>
                        <h4 className='temp-h4'>&copy;2022 Jackie Kopco</h4>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}