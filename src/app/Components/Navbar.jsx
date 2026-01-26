


import React from 'react'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '../config/links';

import '../styles/navBar.css';
// import "bootstrap/dist/js/bootstrap.bundle.min.js";


export const Navbar = () => {
    
    const pathName = usePathname();

  return (

    <nav className="container navbar navbar-expand-lg navbar-dark bg-transparent shadow-sm px-1 px-md-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white font-fam" href="/">
          LawfulFill
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mt-4" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3 gap-lg-4">
            {navLinks.map((link) => {
              const isActive = pathName === link.href;

              return (
                <li key={link.href} className="nav-item ">
                  <Link
                    href={link.href}
                    className={`nav-link nav-anim text-white ${isActive ? "active-link" : ""}`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>        
    </nav>
  )
}
