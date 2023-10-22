// 'use client'
import Image from 'next/image'
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";

export default function Home() {
    return (
        <>
            <section className="sec-1">
                <img className="ellipse1" src="images/ellipse.png" alt="" />
                <div className="container">
                    <div className="headings flex">
                        <h1 className='title mt-0'> Discover
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
                        <h2 className='subtitle mt-0'>We Discover Infrastructure, Corelate With <br />Business,  Optimize With Container / Serverless Platform</h2>
                    </div>

                    {/* <div className="sec-1-btns flex">
            <button>Get a free demo</button>
            <button>Free trial</button>
        </div> */}

                    <div className="hero-img">
                        <img src="SpendAnalytics.svg" alt="" />
                    </div>
                </div>

                <img className="ellipse2" src="ellipse/ellipse-1.png" alt="" />
            </section>
            <section className="sec-3">
                <h2 className='sec-title mt-1 sm-mt-0'>Gain complete insights into INFRA / APP / BUSINESS</h2>
                <div className="con-1 container">
                    <img className="ellipse-9" src="ellipse/ellipse-9.png" alt="" />
                    <div className="left w-main">
                        <h3 className='subheading tl'>Monitor, Troubleshoot, & Optimize Cloud Performance.</h3>
                        <div className="hero-img"> <img src="environments.svg" alt="" />
                            <p className='m-2 tc'>Get user friendly scores of your Infra and Services and act on them.</p></div>
                        {/* <button>Learn More</button> */}
                    </div>
                    <img className="ellipse-10" src="ellipse/ellipse-10.png" alt="" />
                </div>
                <div className="sec-3">
                    <h2 className='sec-title tc maddy'>An App-centric Cloud Optimization platform that improves business reliability and reduce up to 90% cloud spend.</h2>
                </div>
                <div className="con-1 container">
                    <img className="ellipse-9" src="ellipse/ellipse-9.png" alt="" />
                    <div className="left w-main">
                        <h3 className='subheading tc'>Get detailed View of
                            Business and App Services</h3>
                        <div className="hero-img"> <img src="CostAnalytics.svg" alt="" />
                            <p className='m-2 tc'>Get user friendly scores of your Infra and Services and act on them.</p></div>
                        {/* <button>Learn More</button> */}
                    </div>
                    <img className="ellipse-10" src="ellipse/ellipse-10.png" alt="" />
                </div>
                <div className='w-main'>
                    <h2 className="sec-title tc mt-1 ">
                        Powerful Cloud Native ISV Solutions to accelerate your cloud adoption
                    </h2>
                    <div className="w-45 mx">
                        <img src="Base.svg" alt="" />
                    </div>
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
                <div className="cards-con">
                    <div className="cards-row flex jc-c">
                        <div className="card w-card card-detail">
                            <img className="icon" src="images/appcentricoptimization.svg" alt="" />
                            <h2>App Centric Optimization</h2>
                            <p>AppKube is your key to cost-effective, secure, and efficient cloud management. With precise discovery analysis and business-centric insights, it helps enterprises to optimize cloud resources, reduce excessive costs, and enhance reliability.</p>
                        </div>
                        <div className="card w-card card-detail">
                            <img className="icon" src="images/icon-2.svg" alt="" />
                            <h2>SRE</h2>
                            <p>AppKube simplifies multi-cloud management, optimizing operations and costs with real-time insights and AI-driven solutions.</p>
                        </div>

                    </div>
                    <div className="cards-row flex jc-c">
                        <div className="card w-card card-detail">
                            <img className="icon" src="images/icon.svg" alt="" />
                            <h2>AppBlocks</h2>
                            <p>AppKube accelerates cloud-native development with reusable application blocks and streamlined service management. It enables rapid product delivery, reduces coding efforts, and simplifies legacy application migration.</p>
                        </div>
                        <div className="card w-card card-detail">
                            <img className="icon" src="images/devsecopstooling.svg" alt="" />
                            <h2>DevSecOps Tooling</h2>
                            <p>AppKube drives enterprise agility and competitiveness by unifying Developer, Security, and Operations teams within one platform. It accelerates project execution by 50%, simplifies the adoption of modern cloud-native services, and fosters a DevSecOps culture.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec-2 w-main">
                <div className="sec2-top">
                    <h2 className='sec-title'>Key Usecases</h2>
                </div>

                <div className="cards-con">
                    <div className="cards-row flex jc-c">
                        <div className="card-detail">
                            <div className="card w-card hts">
                                <img className="icon" src="images/cloudoptimization.svg" alt="" />
                                <h2>Cloud Optimization</h2>
                                <p>AppKube streamlines cloud spending, aligning it with business objectives. It offers a comprehensive view of multi-cloud environments, ML-driven recommendations, and cost-saving measures, resulting in substantial savings of up to 70%.</p>
                            </div>
                            <div className="carfd-btn">
                                <a href="Cloud-Optimization.pdf" target='_blank' className='knw'>Know More</a>
                            </div>
                        </div>
                        <div className="card-detail">
                            <div className="card w-card hts">
                                <img className="icon" src="images/modernization.svg" alt="" />
                                <h2>Migration & Modernization</h2>
                                <p>AppKube simplifies cloud migration, reducing complexity and accelerating value delivery. With features like Accelerated Cloud Adoption and Automated Cost Control, it streamlines multicloud hybrid adoption for efficiency and cost-effectiveness.</p>
                            </div>
                            <div className="carfd-btn">
                                <a href="MIGRATION-&-MODERNIZATION.pdf" target='_blank' className='knw'>Know More</a>
                            </div>
                        </div>
                    </div>
                    <div className="cards-row flex jc-c">
                        <div className="card-detail">
                            <div className="card w-card ht">
                                <img className="icon" src="images/cloudnative.svg" alt="" />
                                <h2>Cloud Native App Development</h2>
                                <p>AppKube speeds up custom software development, cutting costs and technical debt. It offers Cloud Native reusable application blocks and Readymade ISV solutions for streamlined development while enhancing data security and revenue. AppKube provides flexibility, control, and efficiency for tailored solutions.</p>
                            </div>
                            <div className="carfd-btn">
                                <a href="Cloud-Native-App Development.pdf" target='_blank' className='knw'>Know More</a>
                            </div>
                        </div>
                        <div className="card-detail">
                            <div className="card w-card ht">
                                <img className="icon" src="images/devsecopstooling.svg" alt="" />
                                <h2>DevSecOps Transformation</h2>
                                <p>AppKube expedites technology and cultural transformation through a comprehensive DevSecOps solution. With tool-based discovery, a complete tooling catalog, and cloud-native ISV solutions, it simplifies the journey towards DevSecOps maturity, enhancing speed, reliability, and cost-effectiveness.</p>
                            </div>
                            <div className="carfd-btn">
                                <a href="DevSecOps-TRANSFORMATION.pdf" target='_blank' className='knw'>Know More</a>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-cio" mb-1 >
                                <img src="images/cio.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
