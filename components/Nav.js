import Link from "next/link"
import { AiFillCaretDown, AiOutlineMenu } from "react-icons/ai";
import { TbTargetArrow } from "react-icons/tb";
import { PiPresentationChartFill } from "react-icons/pi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
const Nav = () => {
  return (
    <>
      <header className="hid-mobile">
        <nav className="flex w-main">
          <div className="logo">
            <a href="/"><img src="images/appkubelogo.png" alt="" /></a>
          </div>
          <div>
            <div className="home-menu">
              <a href="/">Home</a>
              <div className="dropdown">
                <button className="dropbtn fmenu">Features <AiFillCaretDown /></button>
                <div className="dropdown-content">
                  <a href="/appcentric">Appcentric Optimization</a>
                  <a href="/cloudnative">Cloud Native App Blocks</a>
                  <a href="/sre">SRE - Infra & App</a>
                  <a href="/devsecops">DevSecOps Tooling</a>
                </div>
              </div>
              <a href="/contact">Contact Us</a>
            </div>
          </div>


          {/* <button className="trial-btn">Free Trial</button> */}
        </nav>
      </header>
      <div className="header-hr"></div>
    </>
  )
}

export default Nav
