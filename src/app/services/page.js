import React from 'react'
import { Accordion } from '../../Components/Accordion'

export default function ServicesPage() {
  return (
    <main className='container d-flex flex-column align-items-center m-2 m-md-4 px-4 px-md-5 gap-5 text-white'>
        <div className='d-flex flex-column gap-5 my-5 w-100'>
          <h1 className='font-fam' data-aos='fade-right' data-aos-duration='1500'>Our Services</h1>
          <Accordion/>
        </div>

        <div className='d-flex flex-column gap-5 w-100'>
          <h1 className='font-fam' data-aos='fade-right' data-aos-duration='1500'>Our Legal Process</h1>
          <ol className='px-3 px-md-5 p d-flex flex-column gap-2'>
            <li data-aos='fade-right'>
              <h5>Initial Consultation</h5>
              <p className='p-2' data-aos='fade-left' data-aos-delay='100'>We listen to your situation, identify your needs, and determine the best legal approach. This may be done in-person, online, or over the phone.</p>
            </li>
            <li data-aos='fade-right' data-aos-delay='300'>
              <h5>Case Evaluation</h5>
              <p className='p-2' data-aos='fade-left' data-aos-delay='400'>Our lawyers review documents, evidence, and circumstances to assess risks, timelines, and available legal options.</p>
            </li>
            <li data-aos='fade-right' data-aos-delay='600'>
              <h5>Strategy Planning</h5>
              <p className='p-2' data-aos='fade-left' data-aos-delay='700'>We craft a customized legal strategy designed to protect your rights and achieve the most favorable outcome.</p>
            </li>
            <li data-aos='fade-right' data-aos-delay='900'>
              <h5>Execution & Representation</h5>
              <p className='p-2' data-aos='fade-left' data-aos-delay='1000'>We handle negotiations, document preparation, filings, and court appearances on your behalf.</p>
            </li>
            <li data-aos='fade-right' data-aos-delay='1200'>
              <h5>Ongoing Support</h5>
              <p className='p-2' data-aos='fade-left' data-aos-delay='1300'>We keep you updated, explain your options clearly, and ensure transparency throughout your case.</p>
            </li>            
          </ol>
        </div>
    </main>
  )
}
