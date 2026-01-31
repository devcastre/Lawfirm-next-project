'use client'

import React from 'react'

import Image from 'next/image'
import styles from './contactUs.module.css'





export default function ContactUsPage() {
    console.log(styles)

  return (
    <main className={`container d-flex flex-column flex-lg-row text-white my-5 gap-4 justify-content-center align-items-center`}>
        <div className='d-flex flex-column p-4 m-2'>
            <h2 className='font-fam'>Start Your Consultation</h2>
            <p>Speak with our legal team today for guidance, support, and clarity on your case.</p>
            <div className='py-4 d-flex flex-column gap-1'>
                <div className='d-flex flex-row gap-3'>
                    <Image
                        src='/svgIcon/locationicon.svg'
                        alt='location'
                        width={30}
                        height={30}
                    />
                    <span>Epuladaug, Itakam, Metro Manila</span>
                </div>
                <div className='d-flex flex-row gap-3'>
                    <Image
                        src='/svgIcon/phoneicon.svg'
                        alt='phone-number'
                        width={30}
                        height={30}
                    />
                    <span>(02) 8123 4567</span>
                </div>
                <div className='d-flex flex-row gap-3'>
                    <Image
                        src='/svgIcon/emailicon.svg'
                        alt='email'
                        width={30}
                        height={30}
                    />
                    <span>Lawfulfill@gmail.com</span>
                </div>                
            </div>
        </div>
        <form className={`d-flex flex-column p-4 m-2 rounded-3 gap-3 ${styles.contactForm}`}>
        
            
            <div className='d-flex flex-column'>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
                </label>
                <input
                type="text"
                placeholder="Firstname - Middlename - Lastname"
                className={`rounded-1 px-3 py-2 ${styles.contactInput}`}
                />
            </div>

            
            <div className='d-flex flex-column'>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
                </label>
                <input
                type="email"
                placeholder="youremail@email.com"
                className={`rounded-1 px-3 py-2 ${styles.contactInput}`}
                />
            </div>

            
            <div className='d-flex flex-column'>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number
                </label>
                <input
                type="tel"
                placeholder="0000-000-0000"
                className={`rounded-1 px-3 py-2 ${styles.contactInput}`}
                />
            </div>

            
            <div className='d-flex flex-column'>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                </label>
                <textarea
                placeholder="Type anything here"
                rows={5}
                className={`rounded-1 px-3 py-2 ${styles.contactTextarea}`}
                />
            </div>

            
            <button
                type="submit"
                className={`rounded-1 px-4 py-3 text-white ${styles.contactSubmit}`}
            >
                Send Message
            </button>

        </form>
    </main>
  )
}
