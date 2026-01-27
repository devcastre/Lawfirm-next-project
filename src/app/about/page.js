

import React from 'react'

import styles from "../styles/aboutus.module.css";
// import '../styles/aboutus.css'

export default function AboutPage() {
  return (
    <main className={`${styles.hero}'d-flex flex-column w-100 align-items-center m-2 m-md-4 gap-5'`}>
        <div className={`${styles.about-section} d-flex justify-content-center rounded-3 m-2 m-md-4 px-md-5`}>

            <div className={`${styles.about-content} d-flex flex-column flex-lg-row align-items-center gap-5 justify-content-between text-white p-5`}>
                <div className={`${styles.about-item}text-center text-lg-start `}>
                    <p><span className='fs-1 fw-1 font-fam'>About Us</span> Established in 2020, LawfulFill Law Firm has grown from a small practice to a multi-disciplinary team serving clients in corporate law, family law, criminal defense, real estate, and intellectual property. Over the years, we’ve helped resolve hundreds of cases through a blend of legal expertise, collaboration, and a deep understanding of our clients’ needs.</p>
                </div>
                <div className={`${styles.about-goal}text-center text-lg-end  d-flex flex-column gap-5`}>
                    <p><span className='fs-1 fw-1 font-fam'>Our Mission</span> is to provide accessible, high-quality legal services that protect rights, resolve disputes, and support clients in making informed decision grounded in integrity, professionalism, and accountability.</p>

                    <p><span className='fs-1 fw-1 font-fam'>Our Vision</span> is to become a trusted law firm known for excellence, innovation, and client-centered advocacy within our community and beyond.</p>
                </div>
            </div>   
        </div>
        
        <div className='container d-flex flex-column gap-5 text-white text-center py-5 px-4 px-md-5'>
            <h2 className='font-fam'>Achievements</h2>
            <div className='row g-5'>
                <div className='col-6 col-md-3'>
                    <h6 className='font-fam'>Cases</h6>
                    <span className='fs-2'>450+</span>
                </div>
                <div className='col-6 col-md-3'>
                    <h6 className='font-fam'>Awards</h6>
                    <span className='fs-2'>50+</span>
                </div>
                <div className='col-6 col-md-3'>
                    <h6 className='font-fam'>Trusted Client</h6>
                    <span className='fs-2'>300+</span>
                </div>
                <div className='col-6 col-md-3'>
                    <h6 className='font-fam'>Client Satisfaction</h6>
                    <span className='fs-2'>96%</span>
                </div>

            </div>  
        </div>
    </main>
  )
}
