import Head from 'next/head';
import React from 'react';
import Controls from '../components/controls';
import Views from '../components/views'
import Header from '../components/header';
import { Rider, User } from '../data/data';

export default function Home() {

  const RideList = [...Rider];
  let code = User.station_code;
  const ridarr = [];
  console.log(RideList)

  const  NewRides = ( ) => {
    let distance = [];
    RideList.map((e, index, arr) => {
      e.station_path.find((a, id, arr) => {
      if( a == code) {
        distance.push(a - code)
        let sam = {...e, distance}
        ridarr.push(sam)
      }
    })

    RideList.splice(index, index)
    })
  }
  NewRides();

  const  NewRides2 = ( ) => {
    let distance = [];
    RideList.map((e, index, arr) => {
      e.station_path.find((a, id, arr) => {
      if( a == code + 1 ) {
        distance.push(a - code)
        let sam = {...e, distance}
        ridarr.push(sam)
        
      }
    })

    RideList.splice(index, index)
    })
  }
  NewRides2();

const  NewRides3 = ( ) => {
  let distance = [];
  RideList.map((e, index, arr) => {
    e.station_path.find((a, id, arr) => {
    if( a == code + 2) {
      distance.push(a - code)
      let sam = {...e, distance}
      ridarr.push(sam)
    }
  })

  RideList.splice(index, index)
  })
}
NewRides3();
  console.log(ridarr)


  return (
    <div className=' bg-zinc-800 text-gray-50 h-screen overflow-y-scroll ' >
      <Head>
        <title> Next-App</title>
        <meta name="viewport" content="width=device-width"/>
      </Head>
      <Header />
      <Controls />
      <Views data={ridarr} />
      
    </div>
  )
}
