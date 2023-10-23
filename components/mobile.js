'use client'
// import { useState } from 'react';
// import { AiFillCaretDown, AiOutlineMenu } from "react-icons/ai";

// const Navbar = () => {
//     const [isMenuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setMenuOpen(!isMenuOpen);
//     };

//     return (
//         <header className='lg:hidden '>
//             <nav className="bg-grad p-4">
//                 <div className="flex items-center justify-between">
//                     <a href="/"><img src="images/appkubelogo.png" alt="" /></a>

//                     <div
//                         className={`lg:hidden transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
//                             } fixed top-0 right-0 w-100 bg-grad text-white p-4 z-40`}
//                     >
//                         <div className="mob-menu">
//                             <a href="/" className="text-white">Home</a>
//                             <div className="dropdown">
//                                 <button className="dropbtn fmenu">Features <AiFillCaretDown /></button>
//                                 <div className="dropdown-content">
//                                     <a href="/appcentric">Appcentric Optimization</a>
//                                     <a href="/cloudnative">Cloud Native App Blocks</a>
//                                     <a href="/sre">SRE - Infra & App</a>
//                                     <a href="/devsecops">DevSecOps Tooling</a>
//                                 </div>
//                             </div>
//                             <a href="/contact" className="text-white">Contact</a>
//                         </div>


//                     </div>
//                 </div>

//                 <div className="lg:hidden">
//                     <button
//                         className="text-white p-2 focus:outline-none"
//                         onClick={toggleMenu}
//                     >
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-6 w-6"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M4 6h16M4 12h16M4 18h16"
//                             />
//                         </svg>
//                     </button>
//                 </div>
//             </nav>
//         </header>
//     );
// };

// export default Navbar;

import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="bg-blue-500 p-4">
            <div className="flex items-center justify-between">
                <div className="text-white font-bold text-2xl">Your Logo</div>

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

                <div
                    className={`lg:hidden transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        } fixed top-0 right-0 h-full w-64 bg-blue-500 text-white p-4`}
                >
                    <button
                        className="text-white p-2 focus:outline-none absolute top-0 right-0 m-2"
                        onClick={closeMenu}
                    >
                        Close
                    </button>
                    <a href="#" className="block p-2">Home</a>
                    <a href="/about" className="block p-2">About</a>
                    <a href="/services" className="block p-2">Services</a>
                    <a href="/contact" className="block p-2">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
