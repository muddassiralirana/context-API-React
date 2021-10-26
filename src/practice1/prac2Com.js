import React from "react";
import { useContext } from "react";
import Prac3Com from "./prac3Com";
import {First, Last} from "../App"


function Prac2Com(){

const fname = useContext(First);
const lname = useContext(Last);

    return(
        <>
        <h1>
            My name is {fname} {lname}
        </h1>
{/* <Prac3Com/> */}
        </>
    )
}

export default Prac2Com;