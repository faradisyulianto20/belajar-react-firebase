import { Link } from 'react-router-dom';
import { useContext } from 'react';

import Button from '../button/button-component';
import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  const { cartItems, toggleCart } = useContext(CartContext);

  const priceTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          onClick={toggleCart}
          className="btn btn-ghost btn-circle hover:bg-white group"
        >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 dark:text-white group-hover:text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">{cartItems.length}</span>
          </div>
        </div>

        <div
          tabIndex={0}
          className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow dark:bg-base-200 dark:text-white"
        >
          <div className="card-body">
            <span className="text-lg font-bold">
              {cartItems.length} product{cartItems.length > 1 ? 's' : ''}
            </span>

            {cartItems.length > 0 ? (
              <>
                {cartItems.map((item) => (
                  <CartItem key={item.id} cartItem={item} />
                ))}
                <span className="text-info">Subtotal: ${priceTotal}</span>
                <div className="card-actions">
                  <Link to="checkout">
                    <Button buttonType="green">View cart</Button>
                  </Link>
                </div>
              </>
            ) : (
              <span className="text-sm text-gray-500">Your cart is empty</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartIcon;
