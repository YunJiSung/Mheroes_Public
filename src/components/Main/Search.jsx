'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import Image from 'next/image';

const Search = () => {
    const [name, setName] = useState('');
    const router = useRouter();
    const handleSearch = () => {
        router.push(`/user/${encodeURIComponent(name)}`);
    };
    const handleClick = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }


    return (
        <div className='nol container'>
            <div className='nol__inner'>
                <h1 className='logo'>
                    <Link href="/">NOL.GG</Link>
                </h1>
                <Image src="/images/nol.png" alt="메인 이미지" width={256} height={139} />
                <div className='search'>
                    <label className='hidden' htmlFor="search">유저 검색창</label>
                    <input
                        name='search'
                        id='search'
                        type="text"
                        placeholder="캐릭명을 입력하세요."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                    />
                    <button className='searchBtn' onClick={handleSearch}>
                        <Image src='/images/search.svg' alt='seach이미지' width={16} height={16} />
                    </button>
                </div>
            </div>
            <div className='bgblack'></div>
        </div>


    )
}

export default Search