import Link from "next/link"
import { AiFillCaretDown } from "react-icons/ai";
const Nav = () => {
  return (
    <>
    <header>
        <nav className="flex">
            <div className="logo">
                <img src="images/appkubelogo.png" alt=""/>
            </div>

            <div className="nav-links">
                <Link id="home" href="/">Home</Link>
                <Link className='dropdown' href="/features">features <AiFillCaretDown/> </Link>
                <Link href="/features">solutions</Link>
                <Link className='dropdown' href="/pricing">resources <AiFillCaretDown/></Link>
                <Link href="/blog">pricing</Link>
            </div>

            <button className="trial-btn">Free Trial</button>
        </nav>
    </header>
    {/* <div className="header-hr"></div> */}
    </>
  )
}

export default Nav