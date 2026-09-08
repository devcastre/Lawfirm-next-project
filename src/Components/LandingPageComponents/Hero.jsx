'use client'

import React from 'react'

import styles from './hero.module.css'

import { navLinks } from '@/config/links';
import Link from 'next/link';

export const Hero = () => {

  const moreLawyersLink = navLinks.find(link => link.name === 'Contact');


  return (
    <div className={`d-flex w-100 justify-content-center align-items-end rounded-1 px-md-5 py-3 ${styles.heroSection}`}     data-aos="fade">

        <div className={`text-white mx-1 mb-3 m-sm-3 d-flex flex-fill ${styles.heroContent}`}>
          <div className="row d-flex flex-fill">

            <div className='col-12 col-md-6 d-flex flex-column text-center text-md-start px-4 py-2'>
              <h1 className='font-fam' data-aos="fade-up" data-aos-duration="1500">Legal Support You Can Trust</h1>
            </div>


            <div className='col-12 col-md-6 d-flex flex-column text-center text-md-end align-items-center align-items-md-end text-md-end px-4 py-2'>
              <p data-aos="fade-up" data-aos-duration="1500">Clear advice, strong representation, and a team that stands with you every step of the way.</p>
              <Link href={moreLawyersLink.href}>
                <button className='text-white px-4 py-2 border-0' data-aos="fade-up" data-aos-duration="1500">Request a Consultation</button>
              </Link>
              
            </div>
          </div>
        </div>        
    </div>
  )
}
