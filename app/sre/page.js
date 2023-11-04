import React from 'react'

const sreinfra = () => {
  return (
    <>
      <section id='devsecops w-main'>

        <div className="w-50 flex items-center gap-5">
          <img src="cloudnative/appcloudnative.png" alt="" />
        </div>
        <h2 className='sec-title text-center mt-4 mb-0'>Tailored solutions. Maximized data revenue and security. Flexibility and agility for the long term.</h2>
      </section>
      <section className='w-main'>
        <div className="df fld maddy">

          <div className="flex-col-bg">
            <div className="flex-col card-size bdr  bg-grad pa">
              {/* <div className="fimageblock"><img src="appcentric/cost optimization image p3.svg" alt="" /></div> */}
              <div className="">
                {/* <h4 className='subheading tl'>"Unlocking Efficiency & Modernization"</h4> */}
                <h4 className='subheading tl'>Key Challenges</h4>
                <ul>
                  <li className='list-disc'>Slecting the right cloud strategy.</li>
                  <li className='list-disc'>Increasing revenue while reducing time to cloud</li>
                  <li className='list-disc'>Complexity in migration and modernization</li>
                </ul>
              </div>
            </div>
            <div className="flex-col card-size bdr bg-grad pa">
              {/* <div className="fimageblock"><img src="appcentric/cost optimization image p4.svg" alt="" /></div> */}
              <div className="tl">
                <h4 className='subheading tl'>Why Appkube?</h4>
                <ul>
                  <li>Simplify your cloud journey</li>
                  <li>Achieve governance, efficiency, and flexibility across multi-clooud environments.</li>
                  {/* <li>Tech Debt</li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <h2 className='sec-title text-center mt-0'>Appkube's cloud Optimization Solution</h2> */}
          {/* <div className="imageblock"><img src="appcentric/cost optimization image p8.svg" alt="" /></div> */}
          <div className="p-8 rounded-md w-main bg-gra-invert">
            <div>
              <h4 className='section-title mb-7 text-center'>Our Cloud Solution</h4>
              <div className="flex sm:flex-col md:flex- row lg:flex-row xl:flex-row gap-7">
                <img src="sreimages/sre.jpg" alt="" className='w-1/4 hidden lg:block ' />
                {/* <div><h3>hello</h3></div> */}
                <div>
                  <div className='flex justify-start mb-5 items-center'>
                    <div className="w-10 mr-4">
                      <img src="icons/bulls-white.png" alt="" />
                    </div>
                    <p className='text-left'>Accelerated Cloud Adoption.</p>
                  </div>
                  <div className='flex justify-start mb-5 items-center'>
                    <div className="w-10 mr-4">
                      <img src="icons/shuttle-white.png" alt="" />
                    </div>
                    <p className='text-left'>App-centric Optimization.</p>
                  </div>
                  <div className='flex justify-start mb-5 items-center'>
                    <div className="w-10 mr-4">
                      <img src="icons/cost-white.png" alt="" />
                    </div>
                    <p className='text-left'>Automated Cost Control.</p>
                  </div>
                  <div className='flex justify-start mb-5 items-center'>
                    <div className="w-10 mr-4">
                      <img src="icons/bulb-white.png" alt="" />
                    </div>
                    <p className='text-left'>High Precision Migration.</p>
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

export default sreinfra