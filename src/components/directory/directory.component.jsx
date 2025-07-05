import CategoryItem from "../category-item/category-item.components"

const Directory = ({categories}) => {
    return (
        <>
            <div className="categories-container">
                {
                    categories.map(({title, id, imageUrl}) => (
                        <CategoryItem title={title} id={id} imageUrl={imageUrl}/>
                    ))
                }
            </div>
        </>
        
    )
}

export default Directory