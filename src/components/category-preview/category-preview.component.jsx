import ProductCard from "../product-card/product-card.component"

const CategoryPreview = ({title, products}) => {
    return (
        <>
            <h2 className='dark:text-white text-center text-3xl font-bold uppercase'>{title}</h2>
            <div>
                {
                    products.filter((_, idx) => idx < 4).map((product) => 
                    <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </>
    )
}

export default CategoryPreview