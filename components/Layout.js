import React from "react";
import Controls from "./controls";
import Header from "./header";

const Layout = (props) => {
    return ( 
        <>
            
            <div className="bg-zinc-800 text-gray-50 h-screen overflow-y-scroll">
                <Header />
                <Controls />
                {props.children}
            </div>
        </>
     );
}
 
export default Layout;