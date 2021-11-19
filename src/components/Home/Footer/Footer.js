import { faFacebookF, faGithub, faGooglePlus, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (
        <div className="container-fluid text-white pt-5 bg-dark footer position-absolute mb-0" fixed="bottom">
            <div className="footer-decor row">
                <div className="col-md-3 d-grid">
                    <div><a style={{textDecoration: 'none'}} href="/"><h1><span style={{color:'tomato'}}>Baby Shop</span></h1></a></div><br /><br />
                    <div className="d-flex justify-content-around gap-3">
                        
                    <FontAwesomeIcon icon={faInstagram} size='2x' />
                    <FontAwesomeIcon icon={faGooglePlus} size='2x'/>
                    <FontAwesomeIcon icon={faFacebookF} size='2x'/>
                    <FontAwesomeIcon icon={faGithub} size='2x'/>
                    <br /><br />
                    </div>
                    <p>Call us: 0134567897834</p>
                    <p>Email us: example@mail.co</p>
                    
                </div>
                <div className="col-md-3 d-grid">
                    <h4>Popular Trips</h4>
                    <p>Who we are</p>
                    <p>Career</p>
                    <p>Company History</p>
                    <p>Legal</p>
                </div>
                <div className="col-md-3 d-grid">
                    <h4>Organization</h4>
                    <p>Travel Advisors</p>
                    <p>Privacy Policy</p>
                    <p>Refund Policy</p>
                    <p>Terms and Conditions</p>
                </div>
                <div className="col-md-3 d-grid">
                    <h4>Others</h4>
                    <p>Destination</p>
                    <p>Blog</p>
                    <p>Visa</p>
                    <p>Insurance</p>
                </div>
            </div><br /><br />
            
            <div className="copyRight text-center">
                    <p style={{color:'white', paddingBottom :'0'}}>Copyright {(new Date()).getFullYear()}<FontAwesomeIcon icon={faCopyright} /> All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer