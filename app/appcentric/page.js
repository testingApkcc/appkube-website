import React from 'react'
import { AiTwotoneLeftCircle } from "react-icons/ai";

const features = () => {
  return (
    <>
      <section id='devsecops w-main'>

        <div className="w-50 flex items-center gap-5">
          <img src="cloud-optimization.png" alt="" />
        </div>
        <h2 className='sec-title text-center mt-4 mb-0'>Tailored solutions for Cloud Optimization. Make a significant difference in your bottom line.</h2>
      </section>
      <section className='w-main'>
        <div className="df fld maddy">

          <div className="flex-col-bg">
            <div className="flex-col card-size bdr  bg-grad pa">
              {/* <div className="fimageblock"><img src="appcentric/cost optimization image p3.svg" alt="" /></div> */}
              <div className="">
                {/* <h4 className='subheading tl'>"Unlocking Efficiency & Modernization"</h4> */}
                <h4 className='subheading tl'>Key Insights</h4>
                <ul>
                  <li>60% of cloud spending is wasted</li>
                  <li>Aligning costs with business goals is crucial</li>
                  <li>Higher costs can be justified with greater revenue or productivity</li>
                </ul>
              </div>
            </div>
            <div className="flex-col card-size bdr bg-grad pa">
              {/* <div className="fimageblock"><img src="appcentric/cost optimization image p4.svg" alt="" /></div> */}
              <div className="tl">
                <h4 className='subheading tl'>Three Dimensions of Optimization</h4>
                <ul>
                  <li>Cloud native features for 15-20% cost optimization.</li>
                  <li>Improve Actual Vs Non-Actual infrastructure ratio for upto 70% savings.</li>
                  <li>Adopt modern architecture for atleast 25% savings.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className='sec-title text-center mt-0'>Appkube's cloud Optimization Solution</h2>
          {/* <div className="imageblock"><img src="appcentric/cost optimization image p8.svg" alt="" /></div> */}
          <div className="p-8 rounded-md w-main bg-gra-invert">
            <div>
              <h4 className='section-title mb-7 text-center'>Key offerings of Appkube:</h4>
              <div className="flex sm:flex-col md:flex- row lg:flex-row xl:flex-row gap-7">
                <img src="appcentric/apkube-offerings.jpg" alt="" className='w-1/2 hidden lg:block ' />
                {/* <div><h3>hello</h3></div> */}
                <div>
                  <div className='flex justify-start mb-5 items-center'>
                    <div className="w-10 mr-4">
                      <img src="icons/bulls-white.png" alt="" />
                    </div>
                    <p className='text-left'>360-degree view of your multi cloud environment.</p>
                  </div>
                  <div className='flex justify-start mb-5 items-center'>
                    <div className="w-10 mr-4">
                      <img src="icons/shuttle-white.png" alt="" />
                    </div>
                    <p className='text-left'>ML-powered recommendations and automated actions.</p>
                  </div>
                  <div className='flex justify-start mb-5 items-center'>
                    <div className="w-10 mr-4">
                      <img src="icons/cost-white.png" alt="" />
                    </div>
                    <p className='text-left'>Historical cost trend comparisons</p>
                  </div>
                  <div className='flex justify-start mb-5 items-center'>
                    <div className="w-10 mr-4">
                      <img src="icons/bulb-white.png" alt="" />
                    </div>
                    <p className='text-left'>Real-time waste detection and cost spike resolution.</p>
                  </div>
                  <div className='flex justify-start mb-5 items-center'>
                    <div className="w-10 mr-4">
                      <img src="icons/settings-white.png" alt="" />
                    </div>
                    <p className='text-left'>Cost alignment with business outcomes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* <section>
        <img src="appcentric.svg" alt="" />
    </section> */}
    </>
  )
}

export default features