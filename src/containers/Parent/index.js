import { useState, } from "react";
import Child1 from "../Child1";
import Theme from "../../context";
import { MyContext } from '../../context';

function Parent() {
    const [name, setName] = useState("Ghous")
    return (
        <MyContext.Provider value={"Hello friends"} >
            <Theme.Provider value={[name, setName]} >
                <div>
                    <h1>Parent</h1>
                    <Child1 />
                </div>
            </Theme.Provider>
        </MyContext.Provider>
    )
}

export default Parent;