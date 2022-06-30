import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';

export default function TempHomePage() {

    return(
        <React.Fragment>
            <Container fluid>
                <h1 className='temp-h1'>Jackie Kopco</h1>
                <hr className='temp-hr-tag' />
                <img className='img-fluid' id='temp-img' src='images/jackie_playing_guitar_b_and_w.png' alt='Jackie Kopco playing guitar' style={{ marginTop: '.5rem' }} />
            </Container>
                <div>
                    <Row style={{ justifyContent: 'center', marginTop: 10 }}>
                        <SocialIcon url='https://www.facebook.com/jackiekopco' style={{ margin: 9 }} target='_blank' rel='noreferrer'/>
                        <SocialIcon url='https://soundcloud.com/user-956422566?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' style={{ margin: 9 }} target='_blank' rel='noreferrer'/>
                        <SocialIcon url='https://open.spotify.com/artist/1FzdaDrMrPrt3QlkiDh38L?si=kt_k-iC_RVaw68SgnqM4Fg' style={{ margin: 9 }} target='_blank' rel='noreferrer'/>
                        <SocialIcon url='https://www.bandsintown.com/a/5728057' style={{ margin: 9 }} target='_blank' rel='noreferrer'/>
                        <SocialIcon url='mailto:jackiekopcomusic@gmail.com' style={{ margin: 9 }} target='_blank' rel='noreferrer'/>
                       
                    </Row>
                </div>
                <div style={{ marginTop: 30, textAlign: 'center', }}>
                    <Row className='bio-img'>
                        <Col md='6' id='bio'>
                            <h3 className='temp-h3'>Bio ||</h3>
                            <hr style={{ width: '75%' }}/>
                            <p className='temp-p'>One of Johnstown's most dynamic female vocalists, Jackie’s ability to get lost in her music allows her audiences to do the same. In 2009, Jackie stepped away from her solo career and teamed up with Walt Churchey to bring an acoustic duo to the area. Together, Walt &amp; Jackie is still performing throughout the Laurel Highlands, with highlight shows including the Flood City Music Fest, Garrett Lakes Arts Festival, and headlining several shows at the Pasquerilla Performing Arts Center, including a  popular holiday show for several years.
                            <br />
                            <br />
                            Her discography is split between solo projects, Letting Go (an EP of original music), and Far From Here (a full-length album of original music), and projects with Walt, including Bare (a full-length original album), and Take Time (a collection of holiday music).
                            <br />
                            <br />
                            Jackie is currently working on new original music for sync licensing. Stay tuned for release announcements.
                            <br />
                            <br />
                            Jackie has performed throughout Pennsylvania, from Pittsburgh to Lancaster, as well as throughout the Orlando, FL area.</p>
                            <br />
                            <br />
                            <h5 className='temp-h5'>Photos by <a className='temp-photos-by-link' href='https://www.momentumphotography.net/' target='_blank' rel="noreferrer">Momentum Photography</a></h5>

                        </Col>
                        <Col md='6'>
                            <img id='temp-piano-img' src='images/jackie_kopco.jpg' alt='Jackie playing piano and singing'  />
                            <h5 className='temp-h5' style={{ marginTop: 10 }}>Jackie at the Pasquerilla Performing Arts Center</h5>
                            <h5 className='temp-h5'>Hometown Holidays, November 24, 2019</h5>
                            <h5 className='temp-h5'>playing the !! Steinway !!</h5>
                        </Col>
                    </Row>
                </div>
        </React.Fragment>
    )

}