import React from 'react'

const Footer = () => {
  return (
    <footer className="container">
        <div className="footer-main">
            {/* <div className="news-letter">
                <div className="logo"> <img src="images/appkubelogo.png" alt=""/> </div>
                <h6>Subscribe to our newsletter</h6>
                <div className="email">
                    <input placeholder="Enter your email" className="email-input" type="email"/>
                </div>

                <button className="sub-btn">Subscribe</button>
            </div> */}

            <ul>
                <h6><strong>USA</strong></h6>
<li>300 Alexander Park Drive,</li>

<li>Suite 215,</li>

<li>Princeton, NJ 08540</li>

<li>Sales: +1 (609) 608 0388 X 1</li>

<li>Office: +1 (609) 608 0388</li>
            </ul>
            <ul>
                <h6><strong>INDIA</strong></h6>
<li>Synectiks,</li>

<li>Level 6,</li>

<li>NHeights, Phase 2, Hi-Tech City,</li>

<li>Hyderabad, 500081</li>

<li>Office: +91 (40) 4857 4411</li>
            </ul>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.128789840157!2d78.3742678!3d17.4462023!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e30f1841cd%3A0x4fc9c214c6c831c0!2sSYNECTIKS!5e0!3m2!1sen!2sin!4v1697317012963!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
            </div>
        </div>
<div className="devider container"></div>
    <div className="sub-footer container flex">
        <p>Copyright © Product | Designed by Synectiks Inc</p>

        <div className="social-media-icons flex">
            <img className="sm-icons" src="images/social media icons/ph_instagram-logo-fill.png" alt=""/>
            <img className="sm-icons" src="images/social media icons/mdi_twitter.png" alt=""/>
            <img className="sm-icons" src="images/social media icons/ri_facebook-fill.png" alt=""/>
            <img className="sm-icons" src="images/social media icons/ri_linkedin-fill.png" alt=""/>
        </div>
    </div>
    </footer>
  )
}

export default Footer