import Link from "next/link"
import { AiFillCaretDown, AiOutlineMenu } from "react-icons/ai";
const Nav = () => {
  return (
    <>
      <header>
        <nav className="flex w-main">
          <div className="logo">
            <a href="/"><img src="images/appkubelogo.png" alt="" /></a>
          </div>
          <div>
            <AiOutlineMenu className="hamburger" />
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
          {/* <ul className="nav-links">
                <li id="home" href="/">Home</li>
                <li className="features" href="#">Features
                    <div className="sub-menu">
                          <a href="/appcentric">Appcentric</a>
                          <a href="/cloudnative">Cloud Native</a>
                          <a className='dropdown' href="/sre">Sre </a>
                          <a className='dropdown' href="/devsecops">Devsecops  </a>
                    </div>
                    </li>
            </ul> */}

          {/* <button className="trial-btn">Free Trial</button> */}
        </nav>
      </header>
      {/* <div className="header-hr"></div> */}
    </>
  )
}

export default Nav
