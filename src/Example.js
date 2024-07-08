import { Mycontext } from "./Mycontext";
import Mycomponent from "./Mycomponent";
import { useState } from "react";
//provider -> produces the dat or props
export default function Example(){
    //privide
    const [text,setText]=useState("")
    return(
        <div>
            <Mycontext.Provider value={{text,setText}}>
                <Mycomponent/>
                {/* You can add as many components you want
                     Provider will provide all the props to the given components */}
            </Mycontext.Provider>
        </div>
    )
}