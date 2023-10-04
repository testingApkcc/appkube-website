import Link from "next/link"

const Nav = () => {
  return (
    <>
    <header>
        <nav className="flex">
            <div className="logo">
                <img src="images/appkubelogo.png" alt=""/>
            </div>

            <ul className="nav-links">
                <li><a id="home" href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/features">Features</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>

            <button className="trial-btn">Free Trial</button>
        </nav>
    </header> <div className="header-hr"></div>
    </>
  )
}

export default Nav