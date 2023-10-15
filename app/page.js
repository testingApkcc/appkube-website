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
    <h2 className='subtitle'>Gain complete insights into <br/> INFRA / APP / BUSINESS</h2>
    <div className="con-1 container">
        <img  className="ellipse-9" src="ellipse/ellipse-9.png" alt="" />
        <div className="left">
            <h3 className='subheading tl'>Monitor, Troubleshoot, and Optimize Cloud Performance.</h3>
            <p className='m-0'>Get user friendly scores of your Infra and Services and act on them.</p>
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
            <div className="app-img">
                {/* <img  className="app-view" src="images/App View 1.png" alt="" /> */}
                </div>

            <div className="left-bottom">
                <h5 className="subheading ">Get detailed View of <br/> Business and App Services</h5>
                <p className="con2-p">Prem ipsum dolor sit amet consectetur. Viverra sed dignissim risus aliquet
                    condimentum. Vulputate varius feugiat egestas congue </p>
            </div>
        </div>

        <div className="con2-right">

            <img  src="ellipse/ellipse-13.png" alt="" className="ellipse-13" />

            <div className="right-top">
                 {/* <h4 className='subheading'>State of Application Security</h4> */}
                 <h4 className='subheading'>State of Application Security</h4>
                {/*<p>Tellus et adipiscing sit sit mauris pharetra bibendum. Ligula massa netus nulla ultricies purus.
                </p> */}
            </div>
            <div className="img-block">
                <img src="images/App View 1.png" alt="" />
                {/* <img src="group.svg" alt="" /> */}
            </div>
            <img  src="ellipse/ellipse-14.png" alt="" className="ellipse-14" />
        </div>
    </div>
    <div className='w-main'>

     <h2 className="sec-title tc">
        Powerful Cloud Native ISV Solutions to accelerate your cloud adoption
    </h2>
    <img src="AppKube.svg" alt="" />
    </div>

    {/* <div className="sec-3-btns flex">
        <button>Get a Started</button>
        <button>Browse all feature</button>
    </div> */}
</section>
<section className="sec-2">
    <div className="sec2-top w-main">
        <h2 className='sec-title tc'>Key Features</h2>
    </div>

    <div className="cards-con container">
        <div className="cards-row flex jc-c">
            <div className="card w-card ">
                <img  className="icon" src="images/icon.svg" alt="" />
                <h2>App Centric Optimization</h2>
                <p>BMost Enterprise land up excessive cloud CapEx/OpEx after few months of cloud adoption, because of two reasons:
</p>
<ul>
    <li>Actual Vs Non-Actual Ratio</li>
    <li>Resource Oversizing with Primitive Model</li>
</ul>


            </div>
            <div className="card w-card ">
                <img  className="icon" src="images/icon (1).png" alt="" />
                <h2>SRE</h2>
                <p>Enterprises today need to adopt modern microservices/serverless architecture in multi-cloud hybrid environment for business agility, scalability, and flexibility</p>
            </div>
            <div className="card w-card ">
                <img  className="icon" src="images/icon-2.svg" alt="" />
                <h2>DevSecOps Tooling</h2>
                <p>As the enterprises are embracing modern cloud native application architecture, there is a paradigm shift of working of Developers/Security/Operations people. </p>
            </div>
             <div className="card w-card ">
                <img  className="icon" src="images/icon-2.png" alt="" />
                <h2>App Blocks</h2>
                <p>AppKube platform delivers these common application blocks as reusable software components that compose few clouds native microservices delivered by cloud provider and includes lifecycle - the management, instrumentation, and operational management aspects.</p>
            </div>
        </div>
    </div>
</section>
<section className="sec-4 container">

</section>
<section className="sec-2 w-main">
    <div className="sec2-top container">
        <h2 className='title'>Key Usecases</h2>
        {/* <p>Apsum dolor sit amet consectetur. Aliquam elementum elementum in ultrices. Dui maecenas ut eros turpis
            ultrices metus morbi aliquet vel.</p> */}
    </div>

    <div className="cards-con container">
        <div className="cards-row flex jc-c">
            <div className="card w-card ">
                <img  className="icon" src="images/icon.svg" alt="" />
                <h2>Cloud Native App Development</h2>
                <p>Appkube low code platform not only reduces the time and cost of building custom solution, it helps you to maximize your data revenue and data security.It’s a platform that provides peace of mind, governance, efficiency, and control and your long term flexibity and agility.</p>
                <a href="Cloud-Native-App Development.pdf" target='_blank'>Know More</a>
            </div>
            <div className="card w-card ">
                <img  className="icon" src="images/icon (1).png" alt="" />
                <h2>Cloud Optimization</h2>
                <p>Appkube get a 360-degree view of your multi-cloud environment, complete with actionable insights, ML-powered recommendations, and automated actions for streamlined cloud operations</p>
                 <a href="Cloud-Optimization.pdf" target='_blank'>Know More</a>
            </div>
            <div className="card w-card ">
                <img  className="icon" src="images/icon-2.svg" alt="" />
                <h2>DevSecOps Transformation</h2>
                <p>Appkube reduces the complexity of technology and cultural transformation. A platform that clearly lays the stages to achieve your DevSecOps maturity , delivers a one stop solutions for all your tooling needs supplemented by a pool of DevSecOps resources trained to operate at highest DevSecOps maturity model.</p>
                 <a href="DevSecOps-TRANSFORMATION.pdf" target='_blank'>Know More</a>
            </div>
             <div className="card w-card ">
                <img  className="icon" src="images/icon-2.png" alt="" />
                <h2>Migration and Modernization</h2>
                <p>Appkube reduces the complexity of cloud migration and transformation. A platform that automatically lays the backbone for cloud environment following best practices.</p>
                 <a href="Cloud-Native-App Development.pdf" target='_blank'>Know More</a>
            </div>

        </div>
    </div>
</section>

    </>
  )
}
