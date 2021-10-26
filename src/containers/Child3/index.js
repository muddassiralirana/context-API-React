import { useContext } from 'react'
import Theme from '../../context';
import { MyContext } from '../../context'


function Child3({ }) {
    const user = useContext(Theme);
    const myData = useContext(MyContext);

    console.log("myData",myData)
    return (
        <div>
            <h1>Child3</h1>
            <h2>{user[0]}</h2>
            <button onClick={() => user[1]("Ahmed")}>Update</button>
        </div>
    )
}

export default Child3;