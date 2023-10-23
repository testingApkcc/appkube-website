// import Link from "next/link"
// import { AiFillCaretDown, AiOutlineMenu } from "react-icons/ai";
// const Nav = () => {
//   return (
//     <>
//       <header>
//         <nav className="flex w-main">
//           <div className="logo">
//             <a href="/"><img src="images/appkubelogo.png" alt="" /></a>
//           </div>
//           <div>
//             <AiOutlineMenu className="hamburger" />
//             <div className="home-menu">
//               <a href="/">Home</a>
//               <div className="dropdown">
//                 <button className="dropbtn fmenu">Features <AiFillCaretDown /></button>
//                 <div className="dropdown-content">
//                   <a href="/appcentric">Appcentric Optimization</a>
//                   <a href="/cloudnative">Cloud Native App Blocks</a>
//                   <a href="/sre">SRE - Infra & App</a>
//                   <a href="/devsecops">DevSecOps Tooling</a>
//                 </div>
//               </div>
//               <a href="/contact">Contact Us</a>
//             </div>
//           </div>
//           {/* <ul className="nav-links">
//                 <li id="home" href="/">Home</li>
//                 <li className="features" href="#">Features
//                     <div className="sub-menu">
//                           <a href="/appcentric">Appcentric</a>
//                           <a href="/cloudnative">Cloud Native</a>
//                           <a className='dropdown' href="/sre">Sre </a>
//                           <a className='dropdown' href="/devsecops">Devsecops  </a>
//                     </div>
//                     </li>
//             </ul> */}

//           {/* <button className="trial-btn">Free Trial</button> */}
//         </nav>
//       </header>
//       {/* <div className="header-hr"></div> */}
//     </>
//   )
// }

// export default Nav
'use client'
import { useState } from 'react';
import { AiFillCaretDown, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className='bg-grad '>

        <nav className="bg-grad p-4">
          <div className="logo">
            <a href="/"><img src="images/appkubelogo.png" alt="" /></a>
          </div>
          <div
            className={`lg:flex lg:space-x-4 ai-c ${isMenuOpen ? 'block' : 'hidden'
              } mobile-menu`}
          >
            <a href="/" className="text-white">Home</a>
            <div className="dropdown">
              <button className="dropbtn fmenu">Features <AiFillCaretDown /></button>
              <div className="dropdown-content">
                <a href="/appcentric">Appcentric Optimization</a>
                <a href="/cloudnative">Cloud Native App Blocks</a>
                <a href="/sre">SRE - Infra & App</a>
                <a href="/devsecops">DevSecOps Tooling</a>
              </div>
            </div>
            <a href="/contact" className="text-white">Contact</a>
          </div>
          <div className="lg:hidden">
            <button
              className="text-white p-2 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

<style jsx>{`
  .lg\:hidden {
    display: none;
  }

  .lg\:flex {
    display: flex;
  }

  .mobile-menu {
    position: fixed;
    width: 25vw;
    top: 0;
    right: -100%;
    height: 100%;
    width: 70%;
    background: red;
    transition: right 0.3s ease-in-out;
  }

  .mobile-menu.block {
    right: 0;
  }

  .mobile-menu a {
    display: block;
    color: white;
    padding: 1rem;
  }
`}</style>

export default Navbar;

