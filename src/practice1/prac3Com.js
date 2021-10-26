import React from "react";


import {First, Last} from "../App";

function Prac3Com(){

    return(
        <>
<First.Consumer>
    {(fname)=>{
        return (
            <Last.Consumer>
                {(lname)=>{
                    return (
                        <h1>my name is {fname} {lname} </h1>
                    )
                }}
            </Last.Consumer>
        )
        
        
    }}
</First.Consumer>
        

        </>
    )
}



export default Prac3Com;