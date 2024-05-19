'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative flex justify-between lg:justify-start items-center lg:m-auto lg:w-full max-w-[1140px] h-[80px] lg:gap-12 font-custom-font mx-5">
    <div className="flex justify-between items-center gap-6 py-2">
      <div className="sm:ml-10">
        <Link href="/">
          <img className="w-full" src="./assets/logo.png" alt="Logo" />
        </Link>
      </div>
    </div>

    <nav className="lg:gap-[120px] hidden md:flex items-center text-sm lg:py-2 z-50">
      <div>
        <ul className="flex justify-between lg:gap-x-4 whitespace-nowrap lg:mx-5">
          <li>
            <Link href="/product" className="hover:bg-gray-dark hover:rounded-md px-4 py-2">
              Product
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:bg-gray-dark hover:rounded-md px-4 py-2">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/company" className="hover:bg-gray-dark hover:rounded-md px-4 py-2">
              Company
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:bg-gray-dark hover:rounded-md px-4 py-2">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:bg-gray-dark hover:rounded-md px-4 py-2">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex lg:justify-between lg:gap-3 lg:ml-[12.0px] lg:pl-12 text-xs font-bold">
        <button className="border-2 border-[#DCDCDC] bg-white-text rounded py-2 px-4 hover:bg-gray-dark">
          Log in
        </button>
        <button className="border-2 bg-white rounded py-2 px-4 text-white-text bg-button-bg hover:bg-white-text hover:text-button-bg">
          Try for Free
        </button>
      </div>
    </nav>

    <div className="md:hidden flex justify-end sm:mr-10 relative z-50">
      <button onClick={toggleMenu} className="focus:outline-none">
        <FontAwesomeIcon className="fa-2xl" icon={faBars} />
      </button>
      {isOpen && (
        <nav className="absolute top-9 bg-white-text text-custom-bg shadow-md rounded-md z-50">
          <ul className="flex flex-col gap-y-2 text-sm pt-3">
            <li>
              <Link href="/product" className="hover:bg-gray-100 hover:rounded-md px-4 py-2">
                Product
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:bg-gray-100 hover:rounded-md px-4 py-2">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/company" className="hover:bg-gray-100 hover:rounded-md px-4 py-2">
                Company
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:bg-gray-100 hover:rounded-md px-4 py-2">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:bg-gray-100 hover:rounded-md px-4 py-2">
                Contact
              </Link>
            </li>
          </ul>

          <div>
            <button className="hover:bg-gray-100 hover:rounded-md px-4 py-2 text-sm mt-0">
              Log in
            </button>
            <button className="hover:bg-gray-100 hover:rounded-md px-4 py-2 text-sm whitespace-nowrap pt-0">
              Try for Free
            </button>
          </div>
        </nav>
      )}
    </div>
  </header>
  );
};

export default Header;