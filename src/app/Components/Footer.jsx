'use client'


import React from 'react'

import Link from 'next/link';
import { navLinks, footerLinks, footer2Links } from '../config/links';
import { firmLinks } from '../config/firmlinks';


export const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-5 mx-2 mx-md-4 rounded-top">
      <div className="container py-4 px-5">
        <div className="row g-4">

          <div className="col-lg-6 px-4">
            <h3 className='fw-medium'>Lawfulfill</h3>
            <p>With decades of combined experience, our team delivers refined legal counsel designed to secure the best possible outcome for every case</p>
            <div className="d-flex gap-3">
              {firmLinks.map(link => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                >
                  <img src={link.icon} alt={link.platform} height={40} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-2 px-4">
            <h5 className='fw-medium'>Useful Links</h5>
            <div className="d-flex flex-column gap-2">
              {navLinks.map((navlinks) => (
                <Link key={navlinks.href} href={navlinks.href} className="text-decoration-none text-muted">
                    {navlinks.name}
                </Link>
            ))}   
            </div>
         
          </div>

          <div className="col-lg-2 px-4">
            <h5 className='fw-medium'>Legals</h5>
            <div className="d-flex flex-column gap-2">
              {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-decoration-none text-muted">
                {link.name}
              </Link>
            ))}
            </div>

          </div>

          <div className="col-md-2 px-4">
            <h5 className='fw-medium'>Resources</h5>
            <div className="d-flex flex-column gap-2">
              {footer2Links.map((link) => (
                <Link key={link.href} href={link.href} className="text-decoration-none text-muted">
                  {link.name}
                </Link>
              ))}              
            </div>

          </div>         
        </div>


        

      </div>
    </footer>
  )
}
