import { useContext, Fragment } from 'react'
import { CartContext } from '../../contexts/cart.context'

import noImage from '../../assets/image-error.jpg'

import { CategoriesContext } from '../../contexts/categories.context'

import Button from '../../components/button/button-component'
// import SHOP_DATA from '../../shop-data.json'
// import { useContext } from 'react'

const Shop = ({product}) => {
    const { categoriesMap } = useContext(CategoriesContext)
    console.log(categoriesMap);

    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => (addItemToCart(product))

    return (
        <>
            <div className="hero bg-base-200 dark:bg-transparent dark:text-white">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <h1 className="text-5xl font-bold">This is Shop Page</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <Button buttonType='green' onClick={() => addItemToCart(product)}>Get Started</Button>
                    </div>
                </div>
            </div>

            <Fragment >
                {Object.keys(categoriesMap).map((title) => (
                        <Fragment key={title}>
                            <h2 className='dark:text-white text-center text-3xl font-bold uppercase'>{title}</h2>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 py-8'>
                            {categoriesMap[title]
                                .map((product) => {
                                    const { id, imageUrl, name, price } = product;
                                    console.log(product)
                                    return (
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
                                            <Button buttonType='green' onClick={() => addItemToCart(product)}>Buy Now</Button>
                                        </div>
                                        </div>
                                    </div>
                                    );
                                })}
                                </div>
                        </Fragment>
                    ))
                }
            </Fragment>

        </>
        
    )
}

export default Shop
