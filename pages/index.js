import Head from 'next/head';
import React from 'react';
import Holder from './Home';
export default function Home() {

 
  return (
    <div className=' bg-zinc-800 text-gray-50 h-max overflow-y-hidden' >
      <Head>
        <title> Next-App</title>
        <meta name="viewport" content="width=device-width"/>
   
      </Head>
      <Holder />
    
    </div>
  )
}
