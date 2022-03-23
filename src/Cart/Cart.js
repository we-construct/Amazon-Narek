import uuid from 'react-uuid'
import {Routes, Route, Link} from "react-router-dom";
import {useState} from "react";

export default function Cart({cart, RemoveCart, onDecrement, onIncrement}) {
    const cartLocal =  JSON.parse(localStorage.getItem('cart'));
    // const [pro,setCart] = useState(cart)
    // const Save= () => {
    //    setCart(cartLocal)
    // }
    return (
        <div>
            <Link to="/">
                <button type="button">
                    Home!
                </button>
            </Link>
            {/*<button  onClick={() => Save()}>*/}
            {/*    Save*/}
            {/*</button>*/}
            <table width={650}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Count</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                {cartLocal.map((item) => (
                    <tr key={uuid()}>
                        <td>{item.name} </td>
                        <td>
                            <button
                                disabled={item.count <= 0 ? 'disabled' : ''}
                                onClick={() => onDecrement(item.id)}
                            >-
                            </button>
                            {item.count}
                            <button
                                onClick={() => onIncrement(item.id)}
                            >+
                            </button>
                        </td>
                        <td>
                            <button onClick={() => RemoveCart(item.id)}>X</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}