import User from '@/components/User/User';
import React from 'react'

export default function page({params}) {
    const {name} = params;
    // console.log(name)

    return (
    <main id='main' role='main'>
        <User name={name} />
    </main>
  )
}
