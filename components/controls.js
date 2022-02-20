import React from "react";
import Link from "next/link";


const Controls = (props) => {

    return ( 
        <div className="sm:justify-center space-x-4">
            <nav className="flex bg-zinc-800 text-white ">
                <button className="m-3 ml-8 text-xl" >Nearest rides</button>
                <button className="m-3 text-xl ">Upcoming rides</button>
                <button className="m-3 text-xl  ">Past rides</button>
                <p className="ml-auto mr-10 m-3 text-2xl flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                Filters
                </p>
            </nav>
        </div>
     );
}
 
export default Controls;