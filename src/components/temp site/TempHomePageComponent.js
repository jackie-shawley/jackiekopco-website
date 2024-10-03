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
                        <SocialIcon url='https://www.soundcloud.com/jackie-kopco' style={{ margin: 9 }} target='_blank' rel='noreferrer'/>
                        <SocialIcon url='https://open.spotify.com/artist/1FzdaDrMrPrt3QlkiDh38L?si=kt_k-iC_RVaw68SgnqM4Fg' style={{ margin: 9 }} target='_blank' rel='noreferrer'/>
                        <SocialIcon url='https://www.bandsintown.com/a/5728057' style={{ margin: 9 }} target='_blank' rel='noreferrer'/>
                        <SocialIcon url='mailto:jackiekopcomusic@gmail.com' style={{ margin: 9 }} target='_blank' rel='noreferrer'/> 
                    </Row>
                </div>
                <div style={{ marginTop: 30, textAlign: 'center' }}>
                    <Row className='bio-img'>
                        <Col md='6' id='bio'>
                            <h3 className='temp-h3'>bio ||</h3>
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
                <div style={{ marginTop: 30, textAlign: 'center' }}>
                    <Row>
                        {/* Soundcloud Player */}
                        <Col md='6'>
                            <div className='sound-cloud-player'>
                                <iframe width="100%" height="550" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1462363474&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true" title='Jackie Kopco'></iframe>
                            </div>
                            <div className='linktree'>
                                <h2 className='temp-h2' style={{ marginTop: 20 }}><a href='https://linktr.ee/jackiekopco' target='_blank' rel='noreferrer' className='temp-info-link'>Click here to purchase <span style={{ fontFamily: 'Arima, cursive', fontSize: '2.5rem', fontStyle: 'italic'}}> Jackie's music</span> <br />or to buy her a coffee</a></h2>
                            </div>
                        </Col>
                        <Col md='6' style={{ paddingTop: 30 }}>
                            <h2 className='temp-h2'>BASIC INFO</h2>
                            <hr style={{ width: '30%' }}/>                            
                            <h3 className='temp-h3-info'>origin ||</h3>
                            <h4 className='temp-h4'>Johnstown, PA, USA</h4>
                            <hr style={{ width: '30%' }}/>
                            <h3 className='temp-h3-info'>genres ||</h3>
                            <h4 className='temp-h4'>Singer/Songwriter</h4>
                            <h4 className='temp-h4'>Pop/Folk</h4>
                            <hr style={{ width: '30%' }}/>
                            <h3 className='temp-h3-info'>years active ||</h3>
                            <h4 className='temp-h4'>2000 - present</h4>
                            <hr style={{ width: '30%' }}/>
                            <h3 className='temp-h3-info'>associated acts ||</h3>
                            <h4 className='temp-h4'><a href='https://www.waltandjackie.com' target='_blank' rel='noreferrer' className='temp-info-link'>Walt &amp; Jackie</a></h4>
                            <hr style={{ width: '30%' }}/>
                            <h3 className='temp-h3-info'>contact ||</h3>
                            <h4 className='temp-h4'><a href='tel:+1-814-418-7154' className='temp-info-link'>814.418.7154</a></h4>
                            <h4 className='temp-h4'><a href='mailto:jackiekopcomusic@gmail.com' className='temp-info-link'>jackiekopcomusic@gmail.com</a></h4>
                            <hr style={{ width: '30%' }}/>
                            <SocialIcon url='https://www.facebook.com/jackiekopco' style={{ margin: 9 }} target='_blank' rel='noreferrer'/>
                            <SocialIcon url='https://www.soundcloud.com/jackie-kopco' style={{ margin: 9 }} target='_blank' rel='noreferrer'/>
                            <SocialIcon url='https://open.spotify.com/artist/1FzdaDrMrPrt3QlkiDh38L?si=kt_k-iC_RVaw68SgnqM4Fg' style={{ margin: 9 }} target='_blank' rel='noreferrer'/>
                            <SocialIcon url='https://www.bandsintown.com/a/5728057' style={{ margin: 9 }} target='_blank' rel='noreferrer'/>
                            <SocialIcon url='mailto:jackiekopcomusic@gmail.com' style={{ margin: 9 }} target='_blank' rel='noreferrer'/>
                           
                        </Col>
                    </Row>
                    <div>
                        <hr style={{ width: '30%' }}/>
                            <Row>                           
                                <Col>
                                    <h2 className='temp-h2'>SHOWS</h2>
                                </Col>
                            </Row>
                        <hr style={{ width: '30%' }}/>
                        <div className="d-flex justify-content-center">
                            <Row style={{ marginTop: 20 }}>
                                <Col xs={12} md={6}>
                                    <h4 className='temp-h4' >29 October</h4>
                                    <p className='temp-h3-info' >3:00pm - 4:00pm</p>
                                </Col>
                                <Col xs={12} md={6}>
                                    <h4 className='temp-h4' >The Addison of McCollough House</h4>
                                    <p className='temp-h3-info' >500 Cheney Oak Drive<br />Johnstown, PA</p>
                                </Col>
                            </Row>
                        </div>
                        <hr style={{ width: '30%' }}/>
                        <div className="d-flex justify-content-center">
                            <Row style={{ marginTop: 20 }}>
                                <Col xs={12} md={6}>
                                    <h4 className='temp-h4' >14 November</h4>
                                    <p className='temp-h3-info' >2:00pm - 3:00pm</p>
                                </Col>
                                <Col xs={12} md={6}>
                                    <h4 className='temp-h4' >Laurel View Village</h4>
                                    <p className='temp-h3-info' >2000 Cambridge Drive<br />Davidsville, PA</p>
                                </Col>
                            </Row>
                        </div>
                        <hr style={{ width: '30%' }}/>
                        <div className="d-flex justify-content-center">
                            <Row style={{ marginTop: 20 }}>
                                <Col xs={12} md={6}>
                                    <h4 className='temp-h4' >20 November</h4>
                                    <p className='temp-h3-info' >2:00pm - 3:00pm</p>
                                </Col>
                                <Col xs={12} md={6}>
                                    <h4 className='temp-h4' >Richland Woods</h4>
                                    <p className='temp-h3-info' >3324 Elton Rd<br />Johnstown, PA</p>
                                </Col>
                            </Row>
                        </div>
                        <hr style={{ width: '30%' }}/>
                        <div className="d-flex justify-content-center">
                            <Row style={{ marginTop: 20 }}>
                                <Col xs={12} md={6}>
                                    <h4 className='temp-h4' >22 November</h4>
                                    <p className='temp-h3-info' >2:00pm - 3:00pm</p>
                                </Col>
                                <Col xs={12} md={6}>
                                    <h4 className='temp-h4' >Villa Personal Care </h4>
                                    <p className='temp-h3-info' >807 Goucher Street<br />Johnstown, PA</p>
                                </Col>
                            </Row>
                        </div>
                        <hr style={{ width: '30%' }}/>
                        <div className="d-flex justify-content-center">
                            <Row style={{ marginTop: 20 }}>
                                <Col xs={12} md={6}>
                                    <h4 className='temp-h4' >13 December</h4>
                                    <p className='temp-h3-info' >2:00pm - 3:00pm</p>
                                </Col>
                                <Col xs={12} md={6}>
                                    <h4 className='temp-h4'>Richland Woods</h4>
                                    <p className='temp-h3-info' >429 Napoleon Place<br />Johnstown, PA</p>
                                </Col>
                            </Row>
                        </div>
                        <hr style={{ width: '30%' }}/>
                        <div className="d-flex justify-content-center">
                            <Row style={{ marginTop: 20 }}>
                                <Col xs={12} md={6}>
                                    <h4 className='temp-h4' >18 December</h4>
                                    <h4 className='temp-h4' >Ugly Holiday Sweater Party!</h4>
                                    <h4 className='temp-h4' >with Walt & Jackie</h4>
                                    <p className='temp-h3-info' >7:00pm - 10:00pm</p>
                                </Col>
                                <Col xs={12} md={6}>
                                    <h4 className='temp-h4' >The Fifth Local Eatery and Alehouse</h4>
                                    <p className='temp-h3-info' >1424 Scalp Avenue<br />Johnstown, PA</p>
                                </Col>
                            </Row>
                        </div>
                        <hr style={{ width: '30%' }}/>
                        <div className="d-flex justify-content-center">
                            <Row style={{ marginTop: 20 }}>
                                <Col xs={12} md={6}>
                                    <h4 className='temp-h4' >19 December</h4>
                                    <p className='temp-h3-info' >2:00pm - 3:00pm</p>
                                </Col>
                                <Col xs={12} md={6}>
                                    <h4 className='temp-h4' >Heritage Ridge Senior Living @ Johnstown</h4>
                                    <p className='temp-h3-info' >807 Goucher Street<br />Johnstown, PA</p>
                                </Col>
                            </Row>
                        </div>
                        <hr style={{ width: '30%' }}/>
                        <div className="d-flex justify-content-center">
                            <Row style={{ marginTop: 20 }}>
                                <Col xs={12} md={6}>
                                    <h4 className='temp-h4' >14 February</h4>
                                    <p className='temp-h3-info' >2:00pm - 3:00pm</p>
                                </Col>
                                <Col xs={12} md={6}>
                                    <h4 className='temp-h4' >Laurel View Village</h4>
                                    <p className='temp-h3-info' >2000 Cambridge Drive<br />Davidsville, PA</p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )

}