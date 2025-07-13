import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context'

import noImage from '../../assets/image-error.jpg'
import Button from '../../components/button/button-component'

const ProductCard = ({product}) => {
    const { id, imageUrl, name, price } = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);

    return (
        <>
            <div key={id} className="card bg-base-100 w-full shadow-sm dark:bg-gray-800 dark:text-white">
                                        <figure>
                                        <img
                                            src={imageUrl}
                                            alt={name} 
                                            className='w-full h-48 object-cover'
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = noImage;
                                            }}
                                        />
                                        </figure>
                                        <div className="card-body">
                                        <h2 className="card-title">{name}</h2>
                                        <p>{price}$</p>
                                        <div className="card-actions justify-end">
                                            <Button buttonType='green'  onClick={addProductToCart}>Buy Now</Button>
                                        </div>
                                        </div>
                                    </div>
        </>
    )
}

export default ProductCard