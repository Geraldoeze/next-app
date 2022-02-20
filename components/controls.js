import React from "react";
import styles from '../styles/Home.module.css';
import DrawerToogle from "./draw";
import Filter from "./filter";

const Controls = (props) => {
    let attachedClasses = ["dropup"];
    if(props.open) {
        attachedClasses = ["dropdown"];
    }
console.log(props)
    return ( 
        <div className={styles.controls}>
            <div className={styles.ride}>
                <button>Nearest rides</button>
                <button>Upcoming rides</button>
                <button>Past rides</button>

            </div>
            <div className={styles.dropdown}>
                <DrawerToogle clicked={props.drawerTogged} />
                <button className={styles.dropbtn} onClick={props.drawerTogged}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    Filter
                </button>
                <div className={styles.dropdownList}>
                  <div className={attachedClasses}>
                    <label className={styles.label} htmlFor="filter">filters</label>
                    <select className={styles.list} >
                        <option className={styles.option} value="State"  >State</option>
                        <option className={styles.option} value="1" >Missi</option>
                    </select>
                    <select className={styles.list} >
                        <option  className={styles.option} value="City" disabled displayvalue="City" >City</option>
                        <option className={styles.option}  value="1" >Kano</option>
                    </select>
                    <Filter />
                  </div>  
                </div>
            </div>

        </div>
     );
}
 
export default Controls;

