import React from "react";

const Header = () => {
    return ( 
        <div className="block w-full">
            <div className="flex p-1 bg-black text-white  "  >
                <h2 className="mx-3 text-4xl " > Edvora </h2>
               
                <div className="ml-auto m-3 mx-6 h-6 flex md: mx-8" > 
                    <h3 className="mx-4 font-semibold">Dhruv Singh</h3>
                        <img className="imager" src="see.jpg" alt="G" />
        
                </div>
                
            </div>
        </div>
     );
}
 
export default Header;