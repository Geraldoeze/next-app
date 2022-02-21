import React from 'react';
import Controls from '../components/controls';
import Header from '../components/header';
import Views from '../components/views';
import { Rider, User } from '../data/data'
import { useState } from 'react';


const Holder =() => {

    const rideList = [...Rider];
    let code = User.station_code;
    const ridarr = [];

    const [ showFilterDrawer, setShowFilterDrawer] = useState(false);

    const DrawerClosedHandler = () => {
        setShowFilterDrawer(true);
    }

    const DrawerToggleHandler = () => {
        setShowFilterDrawer(!showFilterDrawer)
        
    }
    const NewRides = (coder) => {
        let distance = [];
        rideList.map((e, index) => {
            e.station_path.find((a) => {
                if(a == coder){
                    distance.push(a- coder)
                    let newlist = {...e, distance}
                    ridarr.push(newlist)
                    rideList.splice(index, index)
                }
            })
        })
    } 
    NewRides(code); 
    
    const NewRides2 = (coder) => {
        let distance = [];
        rideList.map((e, index) => {
          e.station_path.find((a, id) => {
          if( a == coder + 1 ) {
            distance.push(a - coder)
            let newlist = {...e, distance}
            ridarr.push(newlist)
            rideList.splice(index, index)
          }
        })
        });
     };
      NewRides2(code);
    
    const  NewRides3 = ( coder ) => {
        let distance = [];
        rideList.map((e, index) => {
          e.station_path.find((a, id, arr) => {
          if( a == coder + 2) {
            distance.push(a - coder)
            let newlist = {...e, distance}
            ridarr.push(newlist)
            rideList.splice(index, index)
          }
        })
        
        })
        }
        NewRides3(code);
        
        const updateDates = () => {
            //function that updates the views to upcoming and past dates
            console.log('clicked');
        }


        return (
            <div>
                <Header />
                <Controls 
                    dates={updateDates}
                    open={showFilterDrawer}
                    closed={DrawerClosedHandler}
                    drawerTogged={DrawerToggleHandler} />
                <Views data={ridarr}/> 
            </div>
        );
    
}
 
export default Holder;