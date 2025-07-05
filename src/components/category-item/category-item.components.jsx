import Button from '../button/button-component'

const CategoryItem = ({id, title, imageUrl}) => {
    return (
      <>
      <div key={id} className="card bg-base-100 dark:bg-gray-800 dark:text-white w-96 shadow-sm">
            <figure>
                <img
                src={imageUrl}
                alt="Shoes" 
                className='rounded-xl w-full'
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                <Button buttonType='green'>Buy Now</Button>
                </div>
            </div>
            </div>
            

      </>
      
    )
}

export default CategoryItem;
