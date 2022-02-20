import React from 'react';

const Views = ({ data }) => {
    const rides = data
    console.log(rides)

    return ( 
    <div>
            {
        rides.map((val, id, arr) => {
          let stationArray = [];
         for( var i = 0; i <= val.station_path.length - 1 ; i++ ){
            stationArray.push(val.station_path[i] + "," + " ")
         }
         

  
        return(

      <div key={id} className='flex flex-wrap  my-8 w-11/12 m-auto bg-zinc-900 p-6 rounded-xl'>
          <div className='w-60'>
           <img src="https://image.shutterstock.com/image-vector/flat-street-map-direction-gps-600w-1661529616.jpg"
            alt='map' className='rounded-xl w-40'/>
          </div>
          <div className='block mx-6 w-2/5 m-4'>
            <p>Ride Id: {val.id}</p>
            <p>Origin Station: {val.origin_station_code}</p>
            <p>station_path: [{ stationArray}]</p>
            <p>Date:{val.date}</p>
            <p>Distance: {val.distance}</p>
             
          </div>
          <div className='w-80'>
            <ul className='flex '>
              <li className='mx-8 px-2 rounded-xl bg-black'>City Name</li>
              <li className='mx-6 px-2 rounded-xl bg-black'>State Name</li>
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