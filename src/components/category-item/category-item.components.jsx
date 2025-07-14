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
            <h2 className="card-title uppercase text-4xl text-slate-300 font-black">{category}</h2>
        </div>
        <Link to={`/shop/${category}`}>
            <div className="card-actions justify-end absolute right-5 bottom-5">
                <Button buttonType="green">
                    Buy Now
                </Button>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;