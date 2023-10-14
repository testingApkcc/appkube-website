import Link from "next/link"
import { AiFillCaretDown } from "react-icons/ai";
const Nav = () => {
  return (
    <>
    <header>
        <nav className="flex w-main">
            <div className="logo">
                <img src="images/appkubelogo.png" alt=""/>
            </div>
            <div className="nav-links">
                <Link id="home" href="/">Home</Link>
                <Link className='dropdown' href="/devsecops">Devsecops  </Link>
                <Link href="/appcentric">Appcentric</Link>
                <Link className='dropdown' href="/sre">Sre </Link>
                <Link href="/blog">Cloud Native</Link>
            </div>

            <button className="trial-btn">Free Trial</button>
        </nav>
    </header>
    {/* <div className="header-hr"></div> */}
    </>
  )
}

export default Nav
