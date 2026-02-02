import React from 'react'
import { Accordion } from '../Components/Accordion'

export default function ServicesPage() {
  return (
    <main className='d-flex flex-column m-2 m-md-4 px-4 px-md-5 gap-5 text-white'>
        <div className='d-flex flex-column gap-5 my-5'>
          <h1 className='font-fam'>Our Services</h1>
          <Accordion/>
        </div>

        <div className='d-flex flex-column gap-5'>
          <h1 className='font-fam'>Our Legal Process</h1>
          <ol className='px-3 px-md-5 p d-flex flex-column gap-2'>
            <li>
              <h5>Initial Consultation</h5>
              <p className='p-2'>We listen to your situation, identify your needs, and determine the best legal approach. This may be done in-person, online, or over the phone.</p>
            </li>
            <li>
              <h5>Case Evaluation</h5>
              <p className='p-2'>Our lawyers review documents, evidence, and circumstances to assess risks, timelines, and available legal options.</p>
            </li>
            <li>
              <h5>Strategy Planning</h5>
              <p className='p-2'>We craft a customized legal strategy designed to protect your rights and achieve the most favorable outcome.</p>
            </li>
            <li>
              <h5>Execution & Representation</h5>
              <p className='p-2'>We handle negotiations, document preparation, filings, and court appearances on your behalf.</p>
            </li>
            <li>
              <h5>Ongoing Support</h5>
              <p className='p-2'>We keep you updated, explain your options clearly, and ensure transparency throughout your case.</p>
            </li>            
          </ol>
        </div>
    </main>
  )
}
