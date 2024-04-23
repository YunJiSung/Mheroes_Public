import Search from '@/components/Main/Search'
import React from 'react'
import Image from 'next/image';
import MainAd from '@/components/Ad/MainAd';

export default function page() {
  return (
    <main id='main'>
      <div className='container'>
      <Search />
      </div>
    </main>
  )
}
