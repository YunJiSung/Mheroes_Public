'use client'

import React, { useEffect, useState } from 'react'
import UserContent from './UserContent';
import UserInfo from './UserInfo';
import UserNav from './UserNav';
import Search from '../Main/Search';

const User = ({ name }) => {
  const [data, setData] = useState('');
  console.log(data);
  // 유저정보 조회
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/user/${decodeURIComponent(name)}`);
        const data = await res.json();
        // console.log(data)
        setData(data);
      } catch (error) {
        console.error('User API Error', error);
      }
    }

    fetchData();
  }, [name]);

  return (
    <div>
      <Search />
      <UserInfo basic={data?.basic} stat={data?.stat} guild={data?.guild} itemEquipment={data?.itemEquipment} titleEquipment={data?.titleEquipment} title={data?.title} />
    </div>
  );
};

export default User;
