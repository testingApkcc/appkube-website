// 'use client'
import Image from 'next/image'
import { MdOutlineCheckBoxOutlineBlank,MdOutlineCheckBox } from "react-icons/md";

export default function Home() {
  return (
    <>
<section className="sec-1">
    <img  className="ellipse1" src="images/ellipse.png" alt="" />
    <div className="container">
        <div className="headings flex">
            <h1 className='title'> Discover
                <svg className="heading-arrows" xmlns="http://www.w3.org/2000/svg" width="60" height="60"
                    viewBox="0 0 60 60" fill="none">
                    <g clipPath="url(#clip0_310_19)">
                        <path
                            d="M51.7925 32.65C52.4948 31.9469 52.8892 30.9938 52.8892 30C52.8892 29.0063 52.4948 28.0531 51.7925 27.35L37.6525 13.2025C36.949 12.499 35.9949 12.1038 35 12.1038C34.0051 12.1038 33.051 12.499 32.3475 13.2025C31.644 13.906 31.2488 14.8601 31.2488 15.855C31.2488 16.8499 31.644 17.804 32.3475 18.5075L40.0875 26.25L11.25 26.25C10.2555 26.25 9.30164 26.6451 8.59837 27.3484C7.89511 28.0516 7.50002 29.0055 7.50002 30C7.50002 30.9946 7.89511 31.9484 8.59837 32.6517C9.30163 33.3549 10.2555 33.75 11.25 33.75L40.0875 33.75L32.3475 41.49C31.9992 41.8384 31.7229 42.2519 31.5344 42.707C31.3458 43.1621 31.2488 43.6499 31.2488 44.1425C31.2488 44.6351 31.3458 45.1229 31.5344 45.578C31.7229 46.0332 31.9992 46.4467 32.3475 46.795C32.6958 47.1434 33.1094 47.4197 33.5645 47.6082C34.0196 47.7967 34.5074 47.8937 35 47.8937C35.4926 47.8937 35.9804 47.7967 36.4355 47.6082C36.8907 47.4197 37.3042 47.1434 37.6525 46.795L51.7925 32.65Z"
                            fill="#7214FF" />
                    </g>
                    <defs>
                        <clipPath id="clip0_310_19">
                            <rect width="60" height="60" fill="white" transform="translate(60) rotate(90)" />
                        </clipPath>
                    </defs>
                </svg>
                Corelate
                <svg className="heading-arrows" xmlns="http://www.w3.org/2000/svg" width="60" height="60"
                    viewBox="0 0 60 60" fill="none">
                    <g clipPath="url(#clip0_310_19)">
                        <path
                            d="M51.7925 32.65C52.4948 31.9469 52.8892 30.9938 52.8892 30C52.8892 29.0063 52.4948 28.0531 51.7925 27.35L37.6525 13.2025C36.949 12.499 35.9949 12.1038 35 12.1038C34.0051 12.1038 33.051 12.499 32.3475 13.2025C31.644 13.906 31.2488 14.8601 31.2488 15.855C31.2488 16.8499 31.644 17.804 32.3475 18.5075L40.0875 26.25L11.25 26.25C10.2555 26.25 9.30164 26.6451 8.59837 27.3484C7.89511 28.0516 7.50002 29.0055 7.50002 30C7.50002 30.9946 7.89511 31.9484 8.59837 32.6517C9.30163 33.3549 10.2555 33.75 11.25 33.75L40.0875 33.75L32.3475 41.49C31.9992 41.8384 31.7229 42.2519 31.5344 42.707C31.3458 43.1621 31.2488 43.6499 31.2488 44.1425C31.2488 44.6351 31.3458 45.1229 31.5344 45.578C31.7229 46.0332 31.9992 46.4467 32.3475 46.795C32.6958 47.1434 33.1094 47.4197 33.5645 47.6082C34.0196 47.7967 34.5074 47.8937 35 47.8937C35.4926 47.8937 35.9804 47.7967 36.4355 47.6082C36.8907 47.4197 37.3042 47.1434 37.6525 46.795L51.7925 32.65Z"
                            fill="#7214FF" />
                    </g>
                    <defs>
                        <clipPath id="clip0_310_19">
                            <rect width="60" height="60" fill="white" transform="translate(60) rotate(90)" />
                        </clipPath>
                    </defs>
                </svg>
                Optimize
            </h1>
            <h2 className='subtitle'>We Discover Infrastructure, Corelate With <br/>Business,  Optimize With Container / Serverless Platform</h2>
        </div>

        {/* <div className="sec-1-btns flex">
            <button>Get a free demo</button>
            <button>Free trial</button>
        </div> */}

        <div className="hero-img">
            <img  src="images/image-1.png" alt=""/>
        </div>
    </div>

    <img  className="ellipse2" src="ellipse/ellipse-1.png" alt="" />
</section>
<section className="sec-3">
    <h2 className='sec-title'>Gain complete insights into <br/> INFRA / APP / BUSINESS</h2>
    <div className="con-1 container">
        <img  className="ellipse-9" src="ellipse/ellipse-9.png" alt="" />
        <div className="left">
            <h3 className='subheading tl'>Monitor, Troubleshoot, and Optimize Cloud Performance.</h3>
            <p>Rorem ipsum dolor sit amet consectetur. Proin dignissim tortor mauris viverra sed volutpat mauris.
                Amet nisi amet commodo adipiscing ut imperdiet nunc.</p>
            {/* <button>Learn More</button> */}
        </div>

        <div className="right">
            <img  src="images/image 2.png" alt="" />
        </div>
        <img  className="ellipse-10" src="ellipse/ellipse-10.png" alt="" />
    </div>
<div className="sec-3">
        <h2 className='sec-title tc maddy'>An App-centric Cloud Optimization platform that improves business reliability and reduce up to 90% cloud spend.</h2>
</div>
    <div className="con-2 container">
        <div className="con2-left">
            <div className="app-img"><img  className="app-view" src="images/App View 1.png" alt="" /></div>

            <div className="left-bottom">
                <h5 className="subheading tl">Get detailed View of <br/> Business and App Services</h5>
                <p className="con2-p">Prem ipsum dolor sit amet consectetur. Viverra sed dignissim risus aliquet
                    condimentum. Vulputate varius feugiat egestas congue </p>
            </div>
        </div>

        <div className="con2-right">

            <img  src="ellipse/ellipse-13.png" alt="" className="ellipse-13" />

            <div className="right-top">
                <h4 className='subheading'>State of Application Security</h4>
                <p>Tellus et adipiscing sit sit mauris pharetra bibendum. Ligula massa netus nulla ultricies purus.
                </p>
            </div>
            <div className="img-block">
                {/* <img src="group.svg" alt="" /> */}
            </div>
            <img  src="ellipse/ellipse-14.png" alt="" className="ellipse-14" />
        </div>
    </div>
     <h2 className="sec-title tc">
        Powerful Cloud Native ISV Solutions to accelerate your cloud adoption
    </h2>
    <img src="AppKube.svg" alt="" />

    {/* <div className="sec-3-btns flex">
        <button>Get a Started</button>
        <button>Browse all feature</button>
    </div> */}
</section>
<section className="sec-2">
    <div className="sec2-top container">
        <h2 className='sec-title tc'>Appkube Primary Business Goals</h2>
        {/* <p>Apsum dolor sit amet consectetur. Aliquam elementum elementum in ultrices. Dui maecenas ut eros turpis
            ultrices metus morbi aliquet vel.</p> */}
    </div>

    <div className="cards-con container">
        <div className="cards-row flex">
            <div className="card">
                <img  className="icon" src="images/icon.svg" alt="" />
                <h2>Cloud Optimization</h2>
                <p>Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum
                    ultricies convallis.</p>
            </div>

            <div className="card">
                <img  className="icon" src="images/icon (1).png" alt="" />
                <h2>Accelerated Cloud Adoption</h2>
                <p>Worem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere</p>
            </div>

            <div className="card">
                <img  className="icon" src="images/icon-2.svg" alt="" />
                <h2>Accelerated Modernization</h2>
                <p>Dorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum
                    ultricies convallis.</p>
            </div>
             <div className="card">
                <img  className="icon" src="images/icon-2.png" alt="" />
                <h2>Become Hardware / Vendor / License Agnostic</h2>
                <p>Yarem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum
                    ultricies convallis.</p>
            </div>
        </div>
    </div>
</section>
<section className="sec-4 container">

    {/* <div className="sec4-con">

    </div>

    <div className="sec4-con2">
        <div className="sec4-left-con">
            <h1>Product Mail</h1>
            <p>Gonsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.</p>

            <div className="mail-box">

                <h3>New Message</h3>

                <div className="to">To <input type="text" /> CC BCC </div>

                <hr />
                <div className="Subject flex">
                    <p>Subject</p> <input type="text" />
                </div>
                <hr />

                <div className="from flex">
                    <p>From</p> <input type="text" />
                </div>
                <hr />
                <div className="gilss flex">
                    <p>Gilsis</p>
                </div>
            </div>
        </div>
        <div className="sec4-right-con">
            <h3>Product UI</h3>
            <p>Honsectetur ejb jk m,que nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum
                consectetur.</p>

            <div className="sec4-img-con">
                <img  src="images/ui-grid.png" alt="" />
            </div>
        </div>

    </div> */}

</section>
<section className="sec-2">
    <div className="sec2-top container">
        <h2 className='title'>Appkube Primary Business Goals</h2>
        <p>Apsum dolor sit amet consectetur. Aliquam elementum elementum in ultrices. Dui maecenas ut eros turpis
            ultrices metus morbi aliquet vel.</p>
    </div>

    <div className="cards-con container">
        <div className="cards-row flex">
            <div className="card w-md">
                <img  className="icon" src="images/icon.svg" alt="" />
                <h2>Appcentric Optimization</h2>
                <p>Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum
                    ultricies convallis.</p>
            </div>
            <div className="card w-md">
                <img  className="icon" src="images/icon (1).png" alt="" />
                <h2>Cloud Native RAD Building BLock</h2>
                <p>Worem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere</p>
            </div>
            <div className="card w-md">
                <img  className="icon" src="images/icon-2.svg" alt="" />
                <h2>SRE-Infra and App</h2>
                <p>Dorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum
                    ultricies convallis.</p>
            </div>
             <div className="card w-md">
                <img  className="icon" src="images/icon-2.png" alt="" />
                <h2>DevSecops Tooling</h2>
                <p>Yarem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum
                    ultricies convallis.</p>
            </div>
             <div className="card w-md">
                <img  className="icon" src="images/icon-2.png" alt="" />
                <h2>Application Modernizationc</h2>
                <p>Yarem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum
                    ultricies convallis.</p>
            </div>
             <div className="card w-md">
                <img  className="icon" src="images/icon-2.png" alt="" />
                <h2>Become Hardware / Vendor / License Agnostic</h2>
                <p>Yarem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum
                    ultricies convallis.</p>
            </div>
        </div>
    </div>
</section>
{/* <section className="clints-sec">
    <div className="clints-heading">
        <h1>What our clients say</h1>
        <p>Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae lobortis orci tincidunt facilisis.
            Pulvinar
            lacus ultricies turpis urna sapien.</p>
    </div>

    <div id="slide1" className="clint-cards">
        <div className="c-card-1">
            <div className="c-card c-card1">
                <div className="clint-profile">
                    <img  src="images/Avatar.png" alt="" />
                    <div className="profile-info">
                        <p>Cameron Williamson</p>
                        <p>Web Designer</p>
                    </div>
                    <div className="profile-icons">
                        <img  src="images/quotation.png" alt="" />
                    </div>
                </div>
                <div className="clint-review">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cum perferendis sapiente.
                        Ipsum blanditiis provident magnam perspiciatis!</p>
                </div>

            </div>
            <div className="c-card-bg c-card-bg1">

            </div>
        </div>
        <div className="c-card-1">
            <div className="c-card">
                <div className="clint-profile">
                    <img  src="images/Avatar-2.png" alt="" />
                    <div className="profile-info">
                        <p>Esther Howard</p>
                        <p>Web Developer</p>
                    </div>
                    <div className="profile-icons">
                        <img  src="images/quotation.png" alt="" />
                    </div>
                </div>
                <div className="clint-review">
                    <p>At viverra enim enim sed turpis orci cursus. Imperdiet eros mauris sed sodales nisi interdum
                        ac. Eu congue quis egestas donec lectus</p>
                </div>

            </div>
            <div className="c-card-bg">

            </div>
        </div>
        <div className="c-card-1">
            <div className="c-card">
                <div className="clint-profile">
                    <img  src="images/Avatar-3.png" alt="" />
                    <div className="profile-info">
                        <p>Jenny Wilson</p>
                        <p>UI/UX Designer</p>
                    </div>
                    <div className="profile-icons">
                        <img  src="images/quotation.png" alt="" />
                    </div>
                </div>
                <div className="clint-review">
                    <p>Sed ut diam amet accumsan in. Elementum lorem aliquam venenatis amet sit posuere sed sit.
                        Aliquet suspendisse vitae placerat donec.</p>
                </div>

            </div>
            <div className="c-card-bg">

            </div>
        </div>
    </div>

    <div id="left-btn" className="arrow-btns">
        <div className="arrow-btn">
            <img  src="images/arrow-right.png" alt="" />
        </div>

        <div id="right-btn" className="arrow-btn">
            <img  src="images/arrow-right-1.png" alt="" />
        </div>
    </div>

</section> */}
{/* <section className="discord-sec">
    <img  id="mountain" src="discord-images/Vector.png" alt="" />

    <img  style={{position: "absolute", bottom: "0", left: "20%"}} src="sparkles/ellipse20.png" className="discord-ellipe" alt="" />

    <div className="discord-main">
        <div className="discord-logo">
            <img  src="discord-images/logo-2.png" alt="" />
        </div>

        <h1>Join the community</h1>
        <p>Join our 400,000+ person community and contribute to a more <br/> private and decentralized internet.
            Start for
            free.</p>

        <button className="join-btn">Join Discord</button>
    </div>

</section>
<section className="news-sec">
    <div className="news-header container">
        <h1>AppKube in the news</h1>
        <button className="browse-btn">Browse all news</button>
    </div>

    <div className="news-cards-con container">
        <div className="news-card">
            <div className="news-blank-con"></div>
            <h6>AppKube is taking on Cloud Monitoring by betting on privacy</h6>
            <p>Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras
                turpis faucibus elit urna.</p>
            <span className="line"></span>
            <div className="news-date">
                <p>February 8, 2023</p>
                <button className="read-more-btn">Read more <img  src="images/arrow-right-1.png" alt="" /></button>
            </div>
        </div>

        <div className="news-card">
            <div className="news-blank-con"></div>
            <h6>AppKube is taking on Cloud Monitoring by betting on privacy</h6>
            <p>Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras
                turpis faucibus elit urna.</p>
            <span className="line"></span>
            <div className="news-date">
                <p>February 8, 2023</p>

                <button className="read-more-btn">Read more <img  src="images/arrow-right-1.png" alt="" /></button>
            </div>
        </div>

        <div className="news-card">
            <div className="news-blank-con"></div>
            <h6>AppKube is taking on Cloud Monitoring by betting on privacy</h6>
            <p>Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras
                turpis faucibus elit urna.</p>
            <span className="line"></span>
            <div className="news-date">
                <p>February 8, 2023</p>
                <button className="read-more-btn">Read more <img  src="images/arrow-right-1.png" alt="" /> </button>
            </div>
        </div>
    </div>
</section> */}
    </>
  )
}
