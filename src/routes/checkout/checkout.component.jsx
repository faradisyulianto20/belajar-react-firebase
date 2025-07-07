import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
// import CartItem from '../cart-item/cart-item.component';

import Button from "../../components/button/button-component";

const Checkout = () => {
    const {cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, } = useContext(CartContext);

    const priceTotal = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0)

    return (
        <>
            <div className="hero bg-base-200 dark:bg-transparent dark:text-white">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <h1 className="text-5xl font-bold">This is Checkout Page</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <Button buttonType='green'>Get Started</Button>
                    </div>
                </div>
            </div>
            <div className="px-4 py-6 justify-center">
                <div className="overflow-x-auto ">
                    <table className="table dark:bg-gray-800 dark:text-white ">
                        {/* head */}
                        <thead>
                        <tr className="dark:text-white">
                            <th >Product</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total Price</th>
                            <th>Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {
                            cartItems.map((item) => (
                                <tr>
                                    <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                src={item.imageUrl}
                                                alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div className="font-bold">{item.name}</div>
                                    </div>
                                    </td>
                                    <td>
                                        {item.description}
                                    </td>
                                    <td className='flex gap-5 items-center'>
                                        <button className="btn btn-circle" onClick={()=> removeItemFromCart(item)}>-</button>
                                            <span>{item.quantity}</span>
                                        <button className="btn btn-circle" onClick={() => addItemToCart(item)}>+</button>
                                    </td>
                                    <td>
                                        <span className="">{item.price}$</span>
                                    </td>
                                    <td>
                                        {item.quantity * item.price}$
                                    </td>
                                    <th>
                                        <Button buttonType="red" onClick={() => clearItemFromCart(item)}>Delete</Button>
                                    </th>
                                </tr>
                            ))
                        }
                        
                        
                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Total Price</th>
                                <th>{priceTotal}$</th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                    </div>
            </div>
        </>
    )
}

export default Checkout;