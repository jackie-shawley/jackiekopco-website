import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return ( 
        <React.Fragment>
            <div className='siteFooter'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4' style={{ textAlign: 'right' }}>
                            <a role="button" className="btn btn-link" style={{ textAlign: 'right' }} href="mailto:jackiekopcomusic@gmail.com">jackiekopcomusic@gmail.com</a>
                        </div>
                        <div className='col-4'>
                            <SocialIcon url='https://facebook.com/jackiekopco' target='_blank' label='Facebook' style={{ marginRight: 5 }} />
                            <SocialIcon url='https://www.bandsintown.com/a/5728057-jackie-kopco?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar' target='_blank' label='BandsInTown' style={{ marginRight: 5, marginLeft: 5}}/>
                            <SocialIcon url='https://open.spotify.com/artist/1FzdaDrMrPrt3QlkiDh38L' target='_blank' label='Spotify' style={{ marginRight: 5, marginLeft: 5}}/>
                            <SocialIcon url='https://music.apple.com/us/artist/jackie-kopco/271618215' target='_blank' label='Apple Music' style={{ marginRight: 5, marginLeft: 5}}/>
                            <SocialIcon url='https://soundcloud.com/user-956422566' target='_blank' label='SoundCloud' style={{ marginLeft: 5}}/>
                        </div>
                        <div className='col-4' style={{ textAlign: 'left' }}>
                            <a role="button" className="btn btn-link" href="tel:+8144187154">(814)418-7154</a>
                        </div>
                    </div>
                    <div className='row' style={{ marginTop: 10 }}>
                        <div className='col d-flex justify-content-center'>
                            <p style={{ color: 'grey' }}>&copy; 2024 Jackie Kopco </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Footer;