import React from 'react'

const Footer = () => {
    return (
        <footer className="w-75 mt-1">
            <div className="footer-main">
                <div className="news-letter">
                    <div className="logo"> <img src="images/appkubelogo.png" alt="" /> </div>
                    <h6>Subscribe to our newsletter</h6>
                    <div className="email">
                        <input placeholder="Enter your email" className="email-input" type="email" />
                    </div>

                    <button className="sub-btn">Subscribe</button>
                </div>

                <div className='foot-width'>
                    <h6><strong>USA</strong></h6>
                    <p>300 Alexander Park Drive,<br />
                        Suite 215,<br />
                        Princeton, NJ 08540 <br />
                        Sales: +1 (609) 608 0388 X 1 <br />
                        Office: +1 (609) 608 0388</p>
                </div>
                <div className='foot-width'>
                    <h6><strong>INDIA</strong></h6>
                    <p>Synectiks, <br />
                        Level 6, <br />
                        NHeights, Phase 2, Hi-Tech City, <br />
                        Hyderabad, 500081 <br />
                        Office: +91 (40) 4857 4411 <br />
                    </p>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.128789840157!2d78.3742678!3d17.4462023!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e30f1841cd%3A0x4fc9c214c6c831c0!2sSYNECTIKS!5e0!3m2!1sen!2sin!4v1697317012963!5m2!1sen!2sin" width="250" height="250" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                </div>
            </div>
            <div className="devider container"></div>
            <div className="sub-footer container flex">
                <div>
                    <p>Copyright © Product | Designed by Synectiks INC</p>
                </div>

                <div className="social-media-icons flex">
                    {/* <img className="sm-icons" src="images/social media icons/ph_instagram-logo-fill.png" alt="" />
                    <img className="sm-icons" src="images/social media icons/mdi_twitter.png" alt="" />
                    <img className="sm-icons" src="images/social media icons/ri_facebook-fill.png" alt="" /> */}
                    <a href="https://www.linkedin.com/company/synectiks/mycompany/" target='_blank'><img className="sm-icons" src="images/social media icons/ri_linkedin-fill.png" alt="" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer