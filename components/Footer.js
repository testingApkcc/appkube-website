import React from 'react'

const Footer = () => {
  return (
    <footer className="container">
        <div className="footer-main">
            <div className="news-letter">
                <div className="logo"> <img src="images/appkubelogo.png" alt=""/> </div>
                <h6>Subscribe to our newsletter</h6>
                <div className="email">
                    <input placeholder="Enter your email" className="email-input" type="email"/>
                </div>

                <button className="sub-btn">Subscribe</button>
            </div>

            <ul>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Blog post</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Pricing ingle</a></li>
            </ul>

            <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Careers single</a></li>
                <li><a href="#">Request a demo</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Sign up</a></li>
            </ul>

            <ul>
                <li><a href="#">Utility Pages</a></li>
                <li><a href="#">Style guide</a></li>
                <li><a href="#">404 Not found</a></li>
                <li><a href="#">Licenses</a></li>
                <li><a href="#">Changelog</a></li>
            </ul>
        </div>
<div className="devider container"></div>
    <div className="sub-footer container flex">
        <p>Copyright © Product | Designed by Webocean LTD - Powered by Webflow</p>

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