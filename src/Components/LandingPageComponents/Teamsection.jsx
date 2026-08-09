'use client'

import React, { useEffect, useRef, useState } from 'react'

import { navLinks } from '@/config/links';
import Link from 'next/link';
import Image from 'next/image';

export function Teamsection() {
  const [lawyers, setLawyers] = useState([]);
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const dragMoved = useRef(false);

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

  const onMouseDown = (e) => {
    isDragging.current = true;
    dragMoved.current = false;
    startX.current = e.pageX;
    startScroll.current = scrollRef.current.scrollLeft;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const walk = e.pageX - startX.current;
    if (Math.abs(walk) > 5) dragMoved.current = true;
    scrollRef.current.scrollLeft = startScroll.current - walk;
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  const onCardClick = (e) => {
    if (dragMoved.current) e.preventDefault();
  };

  return (
    <div className='container d-flex flex-column text-white my-5 mx-1 mx-sm-3 px-lg-5 py-5 gap-5 align-items-center'>
      <div className='d-flex flex-row align-items-center justify-content-between w-100'>
        <h1 className='font-fam'>Our Team</h1>
        {moreLawyersLink && (
          <Link href={moreLawyersLink.href}>
            <span className='text-white'>More Lawyers</span>
          </Link>
        )}
      </div>

      <div
        ref={scrollRef}
        className="d-flex flex-nowrap justify-content-start overflow-auto gap-3 px-3 px-sm-0 w-auto"
        style={{ scrollbarWidth: 'none', cursor: 'grab' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
      >
        {topLawyers.map((lawyer) => (
          <div
            key={lawyer.id}
            className="flex-shrink-0"
            style={{ width: '75%', maxWidth: '260px' }}
          >
            <Link
              href={`/team/${lawyer.id}`}
              className="text-decoration-none"
              onClick={onCardClick}
              draggable={false}
            >
              <div className="card w-100 border-0 position-relative overflow-hidden card-container">
                <Image
                  src={lawyer.img}
                  alt={lawyer.name}
                  width={375}
                  height={400}
                  className="card-img-top card-img"
                  draggable={false}
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