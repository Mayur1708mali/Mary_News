'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

async function getData(id: string) {
  const res = await fetch(`/api/${id}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default function Navbar(props: any) {
  const [click, setClick] = useState(false);
  const [red, setRed] = useState('');
  const [input, setInput] = useState('');

  async function handleNavClick(id: string) {
    setRed(id);
    setClick(true);
    const res = await getData(id);
    const { data } = res;
    props.setNews(data.articles);
    setClick(false);
  }

  async function handleClick(ev: any) {
    ev.preventDefault();
    if (input.length > 0) {
      const res = await getData(input);
      const { data } = res;
      props.setNews(data.articles);
      setInput('');
    }

    setRed('');
  }

  return (
    <>
      <nav className='bg-[#f3faff] fixed w-full shadow-[0_0_4px] shadow-[#bbd0e2]'>
        {/* main nav */}
        <div className='h-16 max-w-6xl ms-auto me-auto flex items-center justify-between '>
          <div className='cursor-pointer'>
            <Link onClick={(e) => window.location.reload()} href='#'>
              <Image
                src='/mary.png'
                height={120}
                width={120}
                alt='company logo'
              />
            </Link>
          </div>
          {/* nav links */}
          <div>
            <ul className='flex gap-4'>
              <li
                onClick={(e) => handleNavClick('ipl')}
                className={`${
                  red === 'ipl' && 'text-blue-600'
                } cursor-pointer hover:text-[#577592] active:text-red-600`}>
                IPL
              </li>
              <li
                onClick={(e) => handleNavClick('finance')}
                className={`${
                  red === 'finance' && 'text-blue-600'
                } cursor-pointer hover:text-[#577592] active:text-red-600`}>
                Finance
              </li>
              <li
                onClick={(e) => handleNavClick('politics')}
                className={`${
                  red === 'politics' && 'text-blue-600'
                } cursor-pointer hover:text-[#577592] active:text-red-600`}>
                Politics
              </li>
              <li
                onClick={(e) => handleNavClick('technology')}
                className={`${
                  red === 'technology' && 'text-blue-600'
                } cursor-pointer hover:text-[#577592] active:text-red-600`}>
                Technology
              </li>
            </ul>
          </div>
          {/* search bar */}
          <div className='h-8 space-x-2'>
            <input
              onChange={(e) => setInput(e.target.value)}
              className='text-black w-52 h-full p-3 rounded border-2 border-[#bbd0e2]'
              type='text'
              placeholder='e.g. Alan Walker'
              value={input}
            />
            <button
              onClick={handleClick}
              className='bg-[#2294ed] text-white py-1 px-6 border-none rounded hover:bg-[#1d69a3]'>
              Search
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
