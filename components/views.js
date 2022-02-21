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

      <div key={id} className='main'>
          <div className='image'>
           <img src="https://image.shutterstock.com/image-vector/flat-street-map-direction-gps-600w-1661529616.jpg"
            alt='map' className=''/>
          </div>
          <div className='rides'>
            <p >Ride Id: {val.id}</p>
            <p>Origin Station: {val.origin_station_code}</p>
            <p>station_path: [{ stationArray}]</p>
            <p>Date:{(new Date(val.date)).toLocaleDateString('en-US')}</p>
            <p>Distance: {val.distance}</p>
             
          </div>
          <div className='places'>
            <ul>
              <li>City Name</li>
              <li>State Name</li>
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