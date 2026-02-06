'use client'

import React, { useEffect, useState } from 'react'


import { navLinks } from '@/app/config/links';
import Link from 'next/link';
import Image from 'next/image';

export function Teamsection() {
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    fetch('/data/team.json')
      .then(res => res.json())
      .then(setLawyers);
  }, []);

  const topLawyers = lawyers.reduce((acc, lawyer) => {
    acc.push(lawyer)
    acc.sort((a, b) => b.yearsOfExperience - a.yearsOfExperience)
    if (acc.length > 4) acc.pop()
    return acc
  }, [])

  const moreLawyersLink = navLinks.find(link => link.name === 'Team');

  return (
    <div className='container d-flex flex-column text-white my-5 mx-1 mx-sm-3 px-lg-5 py-5 gap-5'>
      <div className='d-flex flex-row align-items-center justify-content-between'>
        <h1 className='font-fam'>Our Team</h1>
        {moreLawyersLink && (
          <Link href={moreLawyersLink.href}>
            <span className='text-white'>More Lawyers</span>
          </Link>
        )}        
      </div>
      <div className='row g-3 justify-content-center justify-content-md-start px-5 px-sm-0'>
        {topLawyers.map((lawyer) => (
          <div key={lawyer.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Link href={`/team/${lawyer.id}`} className="text-decoration-none">
              <div className="card w-100 border-0 position-relative overflow-hidden card-container">
                <Image
                  src={lawyer.img}
                  alt={lawyer.name}
                  width={375}
                  height={450}
                  className="card-img-top card-img"
                />
                <div className="card-body position-absolute bottom-0 w-100 text-white">
                  <h5>{lawyer.name}</h5>
                  <p>{lawyer.role}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
