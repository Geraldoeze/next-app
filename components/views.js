import React from 'react';

const Views = ({ data }) => {
    const rides = data

    return ( 
    <div>
            {
        rides.map((val, id, arr) => {
          let stationArray = [];
         for( var i = 0; i <= val.station_path.length - 1 ; i++ ){
            stationArray.push(val.station_path[i] + "," + " ")
         }
         

  
        return(

      <div key={id} className='flex flex-wrap m-auto my-4 bg-zinc-900 rounded-xl w-11/12 overflow-x-auto :'>
          <div className='w-32'>
           <img src="https://image.shutterstock.com/image-vector/flat-street-map-direction-gps-600w-1661529616.jpg"
            alt='map' className='rounded-xl m-4 w-20 md:w-40 lg:w-80'/>
          </div>
          <div className='w-40 text-sm my-4 ml-2 md:text-xl ml-10 mr-6 w-40 lg:w-6/12 mx-20'>
            <p>Ride Id: {val.id}</p>
            <p>Origin Station: {val.origin_station_code}</p>
            <p>station_path: [{ stationArray}]</p>
            <p>Date:{(new Date(val.date)).toLocaleDateString('en-US')}</p>
            <p>Distance: {val.distance}</p>
             
          </div>
          <div className='w-10 my-4 md:w-20 lg:w-60'>
            <ul className='flex text-center md:ml-au-auto' >
              <li className='mx-2 px-1 rounded-xl bg-black'>City Name</li>
              <li className='mx-2 px-1 rounded-xl bg-black'>State Name</li>
            </ul>
          </div>  
      </div>
   
          )
        }) 
      }     
    </div>
     );
}
 
export default Views;