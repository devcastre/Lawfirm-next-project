

import { navLinks } from '@/app/config/links';
import Link from 'next/link';
import React from 'react'

export const Aboutsection = () => {

  const moreLawyersLink = navLinks.find(link => link.name === 'About');

  return (
    <div className="container d-flex flex-fill rounded-1 text-white my-5 mx-1 mx-sm-3 px-lg-5">

          <div className="row justify-content-center align-items-center gap-5 gap-sm-0">

            <div className='col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start text-center text-sm-start px-4 py-2 gap-3'>
              <h1 className='font-fam'>Your Trusted Legal Partners</h1>
              <p>At LawfulFill, we provide expert legal solutions tailored to your needs. With a commitment to integrity, precision, and client-focused service, we guide you through every legal challenge with confidence and clarity.</p>
              <Link href={moreLawyersLink.href}>
                <button className='text-white px-4 py-2 border-0'>Learn More About Us</button>
              </Link>
            </div>

            <div className='col-12 col-md-6 row px-sm-4 py-2 g-4'>

              <div className='col-6 d-flex flex-column align-items-center'>
                <h6 className='text-center font-fam'>Years Experience</h6>
                <h2>5 Years</h2>
              </div>
              <div className='col-6 d-flex flex-column align-items-center'>
                <h6 className='text-center font-fam'>Employees</h6>
                <h2>40+</h2>
              </div>
              <div className='col-6 d-flex flex-column align-items-center'>
                <h6 className='text-center font-fam'>Awards</h6>
                <h2>50+</h2>
              </div>
              <div className='col-6 d-flex flex-column align-items-center'>
                <h6 className='text-center font-fam'>Cases</h6> 
                <h2>450+</h2>                
              </div>

            </div>



          </div>     
    </div>
  )
}
