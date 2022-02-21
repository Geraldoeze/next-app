import React, { useState } from 'react'
import styles from '../styles/Home.module.css';

const ButtonGroup = ({ buttons, updateD }) => {
    const [clicked, setClicked ] = useState(0);

    const clickedHandler = (event, id) => {
        setClicked(id);
        //updateIndexPage(event);
        updateD(event);
    }

    return ( 
            <div className={styles.ride}>
            { buttons.map((buttonLabel, i) => (
                <button 
                    key={i} 
                    name={buttonLabel} 
                    onClick={(event) => clickedHandler(event, i)}
                    className={i === clicked ? "customButton active" : "customButton"}
                >
                    {buttonLabel}
                </button>
            ))}
            </div>
     );
}
 
export default ButtonGroup;