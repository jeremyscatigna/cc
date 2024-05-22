'use client';

import { useState } from 'react';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu's visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menus = ['A PROPOS', 'CONCEPT', 'FORMULES', 'OPTIONS', 'RESTAURATION', 'MARIAGE', 'DEMANDE DE DEVIS'];

    return (
        <nav className='absolute top-0 left-0 flex items-center justify-between w-full text-white z-50 pr-4 md:px-24'>
            <div className='w-full flex flex-wrap items-center justify-between mx-auto pt-4'>
                <a href='/' className='flex items-center space-x-3 rtl:space-x-reverse font-bold pl-4 md:pl-0'>
                    cc&co
                </a>
                <button
                    data-collapse-toggle='navbar-default'
                    type='button'
                    className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:text-gray-100 '
                    aria-controls='navbar-default'
                    aria-expanded='false'
                    onClick={toggleMenu} // Add the onClick event handler here
                >
                    <span className='sr-only'>Open main menu</span>
                    <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                        <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M3 12h18M3 6h18M3 18h18'
                        />
                    </svg>
                </button>

                <div className={`${isMenuOpen ? 'p-4 text-black' : 'hidden'} w-full md:block md:w-auto`} id='navbar-default'>
                    <ul className='flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent '>
                        {menus.map((menu) => (
                            <li key={menu} className='py-2 text-inter capitalize'>
                                <a href='#' className='hover:text-gray-100'>
                                    {menu.toLowerCase()}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
