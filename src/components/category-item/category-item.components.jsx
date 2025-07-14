import {Link} from 'react-router-dom'

import Button from '../button/button-component';

import noImage from '../../../src/assets/image-error.jpg'

const CategoryItem = ({ category, firstImageUrl }) => {
  return (
    <div className="card bg-base-100 image-full w-96 shadow-sm">
      <figure>
        <img
          src={firstImageUrl}
          alt={category}
          onError={(e) => {
            // Cegah infinite loop fallback
            if (!e.target.dataset.error) {
              e.target.dataset.error = 'true';
              e.target.src = noImage;
            }
          }}
          className="rounded-xl w-full"
        />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <div className='h-full flex items-center justify-center'>
            <h2 className="card-title uppercase">{category}</h2>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/shop/${category}`}>
            <Button buttonType="green">Buy Now
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;