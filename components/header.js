import React from "react";

const Header = () => {
    return ( 
        <div className="block w-full">
            <div className="flex p-1 bg-black text-white  "  >
                <h2 className="mx-3 text-3xl md: mx-8"> Edvora </h2>
               
                <p className="ml-auto m-3 mx-6 flex md: mx-8" > Dhruv Singh 
                <svg xmlns="http://www.w3.org/2000/svg" className=" ml-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </p>
                
            </div>
        </div>
     );
}
 
export default Header;