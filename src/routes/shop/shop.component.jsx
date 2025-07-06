import { useContext } from 'react'

import { ProductsContext } from '../../contexts/products.context'

import Button from '../../components/button/button-component'
// import SHOP_DATA from '../../shop-data.json'
// import { useContext } from 'react'

const Shop = () => {
    const {products} = useContext(ProductsContext)

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
                    <Button buttonType='green'>Get Started</Button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 py-8'>
                {products.map(({id, imageUrl, name, price}) => (
                    <div key={id} className="card bg-base-100 w-full shadow-sm dark:bg-white ">
                        <figure>
                            <img
                            src={imageUrl}
                            alt={name} 
                            className='w-full  h-48 object-cover'
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p>{price}$</p>
                            <div className="card-actions justify-end">
                            <Button buttonType='green'>Buy Now</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Shop
