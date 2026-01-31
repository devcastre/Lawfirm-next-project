'use client'

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import styles from "./lawyerProfilePage.module.css"
// import "../../styles/lawyerProfilePage.css";

export default function LawyerProfilePage({ params }) {
  const { id } = params;


  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    fetch('/data/team.json')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched lawyers:', data);
        setLawyers(data);
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  if (lawyers.length === 0) return <div>Loading...</div>;

  const lawyer = lawyers.find(lawyer => String(lawyer.id) === String(id));

  if (!lawyer) notFound();

  const socials = lawyer.socialLinks || [];

  console.log("socials", socials)

  return (
    <div className='d-flex flex-column align-items-center m-2 m-md-4'>
      <div className='container d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start gap-5 my-5 mx-1 mx-sm-3 px-lg-5 text-white'>
        <Image
          src={lawyer.img}
          width={375}
          height={500}
          alt={lawyer.name}
          className="img-fluid my-3 rounded-4"
        />
        <div className='d-flex flex-column w-100 my-3 align-items-center align-items-lg-start text-center text-lg-start'>
          <h1 className='px-1 font-fam'>{lawyer.name}</h1>
          <span className='px-2'>{lawyer.role}</span>
          <div className='d-flex flex-row gap-1 p-2'>
            {socials.map((social) => (
              <a
               key={social.platform}
               href={social.url}
              >
                <Image
                  src={social.icon}
                  alt={social.platform}
                  width={33}
                  height={33}
                />
              </a>
            ))}
          </div>
          <div className='d-flex flex-row gap-4 px-2 mt-5 align-items-center'>
            <h5 className='font-fam'>Experience:</h5>
            <span className='fs-5 mb-2'>{lawyer.yearsOfExperience} years</span>
          </div>
          <div className='d-flex flex-row gap-4 px-2 mt-2 align-items-center'>
            <h5 className='font-fam'>Languages:</h5>
            <span className='fs-5 mb-2'>{lawyer.languages.join(' / ')}</span>
          </div>
          <div className='d-flex flex-column gap-1 px-2 mt-5 align-items-center align-items-lg-start'>
            <h5 className='font-fam'>Practice Area:</h5>
            <div className={`row text-white justify-content-center justify-content-lg-start ${styles.practiceArea}`}>
              {lawyer.practiceAreas.map((practices, index) => (
                <div key={index} className={`col-6 ${styles.practices}`}>
                  {practices}
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      <div className='container d-flex flex-column text-white gap-5 mb-5 px-5'>
        <div className='text-center text-lg-start m-2 m-md-4'>
          <p>{lawyer.bio}</p>
        </div>
        <div className='row m-2 text-center text-lg-start'>
          <div className='col-12 col-md-6'>
            <h4 className='font-fam'>Education:</h4>
            <span>{lawyer.education}</span>
          </div>
          <div className='col-12 col-md-6'>
            <h4 className='font-fam'>Bar Admissions:</h4>
            <span>{lawyer.barAdmissions}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
