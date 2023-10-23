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
           
            <nav className="bg-grad p-4">
                <div className="logo">
                    <a href="/"><img src="images/appkubelogo.png" alt="" /></a>
                </div>
                <div id='menu'
                    className={`lg:flex lg:space-x-4 ${isMenuOpen ? 'block' : 'hidden'
                        } mobile-menu ai-c`}
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
    top: 0;
    right: -100%;
    height: 100%;
    width: 70%;
    background: #333;
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
